export const ADD_TODO ='ADD_TODO';
export const UPDATE_TODO= 'UPDATE_TODO';
export const DELETE_TODO ='DELETE_TODO';

export function addtodo(todo){
    return{
        type: ADD_TODO,
        paylod: todo
    }
}

export function updatetodo(todoId){
    return{
        type: UPDATE_TODO,
        paylod: todoId
    }
}
export function deletetodo(todo){
    return{
        type: DELETE_TODO,
        paylod: todo
    }
}