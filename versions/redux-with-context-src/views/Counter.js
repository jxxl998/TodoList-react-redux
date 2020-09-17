import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import store from '../Store';
import * as Action from '../Actions';

const buttonStyle = {
    margin: '10px'
};

// 无状态组件 使用function进一步简化
// 直接使用解构赋值放在参数部分
function Counter({ caption, onIncrement, onDecrement, value }) {
    return (
        <div>
            <button style={buttonStyle} onClick={onIncrement}>+</button>
            <button style={buttonStyle} onClick={onDecrement}>-</button>
            <span>{caption} count: {value}</span>
        </div>
    );
}


Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};


// 容器组件 涉及状态转换
class CounterContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
          value: this.context.store.getState()[this.props.caption]
        };
      }

    onChange = () => {
        this.setState(this.getOwnState());
    }

    onIncrement = () => {
        this.context.store.dispatch(Action.increment(this.props.caption));
    }

    onDecrement = () => {
        this.context.store.dispatch(Action.decrement(this.props.caption));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.value !== this.state.value);
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
    }
    render() {
        return (
            <Counter caption={this.props.caption}
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement}
                value={this.state.value} />
        )
    }
}

CounterContainer.propTypes = {
    caption: PropTypes.string.isRequired
};

CounterContainer.contextTypes = {
    store: PropTypes.object
  }

export default CounterContainer;