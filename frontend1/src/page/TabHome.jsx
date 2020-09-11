import React, { useState, useEffect } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiAvatar, EuiComment, EuiText } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css';

const TabHome = () => {
    const [messages, setMessages] = useState([])
    const handleEvent = (msg) => {
        var name = "Frontend 2"
        var dt = new Date().toLocaleString();
        setMessages([{
            name,
            message: msg,
            dt: dt
        }, ...messages])
    }

    useEffect(() => {
        window.addEventListener("frontend2Message", function(evt){
            handleEvent(evt.detail.message);
        });
    }, [messages]);

    return (
        <div>
            <EuiFlexGroup>
                <EuiFlexItem grow={1}/>
                <EuiFlexItem grow={2}>
                    <EuiAvatar size="m" name="Frontend 1" />
                </EuiFlexItem>
                <EuiFlexItem grow={7}/>
            </EuiFlexGroup>

            <EuiFlexGroup>
                <EuiFlexItem grow={1}/>
                <EuiFlexItem grow={3}>
                    {messages.map((m) => {
                        return (
                            <EuiComment
                                username={m.name}
                                event="send a message"
                                timestamp={m.dt}
                                timelineIcon={
                                    <EuiAvatar size="s" name={m.name} />
                                }
                                >
                                <EuiText size="s" textAlign="left">
                                    <p>
                                    {m.message}
                                    </p>
                                </EuiText>
                            </EuiComment>
                        )
                    })}
              </EuiFlexItem>
              <EuiFlexItem grow={6}/>
            </EuiFlexGroup>
        </div>
    );
}

export default TabHome;