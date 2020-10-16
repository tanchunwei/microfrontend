import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import InternalTab1 from './InternalTab1'
import MicroFrontend from '../common/MicroFrontend'
import PropTypes from 'prop-types'

const MainTab = (props) => {
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
            { props.featuresFrontend1 && (
                <Frontend1 />
            )}
            { props.featuresFrontend1 && (
                 <br />
            )}

            { props.featuresFrontend2 && (
                <Frontend2Tab />
            )}
            { props.featuresFrontend2 && (
                 <br />
            )}

            { props.featuresFrontend3 && (
                <Frontend3 />
            )}
            { props.featuresFrontend3 && (
                 <br />
            )}

            { props.featuresFrontend1 && (
                <Frontend1Tab />
            )}
            { props.featuresFrontend1 && (
                 <br />
            )}
          </Tab>
          <Tab eventKey={3} title="Micro-frontend" transition={false}>
            { props.featuresFrontend2 && (
                <Frontend2 />
            )}
          </Tab>
        </Tabs>
    )
}

MainTab.propTypes = {
  featuresFrontend1: PropTypes.bool.isRequired,
  featuresFrontend2: PropTypes.bool.isRequired,
  featuresFrontend3: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        featuresFrontend1: state.toggle.features && state.toggle.features.frontend1,
        featuresFrontend2: state.toggle.features && state.toggle.features.frontend2,
        featuresFrontend3: state.toggle.features && state.toggle.features.frontend3
    }
};

export default connect(mapStateToProps)(MainTab);