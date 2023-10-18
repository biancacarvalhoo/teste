import { Link } from "react-router-dom"
import "./Treinamento.css"

function Treinamento() {
    return (
        <>
        <section className="treinamento">
               <div className="vibracao">
                <h1>1 Vibração</h1>
                    <button>
                        <Link to={"/Home"} className="nav-link">
                            Voltar
                        </Link>
                     </button>

                    <li className="nav-item"><Link to={"#equipamentos"} className="nav-link">Equipamentos</Link></li>

                    <div className="vibracao-conteudo">
                        <div className="img-vibracao">
                            <img src="../img/vibracao.svg" alt="" />
                        </div>

                        <div className="texto-vibracao">
                            <p>Ao indetifica identificar o obstáculo, o dispositivo emite alertas vibratórios que se intensificam a medida que o cãozinho se aproxima. Conte-nos a distância entre o pescoço e a ponta do focinho do seu cão. Essa diferenciação é feita para que a coleira não vibre a distâncias muito curtas, em situações como dormir ou comer. Ela só vai vibrar quando for pra evitar que ele sofra a batida.</p>
                        </div>
                    </div>
               </div>
               <div class="atencao">
                <h1>2 Atenção</h1>
                <div className="atencao-content">
                    <div className="text-atencao">
                        <p>O cão percebe o novo estímulo e tenta entender o significado.</p>
                        <p>Nessa etapa é interessante que você observe o comportamento dele com o dispositivo, estimule seu bichinho com reforços positivos, dizendo palavras de incentivo ou petiscos.</p>
                    </div>

                    <div className="img-atencao">
                        <img src="../img/atencao.svg" alt="" />
                    </div>
                </div>
                </div>

               <div className="vibracao">
                <h1>3 Associação</h1>

                    <div className="associacao-content">
                        <div className="img-associacao">
                            <img src="../img/associacao.svg" alt="" />
                        </div>

                        <div className="text-associacao">
                            <p>O cão associa a vibração aos obstáculos e passa a desviar, evitando choques e traumas.</p>
                            <p>A adaptação varia de cão para cão,</p>
                        </div>
                    </div>
               </div>

               
           </section>
        </>
    );
}

export default Treinamento;