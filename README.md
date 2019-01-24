# Clicky Game
### 1. Why / Background
  * This is Berkeley Coding Boot Camp (BCBC) week 10 homework assignment.
    * The BCBC curriculum generally focuses on JavaScript along with HTML/CSS, using the MERN (MongoDB, Express, React, Node) software stack, to teach web development skills across the client and server. 
  * Clicky Game is a memory game web app with the user trying to select all 12 of the Simpsons characters without selecting the same character more than once.
 ### 2. What / Objectives / User Stories
  * From design through deployment of the application, this project used the following web development technologies:
    * Client-side: React library and Bootstrap front-end framework for HTML/CSS
  * User Stories, by categorization:
    * Design and develop View on UI
 ### 3. How / Design Description
  * Although scope of the project fits well into [Agile methodology with Scrum and Kanban frameworks](https://en.wikipedia.org/wiki/Agile_software_development), due to limited scope and non-group assignment, GitHub's built-in tools were not used to support project execution:
    * Projects: Kanban board for documenting user stories and overall progress
    * Issues: Issue tracking for user stories, features and bug report
  * Functionality - refer to [video of application user flow](https://drive.google.com/drive/folders/1Wbg4DGnX87NEN56SGdiN1VaSy--cf9G3?usp=sharing):
  * Design Description
    * Data file (simpsons.json)
      * Define Simpsons characters object including id, name, image properties
      * Required modules: N/A
      * Relevant functions: N/A
      * Export: N/A
    * View Setup (client-side: index.js, App.js, src/components/Header, /ImageCard, /Score, /Wrapper, index.html)
      * Use React.js to design App class and required components including state and props to pass to #root element of index.html
      * Required modules: npm (react, react-dom), App, index.css /components/ImageCard, Wrapper, Header, Score, simpsons.json, style.css, 
      * Relevant functions: getElementById(), shuffleArray(), Math.floor(), Math.random(), handleImageClick, indexOf(), setState(), render(), return(), map(), Header() ImageCard(), Score(), Wrapper()
      * Export: App, Header, ImageCard, Score, Wrapper
  * Prerequisites for Development:
    * MacBook Air (Intel Core i7, 2.2 GHz, 1 Processor, 2 Cores, 8GB)
    * 64 bit operating system 
    * git version 2.18.0
    * Visual Studio Code Version 1.29.1
    * [GitHub](https://github.com/jkawahara/clicky-game)
    * Chrome Version 70.0.3538.110 (Official Build) (64-bit)
  * Built With:
    * This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
    * Server-side: N/A
    * Client-side: 
      * [React](https://reactjs.org/docs/getting-started.html)
      * [Bootstrap](https://getbootstrap.com/docs/4.2/getting-started/introduction/)
      * HTML, CSS, JavaScript
    * Cloud: [GitHub Pages](https://pages.github.com/)
  * Installing:
    * For further development or use of this application, clone or download application files from GitHub, which is organized into the following directory structure:
      * /clicky-game (application root directory level)
        * /build - generated during build
        * /node_modules (ignored by git) - generated first time yarn install executes
        * /public
          * /assets
            * /images
        * /src
          * /components
            * /Header
            * /ImageCard
            * /Score
            * /Wrapper
        * App.js
        * index.css
        * simpsons.json
        * .gitignore
        * LICENSE
        * package.json - includes dependencies
        * README.md
        * yarn.lock
    * Once the application files are ready per the above structure, go to the application root directory level
      * Enter the following in termminal to install required node packages. This executes by referring to the included dependencies in package.json and creates required node packages in /node_modules and yarn.lock:
        * yarn install
  * Running the tests:
    * Unit testing & integration testing was informally executed
  * Deployment:
    * Deployed on [GitHub Pages](https://jkawahara.github.io/clicky-game/)
 ## Versioning
  * For the versions available, see the tags on this repository.
 ## Authors
  * John Kawahara.
  * N/A- See also the list of contributors who participated in this project.
 ## License
  * This project is licensed under the [MIT License](LICENSE).
 ## Acknowledgments
  * Thanks to BCBC program personnel, especially our instructor, David Hallinan, along with our TAs, Hannah Bowers and Glo Austin, for their guidance and support.