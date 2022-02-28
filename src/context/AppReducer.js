export default (state, action) => {
    switch(action.type){
        case 'REMOVE_USER':
            return{
                tasks: state.tasks.filter(task =>{
                    return task.id !== action.payload
                })
            }

        case 'ADD_USER':
            return{
                tasks: [action.payload, ...state.tasks]
            }

        case 'ADD_DESCRIPTION':
            return{
                tasks: [action.payload, ...state.tasks]
            }

        case 'EDIT_TASK':
            const updateTask = action.payload;
            const updateTasks = state.tasks.map(task =>{
                if(task.id === updateTask.id){
                    return updateTask;
                }
                return task;
            })
            return{
                tasks: updateTasks

            }
        default:
            return state
    }
}