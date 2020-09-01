import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        // 针对action.type所有可能值的case语句

        // 返回一个增加了一个对象的数组
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        }

        // 返回一个新的对象，对completed取反
        case TOGGLE_TODO: {
            return state.map((todoItem) => {
                if (todoItem.id === action.id) {
                    return {
                        ...todoItem,
                        completed: !todoItem.completed
                    };
                } else {
                    return todoItem;
                }
            })
        }

        // 返回一个新的对象，filter过滤
        case REMOVE_TODO: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id;
            })
        }

        // 默认直接原样返回state
        default: {
            return state;
        }
    }
}