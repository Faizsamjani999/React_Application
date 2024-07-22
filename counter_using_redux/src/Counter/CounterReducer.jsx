
const initial = 0;

export const CounterReducer = (state = initial,action)=>{
    switch(action.type)
    {
        case "incriment" :
            return state + 1;
        
        case "decrement" : 
            return state - 1;

        default : return state;
    }
}