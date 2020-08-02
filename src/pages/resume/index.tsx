import React from 'react';
import Layout from '../../components/layout';
import { ResumeWrapper } from './_styles';
import { FiAward, FiHome } from 'react-icons/fi';
import Helmet from '../../components/helmet';
import { personalProjects } from './_data';

const Resume: React.FC = () => (
    <>
        <Helmet />
        <Layout>
            <ResumeWrapper>
                <h2 className="title">Rodrigo Dias Noronha</h2>
                <h3>Experience</h3>
                <section>
                    <p>
                        I've been working for the past few months as a freelance
                        developer.
                    </p>
                </section>

                <section>
                    <h3>Education and Courses</h3>

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
                    </ul>
                </section>

                <section>
                    <h3>Personal Projects </h3>
                    <p>
                        These are some of my personal projects. If you want to
                        know more information and see screenshots of the
                        application, just click on the link.
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
