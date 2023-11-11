import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";

const options = {
    method: 'GET', headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTEyNWUxY2ZkM2FjYzM0M2UwMjc2NjcyZDM5ODk0YiIsInN1YiI6IjYwOTgyYzRiMDkyOWY2MDAzYWRlZDM1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hx8emELviZA_xteYrcflxshQptM13PcHkqWQDyL8n4k'
    }
};

const Index = () => {
    const id = useRouter().query.id;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`https://api.themoviedb.org/3/movie/${id}`, options).then(res => {
                setMovie(res.data);
            });
        }
    }, [id]);


    if (movie === null) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster"/>
        </div>
    );
};

export default Index;