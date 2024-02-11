import { fr } from 'vuetify/locale';

export default {
    ...fr,
    homepage: {
        shortPresentation: 'Salut, moi c\'est <h1>Mickaël Lalanne</h1>.<br>Je suis développeur web.',
        workButton: 'VOIR MON TRAVAIL',
        presentationTitle: 'QUI VA LÀ ?',
        cobeBlock: {
            about: 'À PROPOS',
            mail: 'mickael.lalanne03@gmail.com',
            writing: 'écriture',
            hobbies: 'passions',
            location: 'emplacement',
            name: 'prénom-nom',
            wellBeing: 'bien-être',
            jv: 'jeux-vidéo',
            work: 'travail-actuel',
            walk: 'marche',
            gym: 'sport',
            sleep: 'sommeil',
            dietetic: 'alimentation',
            informations: 'infos-personnelles'
        },
        career: {
            stratejia: {
                date: 'Depuis 2023',
                title: 'STRATEJIA',
                description: 'Arrivé dans la ville de Québec après avoir obtenu un Permis Vacances Travail, j\'ai été embauché en tant que Développer Full-stack chez Stratejia et travaille en équipe sur un projet .NET, Azure DevOps et Docker.'
            },
            intuiface: {
                date: '2018 - 2023',
                title: 'INTUIFACE',
                description: 'Suite à un stage de 6 mois chez Intuiface, j\'ai été embauché en tant qu\'Ingénieur R&D. Je travaille principalement en équipe sur des projets d\'application web (plus de détails dans la partie projets).'
            },
            licence: {
                date: '2018',
                title: 'LICENCE PROFESSIONNELLE MIW',
                description: 'Obtention de la licence professionnelle Activités et Techniques de Communication, spécialité Multimédia - Internet - Webmaster à l\'IUT de Gap.'
            },
            bts: {
                date: '2017',
                title: 'BTS SIO',
                description: 'Obtention du Brevet de technicien supérieur, Services informatiques aux organisations. Option b: Solutions Logicielles et Applications Métiers.'
            },
            bac: {
                date: '2014',
                title: 'BAC STI2D',
                description: 'Obtention du Baccalauréat Technologique STI2D: Sciences et technologies de l\'industrie et du développement durable. Spécialité: Innovation Technique et Éco-conception'
            }
        }
    },
    menu: {
        presentation: 'Présentation',
        projects: 'Projets',
        contact: 'Contact'
    },
    shared: {
        by: 'Par',
        close: 'Fermer'
    },
    projects: {
        title: 'Projets',
        detail: 'EN VOIR PLUS',
        noProject: {
            title: 'Il semblerait qu\'aucun projet ne corresponde à vos filtres.',
            subtitle: 'Faites plaisir à Mario en modifiant ou en effaçant vos filtres !'
        },
        filtering: {
            searchLabel: 'Recherche',
            searchPlaceholder: 'Ex: front-end, AWS, .NET, Intuiface ...',
            typeLabel: 'Projet',
            types: {
                personal: 'Personnel',
                professional: 'Profesionnel',
                student: 'Étudiant'
            }
        },
        rankingApp: {
            title: 'RANKING APP',
            description: `Application web permettant aux utilisateurs de créer leurs propres templates et tierlists.
            Utilisation de <a href="https://clerk.com/" target="_blank">Clerk</a> pour l'authentification et <a href="https://cloudinary.com/" target="_blank">Cloudinary</a> pour la gestion d'images. Application sécurisée selon les normes de l'<a href="https://owasp.org/" target="_blank">OWASP</a> et <u>entièrement responsive</u>.
            Code publique et disponible en cliquant <a href="https://github.com/mickael-lalanne/ranking-app/" target="_blank">ici</a> !`,
            resume: `Application web pour créer des templates et des tierlists.<br>
            Front-end avec Typescript et React. Back-end avec .NET et PostgreSQL.`,
            skills: {
                one: 'Projet personnel',
                two: 'Backend en C# avec .NET et base de données PostgreSQL',
                three: 'Frontend en Typescript avec React / Redux',
                four: 'Tests unitaires avec Jest, tests end to end avec Cypress'
            },
            details: {
                summary: 'Sommaire',
                inShortTitle: 'En résumé',
                inShortList: `- Front-end en Typescript avec <a href="https://fr.react.dev/" target="_blank">React</a> (avec utilisation de <a href="https://redux.js.org/" target="_blank">Redux</a> pour le store)
                - Back-end en C# avec .NET (<a href="https://dotnet.microsoft.com/en-us/apps/aspnet" target="_blank">ASP.NET Core</a>)
                - Base de données PostgreSQL (<a href="https://neon.tech/" target="_blank">Neon</a> pour la prod)
                - Authentification avec <a href="https://clerk.com/" target="_blank">Clerk</a>
                - Gestion d'images avec <a href="https://cloudinary.com/" target="_blank">Cloudinary</a>
                - Sécurité selon les recommandations de l'<a href="https://owasp.org/" target="_blank">OWASP</a>
                - Automatisation des tests et du déploiement sur <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html" target="_blank">AWS Elastic Beanstalk</a> avec <a href="https://docs.github.com/en/actions" target="_blank">Github Actions</a>
                - Tests unitaires avec <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">Jest</a> et <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">Testing Library</a>
                - Tests end to end avec <a href="https://www.cypress.io/" target="_blank">Cypress</a>`,
                inShortContent: `Ranking App est une application web permettant aux utilisateurs de créer leurs propres templates et tierlists. Dans un premier temps, ils créent des templates en indiquant un nom, des tiers et des éléments qu'ils souhaitent classer. Ensuite, ils utilisent ces templates pour créer des tierlists. Ils ont la possibilité de sauvegarder leur classement et même de le télécharger en image png.`,
                inShortCode: `Tout le code est publique et disponible à l'adresse suivante : <a href="https://github.com/mickael-lalanne/ranking-app/" target="_blank">github.com/mickael-lalanne/ranking-app</a>`,
                whyTitle: 'Pourquoi ce projet ?',
                whyContent: `J'arrive fin octobre au Québec, et début novembre commence ma recherche d'emploi. Je me rends rapidement compte que trouver une opportunité uniquement front-end avec Vue.js risque d'être compliqué.

                Je reçois néanmoins un premier retour de ce qui deviendra ma prochaine boite : Stratejia. Comme beaucoup d'entreprises au Québec, leur stack technologique tourne autour de React et .NET, deux technologies que je ne maîtrise pas. Je décide donc de suivre ce <a href="https://www.youtube.com/watch?v=4RKuyp_bOhY" target="_blank">premier cours</a> pour montrer ma détermination. Après avoir terminé le tutoriel et l'avoir <a href="https://github.com/mickael-lalanne/ranking-app-react" target="_blank">publié sur Github</a>, le projet me parle et l'envie d'en faire une version aboutie et personnalisée me vient.
                
                C'est à ce moment que l'aventure Ranking App commence et m'occupera chaque jour des 2 prochains mois.
                `,
                authImageTitle: `Authentification et Gestion d'images`,
                authImageContent: `<a href="https://daily.dev/" target="_blank">daily.dev</a> est une application web que j'utilise quotidiennement pour réaliser ma veille technologique. Elle m'a permis d'attirer mon attention envers deux librairies que je souhaitais utiliser depuis un moment. Les deux proposant un plan gratuit attrayant, Ranking App était donc l'occasion idéale pour essayer.`,
                authTitle: `Authentification avec Clerk`,
                authContent: `<a href="https://clerk.com/" target="_blank">Clerk</a> est une plateforme d'authentification permettant notamment de se connecter via mot de passe ou réseau social (Google, Facebook, …), mais aussi d'envoyer des codes par e-mail ou SMS. La plateforme permet aussi l'accès à un dashboard en ligne pour gérer sa base d'utilisateurs.

                J'ai beaucoup aimé utiliser Clerk, son implémentation est facile, rapide et personnalisable. La librairie m'a permis de gagner beaucoup de temps et de me concentrer encore plus sur les autres aspects de mon application.
                
                Avec du recul, je pense néanmoins que Clerk n'est pas le choix optimal pour une application .NET, car la librairie ne fournit pas de SDK sur cette technologie. L'utilisation d'<a href="https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-8.0&tabs=visual-studio" target="_blank">Identity</a>, parfaitement intégré à .NET et à l'écosystème Microsoft, aurait certainement été un meilleur choix.
                Toutefois, pour une application uniquement front-end, ou avec un serveur en Node.js, je n'hésiterai pas à réutiliser Clerk.`,
                imageTitle: `Gestion d'images avec Cloudinary`,
                imageContent: `Quand l'utilisateur crée des Templates dans Ranking App, il doit choisir des images qui devront ensuite être classées dans une Tierlist. De ce fait, les images ont besoin d'être hébergées quelque part.
                Le service S3 d'AWS aurait largement rempli ce rôle et aurait certainement été, lui aussi, un choix plus judicieux. En effet, Cloudinary propose bien plus que de stocker des images, la plateforme permet également de transformer, d'optimiser et même d'analyser des médias de type image ou vidéo. Plein de services que je ne me sers pas dans Ranking App.
                Toutefois, son implémentation est simple, rapide, et sécurisée. Je garde donc cette librairie en tête pour de prochains projets qui pourraient nécessiter plus que du stockage de média.`,
                UiUxTitle: `Responsive et UX Design`,
                UiContent: `D'un point de vue UI, l'application est entièrement responsive :`,
                UxContent: `D'un point de vue UX, voici les différents éléments que j'ai mis en place pour améliorer l'expérience utilisateur :`,
                UxList: `- Popup de confirmation quand un utilisateur souhaite supprimer un template. On lui explique bien que supprimer un template supprime également TOUTES les tierlists associées. De ce fait, on l'oblige à écrire manuellement le nom du template pour valider la suppression.`,
                UxList2 : `- Même chose pour la suppression d'une tierlist, sans devoir écrire manuellement le nom de la tierlist car sa suppression reste moins importante que celle d'un template. D'un point de vue code, le composant React utilisé est le même.`,
                UxList3 : `- Loading indicator quand on récupère la liste des templates et des tierlists côté serveur.`,    
                UxList4 : `- Loading indicator quand on ajoute, modifie, et supprime un template ou une tierlist, <b>empêchant également toute interaction possible de l'utilisateur</b>.`,
                UxList5 : `- Lors de l'ajout d'un tier, on autorise de sélectionner uniquement les tiers disponibles.`,
                UxList6 : `- Message d'info quand aucun template ou tierlist n'existe.`,
                UxList7 : `- Message d'info sur la page de tierlists quand aucun template n'existe (le bouton d'ajout est alors désactivé).`,
                UxList8: `- D&D supporté à la fois sur navigateur ET sur écrans tactiles grâce à la libraire <a href="https://react-dnd.github.io/react-dnd/about" target="_blank">react-dnd</a>.`,
                testsTitle: `Tests`,
                unitTestsTitle: `Tests unitaires`,
                unitTestsContent: `Pour tester unitairement Ranking App, j'ai choisi <a href="https://jestjs.io/fr/" target="_blank">Jest</a>, un framework de test que j'ai beaucoup utilisé en milieu professionnel. Toutefois, <a href="https://redux.js.org/usage/writing-tests#ui-and-network-testing-tools" target="_blank">sur les recommandations de Redux</a>, je l'ai couplé avec la librairie <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">React Testing Library</a>.

                J'ai eu quelques difficultés dans son implémentation au début car la <a href="https://testing-library.com/docs/guiding-principles/" target="_blank">philosophie</a> de Testing Library est différente de ce que j'avais l'habitude de faire. Ici, on se positionne du point de vue de l'utilisateur final : on se base sur les éléments DOM plutôt que sur les composants React. De ce fait, nous n'avons pas accès au state de l'application. Par exemple, <b>au lieu de vérifier que notre variable “color” a comme valeur “red”, on s'assure plutôt que le CSS appliqué à notre élément DOM a bien la valeur “red” dans sa propriété “background-color”</b>.
                
                Finalement, je pense que cette approche est une très bonne pratique. Une fois bien implémentée, je n'ai pas de doutes sur le fait qu'elle soit plus efficace que de tester l'application d'un point de vue développeur.
                
                Le coverage est loin d'être parfait mais je reste satisfait car il couvre les parties du code que je juge importantes. Cela reste amplement suffisant pour un projet personnel.`,
                e2eTitle: `Tests end to end`,
                e2eContent: `Pour tester Ranking App de bout en bout, je suis parti sur <a href="https://www.cypress.io/" target="_blank">Cypress</a>. Les tests ont été séparés en 3 parties, une pour chaque page : l'accueil, la page de Templates et la page de Tierlists.
                Voici ce que je trouve intéressant de noter :
                
                    <span>- <u>Gestion de l'authentification</u> : on fait attention à ne se connecter qu'une seule fois au début des tests. Entre chaque test, on utilise le hook <code>beforeEach</code> pour conserver les cookies avec <code>cy.session</code>. De ce fait, on évite d'atteindre la limite de Clerk comme précisé dans <a href="https://clerk.com/docs/testing/cypress#test-signed-in" target="_blank">leur documentation</a>.</span>
                    <span>- <u>Comparaison de snapshots</u> : utilisation du plug-in <a href="https://github.com/cypress-visual-regression/cypress-visual-regression" target="_blank">cypress-visual-regression</a> pour détecter de potentielles régressions visuelles. Les snapshots de base sont stockés dans le dossier <a href="https://github.com/mickael-lalanne/ranking-app/tree/main/ClientApp/cypress/screenshots/base" target="_blank">cypress/screenshots/base</a>.</span>
                    <span>- <u>Indépendance et intégrité des tests</u> : chaque test doit pouvoir être lancé indépendamment des autres. Pour ce faire, on appelle une route spécifique du serveur qui supprime tout ce qui est attaché au compte de test. Par conséquent, on est sûr que tous les tests commenceront avec la même base.</span>
                Aussi, on mock la réponse du serveur pour certaines parties en utilisant <code>cy.intercept</code>. C'est par exemple le cas pour`,
                e2eCypressContent: `Aperçu de l'exécution des tests dans la console cypress :`,
                gaTitle: `Github Actions`,
                gaContent: `Ma veille technologique m'a également permis de découvrir Github Actions, un outil d'intégration continue et de livraison continue (CI/CD). Jusque là, j'avais uniquement utilisé Jenkins ou Azure Pipeline dans un cadre professionnel.

                J'ai donc profité de ce projet personnel pour tester Github Actions en :
                    <span>- déployant automatiquement sur <a href="https://aws.amazon.com/elasticbeanstalk/" target="_blank">AWS Elastic Beanstalk</a> lorsque du code est publié sur la branche prod <i>(<a href="https://github.com/mickael-lalanne/ranking-app/blob/main/.github/workflows/deployment.yml" target="_blank">cf ce fichier</a>)</i></span>
                    <span>- lançant des tests unitaires avec jest, peu importe la branche sur laquelle le code est publié. Un artefact téléchargeable du coverage est également généré <i>(<a href="https://github.com/mickael-lalanne/ranking-app/blob/main/.github/workflows/tests.yml" target="_blank">cf ce fichier</a>)</i></span>
                
                J'aurais également souhaité automatiser les tests end to end avec Cypress. Cependant, cela nécessite d'avoir accès à une base de données PostgreSQL. Un tel cas aurait donc demandé un environnement de dev à part entière, ce qui est un peu disproportionné en termes de coûts pour un projet qui a pour seul but d'être présent dans mon portfolio. Je me suis donc contenté de lancer les tests end to end manuellement et en local.`,
                securityTitle: `L'aspect sécurité`,
                securityContent: `Chez les 2 entreprises que j'ai connu au moment de faire Ranking App, la sécurité a toujours occupé une place importante. L'<a href="https://owasp.org/" target="_blank">OWASP</a> est une organisation internationale qui se concentre sur l'amélioration de la sécurité des logiciels. Avec ses recommandations, voici les concepts que j'ai appliqué et que je trouve intéressant de partager :`,
                securityList: `- Ne jamais avoir d'informations sensibles visibles directement dans le code (comme des api keys ou des secret keys). Pour ce faire, j'ai utilisé les variables d'environnement Github, l'outil <a href="https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-8.0&tabs=windows#secret-manager" target="_blank">Secret Manager</a> d'ASP.NET en local, et les variables d'environnement de la machine EC2 en production.`,
                securityList2: `- Empêcher l'accès à l'API aux utilisateurs non authentifiés.
                Côté client, j'ai donc ajouté la librairie <a href="https://www.axios.com/" target="_blank">Axios</a> pour implémenter un middleware à toutes mes requêtes afin d'y renseigner le header Authorization avec le token retourné par Clerk <i>(<a href="https://github.com/mickael-lalanne/ranking-app/commit/c9e96c7a4ac71d2b87b1d81238e940c2bf665669#diff-b93619a54685643f8e49eb74c560eaee565465772a5175249e8615906c2c07e7" target="_blank">cf ce commit</a>)</i>.`,
                securityList3: `Côté serveur, je vérifie ce token pour confirmer l'identité de l'utilisateur et empêche l'accès aux Controllers à ceux qui ne sont pas authentifiés. J'utilise pour ça l'attribut [Authorize] <i>(<a href="https://github.com/mickael-lalanne/ranking-app/commit/b0bef71922a3c62867ce1795e47107bde17f5166#diff-0b69b473fe937040615d69f606751f61ddbc2e3a1849360ff2456c22afe88c0b" target="_blank">cf ce commit</a>)</i>.`,
                securityList4: `- Pour éviter toute vulnérabilité <a href="https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html#:~:text=Insecure%20Direct%20Object%20Reference%20(IDOR,allowed%20to%20access%20specific%20data." target="_blank">IDOR</a> (présente dans le top 10 d'OWASP), j'ai fait en sorte que les utilisateurs ne puissent accéder qu'à LEURS templates et LEURS tierlists. Initialement, je passais le userId en paramètre de mes requêtes, ce qui est une mauvaise pratique car un individu mal intentionné pourrait changer cette valeur pour récupérer, modifier ou supprimer des templates ne lui appartenant pas. J'ai donc effectué les modifications suivantes :
                    <span>- Côté serveur : je me base sur l'utilisateur authentifié pour récupérer son id, et je vérifie à chaque route que ce qu'il tente de récupérer, modifier ou supprimer lui appartient bien. Si ce n'est pas le cas, je retourne une erreur 403 : forbidden access. <i>(<a href="https://github.com/mickael-lalanne/ranking-app/commit/aa20fed59212ac70923689961b00f55d57df4208" target="_blank">cf ce commit</a>)</i>.</span>
                    <span>- Côté client : j'arrête simplement d'envoyer le paramètre userId au serveur.</span>`,
                securityList5: `- Toujours sur les recommandations de l'OWASP, l'utilisation du site <a href="https://securityheaders.com/" target="_blank">securityheaders.com</a> pour ajouter des headers sécurisés à l'application.
                    <span>- Score de Ranking App avant l'ajout des headers:</span>`,
                securityList6: `<span>- Score de Ranking App après l'ajout des headers :</span>`,
                sslTitle: `Mickaël versus SSL`,
                sslContent: `Tenter d'avoir Ranking App accessible à l'adresse <i>ranking-app.mickael-lalanne.fr</i> fut la partie la plus longue et la plus prise de tête du projet. Si l'application n'est pas disponible en ligne actuellement, c'est principalement dû aux coûts qu'engendre un hébergement en HTTPS.

                À savoir que je paie déjà un nom de domaine et un hébergement avec certificat pour l'adresse <i>mickael-lalanne.fr</i>. Il n'était donc pas envisageable pour moi de payer un nouveau certificat, je souhaitais utiliser le mien.
                
                J'ai tout de même réussi à implémenter les 2 solutions suivantes, mais aucune ne m'a satisfaite :
                - <u>Déploiement avec AWS Elastic Beanstalk sur une single instance EC2</u>
                J'ai suivi la documentation d'Amazon suivante : <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/SSLNET.SingleInstance.html" target="_blank">Terminating HTTPS on Amazon EC2 instances running .NET</a>. Malheureusement, le navigateur détectait que le certificat était autogénéré et affichait le message d'avertissement suivant : <i>ERR_CERT_AUTHORITY_INVALID</i>.
                - <u>Déploiement avec AWS Elastic Beanstalk sur un load balancer</u>
                Après des journées à chercher, essayer des choses, et à être bloqué, j'ai finalement réussi à avoir ce que je voulais en suivant le tutoriel <a href="https://medium.com/@chiragmehta900/adding-a-custom-domain-for-the-aws-elastic-beanstalk-application-using-route-53-1fd89f204651" target="_blank">Adding a custom domain for the AWS Elastic Beanstalk application using Route 53</a>.
                Problème : après quelques jours, je me rends compte que le prix est quasiment 3 fois supérieur à celui d'une single instance. Cela m'aurait coûté environ 30€ par mois, ce qui est trop cher pour ce genre de projet.
                
                J'avais aussi envisagé d'avoir l'app accessible uniquement en HTTP, mais cela n'a pas pu être possible avec Clerk. En mode production, la plateforme d'authentification ne fonctionne qu'en HTTPS.`,
                conclusionTitle: `Conclusion : Ce que j'ai appris`,
                conclusionSubtitle1: `.NET et hébergement`,
                conclusionContent1: `Ça peut paraître bête, mais j'ai pris conscience que pour un projet .NET (et c'est donc également le cas pour un projet Node.js), il faut avoir une machine qui tourne en permanence et donc payer l'hébergement.
                Si Ranking App devait vraiment être accessible en ligne, <b>j'opterais certainement pour un environnement entièrement serverless</b>, à base d'AWS Lambda et API Gateway par exemple. Cela éviterait d'avoir à payer une machine qui tourne en permanence, et les coûts seraient uniquement liés à l'usage réel, comme le nombre d'appels à l'API.`,
                conclusionSubtitle2: `Priorisation et organisation`,
                conclusionContent2: `Je me suis rapidement rendu compte que si je voulais implémenter TOUTES les idées qui me passaient par la tête, le projet serait encore en cours et n'aurait probablement jamais vu le jour. J'ai donc dû faire des choix, prioriser certaines tâches et en abandonner d'autres. Je me suis tout de même noté quelques idées que j'aimerais implémenter pour une potentielle V2, comme par exemple :
                - Faire de Ranking App une PWA (Progressive Web App)
                - La possibilité de choisir une couleur pour chacun de ses tiers
                - Gestion d'erreurs avec un outil de monitoring comme <a href="https://sentry.io/welcome/" target="_blank">Sentry</a> ou <a href="https://newrelic.com/fr" target="_blank">New Relic</a>
                - Améliorer le coverage des tests
                - Ajouter plus de vérifications côté serveur (par exemple, que le champ nom d'un template ne soit pas vide)`,
            }
        },
        tripleTriad: {
            title: 'TRIPLE TRIAD',
            description: `Reproduction du mini jeu <i>“Triple Triad”</i> issu de l'univers de <i>Final Fantasy</i>. Développée en typescript avec Vue.js, cette version du jeu permet de:
            - Jouer en mode local, où deux joueurs choisissent leur deck avant de jouer sur le même écran.
            Plus tard, le joueur aura la possibilité de jouer en ligne ou contre une intelligence artificielle. Jetez un coup d'œil à la <a href="https://www.mickael-lalanne.fr/triple-triad/roadmap" target="_blank">roadmap</a> pour en savoir plus !
            - Gérer ses propres decks: créez, éditez et supprimez vos decks comme bon vous semble.
            Le code est publique et disponible ici: <a href="https://github.com/mickael-lalanne/triple-triad" target="_blank">github.com/mickael-lalanne/triple-triad</a>`,
            link: 'Essayez le jeu vous même en cliquant ici !',
            resume: `Reproduction du mini jeu <i>“Triple Triad”</i> issu de l'univers de <i>Final Fantasy</i>.<br>
            Front-end avec Typescript, Vuetify, Vue Router et Pinia. Back-end avec AWS Amplify et GraphQL.`,
            skills: {
                one: 'Projet personnel',
                two: 'Gestion des decks en GraphQL et authentification avec AWS Amplify',
                three: 'Typescript, Vue.js, Vuetify, Vue Router, Pinia'
            }
        },
        hcms: {
            title: 'INTUIFACE HCMS',
            description: `Application web développée avec Vue.js permettant aux utilisateurs d'uploader et d'éditer du contenu pour leurs expériences. Entre autre, HCMS permet de:
            - Créer un contenu bien structuré pour une variété de formats de médias (images, vidéos, documents, couleurs, date, …)
            - Utiliser la notion de “variant” pour identifier les champs qui varient selon le contexte
            - Gérer les utilisateurs et le workflow pour contrôler l'édition et la publication de données`,
            resume: `Upload et édition de contenu.<br>
            Front-end avec Vue.js, Vuetify et Vuex.<br>
            Back-end avec AWS (Lambda, S3).<br>
            Tests unitaires (Jest) et end to end (Cypress).`,
            skills: {
                one: 'Travail en équipe',
                two: 'Vues.js, Vuetify, Vuex',
                three: 'Backend avec AWS (Lambda, S3)',
                four: 'Tests unitaires avec jest, tests end to end avec cypress'
            },
            details: {
                dashboardTitle: 'DASHBOARD',
                dashboardContent: `Depuis le dashboard, l'administrateur peut modifier le nom de sa base, sa description ou son image. Il peut aussi ajouter ou supprimer des utilisateurs à sa base, et gérer leurs permissions. Pour chaque utilisateur, l'administrateur peut définir les 4 permissions suivantes:
                - <u>Dashboard</u>: modifiez les paramètres de la base et invitez des utilisateurs supplémentaires à la base.
                - <u>Structure</u> : modifiez la structure de données de la base, y compris l'utilisation de variantes.
                - <u>Content</u>: Ajouter / modifier / supprimer du contenu de la base.
                - <u>Use in experience</u>: utilisez cette base dans Composer.`,
                structureTitle: 'STRUCTURE',
                structureContent: `La structure permet à l'utilisateur de définir le type de contenu à utiliser dans son expérience et la manière dont il souhaite l'organiser. Il peut ajouter autant de composants qu'il le souhaite. Cela peut être:
                - <u>Un groupe</u>: une instance unique de propriétés associées
                - <u>Une collection</u>: une liste d'éléments qui partageront le même ensemble de propriétés`,
                propertyDetails: 'Plus d\'infos sur la liste des types de propriétés ici',
                variantTitle: 'La notion de variant',
                variantContent: `Dans sa structure, l'utilisateur peut aussi définir des variants. Un Variant est un contexte qui peut modifier la valeur d'une ou plusieurs propriétés. Pour chaque variation d'un variant donnée, l'utilisateur peut spécifier une nouvelle valeur pour une propriété.
                Par exemple, un variant <i>Langue</i> peut avoir comme variation: <i>Anglais</i>, <i>Français</i>, …`,
                contentTitle: 'CONTENT',
                importTitle: 'Import',
                importContent: `Plusieurs items d'une collection peuvent être créés en une seule étape grâce à l'utilisation d'un mécanisme d'import.`,
                importDetails: 'Plus d\'infos sur l\'import ici',
                workflowTitle: 'La notion de workflow',
                workflowContent: `La notion de workflow permet à l'utilisateur de travailler à son propre rythme, garantissant que seul le contenu terminé est mis à la disposition d'une expérience Intuiface. Cela peut également être un moyen pour un utilisateur de préparer tout le contenu, et de le mettre dans l'état Stage for publishing pour le faire relire ou valider par un autre utilisateur avant de le publier.`,
                workflowDetails: 'Plus d\'infos sur la notion de workflow ici'
            }
        },
        analytics: {
            title: 'INTUIFACE ANALYTICS - CHART & DASHBOARDS',
            description: `Application web développée avec Angular permettant la visualisation de données client via des charts. Les charts sont entièrement personnalisables et peuvent être affichés de n'importe quelle façon dans des dashboards par drag & drop et redimensionnement. Il est aussi possible de partager ces dashboards par lien pour accéder à une version readonly.`,
            resume: 'Application web avec Angular permettant la visualisation de données client via des charts.<br> Back-end Node.js avec base de données Mongo.',
            skills: {
                one: 'Travail en équipe',
                two: 'Angular, Highcharts',
                three: 'Base de données Mongodb',
                four: 'Tests end to end'
            },
            details: {
                presentationTitle: 'PRÉSENTATION',
                presentationContent: `Analytics - Chart & Dashboards est une application web accessible directement sur son compte <a href="https://my.intuiface.com/" target="_blank">my.intuiface</a>.
                C'est mon premier vrai projet professionnel et j'ai eu la chance d'être impliqué dès le début des devs.
                Même après la release du produit, j'ai continué de travailler sur le projet pour ajouter de nouvelles features comme les charts de type <b>"Gauge"</b> et <b>"Single Value"</b>.
                L'application a été développée avec le framework <b>Angular</b>. Pour les charts, nous avons utilisé la librairie <a href="https://www.highcharts.com/" target="_blank">Highcharts</a>.`,
                dashboardTitle: 'PARTIE DASHBOARD',
                dashboardContent: `La partie Dashboard permet la visualisation des données client.
                La première fois qu'un utilisateur se connecte, 2 dashboards lui sont automatiquement créés:
                <span class="ml-10">- un dashboard avec des charts par défaut basé sur SES données.</span>
                <span class="ml-10">- un deuxième dashboard appelé "Tradeshow", basé sur les données d'Intuiface sur une plage de date spécifique et qui aura toujours des données.</span>
                Il est possible d'agencer les charts de la manière que l'on souhaite avec du <b>drag & drop</b>, mais aussi de les <b>redimensionner</b>. Pour chaque chart, nous avons la possibilité de les <b>télécharger dans plusieurs formats</b>: png, jpeg, svg, pdf, csv, xls.
                Il est à noter qu'il existe des règles de tarifications pouvant impacter le nombre de dashboard et le nombre de charts à l'intérieur.`,
                chartEditorTitle: 'CHART EDITOR',
                chartEditorContent: `La partie chart editor permet quant à elle d'éditer le chart. Il est possible de drag & drop ce que l'on appelle des "Data Point Parameters" pour filtrer ou afficher des valeurs. Il est notamment possible de:
                - Spécifier une plage de date (<b>date range</b>) ou d'utiliser celle définie côté Dashboard
                - Choisir le <b>type de chart</b> parmi: Line, Area, Bar, Column, Pie, Radar, Single Value et Gauge
                - Changer des options comme le <b>refresh automatique des valeurs</b>, le <b>formatting des valeurs affichées</b>
                (préfixe, suffixe, multiplicateur) ou encore des options spécifiques au type de chart`,
                templateLibraryTitle: 'CHART TEMPLATE LIBRARY',
                templateLibraryContent: `La Chart Template Library propose à l'utilisateur des configurations de chart toutes prêtes qu'il peut directement utiliser. Il a la possibilité d'ajouter le chart directement dans son dashboard ou d'éditer d'abord le template dans le Chart Editor.
                Chaque template est <b>stocké en base de données</b> avec un numéro de version.`,
                shareTitle: 'PARTAGE DE DASHBOARD',
                shareContent: `Une autre fonctionnalité est le partage des dashboards, via <b>URL</b> ou <b>iframe</b>. La popup d'options permet de choisir d'afficher ou non le nom, la description ou le logo du dashboard. Mais aussi de définir une plage de date spécifique ou les charts à partager.
                N'importe quelle personne disposant du lien pourra alors accéder à une version readonly du dashboard.`
            }
        },
        playerNextGen: {
            title: 'INTUIFACE PLAYER NEXT GEN',
            description: `Le Player Next Gen permet aux utilisateurs de visualiser des expériences créées depuis le Composer, sur n'importe quelle plateforme. L'application est développée sur la dernière version d'Angular. Sur ce grand projet que j'ai rejoint en cours de route, je me suis occupé du développement des assets Youtube, Webcam et Linear Gauge.`,
            resume: `Permettre aux utilisateurs de visualiser leurs expériences créées depuis le Composer.<br>
            Développement multiplateforme (web, Android, iOS, ...) avec Angular. Tests unitaires avec Jest.`,
            skills: {
                one: 'Angular',
                two: 'Développement multiplateforme: Android, iOS, Brightsign, Samsung Kiosk, …',
                three: 'Tests unitaires avec jest'
            },
            details: {
                presentationTitle: 'QU\'EST CE QUE LE PLAYER NEXT GEN',
                presentationContent: `Grâce à Intuiface, les utilisateurs ont la possibilité de créer des applications sans avoir besoin de coder. On appelle ces applications des expériences. Avec une interface semblable à Photoshop, l'utilisateur peut très facilement ajouter des <i><b>assets</b></i> (images, vidéos, texte, documents, …) et les faire interagir entre eux.
                <br>La <i><b>Player permet</b></i> de jouer ces <i><b>expériences</b></i> sur n'importe quelle plateforme (navigateur web, Android, iOS, Brightsign, Samsung Kiosk, …). Pour se faire, on se base sur un fichier .ifx (semblable à un fichier .xml) pour déterminer quel élément doit être affiché à quel endroit, mais également quel comportement il doit avoir.
                <br>Le projet est réalisé en <b>typescript</b> sur la dernière version d'<b>Angular</b>. Des tests unitaires sont obligatoirement mis en place pour chaque composant. Comme c'est un grand projet (jusqu'à 9 développeurs en parallèle), nous suivons un processus bien établi. Toute feature est réalisée dans une branche à part et une <b>pull request</b> doit être soumise une fois le développement terminé. Du code review est systématiquement effectué et la PR doit être validée par l'ensemble des développeurs avant d'être mergée.
                <br>De mon côté, je me suis occupé de l'implémentation de différents assets.`,
                youtubeTitle: 'ASSET YOUTUBE',
                youtubeContent: `L'asset Youtube permet d'afficher n'importe quelle vidéo uploadée sur Youtube. Lors du développement, je me suis basé sur la librairie officielle d'Angular: <a href="https://github.com/angular/components/tree/main/src/youtube-player" target="_blank">youtube-player</a>. La vidéo Youtube doit pouvoir s'afficher dans le Player suivant différents formats de source (url complète, url abrégée, seulement l'id, …). Une <b>expression régulière</b> permet de récupérer l'id de la vidéo, peu importe le format.
                <br><span class="ml-10"><u>L'asset doit pouvoir lever des événements quand</u>:</span>
                - La vidéo est terminée
                - La vidéo est mise en pause
                - La vidéo est rembobinée
                - La vidéo atteint un certain temps définit par l'utilisateur
                - La vidéo a commencée à jouer
                - La timeline de la vidéo a changé
                - Le volume de la vidéo a changé
                <br><span class="ml-10"><u>Quand il reçoit certains événements, l'asset doit être capable de</u>:</span>
                - Changer la source de la vidéo
                - Mettre la vidéo en pause
                - Jouer la vidéo
                - Stopper la vidéo
                - Rembobiner la vidéo
                - Changer le temps de la vidéo
                - Changer le volume
                - Toggle le mode play / pause
                - Activer ou désactiver le mode loop`,
                gaugeTitle: 'ASSET LINEAR GAUGE',
                gaugeContent: `L'asset Linear Gauge peut être utilisé pour représenter visuellement une valeur dans une plage de valeurs. Cette valeur peut varier dynamiquement au cours de l'expérience pour par exemple animer des graphiques interactifs.
                <br>L'asset est composé de deux images spécifiées par l'utilisateur:
                <span class="ml-10">- une image correspondant à la gauge vide</span>
                <span class="ml-10">- une image correspondant à la gauge complète</span>`,
                gaugeContent2: `L'utilisateur peut fournir n'importe quel type d'image, tant que la progression est en ligne droite (horizontale ou verticale). Il peut aussi définir la direction de remplissage dans les propriétés de l'actif.`,
                gaugeContent3: `Pour développer cet asset, j'ai principalement utilisé la propriété CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path" target="_blank">clip-path</a> pour n'afficher qu'une partie de l'image représentant la valeur de remplissage.`
            }
        },
        journal: {
            title: 'JOURNAL DU CAPITAINE',
            description: `Ma première passion, ce sont les jeux vidéo. Ma deuxième, c'est écrire. J'ai donc décidé de réaliser un site web me permettant de réunir ces deux passions. Réalisé sous Wordpress, ce site me permet de publier des articles en rapport avec le jeu vidéo.`,
            resume: `Ma première passion, ce sont les jeux vidéo. Ma deuxième, c'est écrire. Avec Wordpress, j'ai donc décidé de réaliser un site web me permettant de réunir ces deux passions.`,
            skills: {
                one: 'Projet personnel',
                two: 'Wordpress',
                three: 'Responsive'
            },
            link: 'journalducapitaine.fr'
        },
        apiExplorer: {
            title: 'API EXPLORER - TUTORIEL',
            description: `Sujet de stage durant mon année en licence professionnelle. L'objectif était de remplacer un tutoriel d'onboarding intégré avec Appcues pour les nouveaux utilisateurs. Le but était de ne plus être dépendant financièrement du produit et d'avoir son propre tutoriel. J'ai donc dû m'adapter sur un grand projet existant et reproduire l'ancien tutoriel avec des nouvelles améliorations, comme la possibilité de revenir à des étapes précédentes.`,
            resume: `Sujet de stage durant mon année en licence professionnelle. Objectif : remplacer un tutoriel d'onboarding (intégré avec Appcues) pour les nouveaux utilisateurs.`,
            skills: {
                one: 'S\'adapter à un projet existant',
                two: 'Javascript, jQuery',
                three: 'Tests end to end'
            },
            details: {
                presentationTitle: 'PRÉSENTATION DE L\'API EXPLORER',
                presentationContent: `L'API Explorer permet la création d'une interface pour n'importe quelle requête de type REST. Avec cette interface, une expérience Intuiface en cours d'exécution peut lire et écrire de manière dynamique sur la source de données et / ou le périphérique accessible via ce service web. L'API Explorer permet d'avoir accès à des dizaines de milliers d'API publiques et privées disponibles dans le cloud. Il y a tout : des listes de films, des prévisions météorologiques, les dernières photos de la NASA et tout ce qui est possible de trouver sur Internet. La majorité est gratuite tandis que d'autres peuvent exiger des frais d'accès. Certaines peuvent être privées et internes à votre organisation. Peu importe, tous sont accessibles dans Intuiface.`,
                objectiveTitle: 'OBJECTIF DU STAGE',
                objectiveContent: `Le tutoriel de l'API Explorer avait été réalisé avec Appcues, un service logiciel payant qui aide les entreprises à mettre en place un tutoriel pour leurs clients. Même sans compétences de codage, les utilisateurs peuvent créer des procédures pas à pas et des messages intégrés à l'application pour accueillir leurs clients.
                Le but de cette mission était d'avoir son propre tutoriel pour améliorer la maintenance du produit et ne plus être dépendant financièrement d'Appcues. Nous avons profité de la refonte du tutoriel pour intégrer quelques changements :
                - <u>Côté client</u> : la possibilité de revenir à une étape précédente
                - <u>Côté serveur</u> : le contenu du tutoriel serait stocké en base de données pour permettre aux personnes de l'équipe de le modifier sans toucher au code`,
                technologiesTitle: 'TECHNOLOGIES UTILISÉES',
                technologiesContent: `<b>HTML5</b>, <b>CSS</b> avec <b>less.js</b>, <b>Javascript</b>, <b>jQuery</b>.
                J'ai pendant un moment utilisé la librairie iziModal, pour finalement me rendre compte qu'elle était trop restrictive.
                Le point fort de cette librairie est qu'elle permettait d'aller d'étape en étape automatiquement.
                Cependant, il y avait tellement d'actions à prendre en compte lors du changement d'étape (animations à ajouter ou supprimer, faire apparaître ou disparaître le fond noir, lancer des requêtes, envoyer l'étape actuelle au serveur, ...) que je me retrouvais à réécrire tout le cheminement.
                De plus, il n'était pas possible de positionner les étapes par rapport à d'autres éléments. J'ai donc décidé d'écrire le cheminement en dur, en essayant de rendre le code le plus court et lisible possible.
                Pour ce qui est du positionnement, je me suis tourné vers la librairie <b>jQueryUI</b> qui était déjà installée sur le projet.
                Pour gérer la base de données <b>MongoDB</b>, j'ai d'abord utilisé <b>Studio 3T</b> le temps de sa version d'essai. Une fois la version d'essai terminée, je suis passé sur <b>Robo 3T</b>. Pour ce qui est des tests end to end, j'ai utilisé les librairies <b>Codeceptjs</b> et <b>Nightmare.js</b>.`,
                designTitle: 'DESIGN',
                designContent: `En ce qui concerne le design du tutoriel, il est resté en grande partie fidèle à celui réalisé avec Appcues.
                Dans un premier temps, j'ai reproduit exactement le même tutoriel que l'existant.
                Au fur et à mesure de l'avancée de la mission, des idées et des améliorations ont été trouvées (agrandissement des tooltips, animations, ajout d'un bouton précédent, ...). Des maquettes m'ont été fournies par l'UX Designer et se sont vu évoluées avec le temps.
                Les éléments situés à l'intérieur des étapes ont été positionnés avec <b>flexbox</b>. Les couleurs utilisées pour le tutoriel ont été placées dans le fichier constant.less pour faciliter la maintenance.
                Les différences avec l'ancien tutoriel sont :
                <span class="ml-10">- l'ajout d'un <b>bouton previous</b></span>
                <span class="ml-10">- de nouveaux <b>effets de transition</b> entre les étapes importantes (transitions sur le côté) et entre les tooltips (transitions d'opacité)</span>
                <span class="ml-10">- un <b>effet d'animation</b> (scale et surbrillance) mis en place pour attirer le regard de l'utilisateur</span>`,
                designContent2: `Pour ce qui est du positionnement de l'étape, il se fait par rapport à l'élément qui doit être expliqué.
                Pour ce faire, je suis passé par le framework <b>jQueryUI</b> et notamment sa fonction <i>position()</i>.`,
                testsTitle: 'TESTS END TO END',
                testsContent: `Une fois le nouveau tutoriel terminé, j'ai réalisé des tests end to end avec prise et comparaison de screenshots à l'aide de la librairie <b>CodeceptJS</b>.
                Le but étant de vérifier que le tutoriel fonctionne correctement du début à la fin.
                <span class="ml-10">Pour mes tests, j'ai créé plusieurs scénarios :</span>
                - l'utilisateur suit le cheminement normal du tutoriel
                - l'utilisateur saute la première partie pour arriver directement à la deuxième
                - l'utilisateur clique sur le bouton 'Skip tutorial'
                - l'utilisateur clique sur le bouton 'Home' pendant la deuxième partie
                - l'utilisateur clique sur le menu hamburger à la place du bouton 'Restart Tutorial'
                - l'utilisateur clique sur les boutons du 'right panel'
                <span class="ml-10">J'ai aussi vérifié que :</span>
                - les boutons du footer (download, share et machine learning) soient désactivés
                - le bouton previous fonctionne
                - toutes les animations apparaissent et disparaissent correctement
                - le tutoriel ne se relance pas quand l'utilisateur effectue une nouvelle requête`,
                conclusionTitle: 'CONCLUSION',
                conclusionContent: `Cette mission était la plus longue et la plus importante que j'ai eu à réaliser durant mon stage. Elle m'aura demandé beaucoup d'autonomie, mais aussi beaucoup de temps pour comprendre le code existant et m'y adapter.
                Au final, on se retrouve côté interne avec un tutoriel plus facilement maintenable. Grâce à une base de données, il est possible de modifier le contenu des étapes sans passer par le code. Enfin, Intuiface n'est plus dépendant d'Appcues.
                Côté client, le tutoriel est désormais plus réactif et permet aux utilisateurs de revenir à une étape précédente.`
            }
        },
        myIceTool: {
            title: 'MY ICE TOOL - PROJET TUTEURÉ',
            description: `My Ice Tool est un projet étudiant que j'ai dû réaliser durant ma licence professionnelle à Gap. L'objectif était de réaliser un site web permettant de visualiser les conditions d'escalade sur des cascades de glaces dans des zones spécifiques. Notre équipe a notamment dû imaginer l'identité graphique du site, gérer l'authentification, l'ajout de commentaires, utiliser l'api de Google Maps afin de tracer des zones et de placer des points d'intérêts, stocker l'historique des températures en base à l'aide d'un cron, ...`,
            resume: `Projet étudiant pour visualiser les conditions d'escalade sur des cascades de glaces.
            Utilisation du framework PHP Laravel, de l'API Google Maps, et d'une base de données MySQL.`,
            skills: {
                one: 'Framework PHP Laravel',
                two: 'Google Maps API',
                three: 'Cron et Base de données MySQL'
            },
            details: {
                presentationTitle: 'PRÉSENTATION',
                presentationContent: `<b>My Ice Tool</b> est un projet étudiant que j'ai dû réaliser durant ma licence professionnelle à Gap. L'objectif était de réaliser un site web permettant de visualiser les conditions d'escalade sur des cascades de glaces dans des zones spécifiques.
                <br><u>Notre équipe a notamment dû:</u>
                - Créer l'identité graphique du site.
                - Gérer l'authentification, avec la possibilité de s'<b>inscrire directement avec son compte Google ou Facebook</b>.
                - Utiliser l'<b>api Google Maps</b> afin de tracer des zones sur une carte et d'y afficher des points d'intérêts.
                - Gérer l'ajout et la visualisation de commentaires.
                - Afficher l'historique des dernières températures pour chaque cascade. Pour ce faire, un <b>cron</b> se charge une fois par jour d'appeler une api météo pour récupérer les dernières températures et les stocker dans une base de données <b>MySQL</b>.
                <br>Ce projet a été réalisé à l'aide du framework <b>PHP Laravel</b> et une équipe constituée de 3 développeurs et 1 graphiste.`,
                registrationTitle: 'PAGE D\'INSCRIPTION',
                accountVerificationTitle: 'Connexion/inscription avec validation du compte',
                accountVerificationContent: `Un formulaire de connexion et d'inscription est disponible sur la page principale. Une fois le formulaire d'inscription correctement rempli, les informations sont stockées dans la base de données.
                L'utilisateur a aussi la possibilité de s'inscrire avec Google. Pour cela, on récupère son nom, prénom et adresse mail directement avec l'API Google+, et on demande à l'utilisateur s'il souhaite s'inscrire à la newsletter.`,
                loginTitle: 'Connexion Google/Facebook',
                loginContent: `L'utilisateur peut se connecter directement avec son compte Google ou Facebook sans rentrer ses identifiants. Il faut utiliser les API Facebook et Google+.`,
                passwordTitle: 'Force de mot de passe',
                passwordContent: `Il existe 3 niveaux de force pour le mot de passe : faible, moyen, bon. Pour que l'utilisateur puisse s'inscrire, le mot de passe doit obligatoirement :
                - Être au minimum de niveau moyen
                - Avoir au moins 8 caractères
                - Contenir au moins 1 chiffre
                - Contenir au moins 1 majuscule
                - Interdire les suites de lettres`,
                mainPageTitle: 'PAGE PRINCIPALE',
                apiTitle: 'API Google Map, Afficher les zones et les cascades',
                apiContent: `Lors du chargement de la page principale, la carte doit se placer sur la cascade préférée de l'utilisateur connecté. Ensuite, des <b>requêtes AJAX</b> permettent d'afficher les zones et cascades disponibles dans le périmètre. En cliquant sur une cascade, il est possible de connaître ses coordonnées, sa température courante, son niveau de danger, et d'afficher l'historique des températures ainsi que les commentaires.`,
                searchTitle: 'Recherche de cascades avec autocomplétion',
                searchContent: `Quand l'utilisateur commence à taper le nom d'une zone ou d'une cascade dans la barre de recherche, une liste de résultats s'affiche en temps réel pour auto compléter la recherche.`,
                historyTitle: 'HISTORIQUE DES TEMPÉRATURES',
                historyContent: `Quand l'utilisateur clique sur “Historique des températures”, on récupère dans la base de données l'historique de la cascade sélectionnée et on affiche les résultats sous forme de tableau.`,
                commentsTitle: 'COMMENTAIRES',
                displayCommentsTitle: 'Affichage des commentaires',
                displayCommentsContent: `Quand l'utilisateur clique sur “Commentaires”, on récupère dans la base de données les commentaires de la cascade sélectionnée et on les affiche sous forme de liste comme ci-dessus. On affiche: le nom de l'utilisateur, la date à laquelle il a posté le commentaire, le contenu, la / les photos disponibles.`,
                addCommentsTitle: 'Ajout de commentaire',
                addCommentsContent: `Quand l'utilisateur clique sur “Commentaires”, il a la possibilité d'ajouter un commentaire, accompagné ou non d'une ou plusieurs photos. Son nom et la date à laquelle le commentaire a été posté sont récupérés automatiquement.`,
                about: 'PAGE À PROPOS'
            }
        }
    },
    contact: {
        text: `Tu as une question ? N'hésite pas à m'envoyer un message !`,
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer'
    }
}
