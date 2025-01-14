import React from "react";

function DeveloperSetup() {
  return (
    <section id="setup">
      <h2>Developer Setup</h2>
      <h3>VSCode Setup</h3>
      <p>I use the following extensions in VSCode:</p>
      <ul>
        <li>Auto Close Tag: automatically adds HTML close tags</li>
        <li>Dev Containers: Open any folder or repository inside a Docker container and take advantage of Visual Studio Code's full feature set. </li>
        <li>WSL: open any folder in the Windows Subsystem for Linux (WSL)</li>
        <li>JetBrains Darcula Theme: A vscode theme based on JetBrains Darcula IDE theme</li>
        <li>MySQL: database manager for MySQL/MongoDB</li>
        <li>
          Live Server: launch a development local server with a live reload
          feature
        </li>
      </ul>
      <h3>Terminal Setup</h3>
      <p>I use the integrated terminal in VSCode with the following setup:</p>
      <ul>
        <li>Node.js for local development.</li>
        <li>Git for version control.</li>
      </ul>
      <h3>Preferred Editor Font</h3>
      <p>
        I use the Consolas Code font, it is the default font used for VSCode
      </p>
    </section>
  );
}

export default DeveloperSetup;