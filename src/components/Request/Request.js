import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './Request.css'
import {NavLink} from "react-router-dom";
const Request = () => {
    const [tvShows, setTvShows] = useState({});
    const [tvShow, setTvShow] = useState('');
    const valueChanged = event => {
        setTvShow(event.target.value)
    };
    useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${tvShow}`);
            if (response.data) {
                setTvShows(response.data)
            }
        };
        fetchData();
    },[tvShow]);
    return (
        <div className='main-block'>
            <label htmlFor='input' className='label'>Search for TV Show:</label>
            <input type="text" id='input' className='field' onChange={valueChanged}/>
            {tvShows &&
            Object.keys(tvShows).map(show => (
                <NavLink key={show} to={`/shows/${tvShows[show].show.id}`} className='showName'>{tvShows[show].show.name}</NavLink>
            ))
            }
        </div>
    );
};

export default Request;