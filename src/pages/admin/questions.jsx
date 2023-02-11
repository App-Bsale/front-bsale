import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../components/Layout/adminLayout";
import "../../styles/allQuestions.css";
import { Avatar, Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;
const AllQuestions = () => {
  const [question, setQuestion] = useState([]);

  const getAllQuestions = async () => {
    const response = await fetch(
      "https://backend-bsale-production.up.railway.app/api/phase1/question"
    );
    const data = await response.json();
    console.log(data);
    setQuestion(data);
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <LayoutAdmin>
      <h1>AllQuestions</h1>
      <div className="container_questions">
        {question
          ? question.map((question, index) => (
              // <div key={question._id} className="card_question">
              //   <h3>{question.description}</h3>
              //   <img src={question.image} alt="imagen"/>
              //   {question.alternatives.map((alternative) =>(
              //     <ul>
              //       <li key={alternative._id}>{alternative.option}</li>
              //     </ul>
              //   ))}
              //   <h4>Respuesta</h4>
              //   <ul>
              //     <li>{question.answer}</li>
              //   </ul>
              // </div>
              <Card
                style={{ width: 300 }}
                cover={<img alt="example" src={question.image} />}
                actions={[
                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={`Pregunta ${index + 1}`}
                  // description={question.description}
                />
              </Card>
            ))
          : "Need add Questions"}
      </div>
    </LayoutAdmin>
  );
};

export default AllQuestions;
