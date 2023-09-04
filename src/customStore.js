const createStore=()=>{
    let state =[1,1,1,1,1,1,1];

    const getState =() =>{
        return state;
    }
    return {
        getState
    }
}

export default createStore()