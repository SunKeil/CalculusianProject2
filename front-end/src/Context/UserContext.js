import { createContext, useReducer, useEffect} from "react";

export const AuthContext = createContext()

export const authReducer = (state,action) =>{
    switch(action.type) {
        case 'LOGIN':
            return{
                user:action.payload
            }
        case 'LOGOUT':
            return{
                user : null
            }
            case 'DELETE_USER':
            return{
                user: state.user.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}
export const AuthContextProvider = ({ children })=>{
    const [state,dispatch] = useReducer(authReducer,{
     user: null
    })
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            dispatch({ type: 'LOGIN', payload: user })
        }
    },[])
    console.log('authcontext:', state)
    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}