# Project Overview

I created a Node.js web application that demonstrates how to work with multiple external APIs. The application retrieves data from different APIs on the server side, processes it, and displays clean, structured information on the frontend.

My app generates a random user and shows:
* Personal and location details
* Country information
* Currency exchange rates
* Related news headlines

I implemented all API logic on the server side in the core.js file, following best practices.

## Technologies I Used

* Node.js
* Express.js
* Axios
* HTML, CSS, JavaScript
* External REST APIs

## APIs I Used

### 1. Random User Generator API
URL: https://randomuser.me/api/

I use this API to generate a random user and extract:
* First name
* Last name
* Gender
* Profile picture
* Age
* Date of birth
* City
* Country
* Full address (street name and number)

### 2. Countrylayer API
URL: https://countrylayer.com/

I use this to retrieve country details based on the user's country:
* Country name
* Capital city
* Region

I store the API key securely in an environment variable.

### 3. Exchange Rate API
URL: https://www.exchangerate-api.com/

I use this to compare currency values:
* Local currency compared to USD
* Local currency compared to KZT

Example output:

1 KZT = 0.0019 USD
1 KZT = 1 KZT

### 4. News API
URL: https://newsapi.org/

I use this to fetch five English-language news articles related to the user's country. Each article displays:
* Headline title
* Image (if available)
* Short description
* Link to the full article

## Key Design Decisions I Made

* **Server-side API logic**: I handle all API requests and data processing in `core.js`. I didn't place any API logic or keys in HTML files.
* **Separation of concerns**:
   * `core.js` – API logic and data processing
   * `server.js` – server configuration and routing
   * `app.js` – frontend DOM manipulation only
   * `index.html` – structure only (no logic)
* **Security**: I store API keys in a `.env` file and access them using environment variables.
* **Clean UI**: I display data using cards and structured sections for better readability.

## Server Configuration

* I set the server to run on port 3000
* I use Express to serve static frontend files and API endpoints

## Conclusion

This project demonstrates my ability to properly integrate APIs, handle data on the server side, use API keys securely, and present information cleanly on the frontend. I implemented all requirements of Assignment 2 according to best practices.