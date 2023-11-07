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
import next from "../img/mobile/buttonCadastro.svg"

function Cadastrar() {
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
                    <h1>DONO</h1>
                    <div className="formC">
                        <div className="inputs-cadastro">
                            <div className="input">
                                <img src={email} alt="" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input">
                                <img src={usuario} alt="" />
                                <input type="text" placeholder="Usuario" />
                            </div>
                            <div className="input">
                                <img src={telefone} alt="" />
                                <input type="tel" placeholder="Telefone" />
                            </div>
                            <div className="input">
                                <img src={senha} alt="" />
                                <input type="password" placeholder="Senha" />
                            </div>
                            <div className="input">
                                <img src={cep} alt="" />
                                <input type="number" placeholder="CEP" />
                            </div>
                        </div>
                    </div>
                    <div className="next">
                        <Link to={"/cadastrar2"}> 
                            <button>
                                <img src={next} alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

           <section className="cadastrar-web">
                <div className="contentW">
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