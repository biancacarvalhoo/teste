import { Link } from "react-router-dom"
import "./Cadastrar.css"

import voltar from "../img/voltar.svg"
import email from "../img/email.svg"
import usuario from "../img/usuario.svg"
import telefone from "../img/telefone.svg"
import senha from "../img/senha.svg"
import cep from "../img/cep.svg"
import nomeCachorro from "../img/nome-cachorro.svg"
import raca from "../img/raca.svg"
import idade from "../img/idade.svg"

function Cadastrar() {
    return (
        <>
           <section className="cadastrar">
                <div className="content">
                <div className="esquerda">
                    <div className="esquerda-botao">
                        <Link to={"/"}><button><img src={voltar} alt="" />Voltar</button></Link>
                    </div>

                    <div className="esquerda-conteudo-c">
                        <h1>dono</h1>
                        <div className="inputs-dono">
                            <div className="email">
                                <input type="email" placeholder="       Email" />
                                <img src={email} alt="" />
                            </div>
                            <div className="user">
                                <input type="text" placeholder="      Usuário"/>
                                <img src={usuario} alt="" />
                            </div>

                            <div className="telefone">
                                <input type="tel" placeholder="      Telefone"/>
                                <img src={telefone} alt="" />
                            </div>
                            <div className="senha">
                                <input type="password" placeholder="       Senha"/>
                                <img src={senha} alt="" />
                            </div>
                           <div className="cep">
                                <input type="text" placeholder="       CEP"/>
                                <img src={cep} alt="" />
                           </div>
                        </div>
                    </div>
                </div>

                <div className="direita">
                    <div className="direita-botao">
                        <Link to={"/acessar"}><button>Entrar</button></Link>
                    </div>

                    <div className="direita-conteudo">
                        <h1>cachorro</h1>
                        <div className="inputs-cachorro">
                            <div className="nome-cachorro">
                                <input type="email" placeholder="        Nome do cachorro" />
                                <img src={nomeCachorro} alt="" />
                            </div>
                            <div className="dono">
                                <input type="text" placeholder="        Nome do dono"/>
                                <img src={usuario} alt="" />
                            </div>

                            <div className="raca">
                                <input type="tel" placeholder="        Raça"/>
                                <img src={raca} alt="" />
                            </div>
                            <div className="idade">
                                <input type="password" placeholder="        Idade"/>
                                <img src={idade} alt="" />
                            </div>
                          
                        </div>
                    </div>

                    <button>Cadastrar</button>

                </div>
                </div>
           </section>
        </>

    );
}

export default Cadastrar;