// Framework
import React from "react";
import Moment from 'react-moment';

// Components
import { Container, Row, Col, Button } from "reactstrap";
import SideBarContainer from "../containers/SideBarContainer";
import GameContainer from "../containers/GameContainer";

/**
 * Homepage for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
const Home = ({
  payments,
  options = { noDataText: 'No Payroll Data.  Upload a Timesheet.' },
  dateFormat = ([start, end]) => <span>
    <Moment date={start} format="DD/MM/YYYY" /> - <Moment date={end} format="DD/MM/YYYY" />
  </span>,
  moneyFormat = (cell) => `\$${parseFloat(Math.round(cell * 100) / 100).toFixed(2)}`,
  sortFunc = ({period: [a]}, {period: [b]}, order) => {
    if (order === 'desc') {
      return a.getTime() - b.getTime();
    } else {
      return b.getTime() - a.getTime();
    }
  }
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
