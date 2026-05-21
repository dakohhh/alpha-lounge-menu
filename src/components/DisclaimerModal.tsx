import { useEffect } from "react";
import "./DisclaimerModal.css";

interface DisclaimerModalProps {
  onAccept: () => void;
}

export function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onAccept();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onAccept]);

  return (
    <div
      className="disclaimer-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="disclaimer-panel">
        <h2 id="disclaimer-title" className="disclaimer-title">
          Food allergy alert
        </h2>
        <p className="disclaimer-body">
          Food ordered from Alpha Lounge Bar and Restaurant may contain Eggs, Milk, Fish,
          Crustaceans, Molluscs, Gluten, Tree nuts, Peanuts, Lupin, Mustard, Sesame, Soya
          and Sulphites. Please contact the restaurant directly if you have any allergy
          concerns.
        </p>

        <p className="disclaimer-warning">
          <strong>Warning:</strong> You must be 18+ to purchase alcohol on this website.
        </p>

        <button type="button" className="disclaimer-btn" onClick={onAccept}>
          I understand
        </button>
      </div>
    </div>
  );
}
