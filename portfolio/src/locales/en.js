import { en } from 'vuetify/locale';

export default {
    ...en,
    homepage: {
        shortPresentation: 'Hi, I\'m <h1>Mickaël Lalanne</h1>.<br> I\'m a web developer.',
        workButton: 'SEE MY WORK',
        presentationTitle: 'WHO\'S THERE ?',
        nameAndAge: 'Mickaël Lalanne, 26 years old',
        place: 'Québec, Canada',
        mail: 'mickael.lalanne03@gmail.com',
        work: 'Looking in Quebec.',
        workPrevious: 'Previously R&D Engineer for Intuiface.',
        hobbies: 'Video games, Video montage, Writing',
        career: {
            stratejia: {
                date: 'Since 2023',
                title: 'STRATEJIA',
                description: 'Arrived in Quebec City after obtaining a Working Holiday Permit, I was hired as a Full-stack Developer at Stratejia and worked in a team on .NET, Azure DevOps and Docker projects.'
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
        detail: 'DETAIL',
        by: 'By'
    },
    projects: {
        title: 'Projects',
        tripleTriad: {
            title: 'TRIPLE TRIAD',
            description: `Reproduction of the <i>“Triple Triad”</i> minigame from the <i>Final Fantasy</i> universe. Developed in typescript with Vue.js, this version of the game allows you to:
            - Play in local mode, where two players choose their deck before playing on the same screen.
            Later, the player will have the possibility to play online or against an AI. Take a look at the <a href="https://www.mickael-lalanne.fr/triple-triad/roadmap" target="_blank">roadmap</a> to see more!
            - Manage your own decks: create, edit and delete your decks as you wish.
            Code is public and available here: <a href="https://github.com/mickael-lalanne/triple-triad" target="_blank">github.com/mickael-lalanne/triple-triad</a>`,
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
            skills: {
                one: 'Personal project',
                two: 'Wordpress',
                three: 'Responsive'
            }
        },
        apiExplorer: {
            title: 'API EXPLORER - TUTORIAL',
            description: `Internship report during my bachelor's year. The objective was to replace an onboarding tutorial created with Appcues for new users. The purpose was to no longer be financially dependent on the product and to have its own tutorial. I had to adapt to a large existing project and reproduce the old tutorial with new improvements, like the possibility of going back to previous steps.`,
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
