import { useEffect } from "react";
import { useNavigate, useParams } from "@reach/router";

const RemountAfterRedirect = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    navigate(`/remountAfterRedirect/${getId()}-with-slug`, {
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
