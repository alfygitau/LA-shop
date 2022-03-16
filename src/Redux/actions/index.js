export const addCart =(product)=>{
    return {
        type: "ADD_ITEM_TO_CART",
        payload: product
    }
}
export const deleteCart =(product)=>{
    return {
        type: "DELETE_ITEM_FROM_CART",
        payload: product
    }
}