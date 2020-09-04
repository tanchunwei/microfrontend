import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import InternalTab1 from './InternalTab1'
import MicroFrontend from '../common/MicroFrontend'

const MainTab = () => {

    const [key, setKey] = useState(1);

    const handleSelect = (selKey) =>
    {
        setKey(selKey);
    }

    const Frontend1Tab = ({ history }) => (
      <MicroFrontend history={history} name="Frontend1Tab" host="http://localhost:3001" />
    );

    return (
        <Tabs activeKey={key} onSelect={handleSelect} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Home" transition={false}>
            <InternalTab1 />
          </Tab>
          <Tab eventKey={2} title="Profile" transition={false}>
            <Frontend1Tab />
          </Tab>
          <Tab eventKey={3} title="Contact" transition={false} disabled>
            <InternalTab1 />
          </Tab>
        </Tabs>
    )
}

export default MainTab;