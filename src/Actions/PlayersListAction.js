import axios from 'axios'
import {FETCH_PLAYERS_START,FETCH_PLAYERS_SUCCESS,FETCH_PLAYERS_FAIL} from '../Types/PlayerListTypes'

const fetchPlayersStart = () =>{
    return {
        type:FETCH_PLAYERS_START
    }
}

const fetchPlayersSuccess = players =>{
    return {
        type:FETCH_PLAYERS_SUCCESS,
        payload:players
    }
}

const fetchPlayersFail = error =>{
    return {
        type:FETCH_PLAYERS_FAIL,
        payload:error
    }
}

const fetchPlayersThunk = () => {
    return (dispatch) => {
        dispatch(fetchPlayersStart)
        axios.get('https://api.cricapi.com/v1/players?apikey=9b576dce-df17-40b7-9f2d-422d9ae6ccab&offset=0')
        .then(res => {
            const players = res.data.data
            dispatch(fetchPlayersSuccess(players))
        })
        .catch((err) => {
            const error = err.message
            dispatch(fetchPlayersFail(error))
        })

    }
}

export {fetchPlayersStart,fetchPlayersSuccess,fetchPlayersFail,fetchPlayersThunk}