import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import {  PendingTodos } from '../../components/Home';
import EachTodoItem from "../../components/EachTodoItem";


// const mockStore = configureStore();
// const store = mockStore(initialState);
let wrapper;
const otherProps =  {
    id: 'xs8huqo0fp',
    dateCompleted: '',
    isPending: true,
    isCompleted: false,
    dueDate: '2019-11-24',
    title: 'dsddsds'
  }

describe('< PendingTodos  />', () => {
    wrapper = shallow(<PendingTodos />);
    it('should render a Pending Todos Component', () => {
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('.pending_todos')).toBeDefined();
      expect(
        wrapper.find(
          <EachTodoItem
          key={0}
          id={otherProps.id}
          {...otherProps}
          />
        )
      ).toBeDefined();
    });
});