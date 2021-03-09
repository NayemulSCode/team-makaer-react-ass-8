import React from 'react';
import { useHistory } from 'react-router';

const Teams = (props) => {
    const img = props.team.strTeamBadge;
    const name = props.team.strTeam;
    const sportType = props.team.strSport;
    const id = props.team.idTeam;

    const history = useHistory();
    const showTeamDetails = idTeam =>{
        const url =`team/${idTeam}`;
        history.push(url);
    }
    return (
        <div>
            <img src={img} alt=""/>
            <h4>{name} <small>{id}</small></h4>
            <p>Sports type: {sportType}</p>
            <button onClick={()=> showTeamDetails(id)}>Details</button>
        </div>
    );
};

export default Teams;