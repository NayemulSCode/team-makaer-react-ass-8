import React from 'react';

const Teams = (props) => {
    const img = props.team.strTeamBadge;
    const name = props.team.strTeam;
    const sportType = props.team.strSport;
    return (
        <div>
            <img src={img} alt=""/>
            <h4>{name}</h4>
            <p>Sports type: {sportType}</p>
            <button>Details</button>
        </div>
    );
};

export default Teams;