import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../Store';
import * as Action from '../Actions';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = this.getOwnState();
    }

    getOwnState = () => {
        return {
            value: store.getState()[this.props.caption]
        }
    }

    onChange = () => {
        this.setState(this.getOwnState());
    }

    onIncrement = () => {
        store.dispatch(Action.increment(this.props.caption));
    }

    onDecrement = () => {
        store.dispatch(Action.decrement(this.props.caption));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.value !== this.state.value);
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }



    render() {
        const value = this.state.value;
        const { caption } = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
};

export default Counter;