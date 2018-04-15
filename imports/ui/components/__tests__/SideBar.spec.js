import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SideBar from '../SideBar';
import { GameButton, QuitButton } from '../SideBar.style';

describe('<SideBar />', () => {
  const defaultProps = {
    numberOfBees: 4,
    createBee: jest.fn(),
    removeAllBees: jest.fn()
  };

  describe('SideBar SnapShot', () => {
    it('renders SideBar correctly', () => {
      const tree = ReactTestRenderer.create(
        <SideBar {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('SideBar Props', () => {
    let wrapper, buttons, xbutton;

    beforeEach(() => {
      const wrapper = shallow(<SideBar {...defaultProps} />);
      buttons = wrapper.find(GameButton);
      xbutton = wrapper.find(QuitButton).first();
    });

    it('should call createBee', () => {
      buttons.forEach((node, index) => {
        node.simulate('click');
      });
      expect(defaultProps.createBee).toHaveBeenCalledTimes(3);
    });

    it('should call removeAllBees', () => {
      xbutton.simulate('click');
      expect(defaultProps.removeAllBees).toHaveBeenCalled();
    });
  });
});
