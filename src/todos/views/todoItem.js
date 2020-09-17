import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ onToggle, onRemove, completed, text }) => {
    const checkedProp = completed ? { checked: true } : {};
    return (
        <li
            className="todo-item"
            style={{
                textDecoration: completed ? "line-through" : "none",
                fontStyle: completed ? "italic" : "inherit"
            }}
        >
            <label>
                <input
                    className="toggle"
                    type="checkbox"
                    {...checkedProp}
                    readOnly
                    onClick={onToggle}
                />
                {text}
                <span className="toggle-circle" ></span>
                <button className="remove" onClick={onRemove}>x</button>
            </label>
        </li>
    )
}

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;