import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class AddTodo extends Component {

    constructor(props,context) {
        super(props, context);

    }

    // ref属性
    // input 元素完成装载 该函数会被调用
    // 参数node：input元素
    // 记录在成员变量input中
    refInput = (node) => {
        this.input = node;
    }

    onSubmit = (ev) => {
        // 取消表单提交自动跳转页面行为
        ev.preventDefault();

        // 获取当前输入框的内容
        const input = this.input;
        // 如果为空则忽略空白待办事项，不新增作为待办事项
        if (!input.value.trim()) {
            return;
        }
        // onAdd属性传递的函数
        this.props.onAdd(input.value);
        // 最后清空输入框
        input.value = '';
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput} />
                    <button className="add-btn" type="submit">+</button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};

// 把内层傻瓜组件中的用户动作转化为派送给Store的动作
// 输出逻辑 只编写connect的第二个参数
// 两种写法
// 1) 对象
// 2) 函数 √
const mapDispatchProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text))
        }
    }
};

// 1) 对象
// const mapDispatchProps = {
//     onAdd: (text) => {
//         addTodo(text);
//     }
// };

export default connect(null, mapDispatchProps)(AddTodo);



