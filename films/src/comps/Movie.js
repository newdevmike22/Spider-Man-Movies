import { useState } from "react";

const Movie = ({ title, img, director, time, budget, gross, desc }) => {
    const [readMore, setReadMore ] = useState(false);

    return (
        <div className="card movie">
            <img src={img} alt="Thiller" />
            <h1><strong>{title}</strong></h1>
            <h2><strong>Director:</strong> {director}</h2>
            <h2><strong>Time:</strong> {time}</h2>
            <h2><strong>Budget:</strong> {budget}</h2>
            <h2><strong>Gross:</strong> {gross}</h2>
            <p>
                <strong>Description: </strong>
                    {readMore ? desc : `${desc.substring(0, 85)}...`}&nbsp;&nbsp;
                    <button className="btn btn-desc" onClick={() => setReadMore(!readMore)}>{readMore ? "SHOW LESS" : "READ MORE"}</button>
            </p>
        </div>
    )
}

export default Movie;