import { Button } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
    const img = props.team.strTeamBadge;
    const name = props.team.strTeam;
    const sportType = props.team.strSport;
    const id = props.team.idTeam;
    const country = props.team.strCountry;

    const history = useHistory();
    const showTeamDetails = idTeam =>{
        const url =`team/${idTeam}`;
        history.push(url);
    }
    const team ={
        // border: '1px solid black',
        boxShadow: '0px 5px 5px gray',
        margin:'15px'
    }
    const team__Image ={
        width: '100%',
        padding:'10px'
    }
    const team__Body = {
        padding:'15px'
    }
    return (
        <div style={team} className="col-md-3 d-center">
            <img style={team__Image} src={img} alt=""/>
            <div style={team__Body}>
                <h4>{name} <small style={{fontSize:'12px', color:'gray'}}>{country}</small></h4>
                <p>Sports type: {sportType}</p>
                <Button onClick={()=> showTeamDetails(id)}>Details <FontAwesomeIcon icon={faArrowRight} /></Button>
            </div>
        </div>
    );
};

export default Teams;