import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiToken, EuiCard } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css';

const FrontendError = (prop) => {
    return (
      <EuiFlexGroup>
          <EuiFlexItem grow={1}>
              <EuiCard
                  icon={<EuiToken iconType="tokenOperator" color="maroon" shape="circle" size="l"/>}
                  title={"Micro-frontend Error (" +prop.name+ ")" }
                  isDisable={true}
                  description="Please contact the administrator or try again later."
              />
          </EuiFlexItem>
      </EuiFlexGroup>
    );
}

export default FrontendError;