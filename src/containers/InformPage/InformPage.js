import React, {useState, useEffect,Fragment} from 'react';
import axios from 'axios'
import Request from "../../components/Request/Request";
const InformPage = (props) => {
    const [tvShow, setTvShow] = useState({})
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
    return (
        <Fragment>
                    <Request/>
                    <div>
                        {tvShow.image &&
                        <img src={tvShow.image.medium} alt=""/>
                        }
                        <h3>{tvShow.name}</h3>
                        <p>{tvShow.summary}</p>
                    </div>
        </Fragment>
    );
};

export default InformPage;