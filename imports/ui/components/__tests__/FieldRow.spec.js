import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import FieldRow from '../FieldRow';
import { Input, Label } from 'reactstrap';

describe('<FieldRow />', () => {
  let defaultProps;

  describe('FieldRow SnapShot', () => {
    beforeEach(() => {
      defaultProps = {
        label: 'NewField',
        value: 15,
        visibleLabel: false,
        stateSettingAction: jest.fn()
      };
    });

    it('renders FieldRow correctly with default props', () => {
      delete defaultProps.label;
      delete defaultProps.visibleLabel;
      const tree = ReactTestRenderer.create(
        <FieldRow {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders FieldRow correctly', () => {
      const tree = ReactTestRenderer.create(
        <FieldRow {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders FieldRow correctly', () => {
      const tree = ReactTestRenderer.create(
        <FieldRow {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('FieldRow Props', () => {
    let wrapper, input, label;

    beforeEach(() => {
      const wrapper = shallow(<FieldRow {...defaultProps} />);
      input = wrapper.find(Input);
    });

    it('should pass fields prop to FieldRows', () => {
      input.simulate('change', { target: { value: 'My new value' } });
      expect(defaultProps.stateSettingAction).toHaveBeenCalled();
    });
  });
});
