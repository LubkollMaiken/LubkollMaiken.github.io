export const portfolioData=[
    {
        id:1,
        title: 'Groceries Shopping List Application',
        shortDescription: "A collaborative shopping list app ",
        description:"The Groceries-App is a mobile application designed to help users save, manage, and organize items they intend to buy. It allows multiple users to collaboratively manage shared shopping lists in real-time. The system consists of a React Native mobile frontend and a Spring Boot backend, with a relational database used for persistent and structured data storage.",
        headerImages:[],
        images: [],
        technologies: ["Java Spring Boot", "Gradle", "MySQL-Database","Hibernate", "Websockets","Java","React Native","SQL", "Visual Studio","Eclipse","TypeScript", "GitHub","GitHub Actions"],
        page:"/portfolio/groceriesApp",

        projectDescription_1:"The frontend communicates with the backend via a RESTful API for standard data exchange. To enable real-time functionality, such as live updates and synchronization between users, I integrate WebSocket connections, which allow persistent, bidirectional communication.",
        projectDescription_2:"To restrict access to the application, I require users to log in with a username and password. Since the app is intended for just two people, I’ve simplified the process by not implementing user registration. I'm using Spring Boot Security to define a single user account with a locally stored password (currently stored in memory). To avoid sending the password with every request, I’ve implemented JWT (JSON Web Tokens). After a successful login, the server issues a JWT token, which the client includes with each subsequent request for authentication."

    },
    {
        id:2,
        title: 'Maritime data exploration application',
        shortDescription: "application to search maritime data animals",
        decription: " ",
         headerImages:[],
        images: [],
        technologies: ["React"],
        page:"/groceriesApp"
    },
    {
        id:3,
        title: 'Maritime data exploration application',
        shortDescription: "application to search maritime data animals",
        decription: " ",
         headerImages:[],
        images: [],
        technologies: ["React"],
        page:"/groceriesApp"
    },
    {
        id:4,
        title: 'Maritime data exploration application',
        shortDescription: "application to search maritime data animals",
        decription: " ",
         headerImages:[],
        images: [],
        technologies: ["React"],
        page:"/groceriesApp"
    }
]

