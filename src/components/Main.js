import Card from "./Card";

export default function Main({ products }) {
  return (
    <div className="mb-5">
      <div className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-4 col-md-6 mb-4" key={product._id}>
              <Card
                id={product._id}
                name={product.name}
                image_url={product.image_url}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
