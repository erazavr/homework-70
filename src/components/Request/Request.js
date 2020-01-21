import React, {useState, useEffect,Fragment} from 'react';
import axios from 'axios'
import './Request.css'
import {NavLink} from "react-router-dom";
const Request = () => {
    const [tvShows, setTvShows] = useState({});
    const [tvShow, setTvShow] = useState('');
    const [isHiden, setIsHiden] = useState(false)

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
    const hidenOn = () => {
        setIsHiden(true)
    };
    const hidenOff = () => {
        setIsHiden(false)
    };
    return (
        <Fragment>
            <div className='main-block' onClick={hidenOn}>
                <label htmlFor='input' className='label'>Search for TV Show:</label>
                <input type="text" id='input' className='field' onChange={valueChanged}/>
            </div>

            {isHiden &&
            Object.keys(tvShows).map(show => (
                    <div key={show}  onClick={hidenOff} className='div'>
                    <NavLink   to={`/shows/${tvShows[show].show.id}`} className='showName'>{tvShows[show].show.name}</NavLink>
                    </div>
                        ))
            }
        </Fragment>


    );
};

export default Request;