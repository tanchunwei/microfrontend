import React from 'react';

import { EuiFlexGroup, EuiFlexItem, EuiAvatar, EuiFieldText, EuiCard  } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css';

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
        <EuiFlexGroup>
            <EuiFlexItem grow={1}/>
            <EuiFlexItem grow={3}>
                <EuiCard
                    icon={<EuiAvatar size="m" name="Frontend 2" />}
                    title="Micro-frontend 2"
                    isDisable={true}
                    description={
                        <EuiFlexGroup>
                            <EuiFlexItem grow={1}>
                                <EuiFieldText
                                    prepend = "Message"
                                    id = "sendMessage"
                                    placeholder="Press enter to send"
                                    onKeyDown={e => handleSubmit(e)}
                                    aria-label="Use aria labels when no actual label is in use"
                                  />
                              </EuiFlexItem>
                        </EuiFlexGroup>
                    }
                />

            </EuiFlexItem>
            <EuiFlexItem grow={6}/>
        </EuiFlexGroup>



    </div>
  );
}

export default AppTab;