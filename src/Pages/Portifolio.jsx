import React from "react";
import Card from "../Componentes/Projetos/Projetos";
import '../Componentes/Projetos/Projetos.css'
import Chá from '../Componentes/assets/Chá.jpg' 
import Creme from '../Componentes/assets/Creme.jpg' 
import Gotas from '../Componentes/assets/Gotas.jpg' 
const Portifolio = () => {
    return(
        <div className="Portifolio">
          <Card nome={"R$ 72,90"} img={Chá} moreInfo={"O chá de Longan, traduzido literalmente como Olho de Dragão, é um ótimo remédio para o sangue. A fruta, que é uma grande fonte de ferro e potássio, é composta principalmente por carboidratos, gorduras, cálcio, proteínas, vitamina C, A, B1 e B2. geralmente combinado com tônicos, em suas folhas, a longan contém antioxidantes como a quercitina, que ajuda a prevenir o envelhecimento precoce das células, e substâncias antivirais, que ajudam a combater a aliviar os sintomas de gripes e resfriados. como Dang Gui e raiz de peônia, para fazer formulações para construção de células importantes. Consumido regularmente, o chá de Longan aumenta a energia temporária e a vitalidade a longo prazo, mas não é um estimulante como a cafeína. Isso lhe dá energia e, ao mesmo tempo, relaxa. O sabor é adocicado e refrescante graças a mistura da polpa seca do Logan com suas flores desidratadas."}/>
          <Card nome={"R$ 74,67"} moreInfo={"creme para ajudar o metabolismO Creme Longan Care Vitalidade utiliza as propriedades revitalizantes da fruta Longan, nacionalmente conhecida como Olho-de-dragão, para proporcionar uma pele hidratada e renovada."} img={Creme} />
          <Card nome={"R$ 55,00"} moreInfo={"O óleo essencial de Logan contém as folhas, flores e sementes da fruta que são ricas em polifenóis, potentes antioxidantes e contêm proantocianidinas, que também são os principais compostos ativos no extrato de semente de uva e podem proteger contra câncer e doenças cardíacas. O extrato de folhas de longan, também é rico em flavonoides anti-inflamatórios. O óleo essencial tem propriedades extremamente calmantes pois contem corilagina que diminui a noradrenalina e relaxa os vasos sanguíneos."} img={Gotas}/>
      </div>
    )
}
export default Portifolio;