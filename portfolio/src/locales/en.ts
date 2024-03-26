import { en } from 'vuetify/locale';

export default {
    ...en,
    homepage: {
        shortPresentation: 'Hi, I\'m <h1>Mickaël Lalanne</h1>.<br> I\'m a web developer.',
        workButton: 'SEE MY WORK',
        presentationTitle: 'WHO\'S THERE ?',
        cobeBlock: {
            about: 'ABOUT ME',
            mail: 'mickael.lalanne03@gmail.com',
            writing: 'writing',
            hobbies: 'hobbies',
            location: 'location',
            name: 'full-name',
            wellBeing: 'well-being',
            jv: 'video-games',
            work: 'current-work',
            walk: 'walk',
            gym: 'gym',
            sleep: 'sleep',
            dietetic: 'dietetic',
            informations: 'personal-information'
        },
        career: {
            stratejia: {
                date: 'Since 2023',
                title: 'STRATEJIA',
                description: 'Arrived in Quebec City after obtaining a Working Holiday Permit, I was hired as a Full-stack Developer at Stratejia and worked in a team on a .NET, Azure DevOps and Docker project.'
            },
            intuiface: {
                date: '2018 - 2023',
                title: 'INTUIFACE',
                description: 'Following a 6 month internship at Intuiface, I\'ve been hired as a R&D engineer. I mainly work in a team on web application projects (see more in the projects section).'
            },
            licence: {
                date: '2018',
                title: 'LICENCE PROFESSIONNELLE MIW <br> <i>(equivalent to Bachelor of Science)</i>',
                description: 'Professional degree “Multimédia- Internet - Webmaster” in Gap university.'
            },
            bts: {
                date: '2017',
                title: 'BTS SIO <br> <i>(equivalent to BTEC Higher National Diploma)</i>',
                description: 'Brevet de technicien supérieur, IT services to organizations. Option: Software Solutions and Business Applications.'
            },
            bac: {
                date: '2014',
                title: 'BAC STI2D <br> <i>(equivalent to High School Diploma or A-level)</i>',
                description: 'Baccalauréat Technologique STI2D: Science and technology for industry and sustainable development. Option: Technical Innovation and Eco-design'
            }
        }
    },
    menu: {
        presentation: 'Presentation',
        projects: 'Projects',
        contact: 'Contact'
    },
    shared: {
        close: 'Close',
        by: 'By'
    },
    projects: {
        title: 'Projects',
        detail: 'SEE MORE',
        noProject: {
            title: 'It seems no project is matching your filters.',
            subtitle: 'Defeat Bowser by changing your filters !'
        },
        filtering: {
            searchLabel: 'Search',
            searchPlaceholder: 'Ex: front-end, AWS, .NET, Intuiface, ...',
            typeLabel: 'Project',
            types: {
                personal: 'Personal',
                professional: 'Professional',
                student: 'Student'
            }
        },
        kaisenWorkout: {
            title: 'KAISEN WORKOUT',
            description: `Mobile application that allows me to create and follow my own training programs.
            Code is public and available at the following address : <b><a href="https://github.com/mickael-lalanne/kaisen-workout/" target="_blank">github.com/mickael-lalanne/kaisen-workout</a></b> !
            Try the app yourself on your Android by <b><a href="https://expo.dev/artifacts/eas/rJ5SARrhB3zGYYAhWi5P8G.apk" target="_blank">downloading the APK here</a></b> !`,
            resume: `Mobile app to track and create training programs.<br>
            Developed in Typescript with React Native and Expo. Local database with Realm.`,
            skills: {
                one: 'Personal project',
                two: 'Mobile app in Typescript with React Native and Expo',
                three: 'Local database with Realm',
                four: 'Using Github Copilot during development'
            },
            details: {
                summary: 'Summary',
                inShortTitle: 'In short',
                inShortList: `- Mobile app with <a href="https://reactnative.dev/" target="_blank">React Native</a>, <a href="https://expo.dev/" target="_blank">Expo</a> and <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>
                - Local database with <a href="https://www.mongodb.com/docs/realm/sdk/react-native/" target="_blank">Realm</a>
                - State management with <a href="https://redux.js.org/" target="_blank">Redux</a> and <a href="https://redux-toolkit.js.org/" target="_blank">Redux Toolkit</a>
                - UI with <a href="https://reactnativepaper.com/" target="_blank">React Native Paper</a> and <a href="https://reactnavigation.org/" target="_blank">React Navigation</a>
                - Automated APK build with <a href="https://docs.github.com/en/actions" target="_blank">Github Actions</a>
                - Using <a href="https://github.com/features/copilot" target="_blank">Github Copilot</a> during the development phase`,
                inShortContent: `Code is public and available at the following address : <a href="https://github.com/mickael-lalanne/kaisen-workout" target="_blank">github.com/mickael-lalanne/kaisen-workout</a>.<br>
                Try Kaisen Workout yourself on your Android by downloading the APK <a href="https://expo.dev/artifacts/eas/rJ5SARrhB3zGYYAhWi5P8G.apk" target="_blank">here</a>.`,
                whatTitle: `What's Kaisen Workout ?`,
                whatContent: `Inspired by the Jujutsu Kaisen manga, Kaisen Workout is a mobile application that I developed to support me during my training sessions at the gym. It allows, among other things, to :`,
                whatList: `- <b>Create your own programs</b>: exercise sets, number of repetitions, rest duration.
                - <b>Note your performances each session</b> in order to have easy access to the performances of the previous session. The goal is to achieve progressive overload.
                - <b>View and analyze all sessions performed</b>.
                - <b>Personalize your experience</b> with dark mode, different color themes and the ability to rate your performance in kilograms or pounds.`,
                architectureTitle: `Architecture and database`,
                architectureContent: `In its V1, Kaisen Workout does not have online functionalities. Everything is managed through a local database with Realm, now called <i>Atlas Device SDK</i>. Online synchronization should therefore be able to be done later and easily with a MongoDB database.`,
                architectureContent2: `For routing, I use <a href="https://reactnavigation.org/" target="_blank">React Navigation</a>. The application is divided into 3 main screens accessible via a <a href="https://reactnavigation.org/docs/bottom-tab-navigator" target="_blank">Bottom Tab</a> : <i>Programs</i>, <i>Workout</i> et <i>Progression</i>. Each of these screens also use their own nested screens using a <a href="https://reactnavigation.org/docs/stack-navigator" target="_blank">Stack Navigator.`,
                programTitle: `Program creation`,
                programContent: `Before you can use the application, you need to have programs. These must be composed of a name, an image, and one or more sets of exercises. Each set is linked to one or more exercises (also called Superset) and includes a rest time as well as a number of repetitions.
                From a UX point of view, efforts have been made to make the experience as pleasant as possible. For example, it is possible to create an exercise on the fly directly from the program creation : the user does not have to go through the exercise screen. This is also the case for set creation, which can be done directly during training. To do this, multiple React components, like <i>ExerciseBuilder</i> or <i>SetBuilder</i>, are reused in multiple places.`,
                workoutTitle: `During workout`,
                workoutContent: `The <i>“Workout”</i> screen is in my opinion the most important, because it is the reason why I developed the application.

                To encourage progressive overload, it must first allow me to easily visualize the performance of the previous session. With Realm, it's very easy to access this information, I can easily retrieve the last session by sorting by date and filtering by state and program :`,
                workoutContent2: `Once it is retrieved, I just have to go through its sets to find a repetition that corresponds to the right exercise and the right order :`,
                workoutContent3: `The <i>“Workout”</i> screen should also allow me to time my recovery periods. Initially, I saved the duration in seconds of the rest time in the store. Then, using a thunk, I decremented this value by 1 every second. This is great when we stay on the application, but as soon as we lock our phone or change applications, the timer is paused and its value is no longer updated.
                In order to correct this behavior, I first thought of using a library to perform background tasks like <i><a href="https://docs.expo.dev/versions/latest/sdk/task-manager/" target="_blank">expo-task-manager</a></i> or <i><a href="https://docs.expo.dev/versions/latest/sdk/background-fetch/" target="_blank">expo-background-fetch</a></i>. But I finally turned to a solution that was much simpler to implement and certainly more efficient : calculating and saving an end date in the store rather than a simple number.
                Therefore, no matter if we close the application, lock or restart our phone, we will always have the correct timer displayed in Kaisen Workout.`,
                progressionTitle: `Session analysis`,
                progressionContent: `The last screen, <i>“Progress”</i>, allows me to view the completed sessions. All completed workouts are displayed in a data table and indicate the date and program followed. As I record both the date the session started, as well as the date it ended, you have access to the duration of your training, which is always interesting data.

                When you select a workout, you have access to a detailed report which indicates all the sets, repetitions and performances linked to the session.`,
                preferencesTitle: `Preferences`,
                preferencesContent: `Finally, a preferences menu is accessible at the top right of the application. It allows to :`,
                preferencesList: `- Enable or disable dark mode
                - Select a color theme (between blue and orange in V1)
                - Choose the unit of weight between kilogram and pounds`,
                preferencesContent2: `Regarding the weight unit, you should know that regardless of the user's choice, the data will be saved in kilograms in the database. It is only in the display and when saving that the values will be converted or not.`,
                copilotTitle: `Feedback on Github Copilot`,
                copilotContent: `I used this project to test Github Copilot with its trial period. My opinion is extremely positive and I am convinced that AI tools of this kind will become even more essential for developers in the coming years.

                Copilot's auto-completion is impressive and has often saved me a lot of time. For example, I just had to write <i>convertKgToLb</i> as the function name for the tool to generate the entire logic for me. In some cases, I didn't even need to do any coding or search for answers on Stackoverflow.
                
                It was also possible for me to generate comments for certain classes and functions. At any time, we can select code to ask Copilot to explain it to us, document it, or generate tests. We can also open a command prompt to ask Copilot to generate a specific code for us.`,
                conclusionTitle: `Conclusion`,
                conclusionContent: `I loved learning and developing my first mobile application with React Native, especially when I know that the application will actually serve me.
                The whole development process was very smooth and I never found myself stuck on one topic for long. Expo is a very interesting library that makes development very accessible because it offers a number of features and makes building applications much easier.
                
                Since I plan to use Kaisen Workout frequently, I will likely improve the app with updates. I already have some ideas in mind for a potential V2, such as online synchronization, the possibility of adding notes on sets and sessions, or even having graphs to show the evolution of performances.`,
            },
        },
        rankingApp: {
            title: 'RANKING APP',
            description: `Web application allowing users to create their own templates and tierlists.
            Using <a href="https://clerk.com/" target="_blank">Clerk</a> for authentication and <a href="https://cloudinary.com/" target="_blank">Cloudinary</a> for image management. Security according to the <a href="https://owasp.org/" target="_blank">OWASP</a> recommendations and <u>fully responsive</u>.
            Code is public and available by clicking <a href="https://github.com/mickael-lalanne/ranking-app/" target="_blank">here</a> !`,
            resume: `Web application to create templates and tierlists.<br>
            Front-end with Typescript and React. Back-end with .NET and PostgreSQL.`,
            skills: {
                one: 'Personal project',
                two: 'C# backend with .NET and PostgreSQL database',
                three: 'Typescript frontend with React / Redux',
                four: 'Unit tests with Jest, end to end tests with Cypress'
            },
            details: {
                summary: 'Summary',
                inShortTitle: 'In short',
                inShortList: `- Typescript front-end with <a href="https://fr.react.dev/" target="_blank">React</a> (and <a href="https://redux.js.org/" target="_blank">Redux</a> for state management)
                - C# back-end with .NET (<a href="https://dotnet.microsoft.com/en-us/apps/aspnet" target="_blank">ASP.NET Core</a>)
                - PostgreSQL database (<a href="https://neon.tech/" target="_blank">Neon</a> in prod)
                - Authentication with <a href="https://clerk.com/" target="_blank">Clerk</a>
                - Image management with <a href="https://cloudinary.com/" target="_blank">Cloudinary</a>
                - Security according to the <a href="https://owasp.org/" target="_blank">OWASP</a> recommendations
                - Automating testing and deployment on <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html" target="_blank">AWS Elastic Beanstalk</a> with <a href="https://docs.github.com/en/actions" target="_blank">Github Actions</a>
                - Unit tests with <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">Jest</a> and <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">Testing Library</a>
                - End to end tests with <a href="https://www.cypress.io/" target="_blank">Cypress</a>`,
                inShortContent: 'Ranking App is a web application allowing users to create their own templates and tierlists. First, they create templates indicating a name, tiers and elements they wish to rank. Then, they use these templates to create tierlists. They can save their ranking and even download it as a PNG image.',
                inShortCode: `All code is public and available at the following address : <a href="https://github.com/mickael-lalanne/ranking-app/" target="_blank">github.com/mickael-lalanne/ranking-app</a>`,
                whyTitle: 'Why this project ?',
                whyContent: `I landed in Quebec at the end of October, and at the beginning of November my job hunting began. I quickly realized that finding a front-end only opportunity with Vue.js may be complicated.
                
                However, I received the first feedback from what will become my next company: Stratejia. Like many companies in Quebec, their technology stack revolves around React and .NET, two technologies that I do not master. So I decided to take this <a href="https://www.youtube.com/watch?v=4RKuyp_bOhY" target="_blank">first course</a> to show my determination. After completing the tutorial and <a href="https://github.com/mickael-lalanne/ranking-app-react" target="_blank">publishing it on Github</a>, the project speaks to me and the desire to make a finished and personalized version comes to me.

                This is when the Ranking App adventure begins and will keep me busy every day for the next 2 months. `,
                authImageTitle: `Authentication and Image Management`,
                authImageContent: `<a href="https://daily.dev/" target="_blank">daily.dev</a> is a web application that I use for my technology watch. It allowed me to draw my attention to two libraries that I had wanted to use for a while. Both offer an attractive free plan, so Ranking App was the perfect opportunity to give it a try.`,
                authTitle: `Authentication with Clerk`,
                authContent: `<a href="https://clerk.com/" target="_blank">Clerk</a> is an authentication platform allowing you to connect via password or social network (Google, Facebook, etc.), but also sending codes by e-mail or SMS. The platform also allows access to an online dashboard to manage its user base.

                I really liked using Clerk, its implementation is easy, fast and customizable. The library allowed me to save a lot of time and to concentrate even more on the other aspects of my application.
                
                Looking back, I nevertheless think that Clerk is not the optimal choice for a .NET application, because the library does not provide an SDK for this technology. <a href="https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-8.0&tabs=visual-studio" target="_blank">Identity</a>, perfectly integrated with .NET and the Microsoft ecosystem, would certainly have been a better choice.
                However, for a front-end only application, or with a Node.js server, I would not hesitate to reuse Clerk.`,
                imageTitle: `Image management with Cloudinary`,
                imageContent: `When the user creates Templates in Ranking App, he must choose images which must then be ranked in a Tierlist. Therefore, the images need to be hosted somewhere.
                The AWS S3 service would have largely fulfilled this role and would certainly also have been a wiser choice. Cloudinary offers much more than storing images, the platform also allows you to transform, optimize and even analyze image or video media. Lots of services that I don't use in Ranking App.
                However, its implementation is simple, fast, and secure. So I keep this library in mind for future projects that might require more than media storage.`,
                UiUxTitle: `Responsive and UX Design`,
                UiContent: `From a UI point of view, the application is fully responsive :`,
                UxContent: `From a UX point of view, here are the different elements that I implemented to improve the user experience :`,
                UxList: `- Confirmation popup when a user wants to delete a template. We explain to him that deleting a template also deletes ALL associated tierlists. As a result, we are forced to manually write the template name to validate the deletion.`,
                UxList2 : `- The same goes for deleting a tierlist, without having to manually write the name of the tierlist because its deletion remains less important than a template. From a code perspective, the React component used is the same.`,
                UxList3 : `- Loading indicator when retrieving the list of templates and tierlists on the server side.`,
                UxList4 : `- Loading indicator when adding, modifying, and deleting a template or tierlist, <b>also preventing any possible user interaction</b>.`,
                UxList5 : `- When adding a tier, you are allowed to select only the available tiers.`,
                UxList6 : `- Info message when no template or tierlist exists.`,
                UxList7 : `- Info message on the tierlists page when no template exists (the add button is then disabled).`,
                UxList8 : `- D&D supported both on browsers AND on touch screens thanks to the <a href="https://react-dnd.github.io/react-dnd/about" target="_blank">react-dnd library</a>.`,
                testsTitle: `Tests`,
                unitTestsTitle: `Unit tests`,
                unitTestsContent: `To unit test Ranking App, I chose <a href="https://jestjs.io/fr/" target="_blank">Jest</a>, a testing framework that I used a lot in a professional environment. However, <a href="https://redux.js.org/usage/writing-tests#ui-and-network-testing-tools" target="_blank">on the Redux recommendations</a>, I coupled it with the <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">React Testing Library</a>.

                I had some difficulties in implementing it at first because the Testing Library <a href="https://testing-library.com/docs/guiding-principles/" target="_blank">philosophy</a> is different from what I was used to doing. Here, we position ourselves from the perspective of the end user: we base ourselves on DOM elements rather than on React components. As a result, we do not have access to the state of the application. For example, <b>instead of checking that our “color” variable has the value “red”, we instead ensure that the CSS applied to our DOM element has the value “red” in its “background-color” property</b>.
                
                Finally, I think this approach is a very good practice. Once implemented well, I have no doubt that it will be more effective than testing the application from a developer perspective.
                
                The coverage is far from perfect but I remain satisfied because it covers the parts of the code that I consider important. This is still more than enough for a personal project.`,
                e2eTitle: `End to end test`,
                e2eContent: `To test Ranking App end-to-end, I went with <a href="https://www.cypress.io/" target="_blank">Cypress</a>. The tests were separated into 3 parts, one for each page: the home page, the Templates page and the Tierlists page.
                Here is what I find interesting to note:
                
                    <span>- <u>Authentication management</u> : be careful to only connect once at the start of the tests. Between each test, we use the <code>beforeEach</code> hook to keep cookies with <code>cy.session</code>. As a result, we avoid reaching the Clerk limit as specified in <a href="https://clerk.com/docs/testing/cypress#test-signed-in" target="_blank">their documentation</a>.</span>
                    <span>- <u>Snapshot comparison</u> : using the <a href="https://github.com/cypress-visual-regression/cypress-visual-regression" target="_blank">cypress-visual-regression</a> plugin to detect potential visual regressions. Base snapshots are stored in the <a href="https://github.com/mickael-lalanne/ranking-app/tree/main/ClientApp/cypress/screenshots/base" target="_blank">cypress/screenshots/base</a> folder.</span>
                    <span>- <u>Tests independence and integrity</u> : each test must be able to run independently of the others. This is done by calling a specific route from the server which deletes everything attached to the test account. Therefore, we are sure that all tests will start with the same basis.</span>
                We also mock the server response for certain parts using <code>cy.intercept</code>. This is for example the case for the Tierlists page which requires having at least one template to be able to be used.`,
                e2eCypressContent: `Overview of running tests in the cypress console :`,
                gaTitle: `Github Actions`,
                gaContent: `My technical watch also allowed me to discover Github Actions, a continuous integration and continuous delivery (CI/CD) tool. Until then, I had only used Jenkins or Azure Pipeline professionally.

                So I took advantage of this personal project to test Github Actions by:
                    <span>- automatically deploying on <a href="https://aws.amazon.com/elasticbeanstalk/" target="_blank">AWS Elastic Beanstalk</a> when code is published on the prod branch <i>(<a href="https://github.com/mickael-lalanne/ranking-app/blob/main/.github/workflows/deployment.yml" target="_blank">see this file</a>)</i></span>
                    <span>- running unit tests with jest, regardless of the branch on which the code is published. A downloadable coverage artifact is also generated <i>(<a href="https://github.com/mickael-lalanne/ranking-app/blob/main/.github/workflows/deployment.yml" target="_blank">see this file</a>)</i></span>
                
                I would also have liked to automate end-to-end testing with Cypress. However, this requires access to a PostgreSQL database. Such a case would therefore have required a full-fledged dev environment, which is a little disproportionate in terms of costs for a project whose sole purpose is to be present in my portfolio. So I was content to run the end to end tests manually and locally.`,
                securityTitle: `Security aspect`,
                securityContent: `At the 2 companies I knew when making Ranking App, security has always occupied an important place. <a href="https://owasp.org/" target="_blank">OWASP<a/> is an international organization focused on improving software security. Along with its recommendations, here are the concepts I applied and find interesting to share :`,
                securityList: `- Never have sensitive data visible directly in the code (like api keys or secret keys). To do this, I used Github environment variables, the ASP.NET <a href="https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-8.0&tabs=windows#secret-manager" target="_blank">Secret Manager</a> tool locally, and the environment variables of the EC2 machine in production.`,
                securityList2: `- Prevent access to the API by unauthenticated users.
                On the client side, I added the <a href="https://www.axios.com/" target="_blank">Axios</a> library to implement middleware for all my requests in order to populate the Authorization header with the token returned by Clerk <i>(<a href="https://github.com/mickael-lalanne/ranking-app/commit/c9e96c7a4ac71d2b87b1d81238e940c2bf665669#diff-b93619a54685643f8e49eb74c560eaee565465772a5175249e8615906c2c07e7" target="_blank">see this commit</a>)</i>.`,
                securityList3: `On the server side, I check this token to confirm the identity of the user and prevent access to the Controllers to those who are not authenticated. For this I use the <code>[Authorize]</code> attribute <i>(<a href="https://github.com/mickael-lalanne/ranking-app/commit/b0bef71922a3c62867ce1795e47107bde17f5166#diff-0b69b473fe937040615d69f606751f61ddbc2e3a1849360ff2456c22afe88c0b" target="_blank">see this commit</a>)</i>.`,
                securityList4: `- To avoid any <a href="https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html#:~:text=Insecure%20Direct%20Object%20Reference%20(IDOR,allowed%20to%20access%20specific%20data." target="_blank">IDOR</a> vulnerability (present in the OWASP top 10), I ensured that users can only access THEIR templates and THEIR tierlists. Initially, I passed the userId as a parameter to my requests, which is bad practice because a malicious individual could change this value to retrieve, modify or delete templates that do not belong to them. So I made the following changes:
                    <span>- Server side: I rely on the authenticated user to retrieve their ID, and I check at each route that what they are trying to retrieve, modify or delete really belongs to them. If this is not the case, I return a 403 error: forbidden access. <i>(<a href="https://github.com/mickael-lalanne/ranking-app/commit/aa20fed59212ac70923689961b00f55d57df4208" target="_blank">see this commit</a>)</i>.</span>
                    <span>- Client side: I simply stop sending the userId parameter to the server.</span>`,
                securityList5: `- Still on OWASP recommendations, use <a href="https://securityheaders.com/" target="_blank">securityheaders.com</a> to add secure headers to the application.
                    <span>- Ranking App score before adding headers :</span>`,
                securityList6: `<span>- Ranking App score after adding headers :</span>`,
                sslTitle: `Mickaël against SSL`,
                sslContent: `Trying to have Ranking App accessible at <i>ranking-app.mickael-lalanne.fr</i> was the longest and most difficult part of the project. If the application is not currently available online, this is mainly due to the costs associated with HTTPS hosting.

                Note that I already pay for a domain name and hosting with a certificate for the address <i>mickael-lalanne.fr</i>. It was therefore not an option for me to pay for a new certificate, I wanted to use mine.
                
                I still managed to implement the 2 following solutions, but neither satisfied me :
                - <u>Deployment with AWS Elastic Beanstalk on a single EC2 instance</u>
                I followed the following Amazon documentation: <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/SSLNET.SingleInstance.html" target="_blank">Terminating HTTPS on Amazon EC2 instances running .NET</a>. Unfortunately, the browser detected that the certificate was self-generated and displayed the following warning message: <i>ERR_CERT_AUTHORITY_INVALID</i>.
                - <u>Deployment with AWS Elastic Beanstalk on a load balancer</u>
                After days of searching, trying things, and getting stuck, I finally got what I wanted by following the <a href="https://medium.com/@chiragmehta900/adding-a-custom-domain-for-the-aws-elastic-beanstalk-application-using-route-53-1fd89f204651" target="_blank">Adding a custom domain for the AWS Elastic Beanstalk application using Route 53</a> tutorial.
                Problem: after a few days, I realize that the price is almost 3 times higher than that of a single instance. It would have cost me around €30 per month, which is too expensive for this kind of project.
                
                I had also considered having the app accessible only via HTTP, but this was not possible with Clerk. In production mode, the authentication platform only works in HTTPS.`,
                conclusionTitle: `Conclusion: What I learned`,
                conclusionSubtitle1: `.NET and hosting`,
                conclusionContent1: `It may seem silly, but I realized that for a .NET project (and this is also the case for a Node.js project), you need to have a machine that is running constantly and therefore pay for hosting.
                If Ranking App really had to be accessible online, <b>I would certainly opt for a fully serverless environment</b>, based on AWS Lambda and API Gateway for example. This would avoid having to pay for a machine that is constantly running, and the costs would only be linked to actual usage, such as the number of calls to the API.`,
                conclusionSubtitle2: `Prioritization and organization`,
                conclusionContent2: `I quickly realized that if I wanted to implement EVERY idea that came into my head, the project would still be in progress and would probably never have seen the light of day. So I had to make choices, prioritize certain tasks and abandon others. I still noted a few ideas that I would like to implement for a potential V2, such as:
                - Make Ranking App a PWA (Progressive Web App)
                - The possibility of choosing a color for each of its thirds
                - Error management with a monitoring tool like <a href="https://sentry.io/welcome/" target="_blank">Sentry</a> or <a href="https://newrelic.com/fr" target="_blank">New Relic</a>
                - Improve test coverage
                - Add more server-side checks (for example, that the name field of a template is not empty)`,
            }
        },
        tripleTriad: {
            title: 'TRIPLE TRIAD',
            description: `Reproduction of the <i>“Triple Triad”</i> minigame from the <i>Final Fantasy</i> universe. Developed in typescript with Vue.js, this version of the game allows you to:
            - Play in local mode, where two players choose their deck before playing on the same screen.
            Later, the player will have the possibility to play online or against an AI. Take a look at the <a href="https://www.mickael-lalanne.fr/triple-triad/roadmap" target="_blank">roadmap</a> to see more!
            - Manage your own decks: create, edit and delete your decks as you wish.
            Code is public and available here: <a href="https://github.com/mickael-lalanne/triple-triad" target="_blank">github.com/mickael-lalanne/triple-triad</a>`,
            resume: `Reproduction of the <i>“Triple Triad”</i> minigame from the <i>Final Fantasy</i> universe.<br>
            Front-end with Typescript, Vuetify, Vue Router, Pinia. Back-end with AWS Amplify and GraphQL.`,
            link: 'Try the game yourself by clicking here!',
            skills: {
                one: 'Personal project',
                two: 'Deck management in GraphQL and authentication with AWS Amplify',
                three: 'Typescript, Vue.js, Vuetify, Vue Router, Pinia'
            }
        },
        hcms: {
            title: 'INTUIFACE HCMS',
            description: `Web application developed with Vue.js allowing users to upload and edit content for their experiences. In short, HCMS allows you to:
            - Create well-structured content for a variety of media (images, videos, documents, colors, date, …)
            - Use the “variant” notion to identify fields that change according to their context
            - Handle users and workflow to control the edition and the publication of data`,
            resume: `Upload and content edition.<br>
            Front-end with Vue.js, Vuetify and Vuex.<br>
            Back-end with AWS (Lambda, S3).<br>
            Unit (Jest) and end to end (Cypress) tests.`,
            skills: {
                one: 'Team work',
                two: 'Vues.js, Vuetify, Vuex',
                three: 'Backend with AWS (Lambda, S3)',
                four: 'Unit tests with jest, end to end tests with cypress'
            },
            details: {
                dashboardTitle: 'DASHBOARD',
                dashboardContent: `From the dashboard, the admin can change his base name, description or image. He can also add or delete users from his base, and manage permissions.
                For each user, the admin can define the 4 following permissions:
                - <u>Dashboard</u>: change base parameters and invite users.
                - <u>Structure</u>: change the structure data, including the use of variants.
                - <u>Content</u>: Add / update / delete base content.
                - <u>Use in experience</u>: use this base in Composer.`,
                structureTitle: 'STRUCTURE',
                structureContent: `The structure allows the user to define the type of content he wants to use in his experience and the way he wants to organize it. He can add as many components he wants. This can be:
                - <u>A group</u>: a single instance of related properties
                - <u>A collection</u>: a list of items that will share the same set of properties`,
                propertyDetails: 'More details on property types here',
                variantTitle: 'The concept of variant',
                variantContent: `In the structure tab, the user can also define variants. A Variant is a context that can change the value of one or many properties. For each variation of a variant, the user can specify a new value for a property.
                For instance, a <i>Lang</i> variant can have the following variations: <i>English</i>, <i>French</i>, …`,
                contentTitle: 'CONTENT',
                importTitle: 'Import',
                importContent: `Several items of a collection can be created at once with an import mechanism.`,
                importDetails: 'More details on the import here',
                workflowTitle: 'The concept of workflow',
                workflowContent: `The workflow allows the user to work at his own pace, ensuring that only completed content is sent to an Intuiface Experience. It can also be a way for a user to prepare all the content, and put it in the “Stage for publishing” state to have it checked by another user before publishing it.`,
                workflowDetails: 'More details on the workflow concept here'
            }
        },
        analytics: {
            title: 'INTUIFACE ANALYTICS - CHART & DASHBOARDS',
            description: `Web application developed with Angular allowing users to compare performance and visualize trends in charts using the data collected by their Intuiface experiences. Charts are entirely customizable and can be displayed in any way in the dashboard with drag & drop or resizing. You can also share your dashboards with a link to access them in a readonly version.`,
            resume: 'Angular web application allowing users to compare performance and visualize trends in charts. Node.js back-end with Mongo database.',
            skills: {
                one: 'Team work',
                two: 'Angular, Highcharts',
                three: 'Mongodb database',
                four: 'End to end tests'
            },
            details: {
                presentationTitle: 'PRESENTATION',
                presentationContent: `Analytics - Chart & Dashboards is a web application directly  accessible on his <a href="https://my.intuiface.com/" target="_blank">my.intuiface</a> account.
                This is my first professional project and I had the opportunity to be involved from the start of the development.
                Even after the release, I kept working on the project to add new features like <b>“Gauge”</b> and <b>“Single Value”</b> charts.
                The application was developed with the <b>Angular</b> framework. For the charts, we used the <a href="https://www.highcharts.com/" target="_blank">Highcharts</a> library.`,
                dashboardTitle: 'DASHBOARD PART',
                dashboardContent: `The dashboard allows the visualization of customer data. The first time an user logs in, 2 dashboards are automatically created:
                <span class="ml-10">- one dashboard with default charts based on THEIR data.</span>
                <span class="ml-10">- a second dashboard called “Tradeshow” base on Intuiface data on a specific date range that will always have data.</span>
                It's possible to move charts wherever you want with <b>drag & drop</b>, but it's also possible to <b>resize</b> them. The user has the possibility to <b>download each chart in the following formats</b>: png, jpeg, svg, pdf, csv, xls.
                Note that tiering rules exist and can impact the number of dashboards and the number of charts a user can create.`,
                chartEditorTitle: 'CHART EDITOR',
                chartEditorContent: `The chart editor allows you to edit charts. You can drag & drop data point parameters to filter or display values. It's also possible to:
                - Specify a <b>date range</b> or use the one defined in the dashboard part
                - Choose a <b>chart type</b>: Line, Area, Bar, Column, Pie, Radar, Single Value and Gauge
                - Change options like <b>automatic refresh</b> of values, <b>data formatting</b> (prefix, suffix, multiplier) or chart-specific options`,
                templateLibraryTitle: 'CHART TEMPLATE LIBRARY',
                templateLibraryContent: `The Chart Template Library offers the user some ready to use configurations for his charts. You can add a chart directly to the dashboard or edit it in the Chart Editor before. Each template is <b>stored in a database</b> with a version number.`,
                shareTitle: 'DASHBOARD SHARING',
                shareContent: `Another feature is the dashboard sharing via <b>URL</b> or <b>iframe</b>. The settings popup allows us to choose if we want to display or not the name, the description or the logo of the dashboard. But we can also specify a date range or the charts to share. Anyone with the link will be able to access a read only version of the dashboard.`
            }
        },
        playerNextGen: {
            title: 'INTUIFACE PLAYER NEXT GEN',
            description: `Player Next Gen allows users to visualize Intuiface experiences on any platform. The application is developed with the latest Angular version. On this great project I joined along the way, I was in charge of the Youtube, Webcam, and linear assets.`,
            resume: `Allows users to visualize Intuiface experiences on any platform..<br>
            Cross-platform development (web, Android, iOS, Brightsign, ...) with Angular. Unit tests with Jest.`,
            skills: {
                one: 'Angular',
                two: 'Cross-platform development: web, Android, iOS, Brightsign, Samsung Kiosk, …',
                three: 'Unit tests with jest'
            },
            details: {
                presentationTitle: 'WHAT IS THE PLAYER NEXT GEN',
                presentationContent: `With Intuiface, users have the possibility to create no-code applications. These are called <i><b>experiences</b></i>. With an interface similar to Photoshop, you can easily add <i><b>assets</b></i> (images, videos, text, documents, …) and interact with them.
                <br>The <i><b>Player</b></i> allows you to play experiences on any platform (web, Android, iOS, Brightsign, Samsung Kiosk, …). To make this possible, we use an .ifx file (similar to a .xml file) to find out where each element should be displayed, but also which behavior it should adopt.
                <br>The project is made in <b>typescript</b> with the latest <b>Angular</b> version. Unit tests are always written for each component. Since it's a large project (up to 9 developers in parallel), we follow a strict process. Each feature is developed in a separate branch and a <b>pull request</b> must be submitted once the development is complete. Code review is systematically done and the PR should be accepted by most of the developers before being merged.
                <br>For my part, I took care of the implementation of different assets.`,
                youtubeTitle: 'YOUTUBE ASSET',
                youtubeContent: `Youtube asset allows to display any Youtube video.During development, I used the official Angular library: <a href="https://github.com/angular/components/tree/main/src/youtube-player" target="_blank">youtube-player</a>. Youtube videos must be able to be displayed in the Player in different source formats (complete url, short url, only the id, …). A <b>regular expression</b> is used to retrieve the id of the video, no matter the format.
                <br><span class="ml-10"><u>The asset must trigger events when</u>:</span>
                - Video is ended
                - Video is paused
                - Video is rewinded
                - The video reaches a certain time defined by the user
                - Video started to play
                - Video timeline has changed
                - Volume has changed
                <br><span class="ml-10"><u>When the asset listen some events to be able to</u>:</span>
                - Change the source of the video
                - Pause the video
                - Play the video
                - Stop the video
                - Rewind the video
                - Change the time of the video
                - Change the volume
                - Toggle play / pause
                - Enable or disable the loop mode`,
                gaugeTitle: 'LINEAR GAUGE ASSET',
                gaugeContent: `The linear gauge asset can be used to visually represent one value within a range of values. This value can vary dynamically during your presentation, enabling animation effects. For example, you can use it to display progress in your experience or to animate interactive charts.
                <br>This asset consists of two images you specify:
                <span class="ml-10">- one image corresponding to the empty gauge</span>
                <span class="ml-10">- one image corresponding to the full gauge</span>`,
                gaugeContent2: `You can provide any type of image, as long as the progression is in a straight line (horizontal or vertical). You can set the fill direction in the asset properties.`,
                gaugeContent3: `To develop this asset, I mainly used the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path" target="_blank">clip-path</a> css property to display only a part of the image.`
            }
        },
        journal: {
            title: 'JOURNAL DU CAPITAINE',
            description: `Video games are my first passion, and writing is my second passion. I have naturally decided to make a website to bring together these two passions. Made with Wordpress, this website allows me to post articles related to video games.`,
            resume: `Video games are my first passion, and writing is my second passion. With Wordpress, I've decided to bring together these two passions by making a website.`,
            skills: {
                one: 'Personal project',
                two: 'Wordpress',
                three: 'Responsive'
            },
            link: 'journalducapitaine.fr'
        },
        apiExplorer: {
            title: 'API EXPLORER - TUTORIAL',
            description: `Internship report during my bachelor's year. The objective was to replace an onboarding tutorial created with Appcues for new users. The purpose was to no longer be financially dependent on the product and to have its own tutorial. I had to adapt to a large existing project and reproduce the old tutorial with new improvements, like the possibility of going back to previous steps.`,
            resume: `Internship report during my bachelor's year. Objective : replace an onboarding tutorial (created with Appcues) for new users.`,
            skills: {
                one: 'Adapt to an existing project',
                two: 'Javascript, jQuery',
                three: 'End to end tests'
            },
            details: {
                presentationTitle: 'PRESENTATION',
                presentationContent: `The API Explorer allows the creation of an interface for any REST request. With this interface, a running Intuiface experience can read and write dynamically on the data source and / or the device accessible via this web service. The API Explorer allows access to dozens of thousands of public and private apis.There is everything: movies list, weather forecast, the latest pictures from NASA and everything you can find on the internet. The majority are free while others may require an access fee. Some may be private and internal to your organization. It doesn't matter, all of them are accessible in Intuiface.`,
                objectiveTitle: 'INTERNSHIP OBJECTIVE',
                objectiveContent: `The tutorial of the API Explorer was made with Appcues, a paying software that helps companies to implement tutorials for their customers. Even without coding knowledge, users can create step by step procedures and custom messages to onboard their customers.
                The purpose of this mission was to have our own tutoriel to improve the product maintenance and to no longer be financially dependent on Appcues. We took advantage of the redesign of the tutorial to integrate some changes:
                - <u>Client side</u>: the possibility to come back to a previous step</u>
                - <u>Server side</u>: tutorial content will be now stored in a database to allow people in the team to change it without coding</u>`,
                technologiesTitle: 'USED TECHNOLOGIES',
                technologiesContent: `<b>HTML5</b>, <b>CSS</b> with <b>less.js</b>, <b>Javascript</b>, <b>jQuery</b>.
                I used the iziModal library for a while to finally realize she was too restrictive.
                The advantage of the library was that it allowed you to go from step to step automatically.
                However, there were so many actions to consider when changing steps (animations to add or delete, show or hide the black background, call requests, send the current step to the server, …) that I found myself rewriting the whole process.
                Moreover, it was not possible to position steps in relation to other elements. So, I decided to write the process myself, trying to make the code as short and readable as possible.
                For positioning, I used the <b>jQueryUI</b> library which was already installed on the project.
                To manage the <b>MongoDB</b> database, I first used <b>Studio 3T</b> during its trial version. Once the trial version finished, I switched to <b>Robo 3T</b>. For end to end tests, I used the <b>Codeceptjs</b> and <b>Nightmare.js</b> libraries.`,
                designTitle: 'DESIGN',
                designContent: `Regarding the design of the tutorial, it remained mostly the same as the one created with Appcues.
                At first, I reproduced exactly the same tutorial as the existing one.
                As the mission progresses, ideas and improvements have been found (tooltips enlargement, animations, adding a previous button, …). Mockups were provided to me by the UX Designer and have evolved over time.
                The elements inside the steps have been positioned with <b>flexbox</b>. Colors used for the tutorial have been written in the constant.less file to facilitate maintenance.
                The differences with the previous tutorial are:
                <span class="ml-10">- adding a <b>previous button</b></span>
                <span class="ml-10">- <b>new transitions effects</b> between the main steps (side transitions) and between the tooltips (opacity transition)</span>
                <span class="ml-10">- <b>an animation effect</b> (scale and highlight) to attract the user's eye</span>`,
                designContent2: `The positioning of the stage is done in relation to the element that needs to be explained.
                To do this, I used the <b>jQueryUI</b> framework and especially its <i>position()</i> function.`,
                testsTitle: 'END TO END TESTS',
                testsContent: `Once the new tutorial finished, I made end to end tests with screenshots comparison by using the <b>CodeceptJS</b> library.
                The goal is to check if the tutorial works correctly from beginning to end.
                <span class="ml-10">I've created several scenarios for my tests:</span>
                - user follows the normal path of the tutorial
                - user skips the first part to go directly to the second
                - user clicks on the “Skip tutorial” button
                - user clicks on the “Home” button during the second part
                - user clicks on the hamburger button instead of the “Restart Tutorial” button
                - user clicks on the “right panel” buttons
                <span class="ml-10">I also checked that:</span>
                - footer buttons (download, share and machine learning) are disabled
                - previous button is working
                - all the animations are showing and hiding correctly
                - the tutorial doesn't restart when the user makes a new request`,
                conclusionTitle: 'CONCLUSION',
                conclusionContent: `This task was the longest and most important that I had to carry out during my internship. It asked me a lot of autonomy, but also a lot of time to understand the existing code and adapt to it.
                In the end, the company now has a tutorial that is more easily maintainable. Thanks to a database, it's possible to change step content without coding. Finally, Intuiface is no longer dependent on Appcues.
                Client side, the tutorial is now more reactive and allows the users to go back at a previous step.`
            }
        },
        myIceTool: {
            title: 'MY ICE TOOL - STUDENT PROJECT',
            description: `My Ice Tool is a student project I did during my professional degree in Gap. The objective was to make a website to visualize the climbing conditions on icefalls in specific places. Our team had to imagine the visual identity, manage the authentication, add comments, the use of the Google Maps api to draw areas and set points of interest, store temperatures history in the database with a cron, …`,
            resume: `Student project to visualize the climbing conditions on icefalls in specific places.
            Using the Laravel PHP framework, the Google Maps API, and a MySQL database.`,
            skills: {
                one: 'PHP Laravel framework',
                two: 'Google Maps API',
                three: 'Cron and MySQL database'
            },
            details: {
                presentationTitle: 'PRESENTATION',
                presentationContent: `<b>My Ice Tool</b> is a student project I did during my bachelor in Gap. The objective was to make a website to visualize climbing conditions on icefalls in specific places.
                <br><u>Our team had to</u>:
                - Create the graphic identity of the site.
                - Manage the authentication, with the possibility to <b>sign in with your Google or Facebook account</b>.
                - Use the <b>Google Maps api</b> to draw areas on a map and display points of interest
                - Handle adding and visualizing comments.
                - View last temperature history for each icefall. To do this, a <b>cron</b> is used daily to call a weather report api to retrieve the latest temperatures and to store them in a <b>MySQL</b> database.
                <br>This project has been made with the PHP framework <b>Laravel</b> with a team made up of 3 developers and 1 graphic designer.`,
                registrationTitle: 'REGISTRATION PAGE',
                accountVerificationTitle: 'Login/Registration with account verification',
                accountVerificationContent: `There is a login and registration form on the main page. Once the registration form has been correctly completed, the information are stored in the database.
                The user also has the possibility to register with a Google account. For this, we retrieve his name, surname and mail directly with the Google+ API, and he's asked if he wants to subscribe to the newsletter.`,
                loginTitle: 'Google/Facebook login',
                loginContent: `The users can login directly with his Google or Facebook account without entering their credentials. We have to use the Facebook and Google+ api.`,
                passwordTitle: 'Password safety',
                passwordContent: `There are 3 strength levels for the password:  weak, correct, good. For the user to register, the password must:
                - Be at least at the correct level
                - Have at least 8 characters
                - Contain at least 1 digit
                - Contain at least 1 uppercase
                - Prohibit letter sequences`,
                mainPageTitle: 'MAIN PAGE',
                apiTitle: 'Google Map API, Display areas and icefalls',
                apiContent: `During the loading of the main page, the map must be placed on the preferred icefall of the connected user. Then, <b>AJAX requests</b> are used to display areas and icefalls available in the scope. By clicking on an icefall, it's possible to know its coordinates, its current temperature, its level of danger, and display temperature history as well as comments. `,
                searchTitle: 'Search for icefalls with autocompletion',
                searchContent: `When the user starts typing the name of an area or an icefall in the search bar, a result list is displayed in real time to autocomplete the research.`,
                historyTitle: 'TEMPERATURE HISTORY',
                historyContent: `When the user clicks on “Temperature History”, we retrieve in the database the history of the selected icefall and we display it in a table.`,
                commentsTitle: 'COMMENTS',
                displayCommentsTitle: 'Comments display',
                displayCommentsContent: `When the user clicks on “Comments”, we retrieve in the database the comments of the selected icefall and we display them in a list as above. We show: the user name, the date he posted the comment, the content, the photo(s) available.`,
                addCommentsTitle: 'Add comment',
                addCommentsContent: `When the user clicks on “Comments”, he has the possibility to add a comment, accompanied or not by one or more photos. His name and the date he posted the comment are automatically retrieved.`,
                about: 'ABOUT PAGE'
            }
        }
    },
    contact: {
        text: `Do you have a question ? Feel free to message me !`,
        subject: 'Subject',
        message: 'Message',
        send: 'Send'
    }
}
