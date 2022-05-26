import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h4>404 Error</h4>
      <p>Sorry, this page does not exist</p>
      <Link to="/messages">Go back to messages</Link>
    </>
  );
};

export default NotFound;
