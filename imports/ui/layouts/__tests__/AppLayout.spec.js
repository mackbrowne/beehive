import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import AppLayout from '../AppLayout';

describe('<AppLayout />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      children: []
    };
  });

  describe('AppLayout SnapShot', () => {
    it('renders config correctly with default props', () => {
      delete defaultProps.configFields;
      const tree = ReactTestRenderer.create(
        <MemoryRouter initialEntries={['/home']}>
          <AppLayout {...defaultProps} />
        </MemoryRouter>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  // describe("AppLayout Props", () => {
  //   let wrapper, fieldRows;
  //
  //   beforeEach(() => {
  //     const wrapper = shallow(
  //       <AppLayout {...defaultProps} />
  //     );
  //     fieldRows = wrapper.find(FieldRows);
  //   });
  //
  //   it("should pass fields prop to FieldRows", () => {
  //     const { fields } = fieldRows.props();
  //     expect(fields).toBe(defaultProps.configFields);
  //   });
  // });
});
