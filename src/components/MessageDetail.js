import { Link, useParams } from "react-router-dom";

const MessageDetail = ({ messageList }) => {
  const params = useParams();
  console.log(params);

  const getMessage = (id) => {
    return messageList.find((m) => m.id === parseInt(id));
  };

  const message = getMessage(params.messageId);

  return (
    <>
      {message ? (
        <>
          <h4>{message.text}</h4>
          <p>{message.user}</p>
        </>
      ) : (
        <>
          <h4>Message not found</h4>
          <Link to="/messages">Go back to the homepage</Link>
        </>
      )}
    </>
  );
};

export default MessageDetail;
