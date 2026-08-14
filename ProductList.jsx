import ProductCard from "./ProductCard";

function ProductList() {

  const products = [
    {
      id: 1,
      title: "iPhone 15",
      price: 799,
      category: "Smartphone",
      rating: 4.8,
      inStock: true,
      image: "https://picsum.photos/id/1/400/300",
      description:
        "The iPhone 15 is a modern smartphone with excellent performance and camera quality."
    },

    {
      id: 2,
      title: "MacBook Pro",
      price: 1499,
      category: "Laptop",
      rating: 4.9,
      inStock: true,
      image: "https://picsum.photos/id/2/400/300",
      description:
        "MacBook Pro provides powerful performance for developers and professionals."
    },

    {
      id: 3,
      title: "Wireless Headphones",
      price: 199,
      category: "Audio",
      rating: 4.5,
      inStock: false,
      image: "https://picsum.photos/id/3/400/300",
      description:
        "High quality wireless headphones with clear sound and comfortable design."
    },

    {
      id: 4,
      title: "Smart Watch",
      price: 249,
      category: "Wearable",
      rating: 4.6,
      inStock: true,
      image: "https://picsum.photos/id/4/400/300",
      description:
        "A smart watch that helps you track your activities and notifications."
    },

    {
      id: 5,
      title: "Gaming Mouse",
      price: 59,
      category: "Gaming",
      rating: 4.4,
      inStock: true,
      image: "https://picsum.photos/id/5/400/300",
      description:
        "A high precision gaming mouse designed for gamers."
    },

    {
      id: 6,
      title: "Mechanical Keyboard",
      price: 99,
      category: "Gaming",
      rating: 4.7,
      inStock: false,
      image: "https://picsum.photos/id/6/400/300",
      description:
        "Mechanical keyboard with comfortable keys and RGB lighting."
    }
  ];

  return (
    <section className="products-section">

      <h1>Our Products</h1>

      <p className="subtitle">
        Discover our latest products
      </p>

      <div className="products-container">

        {/* .map() */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductList;