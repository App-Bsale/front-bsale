import { Button } from "antd";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import PhaseOneFetcher from "../../services/phases_fetcher";
import { getApi, postApi } from "../../services/index";


const StageOne = () => {
  const [stageOne, setStageOne] = useState([]);

  useEffect(() => {
     getApi("api/phase1").then((res) => setStageOne(res[0]))
  }, []);

  console.log(stageOne)

  return (
    <>
      <Navbar />
      <div className="container_etapa1">
        <div>
          <h2>{stageOne.title}</h2>
          <h2>{stageOne.subtitle}</h2>
        </div>

        <p>
        {stageOne.resume}
        </p>

        <Button className="button_primary" type="primary">
          Iniciar
        </Button>
      </div>
    </>
  );
};

export default StageOne;
