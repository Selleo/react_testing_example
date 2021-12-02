import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const RemountAfterRedirect = () => {
  let history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log("mount");
    history.replace(`/remountAfterRedirect/${getId()}-with-slug`, {
      replace: true,
    });
  }, []);

  const getId = () => {
    return id.split("-").shift();
  };

  return (
    <>
      <h1>RemountAfterRedirect</h1>
      <p>param: {id}</p>
    </>
  );
};

export default RemountAfterRedirect;
