import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EachTodoItem from "../../components/EachTodoItem";

let wrapper;

describe('< EachTodos  />', () => {
    const todoProps =    {
        id: 'xs8huqo0fp',
        dateCompleted: '',
        isPending: true,
        isCompleted: false,
        dueDate: '2019-11-24',
        title: 'dsddsds'
      };
    wrapper = shallow( <Provider store={store}> < EachTodoItem {...todoProps} /></Provider>);
    it('should render Each todo item', () => {
      expect(wrapper.find('.no-gutters')).toBeDefined();
      expect(wrapper.find(<FontAwesomeIcon 
        icon={faRecycle} 
        className="ml-2 mr-2"
         /> )).toHaveLength(0);
    });
});