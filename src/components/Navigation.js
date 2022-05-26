import { Link, useNavigate } from "react-router-dom";

const Navigation = ({ loggedInUser, activateUser }) => {
  // add a redirect by invoking useNavigate
  // it must be used in the top level function so const navigate has been created
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    activateUser("");
    navigate("/messages");
  };

  return (
    <nav>
      {/* using Link as a react dom component. Use to= instead of href*/}
      <Link to="/messages">Home</Link>
      <Link to="/about">About</Link>
      {loggedInUser ? (
        <>
          <Link to="messages/new">New Message</Link>
          {loggedInUser}
          <Link Link to="/messages" onClick={logout}>
            Logout
          </Link>
        </>
      ) : (
        <>
          Guest
          <Link to="/login">Login</Link>
          <Link to="/login">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;
