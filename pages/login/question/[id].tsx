import React, { useEffect, useState } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import axios from "axios";

const Question = () => {
  const router = useRouter();

  const [question, setQuestion] = useState();

  const fetchQuestion = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(
        `${process.env.SERVER_URL}/question/${router.query.id}`,
        {
          headers,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PageTemplate>
      <div>Question</div>
    </PageTemplate>
  );
};

export default Question;
