import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DateTimeHandling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Date and Time Handling</div>
        <div className="description">
          Python provides the <b>datetime</b> module for working with dates and times. This module allows you to create, manipulate, and format date and time objects in your Python
          programs.
        </div>

        <div className="subHeader">Getting the Current Date and Time</div>
        <div className="description">
          You can use the <b>datetime.now()</b> method to get the current local date and time.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`from datetime import datetime

# Get current date and time
now = datetime.now()
print("Current date and time:", now)
# Output: Current date and time: YYYY-MM-DD HH:MM:SS.MMMMMM`}</Code>

        <div className="subHeader">Creating Date and Time Objects</div>
        <div className="description">
          You can create custom date and time objects using the <b>datetime()</b> constructor.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Creating a specific date and time
specific_date = datetime(2023, 5, 17, 15, 30)
print("Specific date and time:", specific_date)
# Output: Specific date and time: 2023-05-17 15:30:00`}</Code>

        <div className="subHeader">Formatting Dates and Times</div>
        <div className="description">
          The <b>strftime()</b> method allows you to format date and time objects as strings using format codes.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Formatting date and time
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")
print("Formatted date:", formatted_date)
# Output: Formatted date: YYYY-MM-DD HH:MM:SS

# Common format codes
# %Y - Year (e.g., 2023)
# %m - Month (01-12)
# %d - Day (01-31)
# %H - Hour (00-23)
# %M - Minute (00-59)
# %S - Second (00-59)`}</Code>

        <div className="subHeader">Parsing Dates and Times</div>
        <div className="description">
          You can convert a string to a <b>datetime</b> object using the <b>strptime()</b> method.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`# Parsing a date string
date_string = "2023-05-17 15:30:00"
parsed_date = datetime.strptime(date_string, "%Y-%m-%d %H:%M:%S")
print("Parsed date:", parsed_date)
# Output: Parsed date: 2023-05-17 15:30:00`}</Code>

        <div className="subHeader">Date Arithmetic</div>
        <div className="description">
          You can perform date arithmetic by using the <b>timedelta</b> class.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`from datetime import timedelta

# Adding 10 days to the current date
future_date = now + timedelta(days=10)
print("Date after 10 days:", future_date)

# Subtracting 5 days from the current date
past_date = now - timedelta(days=5)
print("Date 5 days ago:", past_date)`}</Code>

        <div className="subHeader">Working with Time Zones</div>
        <div className="description">
          The <b>pytz</b> library can be used to work with time zones and convert <b>datetime</b> objects to different time zones.
        </div>
        <Code language="python" style={materialDark} showLineNumbers>{`import pytz

# Get the current time in a specific time zone
timezone = pytz.timezone("America/New_York")
ny_time = now.astimezone(timezone)
print("New York time:", ny_time)

# List of available time zones
print(pytz.all_timezones[:5])  # Output: ['Africa/Abidjan', 'Africa/Accra', ...]`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Always use <b>datetime.utcnow()</b> when working with UTC time.
          </li>
          <li>
            Use the <b>pytz</b> library for accurate time zone handling.
          </li>
          <li>Keep date formatting consistent throughout your application.</li>
        </ul>

        <Bottom back="/python/customexceptions" next="/python/regex" />
      </div>
    </div>
  );
};

export default DateTimeHandling;
