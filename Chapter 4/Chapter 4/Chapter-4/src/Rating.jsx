import React, { useEffect, useMemo, useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

function Rating({ rating: ratingProp = 0, numOfReviews, onRatingChange, max = 5 }) {
  // Controlled if onRatingChange exists
  const isControlled = typeof onRatingChange === "function";

  // Internal rating for uncontrolled mode
  const [internalRating, setInternalRating] = useState(ratingProp);

  // Keep internal state in sync if parent changes ratingProp (uncontrolled use-case)
  useEffect(() => {
    if (!isControlled) setInternalRating(ratingProp);
  }, [ratingProp, isControlled]);

  const rating = isControlled ? ratingProp : internalRating;

  const stars = useMemo(
    () => Array.from({ length: max }, (_, i) => i + 1),
    [max]
  );

  const handleSelect = (starValue) => {
    if (isControlled) {
      onRatingChange(starValue);
    } else {
      setInternalRating(starValue);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.starRow} aria-label={`Rating: ${rating} out of ${max}`}>
        {stars.map((star) => {
          const Filled = rating >= star ? IoIosStar : IoIosStarOutline;

          return (
            <button
              key={star}
              type="button"
              onClick={() => handleSelect(star)}
              style={styles.starBtn}
              aria-label={`Rate ${star} out of ${max}`}
              title={`Rate ${star}`}
            >
              <Filled />
            </button>
          );
        })}
      </div>

      {typeof numOfReviews === "number" && (
        <small style={styles.reviewsText}>
          {numOfReviews} review{numOfReviews === 1 ? "" : "s"}
        </small>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "inline-flex",
    flexDirection: "column",
    gap: "4px",
  },
  starRow: {
    display: "inline-flex",
    alignItems: "center",
    color: "orange",
    fontSize: "24px",
    lineHeight: 1,
  },
  starBtn: {
    cursor: "pointer",
    background: "transparent",
    border: "none",
    padding: 0,
    marginRight: "2px",
    color: "inherit",
    fontSize: "inherit",
    lineHeight: 1,
  },
  reviewsText: {
    color: "#6c757d", // bootstrap "text-muted" tone
    fontSize: "0.85rem",
  },
};

export default Rating;
