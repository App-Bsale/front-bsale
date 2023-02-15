// import { Layout } from "antd";
import { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import { getApi } from "../../../services";
import { MultipleChoice } from "../stageOneOptions";
import StageOneCode from "../stageOneCode";
const StagePage = () => {
  const [dataQuestion, setDataQuestion] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);

  useEffect(() => {
    getApi("api/phase1/question").then((res) => {
      setDataQuestion(res);
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
              />
            );
          }
        }
      })}
    </Layout>
  );
};

export default StagePage;
