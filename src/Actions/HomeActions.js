import axios from 'axios'
import {FETCH_TEAMS_START,FETCH_TEAMS_SUCCESS,FETCH_TEAMS_FAIL} from '../Types/HomeTypes'

const fetchTeamStart = () =>{
    return {
        type:FETCH_TEAMS_START
    }
}

const fetchTeamSuccess = teams =>{
    return {
        type:FETCH_TEAMS_SUCCESS,
        payload:teams
    }
}

const fetchTeamFail = error =>{
    return {
        type:FETCH_TEAMS_FAIL,
        payload:error
    }
}

const fetchTeamsThunk = () => {
    return (dispatch) => {
        dispatch(fetchTeamStart)
        axios.get('https://api.cricapi.com/v1/series_info?apikey=9b576dce-df17-40b7-9f2d-422d9ae6ccab&offset=0&id=47b54677-34de-4378-9019-154e82b9cc1a')
        .then(res => {
            const teams = res.data.data.matchList
            dispatch(fetchTeamSuccess(teams))
        })
        .catch((err) => {
            const error = err.message
            dispatch(fetchTeamFail(error))
        })

    }
}

export {fetchTeamStart,fetchTeamSuccess,fetchTeamFail,fetchTeamsThunk}