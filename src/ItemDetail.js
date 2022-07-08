import React from "react";
import { useNavigate } from "react-router-dom";

function ItemDetail({ itemView }) {
  const {
    title,
    backdrop_path,
    vote_average,
    vote_count,
    release_date,
    overview,
  } = itemView;
  const imgPath = "https://image.tmdb.org/t/p/original" + backdrop_path;

  const navigate = useNavigate();
  return (
    <div className="item_details">
      <img src={imgPath} className="back_img" />
      {itemView && (
        <div className="title_details">
          <h1 className="title">{title}</h1>
          <div className="other_details">
            <ul>
              <li>
                <b>Description :</b> <span>{overview}</span>
              </li>
              <li>
                {" "}
                <b>Avg. Vote :</b> <span>{vote_average}</span>
              </li>
              <li>
                <b>Vote Count :</b> <span>{vote_count}</span>
              </li>
              <li>
                <b>Release Date :</b> <span>{release_date}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
      <button className="back_btn" onClick={() => navigate("/")}>
        Go to Homepage
      </button>
    </div>
  );
}

export default ItemDetail;
