// import MainImage from '../assets/lukevrogers_A_technological_tree_made_out_of_cyan_nodes_9a8c31ad-6025-4b17-947a-c0d3fe83b979.png';
// import Teste from "../assets/teste.png";
import "../style/mainContent.scss";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function MainContent(props) {
  const { imageSrc } = props.prop;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="main-container">
        <div>
          <p className="initial-text">
            O HERÓI SILENCIOSO QUE LUTA PELA SUA QUALIDADE DE VIDA.
          </p>
          <div className="blocao">
            <p className="second-text">
              Somos a SoftForge, os guardiões do ar puro. Com o AquaTank,
              transformamos cada suspiro em uma vitória para a qualidade de
              vida.
            </p>
            <p className="second-text">
              Junte-se a nós. Seja um herói da saúde, todos os dias.
            </p>
          </div>
          <Button className="loginbtn" onClick={handleShow}>
            FAÇA SEU PEDIDO!
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title id="modal-título">Pedido Aquatank</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form id="form-modal-aa">
                <Row className="mb-3" id="aa">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Endereço</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Empresa</Form.Label>
                  <Form.Control placeholder="Nome da Empresa" />
                </Form.Group>

                <Row className="mb-3" id="aa">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Cidade/Estado</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Tamanho</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>...</option>
                      <option>P</option>
                      <option>M</option>
                      <option>G</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>...</option>
                      <option>2</option>
                      <option>6</option>
                      <option>10</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Eu aceito os termos de condições"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
        {/* <img src={Teste} className="image-main" /> */}
        <img src={imageSrc} className="image-main" />
      </div>
    </>
  );
}
