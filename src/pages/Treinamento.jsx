
import { Link } from "react-router-dom"
import "./Treinamento.css"

import voltar from "../img/voltar.svg"
import vibracao from "../img/vibracao.svg"
import atencao from "../img/atencao.svg"
import associacao from "../img/associacao.svg"
import mulher from "../img/mobile/mulherComDog.svg"
import dog from "../img/mobile/dogEmPe.svg"
import dogPasseio from "../img/mobile/dogPasseio.svg"

function Treinamento() {
    return (
        <>
        <section className="treinamento-mobile">
            <button className="voltar-mobile">
                <img src={voltar} alt="" />
                <Link to={"/"}>
                    Voltar
                </Link>
            </button>

            <div className="vibration blue">
                <h1>1 Vibração</h1>
                <div className="text">
                    <p>Ao identificar o obstáculo, o dispositivo emite alertas vibratórios que se intensificam a medida que o cãozinho se aproxima.</p>
                    <p>Conte-nos a distância entre o pescoço e a ponta do focinho do seu cão. Essa diferenciação é feita para que a coleira não vibre a distâncias muito curtas, em situações como dormir ou comer. Ela só vai vibrar quando for pra evitar que ele sofra a batida.</p>
                </div>
                
                <img src={mulher} alt="" />
            </div>
            <div className="atention orange">
                <h1>2 Atenção</h1>
                <div className="textAtention">
                    <p>O cão percebe o novo estímulo e tenta entender o significado.</p>
                    <p>Nessa etapa é interessante que você observe o comportamento dele com o dispositivo, estimule seu bichinho com reforços positivos, dizendo palavras de incentivo ou petiscos.</p>
                </div>
                <div className="imgAtention">
                    <img src={dog} alt=""  />
                </div>
            </div>
            <div className="connect blue">
                <h1>3 ASSOCIAÇÃO</h1>
                <div className="textConnect">
                    <p>O cão associa a vibração aos obstáculos e passa a desviar, evitando choques e traumas.</p>
                    <p>A adaptação varia de cão para cão.</p>
                </div>
                <img src={dogPasseio} alt="" />
            </div>
        </section>

        <section className="treinamento-web">
               <div className="vibracao">
                <h1>1 Vibração</h1>
                    <button>
                        <img src={voltar} alt="" />
                        <Link to={"/"} className="nav-link">
                            Voltar
                        </Link>
                     </button>

                    <div className="vibracao-conteudo">
                        <div className="img-vibracao">
                            <img src={vibracao} alt="" />
                        </div>

                        <div className="texto-vibracao">
                            <p>Ao indetifica identificar o obstáculo, o dispositivo emite alertas vibratórios que se intensificam a medida que o cãozinho se aproxima. Conte-nos a distância entre o pescoço e a ponta do focinho do seu cão. Essa diferenciação é feita para que a coleira não vibre a distâncias muito curtas, em situações como dormir ou comer. Ela só vai vibrar quando for pra evitar que ele sofra a batida.</p>
                        </div>
                    </div>
               </div>
               <div className="atencao">
                <h1>2 Atenção</h1>
                <div className="atencao-content">
                    <div className="text-atencao">
                        <p>O cão percebe o novo estímulo e tenta entender o significado.</p>
                        <p>Nessa etapa é interessante que você observe o comportamento dele com o dispositivo, estimule seu bichinho com reforços positivos, dizendo palavras de incentivo ou petiscos.</p>
                    </div>

                    <div className="img-atencao">
                        <img src={atencao} alt="" />
                    </div>
                </div>
                </div>

               <div className="vibracao">
                <h1>3 Associação</h1>

                    <div className="associacao-content">
                        <div className="img-associacao">
                            <img src={associacao} alt="" />
                        </div>

                        <div className="text-associacao">
                            <p>O cão associa a vibração aos obstáculos e passa a desviar, evitando choques e traumas.</p>
                            <p>A adaptação varia de cão para cão.</p>
                        </div>
                    </div>
               </div>

               
        </section>
        </>
    );
}

export default Treinamento;