// Framework
import React from "react";
import Moment from 'react-moment';

// Components
import { Container, Row, Col, Alert, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Dropzone from 'react-dropzone'
import FieldRows from "./FieldRows";

/**
 * A list of settings.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const Timesheets = ({
  timesheets = [],
  options = { noDataText: 'No Time Entries.  Upload a Timesheet.' },
  error = null,
  dismissError,
  fileTypes = '',
  onDrop,
  dateFormat = (cell, row) =>
    <Moment date={cell} format="YYYY/MM/DD" />
}) =>
  <Container className="page timesheets" fluid>
    <h3>Input New Time Sheet</h3>
    <Alert color="danger" isOpen={!!error} toggle={dismissError}>
      Error - {error}
    </Alert>
    <Row>
      <Col>
        <Form>
          <FormGroup>
            <Dropzone accept={fileTypes} onDrop={onDrop} multiple={false}>
              <p className="text-center">Try dropping a file here, or click to select files to upload.</p>
              <p className="text-center">Only *.csv files will be accepted</p>
            </Dropzone>
          </FormGroup>
        </Form>
      </Col>
    </Row>
    <h3>Current Time Reports</h3>
    <BootstrapTable data={timesheets} options={options} striped={true} hover={true}>
      <TableHeaderColumn isKey={true} dataFormat={dateFormat} dataField="date" dataSort={true}>Date</TableHeaderColumn>
      <TableHeaderColumn dataField="hours" dataSort={true}>Hours</TableHeaderColumn>
      <TableHeaderColumn dataField="employee" dataSort={true}>Employee</TableHeaderColumn>
      <TableHeaderColumn dataField="job" dataSort={true}>Job</TableHeaderColumn>
    </BootstrapTable>
  </Container>

export default Timesheets;
