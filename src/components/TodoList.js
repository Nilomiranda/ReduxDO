import React from 'react';
import PropTypes from 'prop-types';

/**
 * this 'connect' is responsible for connecting
 * our component with a reducer
 */
import { connect } from 'react-redux';

const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

// turning state information to a prop
const mapStateToProps = state => ({
  todos: state.todos,
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(TodoList);
