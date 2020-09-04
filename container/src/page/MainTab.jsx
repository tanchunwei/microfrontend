import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import InternalTab1 from './InternalTab1'

const MainTab = () => {

    const [key, setKey] = useState(1);

    const handleSelect = (selKey) =>
    {
        setKey(selKey);
    }

    return (
        <Tabs activeKey={key} onSelect={handleSelect} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Home" transition={false}>
            <InternalTab1 />
          </Tab>
          <Tab eventKey={2} title="Profile" transition={false}>
            <InternalTab1 />
          </Tab>
          <Tab eventKey={3} title="Contact" transition={false} disabled>
            <InternalTab1 />
          </Tab>
        </Tabs>
    )
}

export default MainTab;