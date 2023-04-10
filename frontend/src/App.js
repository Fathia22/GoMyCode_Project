import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Butterfly Fashion</a>
      </header>
      <main>
        <h1>Featured Product</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <img src={product.image} alt={product.name} />
              <div className="product-infos">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button>Add to card</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
