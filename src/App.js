import React from 'react';
import { Provider } from 'react-redux';

// components
import TodoList from './components/TodoList';

import store from './store';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
