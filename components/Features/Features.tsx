import React from "react";
import styles from "./Features.module.css";
import Link from "next/link";
import Button from "../Button/Button";

const Features = () => {
  return (
    <div className={styles.main}>
      <h2>What we offer</h2>
      <div className={styles.featureWrapper}>
        <div className={styles.featureBox}>
          <h4>Easy to use</h4>
          <p>
            Our question and answer app Ask&apos;a&apos;Choom features a simple
            design so you can ask your questions and the get the answers fast
          </p>
        </div>

        <div className={styles.featureBox}>
          <h4>Family friendly</h4>
          <p>
            Our moderators easy-going and allow all manners of questions and
            decisions, however when it comes to inappropriate content, the ban
            hammer is always on standby.
          </p>
        </div>
        <div className={styles.featureBox}>
          <h4>Growing community</h4>
          <p>
            Our community is picking up more and more members everyday, which
            means more people to answer your burning questions.
          </p>
        </div>
      </div>

      <h2>Questions</h2>

      <Link href={"/questions"}>
        <Button isLoading={false} title="Go to forum" />
      </Link>

      <Link href={"/add_question"}>
        <Button isLoading={false} title="Add question" />
      </Link>
    </div>
  );
};

export default Features;
