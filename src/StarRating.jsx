
import { useState } from "react";

function StarRating({
  maxRating = 5,
  initialRating = 0,
  readOnly = false,
  onRatingChange,
  label = "Rating",
}) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const displayedRating = hoverRating || rating;

  function handleRating(value) {
    if (readOnly) return;

    setRating(value);
    onRatingChange?.(value);
  }

  return (
    <div className="rating-container">
      <p className="rating-label">{label}</p>

      <div
        className="stars"
        onMouseLeave={() => setHoverRating(0)}
        role="group"
        aria-label={label}
      >
        {Array.from({ length: maxRating }, (_, index) => {
          const starValue = index + 1;
          const isActive = starValue <= displayedRating;

          return (
            <button
              key={starValue}
              type="button"
              className={`star-button ${
                isActive ? "active" : ""
              }`}
              onClick={() => handleRating(starValue)}
              onMouseEnter={() => {
                if (!readOnly) {
                  setHoverRating(starValue);
                }
              }}
              disabled={readOnly}
              aria-label={`${starValue} out of ${maxRating} stars`}
              aria-pressed={rating === starValue}
            >
              ★
            </button>
          );
        })}
      </div>

      <p className="rating-value">
        {rating} / {maxRating}
        {rating > 0 ? " stars" : " — Not rated"}
      </p>
    </div>
  );
}

export default StarRating;
