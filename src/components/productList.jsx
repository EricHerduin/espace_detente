import getItems from "../libs/getItems";
import { Link } from "react-router-dom";

export default function Productlist() {
  return (
    <div className="container__product">
      <h2>Découvrez notre gamme de spas et bains nordiques haut de gamme</h2>
      <div className="container__product--gallery">
        {getItems().map((item) => (
          <div className="gallery__card" key={item.id}>
            <Link to={`/product/${item._id}`}>
              <div className="gallery__card--img">Photo</div>
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
