import store from "./store";
const unsubscribe=store.subscribe(()=>{
    console.log("store changed !!!",store.getState())
})
store.dispatch({
    type:"bugAdded",
    payload:{
        description:"Bug1"
    }
})

store.dispatch({
    type:"bugResolved",
    payload:{
        resolved:true
    }
})

// store.dispatch({
//     type:"bugRemoved",
//     payload:{
//         id:1
//     }
// })
// unsubscribe();
console.log(store.getState())