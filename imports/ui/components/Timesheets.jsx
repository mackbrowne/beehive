// Framework
import React from "react";

// Components
import { Container, Row, Col } from "reactstrap";
import FieldRows from "./FieldRows";

/**
 * A list of settings.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const Timesheets = ({
  settingsFields = {},
  settingsSettingAction
}


 )                     =>
  <aside>
    <Container className="settings" fluid>
      <Row noGutters>
        <Col>
          <FieldRows
            heading="Timesheets"
            fields={settingsFields}
            stateSettingAction={settingsSettingAction}
          />
        </Col>
      </Row>
    </Container>
  </aside>;

export default Timesheets;
