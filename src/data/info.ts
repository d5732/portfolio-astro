export const info = {
    ogImageUrl: "android-chrome-512x512.png",
    baseUrl: "",
    name: "Dennis Drueck",
    jobDescription: "Full-Stack Developer",
    about: `With 4 years of software development experience and 16 years of IT experience, I am a talented and seasoned professional. Through my successful projects and certifications, I have demonstrated mastery of computer science fundamentals and full-stack application development. My strong focus on teamwork and collaboration helps me ensure that goals are well defined and deadlines are met. Given my diverse background spanning multinational corporations, startups, and freelancing, I can readily excel in any environment.`,
    email: "Denwa.dev@gmail.com",

    experience: [
        {
            title: "Full-Stack Developer",
            name: "Self-Employed",
            location: "Naperville, IL",
            startDate: "10/21",
            endDate: "Present",
            description: [
                "Distill requirements in collaboration with product teams, identifying highest value features to speed development.",
                "Facilitate millions of dollars in revenue and top SERP rankings via optimized applications.",
                "Iterate rapidly with Agile sprints to complete features incrementally.",
                "Implement CI/CD pipelines with Git and GitHub to easily deploy builds in seconds.",
                "Maximize code reuse by following proven standards: DRY, SOLID, YAGNI.",
                "Resolve bottlenecks and bugs rapidly using DevTools for debugging and performance testing.",
            ],
        },
        {
            title: "SaaS Interactivity Specialist",
            name: "Text2Drive",
            location: "Chicago, IL",
            startDate: "2/19",
            endDate: "10/21",
            description: [
                "Restructured widget deployment pipeline and overhauled assets using JavaScript, HTML, CSS and Bootstrap, drastically improving client and user experiences.",
                "Reduced widget time-to-delivery by 50% after increasing component reusability and expediting requirements discovery with a hands-on, fail-fast approach.",
                "Facilitated over 5 million dollars in yearly client revenue through expedient deployment and consistent user engagement.",
                "Conserved 40 work-hours per month by automating toilsome tasks with Python and Selenium.",
                "Enhanced client-experience with well-prepared proposals, backed by subject-matter expertise, analytics and market research.",
                "Eliminated cross-company deployment issues through research and collaboration.",
            ],
        },
    ],

    education: [
        {
            title: "FastTrack Java Program",
            name: "Cook Systems",
            location: "Memphis, TN",
            startDate: "12/22",
            endDate: "Present",
            description: [
                "Concentrated Java Frameworks and developer tools training",
            ],
        },
        {
            title: "Bachelor of Fine Arts",
            name: "University of Illinois - Chicago",
            location: "Chicago, IL",
            startDate: "08/08",
            endDate: "05/12",
            description: [
                "Studied web design, design thinking, visual communication",
            ],
        },
    ],

    certifications: [
        {
            title: "FreeCodeCamp.org",
            location: "San Francisco, CA",
            startDate: "06/21",
            endDate: "12/22",
            description: [
                "Back-End and APIs: Express.js, MongoDB, Node.js",
                "Relational Databases: PostgreSQL, Bash",
                "Front-End Libraries: React.js, Redux, jQuery, Bootstrap",
                "JavaScript: Data Structures and Algorithms",
                "Python: Scientific Computing",
                "Responsive Web Development: HTML5, CSS3",
            ],
        },
    ],

    socialMedia: {
        github: "https://github.com/d5732",
        email: "Denwa.dev@gmail.com",
        linkedin: "https://www.linkedin.com/in/dennis-d-58764754/",
    },

    projects: [
        {
            title: "Astro Portfolio",
            isFeatured: true,
            thumbnail:
                "/assets/images/project-thumbnails/astro-portfolio-sm.jpg",
            image: "/assets/images/project-thumbnails/astro-portfolio.jpg",
            githubUrl: "https://github.com/d5732/portfolio-astro",
            description: [
                "Implemented 14 user stories to create a portfolio website, including reusable components, API data fetching, external strings, routing, CSS animations, responsive layouts, WCAG compliance, and light/dark mode.",
                "Selected Vercel and Astro.js framework for server-side rendering, reduced JavaScript bloat, and easy CI/CD.",
            ],
            environment: [
                "TypeScript",
                "Astro.js",
                "Node.js",
                "Tailwind",
                "CSS3",
                "HTML5",
                "Git",
                "GitHub",
                "Vercel",
            ],
        },
        {
            title: "MAT Action",
            isFeatured: true,
            thumbnail:
                "/assets/images/project-thumbnails/mataction-site-sm.jpg",
            image: "/assets/images/project-thumbnails/mataction-site.jpg",
            liveUrl: "https://www.mataction.com/",
            description: [
                "Implemented responsiveness to 50+ views and components using PHP, Blade, Bootstrap and custom CSS, extrapolating design philosophy from a source Figma to unify visuals.",
                "Optimized pagespeed through lazy-loading and asset optimization strategies.",
                "Automated logo background-color generation by scraping CDN and processing images using Node.js, colorthief, tinycolor2, and a custom color modulation algorithm. This enabled easy hexcolor insertion into MySQL database based on entity UUID.",
            ],
            environment: [
                "MySQL",
                "PHP",
                "Blade",
                "Symfony",
                "JavaScript",
                "Node.js",
                "jQuery",
                "Bootstrap",
                "CSS3",
                "HTML5",
                "Bitbucket",
                "Jira",
                "cPanel",
            ],
        },
        // Twitter Clone API

        // Environment:

        {
            title: "Twitter Clone API",
            isFeatured: true,
            thumbnail:
                "/assets/images/project-thumbnails/twitter-clone-api-sm.jpg",
            image: "/assets/images/project-thumbnails/twitter-clone-api.jpg",
            githubUrl: "https://github.com/d5732/twitter-clone-api",
            description: [
                "Created a Java Spring back-end for a RESTful web service with 30 HTTP endpoints to CRUD data related to accounts, tweets, hashtags, likes, follows, replies, and reposts.",
                "Tested and debugged API functionality using IntelliJ debugger, SQL Shell, and Postman, enabling rapid development of endpoints.",
                "Led a 3-developer team in a 1-week sprint, prioritizing critical tasks via Kanban.",
                "Reviewed, tested, and merged git branch pull requests.",
                "Implemented services, data models, repositories, and controllers using Spring Boot and JPA, including data validation, error handling, and reusable functions.",
            ],
            environment: [
                "PostgreSQL",
                "Java 17",
                "Maven",
                "Spring Boot",
                "JPA",
                "JDBC",
                "Lombok",
                "MapStruct",
                "Spring Web",
                "Apache Tomcat",
                "Postman",
                "Git",
                "GitHub",
            ],
        },

        {
            title: "TrapMonkie.io",
            isFeatured: true,
            thumbnail:
                "/assets/images/project-thumbnails/trapmonkie-site-sm.jpg",
            image: "/assets/images/project-thumbnails/trapmonkie-site.jpg",
            liveUrl: "https://trapmonkie.io/",
            description: [
                "Delivered MVP in 1 week, and 2 major updates within 1 week of requirements approval.",
                "Authenticated transactions efficiently with merkletreejs to save users money on fees.",
                "Built CI/CD pipeline via GitHub integration on Cloudflare Pages Jamstack.",
                "Imported real-time data and performed asynchronous transactions via Ethereum's JSON RPC API using web3.js, providing error-proofing and ease-of-access.",
                "Optimized cross-platform user-experiences with responsive and adaptive design, lazy-loading, and asset optimization.",
            ],
            environment: [
                "JavaScript",
                "React.js with Hooks",
                "Node.js",
                "Redux Thunk",
                "Webpack",
                "Jest",
                "SCSS",
                "Ethereum",
                "Git",
                "GitHub",
                "Cloudflare Pages",
            ],
        },
        {
            title: "EthereumHomies.com",
            isFeatured: true,
            thumbnail:
                "/assets/images/project-thumbnails/ethereumhomies-site-sm.jpg",
            image: "/assets/images/project-thumbnails/ethereumhomies-site.jpg",
            liveUrl: "https://ethereumhomies.com/",
            description: [
                "Overcame poor documentation of blockchain APIs through research, successfully implementing P0 requirements.",
                "Enabled my client to capture explosive market growth by delivering MVP in 5 days.",
                "Authorized users to access a self-service portal for purchased assets using web3.js, eliminating cumbersome delivery efforts.",
                "Created a 3D glTF model viewer built with react-three-fiber.",
                "Deployed builds using CI/CD via GitHub integration on Netlify Jamstack.",
            ],
            environment: [
                "Three.js",
                "Node.js",
                "React.js with Hooks",
                "Redux Thunk",
                "Webpack",
                "Jest",
                "SCSS",
                "Ethereum",
                "Git",
                "GitHub",
                "Netlify",
            ],
        },
    ],
};
