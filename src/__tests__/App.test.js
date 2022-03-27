import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import { mount } from 'enzyme';
import SearchBar from '../components/layout/SearchBar';
import Logs from '../components/Logs/Logs';
import AddBtn from '../components/layout/AddBtn';
import AddLogModal from '../components/Logs/AddLogModal';
import EditLogModal from '../components/Logs/EditLogModal';
import AddTechModal from '../components/techs/AddTechModal';
import TechListModal from '../components/techs/TechListModal';
import store from '../store';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Provider store={store}><App /></Provider>)
})

it('has one SearchBar component', () => {
  expect(wrapper.find(SearchBar).length).toEqual(1);
});

it('has one Logs component', () => {
  expect(wrapper.find(Logs).length).toEqual(1);
});

it('has one AddBtn component', () => {
  expect(wrapper.find(AddBtn).length).toEqual(1);
});

it('has one AddLogModal component', () => {
  expect(wrapper.find(AddLogModal).length).toEqual(1);
});

it('has one EditLogModal component', () => {
  expect(wrapper.find(EditLogModal).length).toEqual(1);
});

it('has one AddTechModal component', () => {
  expect(wrapper.find(AddTechModal).length).toEqual(1);
});

it('has one TechListModal component', () => {
  expect(wrapper.find(TechListModal).length).toEqual(1);
});
