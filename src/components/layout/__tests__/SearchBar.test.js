import React from 'react';
import {mount } from 'enzyme';
import SearchBar from '../SearchBar' 
import { Provider } from 'react-redux';
import moxios from 'moxios';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
let wrapper, store;

beforeEach(() => {
  moxios.install()
  const initialState = {
		text: ''
  };

  store = mockStore(initialState);
  wrapper = mount(<Provider store={store}><SearchBar /></Provider>)
});

afterEach(function () {
	moxios.uninstall()
});

it('renders one <SearchBar /> component', () => {
	expect(wrapper.find('#search')).toEqual({});
});
