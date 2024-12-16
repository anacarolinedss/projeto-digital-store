import React from ´react´;

function ProductDetails({ product}) {
  return (
    <div>
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>  
      <p>{product.description}</p>
      <p>Preço:R$ {product.price}</p>
      <button>Adicionar ao Carrinho</button>
       </div>
    );
}
