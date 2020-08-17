import React from 'react';
import Layout from '../../components/layout';
import { ResumeWrapper } from './_styles';
import { FiAward, FiHome, FiAirplay } from 'react-icons/fi';
import Helmet from '../../components/helmet';
import { personalProjects } from './_data';

const Resume: React.FC = () => (
    <>
        <Helmet />
        <Layout>
            <ResumeWrapper>
                <h2 className="title">Rodrigo Dias Noronha</h2>
                <h3>Experiência</h3>
                <section>
                    <ul className="experience">
                        <li>
                            <p>

                                <FiAirplay color="#76c5a4" size={30} />
                                Estive trabalhando como Desenvolvedore
                                FreeLancer pelos meses passados. Desde Janeiro
                                de 2020.
                            </p>
                        </li>
                        <li>
                            <p>
                                <FiAirplay color="#76c5a4" size={30} />
                                Também estive desenvolvendo software em conjunto
                                com a equipe de Desenvolvedores da Sara Nossa
                                Terra. Com foco no FrontEnd.
                            </p>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3>Cursos e Educação</h3>

                    <ul>
                        <li>
                            <p>
                                <FiHome size={25} color="#76c5a4" />
                                Análise e Desenvolvimento de Sistemas (5º
                                semestre) em:{' '}
                                <a
                                    href="https://www.unidesc.edu.br/"
                                    target="__blank"
                                >
                                    UNIDESC
                                </a>
                                .
                            </p>
                        </li>

                        <li>
                            <p>
                                <FiAward size={25} color="#76c5a4" />
                                Udemy:{' '}
                                <a
                                    href="https://www.udemy.com/course/curso-web/"
                                    target="__blank"
                                >
                                    Curso JavaScript Web Moderno (79 horas)
                                </a>{' '}
                            </p>
                        </li>

                        <li>
                            <p>
                                <FiAward size={25} color="#76c5a4" />
                                Udemy:{' '}
                                <a
                                    href="https://www.udemy.com/course/firebase-para-web-e-apps-hibridos/"
                                    target="__blank"
                                >
                                    Curso Firebase Web (6 horas)
                                </a>{' '}
                            </p>
                        </li>

                        <li>
                            <p>
                                <FiAward size={25} color="#76c5a4" />
                                Udemy:{' '}
                                <a
                                    href="https://www.udemy.com/course/git-e-github"
                                    target="__blank"
                                >
                                    Curso Git e Github (3,5 horas)
                                </a>{' '}
                            </p>
                        </li>

                        <li>
                            <p>
                                <FiAward size={25} color="#76c5a4" />
                                Rocketseat: Semana Omnistack 10 -{' '}
                            </p>
                        </li>

                        <li>
                            <p>
                                <FiAward size={25} color="#76c5a4" />
                                Rocketseat: Semana Omnistack 11
                            </p>
                        </li>
                        <li>
                            <p>
                                <FiAward size={25} color="#76c5a4" />
                                Rocketseat: Next Level Week 1
                            </p>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3>Projetos </h3>
                    <p>
                        Esses são alguns de meus projetos, em sua maioria
                        projetos pessoais.
                    </p>

                    <ul>
                        {personalProjects.map(project => (
                            <li key={project.id}>
                                <a
                                    className="linkProject"
                                    href={project.link}
                                    target="__blank"
                                >
                                    {project.title}:
                                </a>
                                <p> {project.description} </p>

                                <br />

                                {project.linkProject && (
                                    <p>
                                        Para acessar esta aplicação,{' '}
                                        <a
                                            href={project.linkProject}
                                            target="_blank"
                                        >
                                            clique aqui
                                        </a>
                                        .
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            </ResumeWrapper>
        </Layout>
    </>
);

export default Resume;
