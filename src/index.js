import store from "./store";
import customStore from  "./customStore"


customStore.state=[55,8,4,5,6]
console.log(customStore.getState())
// console.log(customStore.state)



// const unsubscribe=store.subscribe(()=>{
//     console.log("store changed !!!",store.getState())
// })
// store.dispatch({
//     type:"bugAdded",
//     payload:{
//         description:"Bug1"
//     }
// })
//
// store.dispatch({
//     type:"bugResolved",
//     payload:{
//         resolved:true
//     }
// })

// store.dispatch({
//     type:"bugRemoved",
//     payload:{
//         id:1
//     }
// })
// unsubscribe();