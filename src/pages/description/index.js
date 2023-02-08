import Navbar from "../../components/Navbar";
import { Button } from "antd";
import ButtonArrow from "../../assets/image/bottom_arrow.svg";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Description = () => {

  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState("dropdown-off");
  const [dropdownContent, setDropdownContent] = useState(
    "dropdown-content-off"
  );

  const asdasd = () => {
    if (dropdown === "dropdown-off") {
      setDropdown("dropdown-on");
      setDropdownContent("dropdown-content-on");
    } else {
      setDropdown("dropdown-off");
      setDropdownContent("dropdown-content-off");
    }
  };

  const onSubmit = () => {
    console.log("stage-one")
    navigate("/state-one")
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="description description-container">
        <div className="description__title">Retos asignados</div>
        <div className={`${dropdown}`}>
          <div className="description__buttons">
            <div className="description__buttons--title">
              Desarrollador Web Junior
            </div>
            <div>
              <Button onClick={onSubmit}
 className="button description__button" type="primary">
                Iniciar
              </Button>
              <img
                onClick={asdasd}
                className="button_arrow"
                src={ButtonArrow}
                alt="buttom_arrow"
              />
            </div>
          </div>
          <div className={`${dropdownContent}`}>
            <div>
              Tincidunt elit vitae urna viverra fermentum. Egestas nam mauris id
              ipsum orci congue. Non tincidunt viverra lacus et vitae vel netus.
              Neque interdum semper donec viverra ipsum mi amet ullamcorper.
              Senectus odio magna sit id mauris quis pretium. Odio enim volutpat
              aliquet ac mauris. Senectus netus amet feugiat egestas eu. Gravida
              urna nunc ut fringilla non. Quis suspendisse gravida nibh maecenas
              lacus quisque. Malesuada lorem arcu aliquam aliquet in viverra.
              Neque nunc purus ullamcorper vel sed blandit. Volutpat at amet
              etiam commodo mi arcu. Pellentesque velit in blandit duis diam
              amet habitant auctor. Cras urna lacinia lectus nunc. Morbi nec non
              aenean sed feugiat malesuada at ultrices eu.
            </div>
            <div>Tincidunt elit vitae urna viverra fermentum.</div>
            <div>
              Senectus netus amet feugiat egestas eu. Gravida urna nunc ut
              fringilla non. Senectus netus amet feugiat egestas eu. Gravida
              urna nunc ut fringilla non. Senectus netus amet feugiat egestas
              eu. Gravida urna nunc ut fringilla non.
            </div>
            <div>
              Neque nunc purus ullamcorper vel sed blandit. Volutpat at amet
              etiam commodo mi arcu. Pellentesque velit in blandit duis diam
              amet habitant auctor. Cras urna lacinia lectus nunc. Morbi nec non
              aenean sed feugiat malesuada at ultrices eu.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
