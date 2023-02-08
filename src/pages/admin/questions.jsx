import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../components/Layout/adminLayout";

const AllQuestions = () => {

  const [question, setQuestion] = useState([]);

  const getAllQuestions = async () => {
    const response = await fetch("https://backend-bsale-production.up.railway.app/api/phase1/question")
    const data = await response.json();
    console.log(data);
    setQuestion(data);
  };

  useEffect(() => {
    getAllQuestions();
  },[]);

  return (
    <LayoutAdmin>
      <h1>AllQuestions</h1>
      { question.map((question) =>(
          <div key={question._id}>
            <p>{question.description}</p>
            <img src={question.image} alt="imagen" />
            {question.alternatives.map((alternative) =>(
              <p key={alternative._id}>{alternative.option}</p>
            ))}
            <p>--Respuesta</p>
            <p>{question.answer}</p>
          </div>
      ))}
      
    </LayoutAdmin>
  );
};

export default AllQuestions;
