import React from "react";

function Work() {
  return (
    <section id="work">
      <h2>Work</h2>
      <div>
        <h3>Coding Assignment 11: Dockerfile Setup</h3>
        <p>
          In this assignment, I configured a development environment using Docker containers and submitted a Dockerfile along with a README.md file.
          The README included instructions to run the web application on localhost:7775 (127.0.0.1:7775).
          The Dockerfile created a container that displayed a simple webpage with an h1 tag containing the text “Coding 1,” built using Create React App.
          I named the container `zorn_dawson_coding_assignment11`, and the site files were stored in a working directory named `zorn_dawson_site`.
        </p>
      </div>
      <div>
        <h3>Coding Assignment 12 Component Library</h3>
        <p>
          For this task, I developed a Component Library using React and Storybook. I provided a Dockerfile and a README.md file with instructions for running the site at localhost:8083 (127.0.0.1:8083).
          The project, built with Create React App and Storybook, featured a UI component library that included various components such as Button, Label, Text, Table (with header, row, cell, and footer), and a Dropdown.
          Each component followed specific guidelines, including the creation of necessary files like `Component_name.tsx`, `Component_name.stories.tsx`, `Component_name.types.tsx`, `Component_name.tests.tsx`, and `Index.ts`.
          I used Styled Components for styling and ensured the components were responsive. The Storybook functionality included Controls for modifying properties like default text and background color, and each component had a default and disabled state with visual changes (e.g., greyed-out colors) and cursor adjustments to indicate interactivity.
          Every component also included at least two tests: one for visibility and another to confirm the background color change in the disabled state.
          I created a Docker container named `zorn_dawson_coding_assignment12` to host the production build, with the site files stored in the `zorn_dawson_ui_garden` directory.</p>
      </div>
      <div>
        <h3>Coding Assignment 13 UI Component Library</h3>
        <p>
          For this assignment, I submitted a Dockerfile and README.md file with instructions for running the web application at localhost:8018. The Dockerfile built a container to host the production version of a React app for the newly created component library, and the container was named `zorn_dawson_coding_assignment13`.
          The site files were located in the `zorn_dawson_ui_garden_build_checks` directory. I also implemented a pre-commit hook to ensure that code passed checks for Prettier (formatting), ESLint (linting), and functionality tests. This workflow prevented submission of code if any checks failed due to code changes.
          Additionally, I configured my GitHub repository to enforce these checks, ensuring that if the pre-commit hooks were bypassed, the same checks would be run on GitHub, with notifications for any build failures.
        </p>
      </div>


      <h2>Tech List</h2>
      <div>
        <h3>React and Create React App</h3>
      </div>
      <div>
        <h3>Docker</h3>
      </div>
      <div>
        <h3>Storybooks</h3>
      </div>
      <div>
        <h3>Styled Components</h3>
      </div>
      <div>
        <h3>ESLint and Prettier</h3>
      </div>
      <div>
        <h3>Ruby on Rails</h3>
      </div>
      <div>
        <h3>Git and GitHub</h3>
      </div>
      <div>
        <h3>TypeScript</h3>
      </div>
      <div>
        <h3>HTML</h3>
      </div>
      <div>
        <h3>CSS</h3>
      </div>
      <div>
        <h3>JavaScript</h3>
      </div>
      <div>
        <h3>PHP</h3>
      </div>
      <div>
        <h3>Laravel</h3>
      </div>
      <div>
        <h3>Next.js</h3>
      </div>
    </section>
  );
}

export default Work;