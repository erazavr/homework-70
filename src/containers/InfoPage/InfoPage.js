import React, {useState, useEffect,Fragment} from 'react';
import {NavLink} from "react-router-dom";
import axios from 'axios'
import Request from "../../components/Request/Request";
import './infoPage.css'

const InfoPage = (props) => {
    const [tvShow, setTvShow] = useState({});
    const id = props.match.params.id;
    useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get(`http://api.tvmaze.com/shows/${id}`);
            if (response.data) {
                setTvShow(response.data)
            }
        };
        fetchData()
    }, [id]);
    const showText = () => {
        if (tvShow.summary) {
            const text = tvShow.summary;
            const replaceText = text.replace(/<p>|<b>|<i>|<\/p>|<\/b>|<\/i>/g, '');
            return replaceText
        }

    };
    return (
        <Fragment>
            <Request/>
            {tvShow ?
                <div>
                    {tvShow.image &&
                        <div>
                    <img src={tvShow.image.medium} alt=""/>
                        </div>
                    }
                    <div>
                        <h3>{tvShow.name}</h3>
                        <p>{showText()}</p>
                    </div>

                </div>: <h1>Ничего нет</h1>
            }
            <NavLink to={'/'} className='goBack'>Go to home page</NavLink>
        </Fragment>
    );
};

export default InfoPage;