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
            axios.get(`https://api.themoviedb.org/3/movie/${id}&language=tr-TR`, options).then(res => {
                setMovie(res.data);
            });
        }
    }, [id]);

    if (movie === null) {
        return <p>Loading...</p>
    }
    return (
        <div className="flex justify-center items-center mt-8">
           <div className="flex justify-center flex-col items-center gap-y-4 max-w-xl">
               <div className="relative justify-center items-center flex flex-col p-8 gap-y-1">
                   <div className="justify-center flex items-center flex-col bg-stone-800 p-2 w-full rounded rounded-b-none bg-opacity-40">
                       <h1 className="text-white text-xl font-semibold">{movie.title}</h1>
                   </div>
                   <img className="rounded rounded-b-none w-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster"/>
                   <div className="flex justify-center items-center gap-x-4 bg-stone-800 p-2 w-full rounded rounded-b-none bg-opacity-60">
                       <p className="text-white text-sm font-semibold mt-4">{movie.overview}</p>
                   </div>
                   <div className="flex justify-center items-center gap-x-4 bg-stone-800 p-2 w-full rounded rounded-b-none bg-opacity-50">
                       <p className="text-white text-sm font-semibold">Rating: <span className="text-yellow-400">{movie.vote_average}</span></p>
                   </div>
                   <div className="w-full">
                       <div className="justify-center flex items-center flex-col bg-stone-800 p-2 w-full rounded rounded-b-none bg-opacity-40">
                           <div className="flex justify-center items-center gap-x-4">
                               {movie.genres.map(genre => (
                                   <p className="text-white text-sm font-normal">{genre.name}</p>
                               ))}
                           </div>
                       </div>
                   </div>
                   <div className="bg-opacity-10 bg-white w-full h-full absolute top-0 -z-10 blur-sm rounded"/>
               </div>

           </div>
            <div className="absolute opacity-40 blur-2xl -z-10 w-full h-full">
                <img className="w-full h-full" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ?? movie.poster_path}`} alt="backdrop"/>
            </div>
        </div>
    );
};

export default Index;