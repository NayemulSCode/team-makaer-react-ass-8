import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css'
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
            console.log(data.teams[0]);
        })
    },[idTeam]);

    return (
        <div className="">
           
            <img style={{width:'100%', height:'150px'}} src={team.strTeamBanner || team.strTeamBadge} alt="Team Banner"/>
            <div className="teamDetailsBody">
                <div className=" d-center clubDetails">
                    <div className="d-flex">
                        <div className="contextDetails">
                            <h2> {team.strTeam} <span>Founded: {team.intFormedYear}</span></h2>
                            <p>League: {team.strLeague}</p>
                            <p>Country: {team.strCountry}</p>
                            <p>Stadium: {team.strStadium}</p>
                            <p>Capacity: {team.intStadiumCapacity}K</p>
                            <p>Gender: {team.strGender}</p>
                        </div>
                        <div className="contextImg">
                            <img src={team.strTeamBadge} alt=""/>
                        </div>
                    </div>
                </div>
                <p>{team.strDescriptionEN}</p>
            </div>
                
        </div>
    );
};

export default TeamDetails;