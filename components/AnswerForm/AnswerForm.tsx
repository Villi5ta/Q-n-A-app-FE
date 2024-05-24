import React, { useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import { useRouter } from "next/router";

const AnswerForm = () => {
  const router = useRouter();

  const [text, setAnswer] = useState("");
  const onPress = async () => {
    const headers = {
      authorization: cookies.get("jwt_token"),
    };

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/question/${router.query.id}/answer`,
        { text },
        { headers }
      );

      if (response.status === 201) {
        console.log("question added");
        window.location.reload();
      }
    } catch (err) {
      console.log(text);
      console.log(err);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setAnswer(e.target.value)}
      ></textarea>

      <button onClick={onPress}>Press</button>
    </div>
  );
};

export default AnswerForm;
