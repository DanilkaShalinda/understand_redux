import * as actions from "./actionTypes"
const bugAdded=(description)=>{
    return {
        type:actions.BUG_ADDED,
        payload:{
            description
        }
    }
}

const bugResolved =(id) =>{
    return{
        type:actions.BUG_RESOLVED,
        payload:{
            id
        }
    }
}

export default bugAdded;