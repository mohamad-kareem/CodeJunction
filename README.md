<img src="./readme/title1.svg"/>

> Hello, world! This is the project’s summary that describes the project plain and simple, limited to the space available. 

**[PROJECT PHILOSOPHY](#project-philosophy) • [WIREFRAMES](#wireframes) • [TECH STACK](#tech-stack) • [IMPLEMENTATION](#implementation) • [HOW TO RUN?](#how-to-run)**

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> Code Junction is a code collaboration platform designed to help developers improve their coding skills and work together more efficiently.

> Code Junction aims allows developers to collaborate on code in real-time, share their expertise, and solve problems together.

> Code Junction includes AI-powered code quality analysis tools that provide developers with feedback on their code, suggest improvements based on    best practices, and help them improve their skills over time.

> Code Junction makes learning to code more engaging and fun through gamification elements like points, and leaderboards.

### User Stories

- As a user, I want to code and compile my code and see result online.
- As a user, I want to code online with my friends while live sharing code editor.
- AS a user, I want to choose the programming language i prefer. 
- As a user, I want to be able to ask for ai advice to get rapid feedback on my code.
- As a user, I want to be able to save my codes.
- As a user, I want to have the ability to choose the language i prefer to read and interact with.
- As a developer, I want to chat with other programmers while coding.
- As a developer, I want to be able to track my progress and earn rewards for improving my coding skills,

<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> We designed Code Junction using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Sign In | Sign Up | 
| ------ | ------ | 
| ![Sign In](./readme/demo/SignIn.png) | ![Sign Up](./readme/demo/SignUp.png) | 

| Session | Forget Password |
| ------ | ------ | 
| ![Session](./readme/demo/Session.png) | ![Forget Password](./readme/demo/ForgetPassword.png) |

| Code Editor | Activities |
| ------ | ------ | 
| ![Code Editor](./readme/demo/CodeEditor.png) | ![Activities](./readme/demo/Home.png) |

| Admin | Ranking |
| ------ | ------ | 
| ![Admin](./readme/demo/Admin.png) | ![Ranking](./readme/demo/Ranking.png) |

### Mockups
| Sign In | Sign up | 
| ----- | ----- |
| ![Sign In](./readme/demo/mockups/Login.png) | ![Sign Up](./readme/demo/mockups/SIGNUP.png) | 

| Session | Forget Password | 
| ----- | ----- |
| ![Session](./readme/demo/mockups/Session.png) | ![Forget Password](./readme/demo/mockups/Forgetpassword.png) | 

| Code Editor | Activities | 
| ------ | ------ |
| ![Code Editor](./readme/demo/mockups/CodeEditor.png) | ![Activities](./readme/demo/mockups/Home.png) |

| Admin | Ranking | 
| ------ | ------ |
| ![Admin](./readme/demo/mockups/Admin.png) | ![Ranking](./readme/demo/mockups/Ranking.png) |


<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the Code Junction app with the following features:

| landing Page  | Responsiveness |  
| ------ | ------ |
| ![Landing Page ](./readme/demo/gifs/LandingPage.gif) | ![Responsiveness](./readme/demo/gifs/landingResponsive.gif) | 

| Sign Up  | Sign In |
| ------ | ------ |
| ![Sign Up ](./readme/demo/gifs/register.gif) | ![Sign In](./readme/demo/gifs/Login.gif) |

| Forget Password | Create Session |
| ------ | ------ |
| ![Forget Password  ](./readme/demo/gifs/forgetpassword.gif) |  ![Sign In](./readme/demo/gifs/session.gif) |

| Run Code | Save Code |
| ------ | ------ |
| ![Run Code](./readme/demo/gifs/runcode.gif) | ![Save Code](./readme/demo/gifs/savingcode.gif) |

| API daily usage | Active Users | Chinies Profile |
| ---| ---| ---|
| ![API daily usage](./readme/demo/implementation/statistics1.png) | ![Active Users](./readme/demo/implementation/statistics2.png) | ![Chinies Profile ](./readme/demo/implementation/profile.png) |

| Code Editor | code1 |  create |
| ---| ---| ---|
| ![Code Editor](./readme/demo/implementation/codeeditor.png) | ![code1](./readme/demo/implementation/code1.png) | ![create](./readme/demo/implementation/create.png) |

| Run Code | AI Advice | Evaluate code |
| ---| ---| ---|
| ![Run Code](./readme/demo/implementation/run.png) | ![AI Advice](./readme/demo/implementation/advice.png) | ![Evaluate code](./readme/demo/implementation/evaluate.png) |

| Real time code editor | Connecting | Copy roomId |
| ---| ---| ---|
| ![Real time code editor](./readme/demo/implementation/realTimeEditor.png) | ![Connecting](./readme/demo/implementation/connect.png) | ![Copy roomID](./readme/demo/implementation/copy.png) |

| Users Chatting | Dynamic Chat | Save Code |
| ---| ---| ---|
| ![Users Chatting](./readme/demo/implementation/chatting.png) | ![Dynamic Chat](./readme/demo/implementation/expandChat.png) | ![Save Code](./readme/demo/implementation/save.png) |

| Errors | Auto Correct | Ranking |
| ---| ---| ---|
| ![Errors](./readme/demo/implementation/errors.png) | ![Auto Correct](./readme/demo/implementation/autoCorrect.png) | ![Ranking](./readme/demo/implementation/ranking.png) |



<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

###  Code Junction is built using the following technologies:

- This project uses the [React JS development framework](https://reactjs.org/). React is a declarative, efficient, and flexible JavaScript library for building SPA (single web application) and user interfaces or UI components. It lets you compose complex UIs from small and isolated pieces of code called “components”.

-For persistent storage (database), the app uses the [mongodb] which allows the app to store all data in different schema and handler the big data insid the app

-This project also uses [Framer-Motion] in order to animate components and add fun transitions between pages.

- 🚨 Currently, AI advice are not the best guide to rely on but hopefully very soon that will not be the case. This is a known issue that we are working to resolve!
- The app uses the font ["mono space"](https://fonts.googleapis.com/css2?family=Audiowide&display=swap) as its main font, and the design of the app adheres to the material design guidelines.

<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up Code Junction locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://Rapidapi.com](https://rapidapi.com/abdheshnayak/api/code-compiler/)

2. Get a free API Key at [https://openai.com]
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

Now, you should be able to run Code Junction Express locally and explore its features.