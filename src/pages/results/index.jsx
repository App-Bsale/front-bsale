import { Button } from "antd";
import Navbar from "../../components/Navbar";
import "../../styles/results.css";
import { useEffect, useState } from "react";
import { Phase1Fetcher } from "../../services/phase1_fetcher";
import { UsersFetcher } from "../../services/users_fetcher";

const Results = () => {
  const [phase1, setPhase1] = useState({});
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [totalQuestion, setTotalQuestion] = useState(0);

  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setUser(user);

    Phase1Fetcher.getPhase().then((res) => {
      setPhase1(res[0]);
      console.log(res);
    });

    Phase1Fetcher.getQuestion().then((res) => {
      console.log({ question: res });
      setTotalQuestion(res.length);
    });

    UsersFetcher.getUserById(user.email).then((res) => {
      console.log(res);
      setCurrentUser(res);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container_multipleChoice">
        <div>
          <h2>Desarrollador Web Junior</h2>
          <h2>Resumen de resultados</h2>
        </div>

        <div className="tablesResults">
          <div className="tableRes">
            <span>Etapa 1: {phase1.title} </span>
            <span>
              {currentUser?.score} correctas de {totalQuestion}
            </span>
          </div>

          <div className="tableRes">
            <span>Etapa 3: Revisión de código </span>
            <span>Promedio de {currentUser?.stars} sobre 5</span>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          facilis quidem rerum autem voluptas est accusantium, iste velit, cum,
          earum sit quibusdam animi. Nulla distinctio aut repellat excepturi,
          asperiores enim, illo similique est dolorum labore corporis qui veniam
          rem quam animi accusamus maxime.
        </p>
        <Button className="button_primary" type="primary">
          Finalizar
        </Button>
      </div>
    </>
  );
};

export default Results;
