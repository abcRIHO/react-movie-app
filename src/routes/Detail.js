import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from './Detail.module.css';

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
            {loading ? 
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div> : 
            <div className={styles.info_style}>
                <h1 className={styles.info_title}>{info.title}</h1>
                <img className={styles.info_image} src={info.large_cover_image} alt={info.title}/>
                <h3 className={styles.info_title}>RATING: {info.rating}</h3>
                <p className={styles.info_title}>{info.description_full}</p>

                <Link to="/" className={styles.info_home}>HOME</Link>
            </div>
            }
        </div>
    )
}

export default Detail;