import { useState } from "react";
import { RatingCard } from "./components/RatingCard";
import { Thankyou } from "./components/Thankyou";

function App() {
  const [rate, setRate] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const maxRate = 5;

  return isSubmit ? (
    <Thankyou rate={rate} maxRate={maxRate} isSubmit={isSubmit} />
  ) : (
    <RatingCard
      rate={rate}
      setRate={setRate}
      maxRate={maxRate}
      isSubmit={isSubmit}
      setIsSubmit={setIsSubmit}
    />
  );
}

export default App;
