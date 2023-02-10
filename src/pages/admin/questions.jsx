import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../components/Layout/adminLayout";
import "../../styles/allQuestions.css"

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
        <div className="container_questions">
            { question ? question.map((question) =>(
              <div key={question._id} className="card_question">
                <h3>{question.description}</h3>
                <img src={question.image} alt="imagen"/>
                {question.alternatives.map((alternative) =>(
                  <ul>
                    <li key={alternative._id}>{alternative.option}</li>
                  </ul>
                ))}
                <h4>Respuesta</h4>
                <ul>
                  <li>{question.answer}</li>
                </ul>
              </div>
            )): "Need add Questions"}
        </div>     
    </LayoutAdmin>
  );
};

export default AllQuestions;
