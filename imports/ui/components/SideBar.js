// Framework
import React from 'react';

// Components
import { Container, Row, Col, ButtonGroup } from 'reactstrap';

import { GameButton, QuitButton } from './SideBar.style';
/**
 * A list of field rows with a header.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const SideBar = ({ numberOfBees, createBee, removeAllBees }) => {
  const createBeeType = type => ({ type });
  const createWorker = () => createBee(createBeeType('Worker'));
  const createDrone = () => createBee(createBeeType('Drone'));
  const createQueen = () => createBee(createBeeType('Queen'));
  const removeBees = () => removeAllBees();

  return (
    <aside>
      <Container className="side-bar" fluid>
        <Row>
          <Col>
            <ButtonGroup size="sm">
              <GameButton onClick={createWorker}>Worker</GameButton>
              <GameButton onClick={createDrone}>Drone</GameButton>
              <GameButton onClick={createQueen}>Queen</GameButton>
              <QuitButton onClick={removeBees}>X</QuitButton>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </aside>
  );
};

export default SideBar;
