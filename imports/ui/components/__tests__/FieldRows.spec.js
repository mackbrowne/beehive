import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import FieldRows from '../FieldRows';

describe('<FieldRows />', () => {
  let defaultProps;

  describe('FieldRows SnapShot', () => {
    beforeEach(() => {
      defaultProps = {
        heading: 'Fields',
        fields: {
          tickrate: 50
        },
        stateSettingAction: jest.fn()
      };
    });

    it('renders FieldRows correctly with default props', () => {
      delete defaultProps.heading;
      delete defaultProps.fields;
      const tree = ReactTestRenderer.create(
        <FieldRows {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders FieldRows correctly', () => {
      const tree = ReactTestRenderer.create(
        <FieldRows {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
