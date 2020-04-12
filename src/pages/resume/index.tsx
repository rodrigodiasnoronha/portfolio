import React from 'react';
import Layout from '../../components/layout';
import { ResumeWrapper } from './_styles';
import { FiAward, FiHome } from 'react-icons/fi';
import Helmet from '../../components/helmet';

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
}

const personalProjects: Project[] = [
    {
        id: 8222,
        title: 'Plant App',
        link: 'https://github.com/roketman09/jets',
        description:
            'Mobile application built with React Native that simulates an application where you can view information about different types of plants.',
    },
    {
        id: 1,
        title: ' Be The Hero',
        link: 'https://github.com/roketman09/be-the-hero',
        description:
            "Application created with Node, React and React Native with the purpose of solving cases of independent ONG's. It was built during the week Omnistack 11, produced by Rocketseat.",
    },
    {
        id: 2,
        title: 'Defensor do Saints',
        link: 'https://github.com/roketman09/saints',
        description:
            'Personal project developed with React and Firebase (I am rebuilding using GatsbyJS). With the expansion of American football in Brazil and the lack of content, be it social media pages or other ways of transmitting excessive information about sport in Brazil, I came up with the idea of creating the Defensor do Saints Site, which is a blog whose goal is to convey information about the New Orleans Saints football team.',
    },
    {
        id: 3,
        title: 'Instaclone',
        link: 'https://github.com/roketman09/instaclone',
        description:
            'Application built with React Native. Just a clone of the Instagram app interface.',
    },
    {
        id: 4,
        title: 'Tindesc',
        link: 'https://github.com/roketman09/tindesc',
        description:
            'Application built with Node, React and MongoDB for educational purposes. It was built with the purpose of introducing students who are entering higher education to enter the IT course. It is just a web application that simulates Tinder, where you can find students registered at UNIDESC (my college).',
    },
    {
        id: 5,
        title: 'My Calculator',
        link: 'https://github.com/roketman09/react-native-calculator',
        description: 'Calculator built with React Native.',
    },
    {
        id: 6,
        title: 'DevRadar',
        link: 'https://github.com/roketman09/omnistack-week-10',
        description:
            'Application built with Node, React and React Native in the week Omnistack 10, by Rocketseat. This application has the purpose of identifying software developers close to you. You can register and see if there is a developer near you',
    },
    {
        id: 7,
        title: 'Brinquedaria Nolu',
        link: 'https://github.com/roketman09/brinquedaria-nolu-api',
        description: 'API built with Node and Express.',
    },
];

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
                        {personalProjects.map((project) => (
                            <li key={project.id}>
                                <a
                                    className="linkProject"
                                    href={project.link}
                                    target="__blank"
                                >
                                    {project.title}:
                                </a>
                                <p> {project.description} </p>
                            </li>
                        ))}
                    </ul>
                </section>
            </ResumeWrapper>
        </Layout>
    </>
);

export default Resume;
