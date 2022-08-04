import {FETCH_PLAYERS_START,FETCH_PLAYERS_SUCCESS,FETCH_PLAYERS_FAIL} from '../Types/PlayerListTypes'


const InitialState = {
    loading:true,
    players: [],
    error:''
}

const playersListReducer = (state = InitialState,action) => {
    switch(action.type){
        case 'FETCH_PLAYERS_START': 
        return {
            loading:true,
            players: [],
            error:''
        }
        case 'FETCH_PLAYERS_SUCCESS': 
        return {
            loading:false,
            players: action.payload,
            error:''
        }
        case 'FETCH_PLAYERS_FAIL': 
        return {
            loading:false,
            players: [],
            error:action.payload
        }
        default:
            return state
    }
}

export default playersListReducer

