import {useState} from "react";
import axios from "axios";
import Card from "@/components/card";
import {BsSearch} from "react-icons/bs";

const options = {
    method: 'GET', headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTEyNWUxY2ZkM2FjYzM0M2UwMjc2NjcyZDM5ODk0YiIsInN1YiI6IjYwOTgyYzRiMDkyOWY2MDAzYWRlZDM1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hx8emELviZA_xteYrcflxshQptM13PcHkqWQDyL8n4k'
    }
};

export default function Home() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const handleClick = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.data)
            .then(response => {
                setMovies(response.results);
            })
            .catch(err => console.error(err));
    }

    return (<>
        <header className="w-full flex justify-center items-center bg-gray-900 py-4 bg-opacity-80">
            <section className="flex">
                <div className="flex justify-center items-center bg-gray-800 rounded px-1 py-1 gap-x-2">
                    <BsSearch className="text-white ml-1"/>
                    <input
                        className="bg-transparent placeholder:text-gray-300 focus:ring-0 focus:outline-none text-white"
                        onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Yazmaya başla.."/>
                </div>
                <button className="text-white bg-purple-800 rounded mx-4 px-2 text-sm" onClick={handleClick}>Arama
                </button>
            </section>

        </header>
        <section className="p-3">
            <ul className="grid grid-cols-8 gap-4">
                {movies.map(movie => (<Card key={movie.id} movie={movie}/>))}
            </ul>
        </section>
    </>)
}
