import React from 'react';

function AppTab() {

  const handleSubmit = (e) => {
    if(e.key === 'Enter'){
        const message = document.getElementById("sendMessage").value;
        const event = new CustomEvent('frontend2Message', { "detail": {message}});
        window.dispatchEvent(event);
        console.log("dispatched frontend2Message");
    }
  }

  return (
    <div>
        This is frontend2 tab home <br />
        <input id="sendMessage" onKeyDown={handleSubmit}/>
    </div>
  );
}

export default AppTab;