function productItem({ product }) {
    return (
        <div className="product-item">
            <img src={`/src/assets/${product.name}.jpg`} width="200" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default productItem;