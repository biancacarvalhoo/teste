
import "./Objetivo.css"
import { Link } from "react-router-dom"

function Objetivo() {
    return (
        <>
           <main>
            <header>
               <nav className="navegacao">
                <a href="" className="logo"><img src="../img/logo.svg" alt="Logo" /></a>
                <ul className="nav-menu">
                    <li className="nav-item"><Link to={"/Home"} className="nav-link">Equipamentos</Link></li>
                    <li className="nav-item"><Link to={"/Home"} className="nav-link">QR code</Link></li>
                    <li className="nav-item"><Link to={"/Objetivo"} className="nav-link">Objetivos</Link></li>
                    <li className="nav-item"><Link to={"/Adaptacao"} className="nav-link">Adaptação</Link></li>
                </ul>

                <div className="botoes">
                    <button>
                        <Link to={"/Home"} className="nav-link">Voltar</Link>
                    </button>
                </div>
                
                
                
                
                </nav> 
            </header>
                <section className="objetivo">
                    <div className="objetivo-cima-conteudo">
                        <div className="obj-um-texto">
                            <p> Programada por sistema arduino a Animal Collar tem como objetivo principal auxiliar na vida cotidiana de cachorros com deficiência visual e seus nossos, ultilizando leves vibrações que vão auxiliar o cão para não se chocar contra obstáculos</p>
                        </div>
                        <div className="obj-um-img">
                            <img src="../img/obj1.svg" alt="" />
                        </div>
                    </div>

                    <div className="objetivo-cima-conteudo meio">
                    <div className="obj-dois-img ">
                            <img src="../img/obj2.svg" alt="" />
                        </div>

                        <div className="obj-um-texto texto-dois">
                            <p>Esse projeto foi uma mordenização da coleira BlinDog que usa o sensores ultrasônicos para alertar o animal de obstaculos a frente, diferente da BlinDog nossa coleira trás um sistema de QR code que mostra os dados de seu cão.</p>
                            <button>bibliografia</button>
                        </div>

                    </div>

                    <div className="objetivo-baixo-conteudo baixo">
                        <div className="obj-tres-texto">
                            <p>para melhor experiência com nosso equipamento aconselhamos que se animal passe por um simples treinamento de três etapas</p>
                        </div>

                        <button>treinamento</button>
                        
                    </div>

                    

                   
                </section>
           </main>
        </>
    );
}

export default Objetivo;