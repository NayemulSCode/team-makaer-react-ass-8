import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import homeBanner from '../../image/laliga.jpg'
const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setTeams(data.teams);
            //console.log(data.teams);
        })
    },[])

    const home__container = {
        marginLeft: '0',
        marginRight: '0',
        AlignItems: 'center',
        width: '100%',
        backgroundColor:'lightblue'
    }
    return (
        <div style={home__container} className="row">
            <img style={{width:'100%', height:'200px'}} src={homeBanner} alt="Banner"/>
            {
                teams.map(team => (<Teams key={team.idTeam} team={team} />))
            }
        </div>
    );
};

export default Home;