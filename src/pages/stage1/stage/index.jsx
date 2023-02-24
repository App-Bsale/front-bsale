import { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import { getApi } from "../../../services";
import StageOneCode from "../stageOneCode";
import MultipleChoice from "../stageOneOptions/index";

const StagePage = () => {
  const [dataQuestion, setDataQuestion] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);

  useEffect(() => {
    getApi("api/phase1/question").then((res) => {
      setDataQuestion(res);
      console.log(res);
    });
  }, []);

  return (
    <Layout>
      {dataQuestion.map((questionItem, index) => {
        if (index === indexQuestion) {
          if (questionItem.type === "select") {
            return (
              <MultipleChoice
                alternatives={questionItem.alternatives}
                description={questionItem.description}
                imageUrl={questionItem.image}
                index={indexQuestion}
                totalQuestion={dataQuestion.length}
                setIndexQuestion={setIndexQuestion}
                idQuestion={questionItem.id}
              />
            );
          } else {
            return (
              <StageOneCode
                description={questionItem.description}
                editorValue={questionItem.codeFunc}
                index={indexQuestion}
                test1={questionItem.test1}
                test2={questionItem.test2}
                test3={questionItem.test3}
                totalQuestion={dataQuestion.length}
                idQuestion={questionItem.id}
              />
            );
          }
        }
      })}
    </Layout>
  );
};

export default StagePage;
