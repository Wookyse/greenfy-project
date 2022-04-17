import React from "react";
import { Header } from "../../components/Header/Index";
import { TextContainer } from "../../components/TextComponent/Index";
import "./style.scss";
import { ReactComponent as Articleimg } from '../../assets/img/homeArticle.svg';


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
                        title="A Implementação De Práticas Sustentáveis Na Empresa Dell Computadores"
                        subTitle="teste"
                        mainText="ksk"
                        autor="eu"
                        date="2"></TextContainer>
                </div>
            </div>
        </div>
    );
};