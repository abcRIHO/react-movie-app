import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);
    const {id} = useParams(); // Router이 변수의 값을 넘겨준다

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setInfo(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
        
    }, [])

    return (
        <div>
            {loading ? <h1>Loading Detail..</h1> : 
            <div>
                <h1>{info.title}</h1>
                <img src={info.large_cover_image} alt={info.title}/>
                <h3>RATING: {info.rating}</h3>
                <p>{info.description_full}</p>

                <Link to="/">HOME</Link>
            </div>}
        </div>
    )
}

export default Detail;