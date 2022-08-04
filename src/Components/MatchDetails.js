import { Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './MatchDetails.scss'

const MatchList = ({teamsList}) =>{

  return(
<div>
  {
        <Row>{
          teamsList.map((team) =>
          (
            <Col xl={4} lg={6} md={6} key={team.id}>
              <Card className={`box ${team.name.slice(0,team.name.indexOf(' ')) == 'Chennai'?'chennai':
              team.name.slice(0,team.name.indexOf(' ')) == 'Sunrisers' ||team.name.slice(0,team.name.indexOf(' ')) == 'Hyderabad'?'hyderabad':
              team.name.slice(0,team.name.indexOf(' ')) == 'Royal'?'bangalore':
              team.name.slice(0,team.name.indexOf(' ')) == 'Lucknow' || team.name.slice(0,team.name.indexOf(' ')) == 'LSG'?'lucknow':
              team.name.slice(0,team.name.indexOf(' ')) == 'Mumbai'?'mumbai':
              team.name.slice(0,team.name.indexOf(' ')) == 'Delhi'?'delhi':
              team.name.slice(0,team.name.indexOf(' ')) == 'Rajasthan'?'rajasthan' :
              team.name.slice(0,team.name.indexOf(' ')) == 'Punjab'?'punjab':
              team.name.slice(0,team.name.indexOf(' ')) == 'Hyderabad'?'hyderabad':'gujarat'
              }`}  >
                <Link to="/playersList">
                  <Card.Body>
                    <div className="cardDiv">
                      <div className="teamLogo"><img src={team.teamInfo[0].img} alt={team.name}/><h2>VS</h2>
                      <img src={team.teamInfo[1].img}alt={team.name}/>
                      </div>
                      <div className="extraDetails">
                        <Card.Title>{team.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <div>
                            <p>{team.venue}</p>
                          </div>
                          <div>
                            <p>{team.date}</p>
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

export default MatchList
