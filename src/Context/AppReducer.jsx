export default (state, action) => {
    switch(action.type) {

        case 'GET_TODOS': 
            return {
                ...state, 
                loading: false,
                toDos: action.payload
            }
        case 'ADD_TODO': 
            return {
                ...state, 
                toDos: [...state.toDos, action.payload]
            }
        case 'DELETE_ALL': 
            return {
                state: []
            }
        case 'DELETE_TODO': 
            return {
                ...state, 
                toDos: state.toDos.filter(toDo => toDo._id !== action.payload) 
            }
        case 'EDIT_TODO':
            return {
                ...state, 
                toDos: [...state.toDos]  
            }
        case 'TODOS_ERROR': 
            return {
                ...state, 
                loading: false,
                error: action.payload
            }

        default: 
            return state;
    }
}