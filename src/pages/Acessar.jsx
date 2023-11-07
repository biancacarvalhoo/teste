import { Link } from "react-router-dom"
import "./Acessar.css"

import voltar from "../img/voltar.svg"
import usuario from "../img/usuario.svg"
import senha from "../img/senha.svg"

function Acessar(){
    return(
       <>
        <section className="mobile">
            <div className="buttonBack">
                <Link to={"/"}> 
                    <button>
                        <img src={voltar} alt="" />
                        Voltar
                    </button>
                </Link>
            </div>
            <div className="content">
                <div className="form">
                    <Link to={"/cadastrar"}> 
                        <button className="cadastrar">
                            Cadastrar
                        </button>
                    </Link>
                    
                    <div className="infos">
                        <h1>Bem-vindo</h1>
                        <p>Acessar</p>
                    </div>

                    <div className="inputs">
                        <div className="input">
                            <img src={usuario} alt="" />
                            <input type="text" placeholder="Usuario" />
                        </div>
                        <div className="input">
                            <img src={senha} alt="" />
                            <input type="password" placeholder="Senha" />
                        </div>
                    </div>
                    <div className="acessar">
                        <button>Acessar</button>    
                    </div>
                </div>
            </div>

        </section>

       <section className="acessar-web">
            <div className="login">
                <div className="login-esquerda">
                    <div className="login-esquerda-botao">
                        <Link to={"/"}><button><img src={voltar} alt="" />Voltar</button></Link>
                    </div>

                    <div className="esquerda-conteudo">
                        <h1>Bem-vindo</h1>
                        <p>Acesse por aqui</p>
                    </div>
                </div>

                <div className="login-direita">
                    <div className="login-direita-botao">
                        <Link to={"/cadastrar"}><button>Cadastrar</button></Link>
                    </div>

                    <div className="direita-conteudo">
                        <h1>Acessar</h1>
                        <div className="acesso-login">
                            <input type="name" name="name" id="name" placeholder="       Usuário"/>
                            <div className="usuario-img">
                                <img src={usuario} alt="" />
                            </div>
                            <input type="password" name="password" id="senha" placeholder="       Senha"/>
                            <div className="senha-img">
                                <img src={senha} alt="" />
                            </div>
                            <button>Acessar</button>
                        </div>
                    </div>
                </div>
            </div>
       </section>
       </>
    );
}

export default Acessar;