import Layout from "../../components/Layout/Layout";
import { Collapse, Button } from "antd";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { SessionContext } from "../../context/SessionContext";

const AssignedChallenge = () => {
  const navigate = useNavigate();
  const { Panel } = Collapse;
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setUserState(user);
  }, []);

  const text = `Tincidunt elit vitae urna viverra fermentum. Egestas nam mauris
        id ipsum orci congue. Non tincidunt viverra lacus et vitae vel netus.
        Neque interdum semper donec viverra ipsum mi amet ullamcorper. Senectus odio
        magna sit id mauris quis pretium. Odio enim volutpat aliquet ac mauris.
        Senectus netus amet feugiat egestas eu. Gravida urna nunc ut fringilla non.
        Quis suspendisse gravida nibh maecenas lacus quisque. Malesuada lorem arcu
        aliquam aliquet in viverra. Neque nunc purus ullamcorper vel sed blandit.
        Volutpat at amet etiam commodo mi arcu. Pellentesque velit in blandit duis
        diam amet habitant auctor. Cras urna lacinia lectus nunc. Morbi nec non aenean
        sed feugiat malesuada at ultrices eu.`;

  return (
    <Layout>
      {userState?.phase1Active ? (
        <div className="container-challenge">
          <h2>Retos asignados</h2>
          <Collapse
            collapsible="icon"
            expandIconPosition="end"
            defaultActiveKey={["1"]}
            onChange={console.log("hola")}
          >
            <Panel
              header={
                <div className="header-challenge">
                  <h4>Desarrollador Web Junior</h4>
                  <Button
                    type="primary"
                    className="button-challenge"
                    onClick={() => navigate("/stage1")}
                  >
                    Iniciar
                  </Button>
                </div>
              }
              key="1"
            >
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      ) : (
        <h1>No tienes asignado ningún reto</h1>
      )}
    </Layout>
  );
};
export default AssignedChallenge;
