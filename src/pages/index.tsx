import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Helmet from '../components/helmet';
import { AboutWrapper } from './_styles';

const App: React.FC = () => (
    <>
        <Helmet />
        <Layout>
            <AboutWrapper>
                <div className="profilePicWrapper">
                    <img
                        src={
                            'https://pt.gravatar.com/userimage/183402556/ec0f980abc14376e2a97a8237726bccc.png?size=500'
                        }
                        alt="Rodrigo"
                        title="Rodrigo's photo"
                    />
                </div>

                <div className="infoWrapper">
                    <h2>
                        <span className="orange">Olá!</span> Prazer!
                    </h2>

                    <p>
                        Me chamo{' '}
                        <span className="green">Rodrigo Dias Noronha</span>. Sou
                        um criativo e ambioso{' '}
                        <span className="gray">desenvolvedor </span>
                        apaixonado por tecnologias. Estou sempre aprendendo!
                    </p>
                    <p>
                        Mantenho foco nas principais e recentes tecnologias do
                        mercado, como <span className="blue">React</span>,{' '}
                        <span className="purple">React Native</span> e{' '}
                        <span className="nodeGreen">Node.js</span>. Amo
                        trabalhar com essas tecnologias e com tudo que envolva
                        <span className="yellow"> Javascript</span>!
                    </p>

                    <p>
                        Se quiser saber mais sobre mim, pode dar uma olhada no
                        meu{' '}
                        <a
                            href="https://github.com/rodrigodiasnoronha"
                            target="__blank"
                        >
                            <span className="gray">Github</span>{' '}
                        </a>
                        ou ler detalhes a mais no meu{' '}
                        <Link to="/resume">resumo</Link>!
                    </p>
                </div>
            </AboutWrapper>
        </Layout>
    </>
);

export default App;
