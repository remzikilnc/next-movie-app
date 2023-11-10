import React from 'react';
import Link from "next/link";
import {AiFillStar} from "react-icons/ai";

const Card = ({movie}) => {
    const movieRating = Math.floor(movie.vote_average * 100) / 100;
    return (<li className="relative hover:scale-105 transition-all duration-300">
        <Link href={`/movie/${movie.id}`}>
            <div
                className="absolute top-2 left-2 flex justify-center items-center shadow-xl bg-black bg-opacity-40 p-1 rounded">
                <span className="text-yellow-400"><AiFillStar className="h-5 w-5"/></span>
                <span className="text-sm text-white">{movieRating}</span>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-1 flex justify-center items-center">
                <span className="bg-black w-full h-full absolute -z-20 bg-opacity-70 rounded"></span>
                <h2 className="text-white font-semibold  text-center">{movie.title}</h2>
            </div>
            <img className="w-full h-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                 alt="poster"/>
        </Link>
    </li>);
};

export default Card;