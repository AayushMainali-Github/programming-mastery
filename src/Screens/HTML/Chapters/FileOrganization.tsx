import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLFileOrganization = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">HTML File Organization</div>
        <div className="description">
          Proper file organization is essential for scalability, clarity, and maintainability of your HTML projects. By following structured conventions, you can manage your files
          efficiently as your projects grow.
        </div>

        <div className="subHeader">1. Basic Folder Structure</div>
        <div className="description">Organize your project files into meaningful folders to separate concerns. A common structure includes:</div>
        <Code language="plaintext" style={materialDark} showLineNumbers>{`project/
├── index.html    # Main HTML file
├── css/          # Stylesheets
│   └── styles.css
├── js/           # JavaScript files
│   └── script.js
├── images/       # Image assets
│   └── logo.png
├── fonts/        # Custom fonts
└── assets/       # Additional resources`}</Code>

        <div className="subHeader">2. HTML File Naming Conventions</div>
        <div className="description">Use clear, descriptive, and lowercase names for your HTML files. Avoid spaces and use hyphens for separation:</div>
        <Code language="plaintext" style={materialDark} showLineNumbers>{`# Good
about-us.html
contact.html

# Avoid
AboutUs.html
contact us.html`}</Code>

        <div className="subHeader">3. Structuring Your HTML File</div>
        <div className="description">A well-structured HTML file enhances readability and scalability. Follow this general structure:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Name</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <!-- Navigation or header content -->
  </header>
  <main>
    <!-- Main content -->
  </main>
  <footer>
    <!-- Footer content -->
  </footer>
  <script src="js/script.js"></script>
</body>
</html>`}</Code>

        <div className="subHeader">4. Linking External Resources</div>
        <div className="description">Keep external resources (CSS, JavaScript, fonts, etc.) organized in separate folders and link them correctly:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<link rel="stylesheet" href="css/styles.css">
<script src="js/script.js"></script>`}</Code>

        <div className="subHeader">5. Organizing Large HTML Files</div>
        <div className="description">For large projects, consider splitting sections into reusable components and templates:</div>
        <ul className="list">
          <li>Use tools like PHP, Django, or templating engines (e.g., Handlebars, EJS) for dynamic content.</li>
          <li>Include reusable components (e.g., headers, footers) to reduce redundancy.</li>
        </ul>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- Include header from an external file -->
<?php include 'header.php'; ?>
<main>
  <h1>Main Content</h1>
</main>
<?php include 'footer.php'; ?>`}</Code>

        <div className="subHeader">6. Using Comments Effectively</div>
        <div className="description">Add comments to explain sections of your code, especially for complex layouts or reusable components:</div>
        <Code language="html" style={materialDark} showLineNumbers>{`<!-- Main navigation -->
<header>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about-us.html">About Us</a></li>
    </ul>
  </nav>
</header>`}</Code>

        <div className="subHeader">7. Best Practices for File Organization</div>
        <ul className="list">
          <li>Keep the root folder clean by grouping resources into appropriate subfolders.</li>
          <li>Use consistent naming conventions across all files.</li>
          <li>
            Include a <b>README</b> file to document the purpose of the project and folder structure.
          </li>
          <li>Minimize inline styles and scripts to maintain separation of concerns.</li>
        </ul>

        <div className="subHeader">8. Example: Project Structure for a Blog</div>
        <Code language="plaintext" style={materialDark} showLineNumbers>{`blog-project/
├── index.html         # Homepage
├── post.html          # Individual blog post
├── css/
│   └── blog-styles.css
├── js/
│   └── blog-scripts.js
├── images/
│   ├── banner.jpg
│   └── author.jpg
├── assets/
│   └── docs/
│       └── privacy-policy.pdf
└── fonts/
    └── custom-font.woff`}</Code>

        <Bottom back="/html/best-practices" next="/html" />
      </div>
    </div>
  );
};

export default HTMLFileOrganization;
