import { v4 } from "uuid";
import lodash from 'lodash';

const initialState = {
    list: localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list'))
        : (() => {
            localStorage.setItem('list', JSON.stringify([]));
            return JSON.parse(localStorage.getItem('list'));
        })(),
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const prevList = lodash.cloneDeep(state.list);
            prevList.push({
                id: v4(),
                text: action.payload,
                done: false
            });
            return { ...state, list: prevList };
        }
        case 'DELETE_ITEM': {
            const prevList = lodash.cloneDeep(state.list);
            const itemIdx = prevList.findIndex(item => item.id === action.payload);
            const resultList = [
                ...prevList.slice(0, itemIdx),
                ...prevList.slice(itemIdx + 1),
            ];
            return { ...state, list: resultList };
        }
        case 'SET_DONE': {
            const prevList = lodash.cloneDeep(state.list);
            const itemIdx = prevList.findIndex(item => item.id === action.payload.id);
            prevList[itemIdx].done = action.payload.value;
            return { ...state, list: prevList }
        }
        default: return state;
    }
}

export default reducer;