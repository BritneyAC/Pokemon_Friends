import React, {useState, useEffect} from "react";

function Messages(props){
  const {messageCount, setMessageCount} = useState(0);
  
  useEffect(
    setMessageCount(fetch('/Messages'))
  )

  return (
    <div>
      <i class="ri-mail-line"></i>
      messageCount > 0 ? <h3>{messageCount}</h3> : null
    </div>
  )
};

export default Messages;