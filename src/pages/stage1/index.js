import { Button } from "antd";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import PhaseOneFetcher from "../../services/phases_fetcher";
import { getApi, postApi } from "../../services/index";
import "../../styles/etapa_1.css";
import { useNavigate } from "react-router-dom";

const StageOne = () => {
  const [stageOne, setStageOne] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getApi("api/phase1").then((res) => setStageOne(res[0]));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container_etapa1">
        <div>
          <h2>{stageOne.title}</h2>
          <h2>{stageOne.subtitle}</h2>
        </div>

        <p>{stageOne.resume}</p>

        <Button
          className="button_primary"
          type="primary"
          onClick={() => navigate("/stagePageOne")}
        >
          Iniciar
        </Button>
      </div>
    </>
  );
};

export default StageOne;
