import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DateAndTime = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Date and Time</div>
        <div className="description">
          Date and time handling is a crucial aspect of many applications, especially those that involve scheduling, logging, or time-sensitive data. JavaScript provides a
          comprehensive set of methods for working with dates and times, allowing developers to create, manipulate, and format date and time values. Understanding these methods is
          essential for accurate time calculations and effective date formatting in your applications. Here’s an overview of some of the key Date and Time methods in JavaScript.
        </div>
        <div className="subHeader">Date()</div>
        <div className="description">
          The Date() constructor creates a new Date object representing the current date and time. You can also initialize it with specific date and time values. It is useful for
          obtaining the current date and time or creating a Date object for a specific moment in time.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let now = new Date();
            console.log(now); // Output: Current date and time
            let specificDate = new Date("2024-09-18");
            console.log(specificDate); // Output: Date object for September 18, 2024
    </script>
</html>`}</Code>

        <div className="subHeader">getFullYear()</div>
        <div className="description">
          The getFullYear() method returns the year of a Date object as a four-digit number. It is useful for extracting the year part from a date, which can be important for
          displaying or processing year-specific information.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            console.log(date.getFullYear()); // Output: Current year (e.g., 2024)
    </script>
</html>`}</Code>

        <div className="subHeader">getMonth()</div>
        <div className="description">
          The getMonth() method returns the month of a Date object as a zero-based index (0 for January, 1 for February, etc.). This method is useful for retrieving the month from
          a date, though it requires adjustment for human-readable month names.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            console.log(date.getMonth()); // Output: Current month index (e.g., 8 for September)
    </script>
</html>`}</Code>

        <div className="subHeader">getDate()</div>
        <div className="description">
          The getDate() method returns the day of the month for a Date object. It provides the day of the month as a number between 1 and 31. This method is useful for extracting
          the specific day within the current month.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            console.log(date.getDate()); // Output: Current day of the month (e.g., 18)
    </script>
</html>`}</Code>

        <div className="subHeader">getHours()</div>
        <div className="description">
          The getHours() method returns the hour of a Date object in the 24-hour format (0 to 23). It is useful for retrieving the current hour from a date and time object,
          allowing you to work with time data at a granular level.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            console.log(date.getHours()); // Output: Current hour (e.g., 14 for 2 PM)
    </script>
</html>`}</Code>

        <div className="subHeader">getMinutes()</div>
        <div className="description">
          The getMinutes() method returns the minutes portion of a Date object. It provides the minutes as a number between 0 and 59. This method is useful for obtaining the exact
          minute within the current hour.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            console.log(date.getMinutes()); // Output: Current minutes (e.g., 30)
    </script>
</html>`}</Code>

        <div className="subHeader">getSeconds()</div>
        <div className="description">
          The getSeconds() method returns the seconds portion of a Date object. It provides the seconds as a number between 0 and 59. This method is useful for obtaining the exact
          second within the current minute.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            console.log(date.getSeconds()); // Output: Current seconds (e.g., 45)
    </script>
</html>`}</Code>

        <div className="subHeader">getTime()</div>
        <div className="description">
          The getTime() method returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC. This method is useful for performing time calculations or comparisons
          by providing a numeric representation of a date and time.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            console.log(date.getTime()); // Output: Milliseconds since January 1, 1970
    </script>
</html>`}</Code>

        <div className="subHeader">setFullYear()</div>
        <div className="description">
          The setFullYear() method sets the year of a Date object. You can also specify the month and day. This method is useful for updating the year of a date, which can be
          necessary for date calculations or adjustments.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            date.setFullYear(2025);
            console.log(date.getFullYear()); // Output: 2025
    </script>
</html>`}</Code>

        <div className="subHeader">setMonth()</div>
        <div className="description">
          The setMonth() method sets the month of a Date object. The month is specified as a zero-based index (0 for January, 1 for February, etc.). This method is useful for
          updating the month of a date, which can be necessary for date manipulations.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            date.setMonth(11); // December
            console.log(date.getMonth()); // Output: 11
    </script>
</html>`}</Code>

        <div className="subHeader">setDate()</div>
        <div className="description">
          The setDate() method sets the day of the month for a Date object. This method is useful for adjusting the day of a date, which can be important for scheduling or date
          arithmetic.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            date.setDate(25);
            console.log(date.getDate()); // Output: 25
    </script>
</html>`}</Code>

        <div className="subHeader">setHours()</div>
        <div className="description">
          The setHours() method sets the hour of a Date object in the 24-hour format. This method is useful for updating the hour of a date and time, allowing for precise time
          adjustments.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            date.setHours(10);
            console.log(date.getHours()); // Output: 10
    </script>
</html>`}</Code>

        <div className="subHeader">setMinutes()</div>
        <div className="description">
          The setMinutes() method sets the minutes portion of a Date object. This method is useful for adjusting the minute of a date and time, which can be essential for time
          management.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            date.setMinutes(30);
            console.log(date.getMinutes()); // Output: 30
    </script>
</html>`}</Code>

        <div className="subHeader">setSeconds()</div>
        <div className="description">
          The setSeconds() method sets the seconds portion of a Date object. This method is useful for updating the second of a date and time, allowing for precise time
          adjustments.
        </div>
        <Code language="html" style={materialDark} showLineNumbers>{`<html>
    <body>
    </body>
    <script>
            let date = new Date();
            date.setSeconds(45);
            console.log(date.getSeconds()); // Output: 45
    </script>
</html>`}</Code>

        <Bottom back="/javascript/numbermethods" next="/javascript/functions" />
      </div>
    </div>
  );
};

export default DateAndTime;
