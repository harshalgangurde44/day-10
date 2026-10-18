import { useState } from "react";
import StarRating from "./StarRating";
import "./styles.css";

function App() {
  const [productRating, setProductRating] = useState(0);

  return (
    <main className="app">
      <h1>Star Rating Component</h1>
      <p className="subtitle">
        Rate a product by clicking the stars.
      </p>

      <section className="product-card">
        <div className="product-icon">🎧</div>

        <div className="product-info">
          <h2>Wireless Headphones</h2>
          <p>Price: ₹2,499</p>

          <StarRating
            initialRating={0}
            onRatingChange={setProductRating}
            label="Your rating"
          />

          {productRating > 0 && (
            <p className="success-message">
              You rated this product {productRating} out of 5.
            </p>
          )}
        </div>
      </section>

      <section className="product-card">
        <div className="product-icon">⌚</div>

        <div className="product-info">
          <h2>Smart Watch</h2>
          <p>Price: ₹3,999</p>

          <StarRating
            initialRating={4}
            readOnly={true}
            label="Customer rating"
          />
        </div>
      </section>
    </main>
  );
}

export default App;

