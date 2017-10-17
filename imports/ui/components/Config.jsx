// Framework
import React from "react";

// Components
import { Container, Row, Col } from "reactstrap";

/**
 * A list of Configuration options
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const Config = () =>
  <Container className="config" fluid>
    <Row>
      <Col>
        <h3>Set Jobs</h3>
        <p>Job A - $20/hour</p>
        <p>Job B - $30/hour</p>
      </Col>
    </Row>
  </Container>;

export default Config;
