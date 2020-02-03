import React from "react";

function Messages(props){
  const messages = props.filter(message => message.unread === true)
  return(
    <div>
      {messages}
    </div>
  )
};

export default Messages;