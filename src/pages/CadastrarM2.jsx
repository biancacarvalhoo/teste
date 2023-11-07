import { Link } from "react-router-dom"
import "./Cadastrar.css"

import voltar from "../img/voltar.svg"
import usuario from "../img/usuario.svg"
import nomeCachorro from "../img/nome-cachorro.svg"
import raca from "../img/raca.svg"
import idade from "../img/idade.svg"
import pata from "../img/mobile/pataCadastro.svg"
import dog from "../img/mobile/dogCadastro.svg"


function CadastrarM2() {
    return (
        <>
            <section className="mobileCadastrar">
                <div className="contentC">
                    <div className="buttonBack">
                        <Link to={"/"}> 
                            <button>
                                <img src={voltar} alt="" />
                                Voltar
                            </button>
                        </Link>
                    </div>
                    <h1>CACHORRO</h1>
                    <div className="formC">
                        <div className="inputs-cadastro">
                            <div className="input">
                                <img src={nomeCachorro} alt="" />
                                <input type="text" placeholder="Nome do cachorro" />
                            </div>
                            <div className="input">
                                <img src={usuario} alt="" />
                                <input type="text" placeholder="Nome do dono" />
                            </div>
                            <div className="input">
                                <img src={raca} alt="" />
                                <input type="text" placeholder="Raça" />
                            </div>
                            <div className="input">
                                <img src={idade} alt="" />
                                <input type="number" placeholder="Idade" />
                            </div>
                        </div>
                    </div>
                   
                   <div className="buttons">
                        <button>
                            <img src={dog} alt="" />
                        </button>
                        <button>
                            <img src={pata} alt="" />
                        </button>
                   </div>

                   <div className="sendCadastro">
                        <button>Cadastrar</button>
                   </div>
                    
                </div>
            </section>
        </>

    );
}

export default CadastrarM2;