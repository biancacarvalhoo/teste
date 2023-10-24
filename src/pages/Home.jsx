import { Link } from "react-router-dom"
import "./Home.css"
import 'boxicons/css/boxicons.min.css';


function Home() {
    return (
        <>
            <header>
                <nav className="navegacao">
                    <img src="../img/logo.svg" alt="logo" />
                    <ul className="nav-menu">
                        <li><a href="#equipamentos" className="nav-link">Equipamentos</a></li>
                        <li><a href="#qr-code">QR code</a></li>
                        <li className="nav-item"><Link to={"/Objetivo"} className="nav-link">Objetivo</Link></li>
                        <li className="nav-item"><Link to={"/Treinamento"} className="nav-link">Adaptação</Link></li>
                    </ul>

                    <div className="header-botoes">
                        <button className="nav-button"><Link to={"/Acessar"} className="button-link">acessar</Link></button>
                        <button className="nav-button"><Link to={"/cadastrar"} className="button-link">Cadastrar</Link></button>
                    
                    
                    </div>
                </nav>
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
                            <a href="" target="_blank"><i class='bx bxl-facebook'></i></a>
                            <a href="" target="_blank"><i class='bx bxl-instagram'></i></a>
                            <a href="" target="_blank"><i class='bx bxl-twitter'></i></a>
                            
                        </div>
                    </div>
                    <div className="img-home">
                        <img src="../img/cachorro-home.svg" alt="Imagem do cachorro" className="cachorro dog" />
                        <div className="borda">
                        <img src="../img/borda-home.svg" alt="Borda da imagem do cachorro" className="border-dog" width="900" height="1000" />
                        </div>
                    </div>
                </section>

                <div className="equipamentos" id="equipamentos">
                    <h1>Equipamentos utilizados</h1>
                    
                    <div className="equipamentos-conteudo">
                        <div className="containers">
                            <div className="background-equipamentos">
                                <img src="../img/sensor.svg" alt="Imagem do sensor" />
                            </div>
                            <div className="texto-equipamentos">
                                <p>Sensor ultrassônico</p>
                                <span>HC-SR04</span>
                                <span>R$ 14,92</span>
                            </div>
                        </div>

                        <div className="containers">
                            <div className="background-equipamentos">
                                <img src="../img/coleira.svg" alt="Imagem da coleira" />
                            </div>
                            <div className="texto-equipamentos">
                                <p>Coleira com QR Code</p>
    
                                <span>R$ 32,24</span>
                            </div>
                        </div>

                        <div className="containers">
                            <div className="background-equipamentos">
                                <img src="../img/placa-nano.svg" alt="Imagem da placa nano" />
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
                                <img src="../img/bateria.svg" alt="Imagem da bateria" />
                            </div>
                            <div className="texto-equipamentos">
                                <p>Bateria 9v</p>
                                <span>250mah</span>
                                <span>R$ 33,49</span>
                            </div>
                        </div>
                        <div className="containers">
                            <div className="background-equipamentos">
                                <img src="../img/cabo.svg" alt="Imagem do cabo" />
                            </div>
                            <div className="texto-equipamentos">
                                <p>Cabo USB 2.0</p>
                                <span>PC-USB1804</span>
                                <span>R$ 10,62</span>
                            </div>
                        </div>
                        <div className="containers">
                            <div className="background-equipamentos">
                                <img src="../img/carregador.svg" alt="Imagem do carregador" />
                            </div>
                            <div className="texto-equipamentos">
                                <p>Carregador de bateria</p>
                                <span>R$76,70</span>
                            </div>
                        </div>

                        <section className="QR-code" id="qr-code">
                           <img src="../img/video.svg" alt="" />

                        </section>
                    </div>




                </div>

    

            </main>

            <footer>
                <div className="footer-cima">
                    <div className="footer-img">
                        <img src="../img/cachorro-footer.svg" alt="Imagem cachorro cartoon" />
                    </div>

                    <div className="footer-textarea">
                        <h4>Deixe seu comentário!</h4>
                        <textarea name="" id="mensagem" cols="35" rows="10" placeholder="Digite aqui..." required></textarea>
                        <div className="enviar">
                            <button type="submit" data-button class="enviar" required>Enviar</button>
                        </div>
                    </div>

                    <div className="footer-perfil">

                        <div className="usuario">
                            <input type="name" name="name" id="name" placeholder="Nome:" />
                            <input type="email" name="email" placeholder="Email:" />
                            <button><img src="../img/footer-img.svg" alt="" />Contact us</button>

                        </div>
                    </div>
                </div>

                <div className="footer-baixo">
                    <p>Declaração de privacidade</p>
                    <span>I</span>
                    <p>Termos legais de uso</p>
                    <span>I</span>
                    <p>Opção de anúncio</p>
                    <span>I</span>
                    <p>Acessibilidade</p>
                    <span>I</span>
                    <p>Configuração de cookies</p> 
                </div>
            </footer>
        </>

    );
}

export default Home;
