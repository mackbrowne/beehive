import styled from 'styled-components';
import { Button } from 'reactstrap';

export const GameButton = styled(Button).attrs({
  className: 'btn-block'
})``;

export const QuitButton = GameButton.extend.attrs({
  color: 'danger'
})``;
