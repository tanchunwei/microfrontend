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

    const Frontend1 = ({ history }) => (
      <MicroFrontend history={history} name="Frontend1" host="http://localhost:3001" />
    );

    const Frontend1Tab = ({ history }) => (
      <MicroFrontend history={history} name="Frontend1Tab" host="http://localhost:3001" />
    );

    const Frontend2 = ({ history }) => (
      <MicroFrontend history={history} name="Frontend2" host="http://localhost:3002" />
    );

    const Frontend2Tab = ({ history }) => (
      <MicroFrontend history={history} name="Frontend2Tab" host="http://localhost:3002" />
    );

    const Frontend3 = ({ history }) => (
      <MicroFrontend history={history} name="Frontend3" scriptPath="/main.js" host="http://localhost:3003" />
    );

    return (
        <Tabs activeKey={key} onSelect={handleSelect} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Container" transition={false}>
            <InternalTab1 />
          </Tab>
          <Tab eventKey={2} title="Cross Micro-frontend" transition={false}>
            <Frontend1 />
            <br/>
            <Frontend2Tab />
            <br/>
            <Frontend3 />
            <br/>
            <Frontend1Tab />
          </Tab>
          <Tab eventKey={3} title="Micro-frontend" transition={false}>
            <Frontend2 />
          </Tab>
        </Tabs>
    )
}

export default MainTab;