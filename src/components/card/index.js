import React from 'react';
import Link from "next/link";

const Card = ({movie}) => {
    return (
        <li className="">
           <Link href={`/movie/${movie.id}`}>
               <h2>{movie.title}</h2>
               <img width={500} height={764} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster"/>
           </Link>
        </li>
    );
};

export default Card;