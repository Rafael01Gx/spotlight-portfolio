export const navItems = [
    { name: "Sobre", link: "#about" },
    { name: "Projetos", link: "#projects" },
    { name: "Depoimentos", link: "#testimonials" },
    { name: "Contato", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "Comunicação clara, projetos alinhados!",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Disponibilidade flexível",
        description: "Remoto, híbrido e presencial.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "Minhas Stacks",
        description: "Em constante desenvolvimento.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Cada desafio é um convite para criar o extraordinário.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Explorando Novas Soluções",
        description: "Em breve mais informações...",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Pronto para o Próximo Passo?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "AI Resume Analyzer",
        des: "Este projeto é uma aplicação web que permite analisar currículos com o apoio de inteligência artificial.Fornece feedbacks personalizados e pontuações ATS",
        img: "/p1.png",
        iconLists: ["/angular.svg", "/tail.svg", "/ts.svg","/git.svg"],
        link: "https://github.com/Rafael01Gx/resume-analyzer-ai",
    },
    {
        id: 2,
        title: "Award-Inspired Website",
        des: "Esse projeto é uma recriação interativa de um site no estilo Awwwards.",
        img: "/p2.png",
        iconLists: ["/angular.svg", "/tail.svg", "/ts.svg", "/gsap.svg", "/git.svg"],
        link: "https://github.com/Rafael01Gx/gsap_Awwwards",
    },
    {
        id: 3,
        title: "Movie App - Plix",
        des: "Aplicativo React Native/EXPO para Descoberta de Filmes com Busca Avançada.",
        img: "/p3.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/app.svg"],
        link: "https://github.com/Rafael01Gx/react-native-playground",
    },
    {
        id: 4,
        title: "Lab Api Rest",
        des: "Esta API REST foi desenvolvida utilizando o framework NestJS e oferece uma solução robusta para aplicações web modernas. A aplicação conta com autenticação baseada em níveis de usuário, integração com banco de dados através do Prisma ORM e uma arquitetura bem estruturada seguindo os princípios do NestJS.",
        img: "/p4.png",
        iconLists: ["/nest.js.svg", "/ts.svg", "/mysql.svg", "/mongoDB.svg"],
        link: "https://github.com/Rafael01Gx/nest-lab-api",
    },
    {
        id: 5,
        title: "Web Lab",
        des: "Sistema web para gerenciamento de ordens de serviço e fluxo de amostras em um laboratório físico.",
        img: "/p6.png",
        iconLists: ["/angular.svg", "/ts.svg", "/git.svg", "/dock.svg"],
        link: "https://github.com/Rafael01Gx/angular-lab-web",
    },

];

export const testimonials = [
    {
        quote:
            "Esta seção será dedicada a relatos reais de clientes com quem tive o prazer de colaborar. Aqui, compartilho os resultados e aprendizados que construímos juntos.",
        name: "Depoimentos futuros",
        title: "Clientes e parceiros",
    },
    {
        quote:
            "Cada projeto traz novos desafios e conquistas. Após a entrega, os clientes poderão deixar aqui seu feedback — ajudando outras pessoas a conhecerem meu trabalho.",
        name: "Espaço reservado para você",
        title: "Depoimento profissional",
    },
    {
        quote:
            "Esta área está sendo preparada para mostrar a confiança e a satisfação dos parceiros que acreditaram no meu trabalho. Que tal escrever a próxima história comigo?",
        name: "Próximo cliente satisfeito",
        title: "Experiência em destaque",
    },
];


export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Desenvolvedor Front-end (Estágio)",
        desc: "Atuei no desenvolvimento de interfaces responsivas com Angular e TailwindCSS, contribuindo na entrega de componentes reutilizáveis e otimizados para SEO.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Desenvolvedor Mobile - Playground",
        desc: "Participei da criação de um app mobile com React Native e Expo, entregando funcionalidades nativas e responsivas para Android e iOS.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Projeto Freelance - App Delivery",
        desc: "Desenvolvi uma aplicação full-stack para delivery local, utilizando NestJS, Firebase e Angular, com autenticação, pedidos em tempo real e painel administrativo.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Desenvolvedor Front-end (Projeto Pessoal)",
        desc: "Liderei a construção de um sistema de gestão com Angular 20, SSR, e backend em NestJS com Prisma e MySQL, focando em performance e boas práticas.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];


export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];