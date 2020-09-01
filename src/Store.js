import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { reducer as todoReducer } from './todos';
import { reducer as filterReducer } from './filters';

// import Perf from 'react-addons-perf'

// const win = window;
// win.Perf = Perf

// 接受一个对象作为参数
// 返回一个新的reducer函数
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

// const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(require('redux-immutable-state-invariant')());
// }

// const storeEnhancers = compose(
//     applyMiddleware(...middlewares),
//     (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );

// export default createStore(reducer, {}, storeEnhancers);
export default createStore(reducer, {});
