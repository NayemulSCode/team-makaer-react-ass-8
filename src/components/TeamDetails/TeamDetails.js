import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css'
import picture from '../../image/male.png'
import fpicture from '../../image/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faFlag, faObjectGroup, faUserFriends, faMars} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
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

    let isGender = team.strGender;
    return (
        <div className="">
           
            <img style={{width:'100%', height:'150px'}} src={team.strTeamBanner || team.strTeamBadge} alt="Team Banner"/>
            <div className="teamDetailsBody">
                <div className=" d-center clubDetails">
                    <div className="clubDetailsContainer">
                        <div className="contextDetails">
                            <h2> {team.strTeam} <span>Founded: {team.intFormedYear}</span></h2>
                            <p><FontAwesomeIcon icon={faFutbol} /> League: {team.strLeague}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {team.strCountry}</p>
                            <p><FontAwesomeIcon icon={faObjectGroup} /> Stadium: {team.strStadium}</p>
                            <p><FontAwesomeIcon icon={faUserFriends} /> Capacity: {team.intStadiumCapacity}K</p>
                            <p><FontAwesomeIcon icon={faMars} /> Gender: {team.strGender}</p>
                        </div>
                        <div className="contextImg">
                            {
                                 team.strGender === 'Male' ? (<img src={picture} alt="male"/>):(<img src={fpicture} alt="female"/>)
                            }
                         
                        </div>
                    </div>
                </div>
                <p>{team.strDescriptionEN}</p>
                <div>
                    <Link to=''><FontAwesomeIcon className="socialIcon" icon={faFacebook} /></Link>
                    <FontAwesomeIcon className="socialIcon" icon={faYoutube} />
                    <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
                </div>
            </div>
            
                
        </div>
    );
};

export default TeamDetails;