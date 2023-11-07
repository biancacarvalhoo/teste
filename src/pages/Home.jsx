import { Link } from "react-router-dom"
import "./Home.css"
import 'boxicons/css/boxicons.min.css';

import logo from "../img/logo.svg"
import cachorroHome from "../img/cachorro-home.svg"
import sensor from "../img/sensor.svg"
import coleira from "../img/coleira.svg"
import placaNano from "../img/placa-nano.svg"
import bateria from "../img/bateria.svg"
import cabo from "../img/cabo.svg"
import carregador from "../img/carregador.svg"
import video from "../img/video.svg"
import cachorroFooter from "../img/cachorro-footer.svg"
import footer from "../img/footer-img.svg"

import logoMobile from "../img/mobile/logoM.svg"
import cachorro from "../img/mobile/cachorroHome.svg"
import mac from "../img/mobile/macbook.svg"
import footerDog from "../img/mobile/dogFooter.svg"

import { useState } from "react";
import { List, X } from "@phosphor-icons/react"

function Home() {
    const [abrirFechar, setAbrirFechar] = useState(false)

    function handleAbrirFecharMenu() {
        if(abrirFechar) {
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

    return (
        <>
            <section className="MobileHome">
                <header>
                    <div className="MobileHomeHeader">
                        <img src={logoMobile} alt="" />
                        <div className="flex">
                            <div className="buttonHome">
                            <Link to={"/acessar"}>Acessar</Link>
                                <Link to={"/cadastrar"}>Cadastrar</Link>                            
                             </div>

                            <div className="botao-menu">
                                <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} color="#fff" /> : <List size={32} color="#fff"/> }</button>
                            </div>
                        </div>
                    </div>

                    <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                        <nav>
                            <Link to={"/acessar"}>Acessar</Link>
                            <Link to={"/cadastrar"}>Cadastrar</Link>
                            <Link to={"/objetivo"}>Objetivo</Link>
                            <Link to={"/treinamento"}>Treinamento</Link>
                        </nav>
                    </div>
                </header>

                <div className="initial">
                    <div className="initialTexts">
                        <h1>Coleiras inteligentes para cachorros cegos</h1>
                        <p>O avanço da tecnologia chegou até as coleiras do seu pet. Isso mesmo, hoje você já pode ajudar seu pet com coleiras inteligentes.</p>
                        <div>
                            <button>Sobre o projeto</button>
                        </div>
                    </div>
                    <div>
                        <img src={cachorro} alt="" />
                    </div>
                </div>

                <div className="mac">
                    <img src={mac} alt="" />
                </div>

                <div className="hardware">
                    <h1>Equipamentos utilizados</h1>

                    <div className="grid-hardware">
                        <div className="container">
                            <div className="background-equipamentos">
                                <img src={sensor} alt="Imagem do sensor" />
                            </div>
                            <div className="texto-equipamentos">
                                <p>Sensor ultrassônico</p>
                                <span>HC-SR04</span>
                                <span>R$ 14,92</span>
                            </div>
                        </div>

                        <div className="container">
                            <div className="background-equipamentos">
                                <img src={coleira} alt="Imagem da coleira" />
                            </div>
                            <div className="texto-equipamentos">
                                <p>Coleira com QR Code</p>
    
                                <span>R$ 32,24</span>
                            </div>
                        </div>

                        <div className="container">
                            <div className="background-equipamentos">
                                <img src={placaNano} alt="Imagem da placa nano" />
                            </div>
                            <div className="texto-equipamentos">
                                <p>Placa Nano</p>
                                <span>Atmega328</span>
                                <span>Ch340</span>
                                <span>R$ 44,09</span>
                            </div>
                        </div>

                        <div className="container">
                            <div className="background-equipamentos">
                                <img src={bateria} alt="Imagem da bateria" />
                            </div>
                            <div className="texto-equipamentos">
                                <p>Bateria 9v</p>
                                <span>250mah</span>
                                <span>R$ 33,49</span>
                            </div>
                        </div>

                        <div className="container">
                            <div className="background-equipamentos">
                                <img src={cabo} alt="Imagem do cabo" />
                            </div>
                            <div className="texto-equipamentos">
                                <p>Cabo USB 2.0</p>
                                <span>PC-USB1804</span>
                                <span>R$ 10,62</span>
                            </div>
                        </div>

                        <div className="container">
                            <div className="background-equipamentos">
                                <img src={carregador} alt="Imagem do carregador" />
                            </div>
                            <div className="texto-equipamentos">
                                <p>Carregador de bateria</p>
                                <span>R$76,70</span>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footerMobile">
                    <div className="footer-cima">
                        <div className="contato-icones">
                            <a href="" target="_blank"><i className='bx bxl-facebook'></i></a>
                            <a href="" target="_blank"><i className='bx bxl-instagram'></i></a>
                            <a href="" target="_blank"><i className='bx bxl-twitter'></i></a>
                        </div>
                    </div>
                    <div className="footer-meioMobile">
                        <div className="footer-img">
                            <img src={footerDog} alt="Imagem cachorro cartoon" />
                        </div>

                        <div className="footer-textarea">
                            <h4>Deixe seu comentário!</h4>
                            <textarea name="" cols="35" rows="10" placeholder="Digite aqui..." required></textarea>
                            <div className="enviarMobile">
                                <button type="submit" data-button className="enviar" required>Enviar</button>
                            </div>
                        </div>

                        <div className="footer-perfil">
                            <div className="usuarioMobile">
                                <input type="name" name="name" placeholder="Nome:" />
                                <input type="email" name="email" placeholder="Email:" />
                                <button><img src={footer} alt="" />Contact us</button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-baixoMobile">
                        <p>Declaração de privacidade</p>
                        <span>|</span>
                        <p>Termos legais de uso</p>
                        <span>|</span>
                        <p>Opção de anúncio</p>
                        <span>|</span>
                        <p>Acessibilidade</p>
                        <span>|</span>
                        <p>Configuração de cookies</p> 
                    </div>
                </footer>
            </section>
    
            <section className="WebHome">
                <header>
                    <div className="headerWebHome">
                        <nav className="navegacaoHome">
                            <img src={logo} alt="logo" />
                            <ul className="nav-menu">
                                <li><a href="#equipamentos" className="nav-link">Equipamentos</a></li>
                                <li><a href="#qr-code" className="nav-link">QR code</a></li>
                                <li className="nav-item"><Link to={"/Objetivo"} className="nav-link">Objetivo</Link></li>
                                <li className="nav-item"><Link to={"/Treinamento"} className="nav-link">Adaptação</Link></li>
                            </ul>

                            <div className="header-botoes">
                                <button className="nav-button"><Link to={"/Acessar"} className="button-link">acessar</Link></button>
                                <button className="nav-button"><Link to={"/cadastrar"} className="button-link">Cadastrar</Link></button>
                            </div>
                        </nav>
                    </div>
                </header>
                <main>
                    <section className="home">
                        <div className="texto-home">
                            <div className="h1-home">
                                <h1>Coleiras inteligentes para cachorros cegos</h1>
                            </div>
                            <div className="p-home">
                                <p>O avanço da tecnologia chegou até as coleiras do seu pet. Isso mesmo, hoje você já pode ajudar seu pet com coleiras inteligentes.</p>
                            </div>
                            <div className="contato-icones">
                                <a href="" target="_blank"><i className='bx bxl-facebook'></i></a>
                                <a href="" target="_blank"><i className='bx bxl-instagram'></i></a>
                                <a href="" target="_blank"><i className='bx bxl-twitter'></i></a>  
                            </div>
                        </div>
                        <div className="img-home">
                            <img src={cachorroHome} alt="Imagem do cachorro" className="cachorro dog" />
                        </div>
                    </section>

                    <div className="equipamentos" id="equipamentos">
                        <h1>Equipamentos utilizados</h1>
                        
                        <div className="equipamentos-conteudo">
                            <div className="containers">
                                <div className="background-equipamentos">
                                    <img src={sensor} alt="Imagem do sensor" />
                                </div>
                                <div className="texto-equipamentos">
                                    <p>Sensor ultrassônico</p>
                                    <span>HC-SR04</span>
                                    <span>R$ 14,92</span>
                                </div>
                            </div>

                            <div className="containers">
                                <div className="background-equipamentos">
                                    <img src={coleira} alt="Imagem da coleira" />
                                </div>
                                <div className="texto-equipamentos">
                                    <p>Coleira com QR Code</p>
        
                                    <span>R$ 32,24</span>
                                </div>
                            </div>

                            <div className="containers">
                                <div className="background-equipamentos">
                                    <img src={placaNano} alt="Imagem da placa nano" />
                                </div>
                                <div className="texto-equipamentos">
                                    <p>Placa Nano</p>
                                    <span>Atmega328</span>
                                    <span>Ch340</span>
                                    <span>R$ 44,09</span>
                                </div>
                            </div>

                            <div className="containers">
                                <div className="background-equipamentos">
                                    <img src={bateria} alt="Imagem da bateria" />
                                </div>
                                <div className="texto-equipamentos">
                                    <p>Bateria 9v</p>
                                    <span>250mah</span>
                                    <span>R$ 33,49</span>
                                </div>
                            </div>
                            <div className="containers">
                                <div className="background-equipamentos">
                                    <img src={cabo} alt="Imagem do cabo" />
                                </div>
                                <div className="texto-equipamentos">
                                    <p>Cabo USB 2.0</p>
                                    <span>PC-USB1804</span>
                                    <span>R$ 10,62</span>
                                </div>
                            </div>
                            <div className="containers">
                                <div className="background-equipamentos">
                                    <img src={carregador} alt="Imagem do carregador" />
                                </div>
                                <div className="texto-equipamentos">
                                    <p>Carregador de bateria</p>
                                    <span>R$76,70</span>
                                </div>
                            </div>

                            <section className="QR-code" id="qr-code">
                            <img src={video} alt="" />

                            </section>
                        </div>
                    </div>
                </main>

                <footer>
                    <div className="footer-cima">
                        <div className="footer-img">
                            <img src={cachorroFooter} alt="Imagem cachorro cartoon" />
                        </div>

                        <div className="footer-textarea">
                            <h4>Deixe seu comentário!</h4>
                            <textarea name="" id="mensagem" cols="35" rows="10" placeholder="Digite aqui..." required></textarea>
                            <div className="enviar">
                                <button type="submit" data-button className="enviar" required>Enviar</button>
                            </div>
                        </div>

                        <div className="footer-perfil">

                            <div className="usuario">
                                <input type="name" name="name" id="name" placeholder="Nome:" />
                                <input type="email" name="email" placeholder="Email:" />
                                <button><img src={footer} alt="" />Contact us</button>

                            </div>
                        </div>
                    </div>

                    <div className="footer-baixo">
                        <p>Declaração de privacidade</p>
                        <span>|</span>
                        <p>Termos legais de uso</p>
                        <span>|</span>
                        <p>Opção de anúncio</p>
                        <span>|</span>
                        <p>Acessibilidade</p>
                        <span>|</span>
                        <p>Configuração de cookies</p> 
                    </div>
                </footer>
            </section>
        </>

    );
}

export default Home;