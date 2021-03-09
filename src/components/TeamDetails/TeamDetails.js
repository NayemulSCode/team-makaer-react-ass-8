import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TeamDetails = () => {
    const {idTeam} = useParams();
    //console.log(idTeam);
    const [team, setTeam] = useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setTeam(data.teams[0]);
            //console.log(data.teams[0]);
        })
    },[idTeam])
    return (
        <div>
            <h2> {team.strTeam} <span>Founded: {team.intFormedYear}</span></h2>
            <p>League: {team.strLeague}</p>
            <p>Country: {team.strCountry}</p>
            <p>Stadium: {team.strStadium}</p>
            <p>Capacity: {team.intStadiumCapacity}K</p>
            <p>Gender: {team.strGender}</p>
            <p>{team.strDescriptionEN}</p>
        </div>
    );
};

export default TeamDetails;