import React,{ useState} from ´react´;

function ProductList() {
  const [products, setProducts] = useState([
    colocar os dados aqui...
    ]);

return (
  <div>
    {products.map(product=> (
    <div key={product.id}>
    <h2>{product.name}</h2>
    <p>Preço:R$ {product.price}</p> 
       </div>
  ))}
    </div>
  );
}
