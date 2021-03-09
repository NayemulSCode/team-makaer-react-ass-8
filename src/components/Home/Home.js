import React, { useEffect, useState } from 'react';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setTeams(data.teams);
            console.log(data.teams);
        })
    },[])
    return (
        <div>
            {
                teams.map(team => (<h4>{team.strTeam}</h4>))
            }
        </div>
    );
};

export default Home;