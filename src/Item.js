import { Link } from "react-router-dom";
const Item = ({ item, setItemView }) => {
  const { poster_path, title, vote_average, vote_count } = item;
  const img_link = "https://image.tmdb.org/t/p/original" + poster_path;
  return (
    <div className="item" onClick={() => setItemView(item)}>
      <Link to="/item/detail">
        <img src={img_link} />
        <div className="item_info">
          <div className="title">
            <h2>{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
