
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from '../actions/actions'


const initState = {
    items: [],
    addedItems: [],
    total: 0,
    error: null

}
const itemReducer = (state = initState, action) => {

    //FETCH ITEM SUCCESS
    if (action.type === FETCH_ITEMS_SUCCESS) {
        return {
            ...state,
            items: action.data
        }
    }

    //FETCH ITEM ERROR
    if (action.type === FETCH_ITEMS_ERROR) {
        return {
            ...state,
            error: action.error
        }
    }
    //ADD IN TO CART
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        console.log(state.addedItems)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }

    //REMOVE FROM CART
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    
    //ADD QUANTITY
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    //REMOVE QUANTITY
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    else {
        return state
    }

}

export default itemReducer