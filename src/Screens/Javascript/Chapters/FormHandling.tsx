import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FormHandling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Form Handling</div>
        <div className="description">
          Forms are a crucial part of any website or web application, allowing users to submit data, interact with services, or provide feedback. JavaScript enhances forms by
          adding interactivity, validating inputs, and processing data before it's sent to the server. Proper form handling and validation ensure a smooth user experience and
          protect against incorrect or malicious data submissions.
        </div>

        <div className="subHeader">Basic Form Structure</div>
        <div className="description">
          A typical HTML form contains various input elements such as text fields, checkboxes, radio buttons, and buttons. JavaScript interacts with these elements through event
          handling to retrieve and manipulate user input.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" />
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" />
    
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" />
    
    <button type="submit">Submit</button>
</form>`}</Code>

        <div className="subHeader">Accessing Form Values</div>
        <div className="description">
          JavaScript allows you to access the values entered by users in the form fields. You can retrieve these values using the `value` property of each input field.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Accessing form values on submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting immediately
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
});`}</Code>

        <div className="subHeader">Form Validation</div>
        <div className="description">
          Form validation ensures that the data submitted by the user meets specific criteria before it is processed. JavaScript provides both basic and advanced methods for form
          validation. There are two types of validation: client-side (using JavaScript) and server-side. Client-side validation is faster and provides instant feedback, but
          server-side validation is essential for security.
        </div>

        <div className="subHeader">Basic Required Field Validation</div>
        <div className="description">
          The most basic form validation checks if required fields are filled out. JavaScript allows you to ensure that users cannot submit a form without completing mandatory
          fields.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return;
    }
    
    console.log("Form is valid");
    // Proceed with form submission
});`}</Code>

        <div className="subHeader">Email Format Validation</div>
        <div className="description">
          Email validation ensures that the email address entered by the user is in the correct format. This can be achieved using regular expressions or JavaScript’s built-in
          input validation for email fields.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/;
    
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    console.log("Email is valid");
});`}</Code>

        <div className="subHeader">Number and Range Validation</div>
        <div className="description">
          JavaScript can also validate numerical inputs such as age, ensuring that values fall within a specific range. For example, you may want to ensure that age is between 18
          and 100.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const age = document.getElementById("age").value;
    
    if (age < 18 || age > 100) {
        alert("Please enter an age between 18 and 100.");
        return;
    }
    
    console.log("Age is valid");
});`}</Code>

        <div className="subHeader">Real-Time Validation</div>
        <div className="description">
          Real-time validation provides immediate feedback to the user while they are entering data, helping them correct errors before they submit the form. You can achieve this
          by attaching event listeners such as `input` or `blur` to form fields.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const emailInput = document.getElementById("email");

emailInput.addEventListener("input", function() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/;
    
    if (!emailPattern.test(emailInput.value)) {
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "green";
    }
});`}</Code>

        <div className="subHeader">Submitting Form Data Using JavaScript</div>
        <div className="description">
          After validating the form, you can use JavaScript to submit the data via HTTP requests without refreshing the page. This is typically done using AJAX or the modern
          `fetch` API for asynchronous form submission.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Example of form submission using fetch API
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    fetch("/submit-form", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("Form successfully submitted:", data);
    })
    .catch(error => {
        console.error("Error submitting form:", error);
    });
});`}</Code>

        <div className="subHeader">Disabling the Submit Button Until Validation</div>
        <div className="description">To prevent users from submitting invalid data, you can disable the submit button until all required fields pass validation.</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Disable submit button until form is valid
const submitButton = document.querySelector("button[type='submit']");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

function validateForm() {
    if (nameInput.value !== "" && emailInput.value !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);

// Initial check
validateForm();`}</Code>

        <div className="subHeader">Best Practices for Form Validation</div>
        <ul className="list">
          <li>
            <b>Use Both Client and Server-Side Validation</b>: Client-side validation provides a quick and user-friendly experience, but server-side validation is critical for
            security.
          </li>
          <li>
            <b>Provide Clear Error Messages</b>: Ensure that validation error messages are specific and user-friendly, helping users understand what went wrong and how to fix it.
          </li>
          <li>
            <b>Validate on the Client Side for Performance</b>: Client-side validation can prevent unnecessary server requests and improve the user experience by providing instant
            feedback.
          </li>
          <li>
            <b>Disable Submission Until Form is Valid</b>: Disable the submit button or prevent submission until all required fields are filled out and valid.
          </li>
        </ul>

        <Bottom back="/javascript/responsivedesign" next="/javascript/asynchronousprogramming" />
      </div>
    </div>
  );
};

export default FormHandling;
