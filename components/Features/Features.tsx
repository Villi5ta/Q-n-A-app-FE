import React from "react";
import styles from "./Features.module.css";
import Link from "next/link";

const Features = () => {
  return (
    <div className={styles.featureWrapper}>
      <div className={styles.featureBox}>
        <h4>1 feature</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          maxime quam quisquam vitae reiciendis.
        </p>
      </div>

      <div className={styles.featureBox}>
        <h4>2 feature</h4>
        <p>
          Maiores nam odio beatae ad eum, libero ut porro consectetur,
          laudantium ipsam error vero magni mollitia?
        </p>
      </div>
      <button>
        <Link href={"/questions"}>Join the discussion</Link>
      </button>
    </div>
  );
};

export default Features;
