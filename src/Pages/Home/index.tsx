import React from "react";
import { Header } from "../../components/Header/Index";
import { TextContainer } from "../../components/TextComponent/Index";
import "./style.scss";
import { ReactComponent as Articleimg } from '../../assets/img/homeArticle.svg';
import { ReactComponent as LampIcon } from '../../assets/icons/lamp.svg';
import { ReactComponent as WarningIcon } from '../../assets/icons/warning.svg';

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
                            <p>Nunca o tema meio ambiente foi tão oportuno para ser abordado em pesquisas e
                                para desenvolver soluções e projetos que contemple seu sustento e preservação. O
                                crescimento da população mundial faz com que os cientistas e profissionais da área se
                                preocupem em encontrar novas formas de energia renovável e de aprimorar os processos
                                de reciclagem existentes para preservas a natureza (FREITAS, 2009).
                            </p>
                            <p></p>
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
                        date="November, 15 - 2018"></TextContainer>
                </div>

                <div className="homeContent3">
                    <LampIcon />
                    <p>Inclua computação verde nas discussões de RFP com fornecedores</p>
                </div>

                <div className="homeContent3 homeContent4">
                    <WarningIcon />
                    <p className="warningTitle">Descarte de Eltronicos</p>
                    <p>26/04/2022</p>
                    <p>LabCom</p>
                </div>
            </div>
        </div>
    );
};