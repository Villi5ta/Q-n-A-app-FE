import React from "react";
import styles from "./AboutPage.module.css";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.siteDescription}>
        <h3>What&apos;s the deal?</h3>
        <p>
          Reddit is great and all, but have you thought about what happens
          behind the scenes? I&apos;ll tell you what - total privacy
          annihilation on an unprecedented scale. You might as well be using
          TikTok, but regardless, let&apos;s not ruin my total legit arguments
          for why you should be using my site rather than the countess other
          clones.
        </p>
        <p>
          This is where I come in. I&apos;ve created a site which has the same
          functionality, with some features that I decided to strip (they were
          definitely unnecessary and not because I didn&apos;t knew to to
          realize them).
        </p>
        <p>
          Here you can ask and discuss various topics minus the usual stuff,
          like why „Žalgiris“ is actually the best team in LKL, no questions
          asked, or why Hell is actually a nice place to bring your loved one.
          What a strange place name for such paradise on Earth as Norway.
        </p>
      </div>
      <div className={styles.howToInstructionsWrapper}>
        <div>
          <h3>How to use the site</h3>
        </div>
        <div className={styles.howToInstructions}>
          <div className={styles.howToInstructionsIntro}>
            To use this site, it&apos;s not that difficult:
            <p>
              1. Create a free account (skip this step if you already have one){" "}
              <Link href="/signup">here.</Link>
            </p>
          </div>
          <p>
            2. Go to the <Link href="/questions">Forum</Link> where you will
            find all the questions, or go directly to question submit{" "}
            <Link href="/questions">Form</Link>, where you can create your post.
          </p>

          <p>
            3. You will need to type in simple info: title/headline and the
            question itself. It&apos;s recommended to make so the former is
            related to the latter to get a better response.
          </p>
          <p>
            4. Wait for the response... and while you do, check out what other
            people are inquiring about. Maybe you could be of help to them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
