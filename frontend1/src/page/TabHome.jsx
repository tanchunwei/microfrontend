import React, { useState, useEffect } from 'react';

const TabHome = () => {
    const [messages, setMessages] = useState([])
    const handleEvent = (msg) => {
        setMessages([...messages, msg])
    }

    useEffect(() => {
        window.addEventListener("frontend2Message", function(evt){
            handleEvent(evt.detail.message);
        });
    }, [messages]);

    return (
        <div>
            This is frontend1 tab home
            {messages.map((msg) => {
                return (<div>{msg}</div>)
            })}
        </div>
    );
}

export default TabHome;