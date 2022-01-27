export const addItem = (value) => {
    return {
        type: 'ADD_ITEM',
        payload: value
    }
}

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}

export const setDone = (id, value) => {
    return {
        type: 'SET_DONE',
        payload: {
            id,
            value
        }
    }
}