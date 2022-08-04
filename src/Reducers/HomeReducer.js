import {FETCH_TEAMS_START,FETCH_TEAMS_SUCCESS,FETCH_TEAMS_FAIL} from '../Types/HomeTypes'


const InitialState = {
    loading:true,
    teams: [],
    error:''
}

const reducer = (state = InitialState,action) => {
    switch(action.type){
        case 'FETCH_TEAMS_START': 
        return {
            loading:true,
            teams: [],
            error:''
        }
        case 'FETCH_TEAMS_SUCCESS': 
        return {
            loading:false,
            teams: action.payload,
            error:''
        }
        case 'FETCH_TEAMS_FAIL': 
        return {
            loading:false,
            teams: [],
            error:action.payload
        }
        default:
            return state
    }
}

export default reducer

