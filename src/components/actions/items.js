import { FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from './actions'

//Fetch Items
export const fetchItems= ()=>{
    return dispatch => {
        fetch('https://api.myjson.com/bins/qzuzi')
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw (res.error)
            }
            dispatch(fetchItemSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchItemError(error))
        })
    }
}

export function fetchItemSuccess(data) {
    return {
        type: FETCH_ITEMS_SUCCESS,
        data: data
    }
}

export function fetchItemError() {
    return {
        type: FETCH_ITEMS_ERROR
    }
}