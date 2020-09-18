import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import { EuiFlexGroup, EuiFlexItem, EuiAvatar, EuiComment, EuiFieldText, EuiCard } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css';

const WordTree = () => {
    const [messages, setMessages] = useState( [["Phrases"]])
    const handleEvent = (msg) => {
        setMessages([...messages, [msg]])
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
                <EuiFlexItem grow={3}>
                    <EuiCard
                        icon={<EuiAvatar size="m" name="Frontend 3" />}
                        title="Micro-frontend 3"
                        description={
                            <EuiFlexGroup>
                                <EuiFlexItem grow={1}>
                                    <Chart
                                      width={'500px'}
                                      height={'300px'}
                                      chartType="WordTree"
                                      loader={<div>Loading Chart</div>}
                                      data={messages}
                                      options={{
                                        wordtree: {
                                          format: 'implicit',
                                          word: '',
                                        },
                                      }}
                                      rootProps={{ 'data-testid': '1' }}
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

export default WordTree;