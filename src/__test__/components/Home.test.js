import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import PendingTodos from '../../components/Home';
import EachTodoItem from "../../components/EachTodoItem";

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
    wrapper = shallow( <Provider store={store}><PendingTodos /></Provider>);
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