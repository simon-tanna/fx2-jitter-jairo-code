import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import MessageForm from "./MessageForm";
import Messages from "./Messages";
import Navigation from "./Navigation";
import initialMessageList from "../data/message-list.json";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "./About";
import NotFound from "./NotFound";
import MessageDetail from "./MessageDetail";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [messageList, setMessageList] = useState([]);

  const activateUser = (username) => {
    setLoggedInUser(username);
  };

  const addMessage = (text) => {
    const message = {
      text: text,
      user: loggedInUser,
      id: nextId(messageList)
    };
    setMessageList((messageList) => [message, ...messageList]);
  };

  function nextId(data) {
    if (data.length === 0) return 1;
    const sortData = data.sort((a,b) => a.id - b.id)
    const nextId = sortData[sortData.length - 1].id + 1 
    return nextId
  }

  useEffect(() => {
    //fetch
    setMessageList(initialMessageList);
  }, []);

  return (
    <div>
      {/* Title and Navigation will always be shown. No Routing required. */}
      <h1>Jitter</h1>

      {/* { !loggedInUser ?
            <LoginForm activateUser={activateUser}/>
            :
            <MessageForm loggedInUser={loggedInUser} addMessage={addMessage}/>
          }
          <Messages messageList={messageList}/> */}

      {/* BrowserRouter will wrap the components involved in the application routing
          Router has been defined as an alias (it is a convention) */}
      <Router>
        {/* To use the Link component from react-router dom. the Navigation component need to be within the Router component */}
        <Navigation loggedInUser={loggedInUser} activateUser={activateUser} />
        {/* To create the route for About, it is wrapped in Routes container. Remember to import Routes and Route */}
        <Routes>
          <Route path="/" element={<Navigate to="messages" replace />} />
          {/* the Navigate to will redirect to messages. replace with replace the history of the redirect so
              back navigation will not be duplicated */}
          {/* Here we are creating a general route for messages. the index route wil display the message list within the /messages path wil the subsequent paths being displayed under the messages path */}
          <Route path="messages">
            <Route index element={<Messages messageList={messageList} />} />
            <Route
              path="new"
              element={
                loggedInUser ? (
                  <MessageForm
                    loggedInUser={loggedInUser}
                    addMessage={addMessage}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path=":messageId"
              element={<MessageDetail messageList={messageList} />}
            />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* for everything else the * means that NotFound will render */}
          <Route
            path="login"
            element={<LoginForm activateUser={activateUser} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
