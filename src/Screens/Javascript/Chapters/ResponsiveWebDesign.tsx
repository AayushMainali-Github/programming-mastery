import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ResponsiveWebDesign = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Responsive Web Design</div>
        <div className="description">
          Responsive web design is an approach that ensures a website looks and works well across a variety of devices, screen sizes, and orientations. While CSS is the primary
          tool for responsive design through media queries, JavaScript can further enhance the responsiveness by dynamically adjusting layout, styles, and behaviors based on
          real-time conditions such as window size or device capabilities.
        </div>

        <div className="subHeader">Using Media Queries with JavaScript</div>
        <div className="description">
          While media queries are typically used in CSS to apply different styles at various screen sizes, JavaScript can also detect and respond to media queries using the
          `window.matchMedia()` method. This allows you to execute JavaScript code based on specific media query conditions.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Example of detecting a media query with JavaScript
const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleTabletChange(e) {
    if (e.matches) {
        // If screen width is 768px or less, apply specific JavaScript functionality
        console.log("Screen is less than 768px wide");
        document.body.style.backgroundColor = "lightblue";
    } else {
        // Revert to normal behavior for larger screens
        document.body.style.backgroundColor = "white";
    }
}

// Register event listener to respond to changes in screen size
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);`}</Code>

        <div className="subHeader">Dynamic Resizing and Viewport Adjustments</div>
        <div className="description">
          JavaScript can help adjust layout and styles dynamically as the user resizes the window. The `window.resize` event allows you to trigger changes when the size of the
          browser window changes, helping you manage content layout in real-time.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Adjust layout when the window is resized
window.addEventListener("resize", function() {
    const width = window.innerWidth;

    if (width < 600) {
        document.body.style.fontSize = "14px";
    } else if (width < 1200) {
        document.body.style.fontSize = "16px";
    } else {
        document.body.style.fontSize = "18px";
    }
});`}</Code>

        <div className="subHeader">Viewport Units and Dynamic Calculations</div>
        <div className="description">
          JavaScript can also help with dynamic adjustments based on viewport dimensions, allowing you to calculate element sizes and positions relative to the viewport size using
          JavaScript. This can be particularly useful for layouts that depend on the exact width and height of the browser window.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Calculate and apply height relative to viewport height (vh)
function adjustElementHeight() {
    const viewportHeight = window.innerHeight;
    const element = document.getElementById("responsiveElement");
    element.style.height = viewportHeight * 0.5 + "px";  // Set element height to 50% of viewport height
}

// Run on page load and on window resize
window.addEventListener("resize", adjustElementHeight);
adjustElementHeight();`}</Code>

        <div className="subHeader">Responsive Images</div>
        <div className="description">
          Images can significantly affect a website's responsiveness and performance. JavaScript can be used to dynamically load images of different sizes or resolutions based on
          the device's screen size or capabilities. This ensures that users with smaller screens or slower connections aren't served large, high-resolution images unnecessarily.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Load different images based on screen width
function setResponsiveImage() {
    const image = document.getElementById("responsiveImage");

    if (window.innerWidth < 600) {
        image.src = "small-image.jpg";
    } else if (window.innerWidth < 1200) {
        image.src = "medium-image.jpg";
    } else {
        image.src = "large-image.jpg";
    }
}

// Run on page load and window resize
window.addEventListener("resize", setResponsiveImage);
setResponsiveImage();`}</Code>

        <div className="subHeader">Handling Orientation Changes</div>
        <div className="description">
          Devices such as tablets and smartphones allow users to switch between portrait and landscape orientations. You can detect and respond to these changes using JavaScript’s
          `window.orientation` or the `resize` event to adjust layout, content, or functionality.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Detect orientation changes
window.addEventListener("orientationchange", function() {
    const orientation = window.orientation;
    if (orientation === 0 || orientation === 180) {
        // Portrait mode
        console.log("Portrait mode");
    } else if (orientation === 90 || orientation === -90) {
        // Landscape mode
        console.log("Landscape mode");
    }
});`}</Code>

        <div className="subHeader">Touch and Mobile-Specific Interactions</div>
        <div className="description">
          On touch devices, user interactions differ from desktop-based interactions (e.g., tap vs click). JavaScript can detect touch events and apply custom behavior to ensure
          your site works seamlessly across different device types. You can use events like `touchstart`, `touchmove`, and `touchend` to handle touch gestures.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Handling touch events
const touchElement = document.getElementById("touchElement");

touchElement.addEventListener("touchstart", function() {
    console.log("Touch started!");
});

touchElement.addEventListener("touchmove", function() {
    console.log("Touch is moving!");
});

touchElement.addEventListener("touchend", function() {
    console.log("Touch ended!");
});`}</Code>

        <div className="subHeader">Lazy Loading for Performance</div>
        <div className="description">
          JavaScript can also enhance performance by implementing lazy loading, where images or other resources are only loaded as they are about to enter the viewport. This
          reduces initial load time, especially on mobile devices with limited bandwidth.
        </div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Lazy loading images using IntersectionObserver API
const lazyImages = document.querySelectorAll("img.lazy");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;  // Load the image
            img.classList.remove("lazy");
            observer.unobserve(img);  // Stop observing once loaded
        }
    });
});

lazyImages.forEach(image => {
    observer.observe(image);
});`}</Code>

        <div className="subHeader">Best Practices for Responsive Web Design</div>
        <ul className="list">
          <li>
            <b>Use CSS for Layout, JavaScript for Enhancements</b>: Rely on CSS for basic layout changes (e.g., flexbox, grid, media queries), and use JavaScript for interactive or
            dynamic features.
          </li>
          <li>
            <b>Test Across Multiple Devices</b>: Ensure your website functions properly on various devices and screen sizes, including mobile phones, tablets, and desktops.
          </li>
          <li>
            <b>Optimize for Performance</b>: Keep load times low by using techniques such as lazy loading, compressing images, and serving appropriately sized images based on
            screen resolution.
          </li>
          <li>
            <b>Handle Edge Cases</b>: Consider unusual screen sizes, orientations, or browser features that may affect how your design behaves.
          </li>
        </ul>

        <Bottom back="/javascript/cssmanipulation" next="/javascript/formhandling" />
      </div>
    </div>
  );
};

export default ResponsiveWebDesign;
