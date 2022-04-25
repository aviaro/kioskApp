export  const GET_STORES = 'GET_STORES';
const baseUrl = 'http://localhost:3000/api/';



export const get_store_dispatch = (data) => {
    return dispatch => {
        dispatch({type: GET_STORES, data});
    }
} 


export const get_store_action = () => {
    return async dispatch => {
        const response = await fetch(baseUrl + 'store/getAllStores',{
            method: 'GET',
            headers: {
               'Content-type': 'application/json'
            }
        });
        
        const data = await response.json();
        console.log(data);
        if(data.status) {
            dispatch(get_store_dispatch(data));
        } else {
            let message = data.message;
            throw new Error(message)
        }
    }
}