import React from 'react';
import { Header } from '../../components/Header/Index';
import { TextContainer } from '../../components/TextComponent/Index';
import './style.scss';
import { ReactComponent as Articleimg } from '../../assets/img/homeArticle.svg';
import { ReactComponent as LampIcon } from '../../assets/icons/lamp.svg';
import { ReactComponent as WarningIcon } from '../../assets/icons/warning.svg';
import { ReactComponent as Trof } from '../../assets/icons/Vector.svg';

export const Home = () => {
  return (
    <div className="homeConatiner">
      <Header></Header>
      <div className="homeContents">
        <div className="homeContent1">
          <div className="homeContentBack1">
            <div className="homeContentImg1">
              <Articleimg />
            </div>
            <div className="homeContentText1">
              <h1>Lixo Eletrônico E Meio Ambiente</h1>
              <h2>A Importância Da Reciclgem Do Lixo Eletrônico</h2>
              <p>
                Nunca o tema meio ambiente foi tão oportuno para ser abordado em
                pesquisas e para desenvolver soluções e projetos que contemple
                seu sustento e preservação. O crescimento da população mundial
                faz com que os cientistas e profissionais da área se preocupem
                em encontrar novas formas de energia renovável e de aprimorar os
                processos de reciclagem existentes para preservas a natureza
                (FREITAS, 2009).
              </p>
              <div className="rest">
                <p className="autor">SANTOS, Renata Rodrigues Silva</p>
                <p className="date">October, 11 - 2018</p>
              </div>
            </div>
          </div>
        </div>
        <div className="homeContent2">
          <TextContainer
            title="A Implementação De Práticas Sustentáveis Na Empresa Dell"
            subTitle="TI Verde"
            mainText="A prática sustentável tem sido pauta cada vez mais corriqueira em qualquer
                        ambiente, obviamente, não seria diferente dentro da TI; devido ao seu enorme crescimento,
                        verifica-se a necessidade de nos preocuparmos cada vez mais com a sustentabilidade; Tendo
                        em vista o surgimento de preocupações ambientais.
                        Sendo assim, a Tecnologia da informação (TI) é a responsável por uma grande
                        parte dos problemas ambientais pelos quais a sociedade deparea-se atualmente (Murugesan,
                        2010), exemplificando podemos citar: o custo elevado de energia para manter os
                        equipamentos ligados, a grande quantidade de insumos (não renováveis) dos quais não são
                        descartados corretamente. Sendo assim, a preocupação ambiental torna-se cada vez mais vital
                        para as empresas manterem-se vivas na situação atual em que nos encontramos.
                        Portanto, as práticas de TI Verde, são de insuma importância para as empresas nos
                        dias de hoje, tornando-se cada vez mais com o passar do tempo, tendo em vista a constante
                        evolução tecnológica em que vivemos. Somente deste modo, conseguimos alinhar as ações da
                        empresa com as necessidades ambientais do planeta.
                        Dado estas informações, desenvolvi esta pesquisa que lhes demonstrara que
                        pequenas atitudes, junto aos funcionários das empresas, são fundamentais para a boa
                        implementações de pensamentos ecológicos dentro da área de TI..."
            autor="Herrmann, William Faller"
            date="November, 15 - 2018"
          ></TextContainer>
        </div>

        <div className="homeContent3">
          <LampIcon />
          <p>Inclua computação verde nas discussões de RFP com fornecedores</p>
        </div>

        <div className="homeContent4">
          <WarningIcon />
          <p className="warningTitle">Descarte de Eltronicos</p>
          <p>26/04/2022</p>
          <p>LabCom</p>
        </div>
        <div className="homeContent5">
          <iframe
            width="640px"
            height="200"
            src="https://www.youtube.com/embed/Thgcdciy3hU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="homeContent6">
          <iframe
            width="640px"
            height="200"
            src="https://www.youtube.com/embed/Thgcdciy3hU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="img-user">
          <img src={require('../../assets/icons/joeyUser.png')} alt="" />

          <div className="trofArea">
            <Trof />
            <h1> Usuário do mês</h1>
            <h2>Joey Mills</h2>
          </div>
        </div>
        <div className="homeContent8">
          <TextContainer
            title="O Descarte De Resíduos Eletroeletrônicos Pelas Empresas De Assistência Técnica Sob A Perspectiva Do Conceito De Green It"
            subTitle="Inovação e Sustentabilidade em Diferentes Setores"
            mainText="O que fazer com os equipamentos eletroeletrônicos quando estes chegam ao final da
                        sua vida útil? De acordo Santos e Silva (2011) a maior parte dos usuários residenciais alega
                        não ter informações sobre o que fazer com seus resíduos eletrônicos. Em razão da redução dos
                        ciclos de vida dos bens de consumo, este questionamento é realizado por todos os tipos de
                        consumidores, desde o doméstico até as organizações, sobretudo quando se trata de
                        equipamentos eletroeletrônicos. Este assunto torna-se mais relevante ainda quando são
                        discutidas as implicações socioambientais decorrentes das práticas incorretas de descarte
                        deste tipo de resíduo (WILLIAMS et al., 2008). Estas informações também estão presentes no
                        relatório da UNESCO (2008), pois determinados processos de reciclagem, inclusive de
                        trituração, moagem, queima e derretimento de componentes, podem liberar gases nocivos ou
                        pó que, quando emitidos ou lixiviados no solo, podem ter impactos nocivos à saúde e ao
                        ambiente. Praticadas principalmente em alguns países em desenvolvimento, as redes
                        informais de resíduos eletrônicos empregam técnicas como a queima a céu aberto, sem
                        adequados aparatos de segurança necessários para proteger a saúde dos trabalhadores
                        envolvidos.
                        De acordo com as pesquisas do CEMPRE (2010), frequentemente os usuários
                        residenciais tratam os resíduos de equipamentos eletroeletrônicos (REEE) como “lixo seco”.
                        Mesmo considerando que esta prática não seja a mais indicada (uma vez que os REEE
                        deveriam ter uma destinação especial) apenas 8% dos municípios brasileiros haviam
                        implantado processos de coleta seletiva. Portanto, a falta de alternativas de descarte para os
                        REEE representa um problema constante para os cidadãos.
                        Na perspectiva deste usuário, a constatação de que um equipamento eletroeletrônico
                        está danificado ou em final de vida útil, frequentemente, é feita pelas organizações que
                        realizam a Assistência Técnica destes produtos. Quando o conserto do equipamento não é
                        financeiramente interessante para o usuário, este opta por não realizar o conserto e, muitas
                        vezes, não retorna para resgatar o seu material. A partir deste momento que as Assistências
                        Técnicas passam a cumprir um papel importante no processo de descarte dos REEE, tendo em
                        vista que os equipamentos são abandonados em seus estabelecimentos.
                        Este fato empírico é apenas um dos exemplos envolvendo a complexidade da adoção
                        de práticas relacionadas à Sustentabilidade."
            autor="Alves, Nilo Barcelos"
            date="September, 25 - 2013"
          ></TextContainer>
        </div>
      </div>
    </div>
  );
};
