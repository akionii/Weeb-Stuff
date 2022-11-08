import React from 'react'

export const AnimeInfo = (props) => {
    const { title, images: { jpg: { large_image_url } }, source, rank, score, popularity, members, status, rating, duration } = props.animeInfo
    return (
        <div className="anime-content">

            <h2>{title}</h2><br />

            <img src={large_image_url} alt="" /><br /><br />

            <div className="info">
                <h3>Rank: {rank}</h3>
                <h3>Score:</h3>{score} / 10
                <h3>Popularity: {popularity}</h3>

                <br></br>
                
                <>Members:{members}</>
                <br></br><br></br>
                <>Source:{source}</>
                <br></br><br></br>
                <>Duration:{duration}</>
                <br></br><br></br>
                <>Status:{status}</>
                <br></br><br></br>
                <>Rating:{rating}</>
            </div>
        </div>
    )
}