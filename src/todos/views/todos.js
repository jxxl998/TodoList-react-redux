import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';

// import './style.css';


// 无状态组件
export default () => {
    return (
        <div className="todos">
            <AddTodo />
            <TodoList />
        </div>
    );
}