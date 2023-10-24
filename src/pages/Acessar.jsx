import { Link } from "react-router-dom"
import "./Acessar.css"

function Acessar(){
    return(
       <>
       <section className="acessar">
            <div className="login">
                <div className="login-esquerda">
                    <div className="login-esquerda-botao">
                        <Link to={"/"}><button><img src="../img/voltar.svg" alt="" />Voltar</button></Link>
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
                                <img src="../img/usuario.svg" alt="" />
                            </div>
                            <input type="password" name="password" id="senha" placeholder="       Senha"/>
                            <div className="senha-img">
                                <img src="../img/senha.svg" alt="" />
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