import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiIcon, EuiCard } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css';

class Home extends React.Component {
  render() {
    return (
    <div>
        <EuiFlexGroup>
            <EuiFlexItem grow={1}/>
            <EuiFlexItem grow={3}>
                <EuiCard
                    icon={<EuiIcon type="notebookApp" size=""/>}
                    title="Micro-frontend Communication"
                    isDisable={true}
                    description="Example of micro-frontend 2 communicating to micro-frontend 1"
                />

            </EuiFlexItem>
            <EuiFlexItem grow={6}/>
        </EuiFlexGroup>
    </div>
    );
  }
}

export default Home;