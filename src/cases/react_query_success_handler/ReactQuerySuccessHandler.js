import { useQuery } from "react-query";
import { useEffect, useState } from "react";

const queryFunction = ({ queryKey }) => {
  return new Promise((resolve) => {
    const userId = queryKey[1].userId;
    setTimeout(() => resolve({ userId, name: `Tom ${userId}` }), 1500);
  });
};

const ReactQuerySuccessHandler = ({ userId }) => {
  const [logMessage, setLogMessage] = useState();
  const [logEffectMessage, setLogEffectMessage] = useState();

  const { data, isSuccess } = useQuery(["user", { userId }], queryFunction, {
    staleTime: Infinity,
    // onSuccess: (data) => {
    //   // NOT reliable way of handling initialization stuff with Infinity stale time
    //   setLogMessage(`User: ${data.name} message initialized: ${Date.now()}`);
    // },
  });

  useEffect(() => {
    // reliable way of handling initialization stuff with Infinity stale time
    if (isSuccess) {
      setLogEffectMessage(
        `User: ${data.name} message initialized: ${Date.now()}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  if (!isSuccess) {
    return <div>Loading user {userId} data</div>;
  }

  return (
    <div>
      <p>User name: {data.name}</p>
      <p>Log message: {logMessage}</p>
      <p>Log effect message: {logEffectMessage}</p>
    </div>
  );
};

export default ReactQuerySuccessHandler;
