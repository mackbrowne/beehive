// Framework
import React from "react";
import Moment from 'react-moment';

// Components
import { Container, Row, Col, Button } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// Helpers
import { sortPayrollPeriods } from "../helpers/sort";
import { payrollDatesFormat, moneyFormat } from "../helpers/format";

/**
 * Homepage for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
const Home = ({
  payments,
  options = { noDataText: 'No Payroll Data.  Upload a Timesheet.' },
  dateFormat = payrollDatesFormat,
  moneyFormat = moneyFormat,
  sortFunc = sortPayrollPeriods
}) =>
<Container className="page timesheets" fluid>
  <h3>Current Payroll Report</h3>
  <BootstrapTable data={payments} options={options} striped={true} hover={true}>
    <TableHeaderColumn dataField="period" dataSort={true} dataFormat={dateFormat} sortFunc={sortFunc} isKey={true} >Pay Period</TableHeaderColumn>
    <TableHeaderColumn dataField="employee" dataSort={true}>Employee Id</TableHeaderColumn>
    <TableHeaderColumn dataField="amount" dataSort={true} dataFormat={moneyFormat}>Amount Paid</TableHeaderColumn>
  </BootstrapTable>
</Container>

export default Home;
