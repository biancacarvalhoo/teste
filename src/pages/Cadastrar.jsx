import { Link } from "react-router-dom"
import "./Cadastrar.css"

function Cadastrar() {
    return (
        <>
           <section className="cadastrar">
                <div className="content">
                <div className="esquerda">
                    <div className="esquerda-botao">
                        <a href="#"><button><img src="../img/voltar.svg" alt="" />Voltar</button></a>
                    </div>

                    <div className="esquerda-conteudo-c">
                        <h1>dono</h1>
                        <div className="inputs-dono">
                            <div className="email">
                                <input type="email" placeholder="       Email" />
                                <img src="../img/email.svg" alt="" />
                            </div>
                            <div className="user">
                                <input type="text" placeholder="      Usuário"/>
                                <img src="../img/usuario.svg" alt="" />
                            </div>

                            <div className="telefone">
                                <input type="tel" placeholder="      Telefone"/>
                                <img src="../img/telefone.svg" alt="" />
                            </div>
                            <div className="senha">
                                <input type="password" placeholder="       Senha"/>
                                <img src="../img/senha.svg" alt="" />
                            </div>
                           <div className="cep">
                                <input type="text" placeholder="       CEP"/>
                                <img src="../img/cep.svg" alt="" />
                           </div>
                        </div>
                    </div>
                </div>

                <div className="direita">
                    <div className="direita-botao">
                        <a href="#"><button>Entrar</button></a>
                    </div>

                    <div className="direita-conteudo">
                        <h1>cachorro</h1>
                        <div className="inputs-cachorro">
                            <div className="nome-cachorro">
                                <input type="email" placeholder="        Nome do cachorro" />
                                <img src="../img/nome-cachorro.svg" alt="" />
                            </div>
                            <div className="dono">
                                <input type="text" placeholder="        Nome do dono"/>
                                <img src="../img/usuario.svg" alt="" />
                            </div>

                            <div className="raca">
                                <input type="tel" placeholder="        Raça"/>
                                <img src="../img/raca.svg" alt="" />
                            </div>
                            <div className="idade">
                                <input type="password" placeholder="        Idade"/>
                                <img src="../img/idade.svg" alt="" />
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