import data from '../data';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <h1>Featured Product</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-infos">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to card</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
