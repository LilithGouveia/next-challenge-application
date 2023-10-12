import MainImage from '../assets/lukevrogers_A_technological_tree_made_out_of_cyan_nodes_9a8c31ad-6025-4b17-947a-c0d3fe83b979.png';
import '../style/mainContent.scss';

export default function MainContent() {
  return (
    <>
      <div className='main-container'>
        <div>
          <p className='initial-text'>
            Asma, infecções das vias aéreas superiores e incidência de câncer de
            pulmão e doenças cardiovasculares são apenas alguns dos sintomas que
            respirar poluição causa ao ser humano.
          </p>
          <p className='initial-text'>
            Junte-se a iniciativa capaz de acabar com isso!
          </p>
        </div>
        <img src={MainImage} className='image-main'/>
      </div>
    </>
  );
}
