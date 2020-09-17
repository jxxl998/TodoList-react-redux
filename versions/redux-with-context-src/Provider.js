import { Component } from 'react';
import PropTypes from 'prop-types';

// 在这里没必要让ControlPanel来提供支持Context功能
// Provider组件做为通用的context提供者
class Provider extends Component {
    // 返回代表Context的对象
    getChildContext = () => {
        return {
            store: this.props.store
        }
    }

    // 简单地把子组件渲染出来
    render() {
        return this.props.children;
    }
}

Provider.propTypes = {
    store: PropTypes.object.isRequired
};

Provider.childContextTypes = {
    store: PropTypes.object
};

export default Provider;