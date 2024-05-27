import { useState } from "react";
import styles from "./FAQ.module.css";

type FAQWrapperProps = {
  fQuestion: string;
  fAnswer: string;
};

const FAQ = ({ fQuestion, fAnswer }: FAQWrapperProps) => {
  const [isShowAnswer, setShowAnswer] = useState(false);

  return (
    <div className={styles.question}>
      <h3
        className={styles.productName}
        onClick={() => setShowAnswer(!isShowAnswer)}
      >
        {fQuestion}
      </h3>
      {isShowAnswer && <p>{fAnswer}</p>}
    </div>
  );
};

export default FAQ;
