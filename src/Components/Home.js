import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchTeamsThunk} from '../Actions/HomeActions'
import MatchList from './MatchDetails'
const Home = () => {
    const teamsList = useSelector((state) => state.teams.teams)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(fetchTeamsThunk()) 
    },[])

    return (
        <div className='homeContainer'>
                <MatchList teamsList = {teamsList}/>
          </div>
    )

    
}

export default Home


