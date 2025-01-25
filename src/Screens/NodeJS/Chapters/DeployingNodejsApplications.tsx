import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DeployingNodeApps = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Deploying Node.js Applications</div>
        <div className="description">
          Deploying your Node.js application allows users to access it over the internet. In this chapter, we’ll cover deploying Node.js apps to popular cloud platforms like Heroku
          and AWS.
        </div>

        <div className="subHeader">1. Deploying to Heroku</div>
        <div className="description">Heroku is a platform-as-a-service (PaaS) that makes deploying applications simple. Follow these steps:</div>

        <div className="subSubHeader">Step 1: Install the Heroku CLI</div>
        <div className="description">
          Download and install the Heroku CLI from{" "}
          <a className="link" href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank" rel="noopener noreferrer">
            Heroku CLI
          </a>
          .
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Login to Heroku
heroku login`}</Code>

        <div className="subSubHeader">Step 2: Prepare Your Application</div>
        <div className="description">Ensure your `package.json` has a start script:</div>
        <Code language="json" style={materialDark} showLineNumbers>{`"scripts": {
  "start": "node app.js"
}`}</Code>
        <div className="description">Create a `Procfile` in the root of your project with the following content:</div>
        <Code language="plaintext" style={materialDark} showLineNumbers>{`web: node app.js`}</Code>

        <div className="subSubHeader">Step 3: Deploy to Heroku</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Initialize a git repository
git init

# Add your code to Git
git add .
git commit -m "Initial commit"

# Create a Heroku app
heroku create

# Deploy to Heroku
git push heroku master

# Open your app in the browser
heroku open`}</Code>

        <div className="subHeader">2. Deploying to AWS</div>
        <div className="description">AWS offers multiple services for deploying Node.js applications. One popular choice is AWS Elastic Beanstalk.</div>

        <div className="subSubHeader">Step 1: Install the AWS CLI</div>
        <div className="description">
          Install the AWS CLI from{" "}
          <a className="link" href="https://aws.amazon.com/cli/" target="_blank" rel="noopener noreferrer">
            AWS CLI
          </a>
          .
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Configure the AWS CLI
aws configure`}</Code>

        <div className="subSubHeader">Step 2: Set Up Elastic Beanstalk</div>
        <div className="description">Install the Elastic Beanstalk CLI:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`pip install awsebcli --upgrade --user`}</Code>

        <div className="subSubHeader">Step 3: Deploy to Elastic Beanstalk</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`# Initialize Elastic Beanstalk
eb init

# Create an environment
eb create

# Deploy the application
eb deploy

# Open your app in the browser
eb open`}</Code>

        <div className="subHeader">Best Practices for Deployment</div>
        <ul className="list">
          <li>Use environment variables for sensitive data like API keys and database credentials.</li>
          <li>Set up logging and monitoring tools to track application performance and errors.</li>
          <li>Use CI/CD pipelines (e.g., GitHub Actions) to automate deployments.</li>
          <li>Ensure your application is scalable to handle traffic spikes.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Heroku and AWS Elastic Beanstalk are popular platforms for deploying Node.js applications.</li>
          <li>Heroku simplifies deployment, while AWS offers greater flexibility and scalability.</li>
          <li>Follow deployment best practices to ensure security, performance, and reliability.</li>
        </ul>

        <Bottom back="/nodejs/testing-in-nodejs" next="/nodejs/security-best-practices" />
      </div>
    </div>
  );
};

export default DeployingNodeApps;
