// import MainImage from '../assets/lukevrogers_A_technological_tree_made_out_of_cyan_nodes_9a8c31ad-6025-4b17-947a-c0d3fe83b979.png';
import Teste from "../assets/teste.png";
import '../style/mainContent.scss';
import { Link } from "react-router-dom";

export default function MainContent() {
  return (
    <>
      <div className='main-container'>
        <div>
          <p className='initial-text'>
            O HERÓI SILENCIOSO QUE LUTA PELA SUA QUALIDADE DE VIDA.
          </p>
          <p className='second-text'>
          Somos a SoftForge, os guardiões do ar puro. Com o AquaTank, transformamos cada suspiro em uma vitória para a qualidade de vida. Junte-se a nós. Seja um herói da saúde, todos os dias.
          </p>

          <Link className="loginbtn" to="/login">FAÇA SEU LOGIN!</Link>
          
        </div>
        <img src={Teste} className='image-main'/>
      </div>
    </>
  );
}
