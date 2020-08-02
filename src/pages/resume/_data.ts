interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    linkProject?: string;
}

export const personalProjects: Project[] = [
    {
        id: 1,
        title: ' Be The Hero',
        link: 'https://github.com/rodrigodiasnoronha/be-the-hero',
        linkProject: '',
        description:
            "Aplicação Web e Mobile produzida na semana OmniStack 11 - dia 23/03/2020 até 30/03/2020. O Objetivo deste projeto é propor uma solução para a arredação de fundos em ONG's independentes. Cada ONG pode solicitar items de suas necessidades e cadastrar pontos de coleta.",
    },
    {
        id: 2,
        title: 'Defensor do Saints',
        linkProject: 'https://defensor-saints.web.app/',
        link: 'https://github.com/rodrigodiasnoronha/saints',
        description:
            'Site do Defensor do Saints. Site de notícias sobre o time de futebol americano New Orleans Saints',
    },
    {
        id: 3,
        title: 'Instaclone',
        linkProject: '',
        link: 'https://github.com/roketman09/instaclone',
        description:
            'Application built with React Native. Just a clone of the Instagram app interface.',
    },
    {
        id: 4,
        title: 'Tindesc',
        linkProject: '',
        link: 'https://github.com/roketman09/tindesc',
        description:
            'Application built with Node, React and MongoDB for educational purposes. It was built with the purpose of introducing students who are entering higher education to enter the IT course. It is just a web application that simulates Tinder, where you can find students registered at UNIDESC (my college).',
    },
    {
        id: 5,
        title: 'My Calculator',
        linkProject: '',
        link: 'https://github.com/roketman09/react-native-calculator',
        description: 'Calculator built with React Native.',
    },
    {
        id: 6,
        title: 'DevRadar',
        linkProject: '',
        link: 'https://github.com/roketman09/omnistack-week-10',
        description:
            'Application built with Node, React and React Native in the week Omnistack 10, by Rocketseat. This application has the purpose of identifying software developers close to you. You can register and see if there is a developer near you',
    },
];
