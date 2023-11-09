import React from "react";
import "./ModalAction.scss"
import { useNavigate } from "react-router-dom";

export default function ModalAction(props) {

    const navigation = useNavigate();
   
      const handleSubmit = (e) =>{
        e.preventDefault();
  
          //Fechando o modal.
          props.setClose(false);

          //Redirect
          navigation("/dashboad");
      }


    if(props.open){
        return (
            <div className="modal">
                <h1>Cadastrar Produtos</h1>
                <div>
                    <fieldset>
                        <span className="closeModal" onClick={()=> props.setClose(false)}>X</span>
                        <h1>bem-vindo 43243242@dsadad.br</h1>
                    </fieldset>
                </div>
            </div>
        )
  }
} 