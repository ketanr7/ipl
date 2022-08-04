import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import {fetchPlayersThunk} from '../Actions/PlayersListAction'
import defaultImg from '../assets/default.jpg';
import './PlayersList.scss'


const PlayersList = () => {
    const playersList = useSelector((state) => state.playersList.players)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(fetchPlayersThunk())     
    },[])
  
    return(
        <div className='homeContainer'>
          {
          

                <Row>{
                    playersList.map((player) =>
                    (
                      <Col xl={4} lg={6} md={6} key={player.id}>
                        <Card className="playerbox"  >
                          <Link to="">
                            <Card.Body>
                              <div className="cardDiv">
                                <div><img src={defaultImg} alt={player.name}/></div>
                                <div className="extraDetails">
                                  <Card.Title>{player.name}</Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted">
                                    <div>
                                      
                                      <p>{player.country}</p>
                                    </div>
                                    
                                  </Card.Subtitle>
                                  <Card.Text>more</Card.Text>
                                </div>
                              </div>
                            </Card.Body>
                          </Link>
                        </Card>
                      </Col>
                    )
                    )
                  }</Row>
              
            }
        </div>
          )

    
}



export default PlayersList


