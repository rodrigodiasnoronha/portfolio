const myGithub = `https://github.com/rodrigodiasnoronha`;

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    linkProject?: string;
}

export const personalProjects: Project[] = [
    {
        id: 7,
        title: 'Projeto Engajamento',
        linkProject: '',
        description:
            'Projeto em desenvolvimento para a instituição Sara Nossa Terra. Seu objetivo é o Gerenciamento de eventos dentro da instituição, tais como cultos, horários dos cultos, lista de participantes dos cultos e pessoas ajudadas pelos membros da instituição. Em desenvolvimento pela equipe de desenvolvedores da Sara Nossa Terra.',
        link: 'https://github.com/sara-nossa-terra/engajamento',
    },
    {
        id: 1232311,
        title: ' Be The Hero',
        link: `${myGithub}/be-the-hero`,
        linkProject: '',
        description:
            "Aplicação Web e Mobile produzida na semana OmniStack 11 - dia 23/03/2020 até 30/03/2020. O Objetivo deste projeto é propor uma solução para a arredação de fundos em ONG's independentes. Cada ONG pode solicitar items de suas necessidades e cadastrar pontos de coleta.",
    },
    {
        id: 2,
        title: 'Defensor do Saints',
        linkProject: 'https://defensor-saints.web.app',
        link: `${myGithub}/saints`,
        description:
            'Site do Defensor do Saints. Site de notícias sobre o time de futebol americano New Orleans Saints',
    },
    {
        id: 3,
        title: 'Instaclone',
        linkProject: '',
        link: `${myGithub}/instaclone`,
        description:
            'Application built with React Native. Just a clone of the Instagram app interface.',
    },
    {
        id: 4,
        title: 'Tindesc',
        linkProject: '',
        link: `${myGithub}/tindesc`,
        description:
            'Aplicação Web construida com Node, React e MongoDB. Seu propósito foi demonstrar a construção de uma mini rede social dos alunos da faculdade Unidesc. Alunos da faculdade pode se registrar e encontrarem parceiros em comuns e curtir pessoas do colégio que acham interresante.',
    },
    {
        id: 5,
        title: 'Calculadora feita com React Native',
        linkProject: '',
        link: `${myGithub}/react-native-calculator`,
        description: 'Calculadora construida com React Native.',
    },
    {
        id: 6,
        title: 'DevRadar',
        linkProject: '',
        description:
            'Aplicação construida com Node, React e React Native durante a Semana OmniStack 10. Esta é uma aplicação voltada para desenvolvedores de software. Onde você pode encontrar desenvolvedores de acordo com a sua localização e ver seus perfis do Github.',
        link: `${myGithub}/omnistack-week-10`,
    },
];
