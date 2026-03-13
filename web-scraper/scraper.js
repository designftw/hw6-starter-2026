/*
 * HW6 Exercise 1: Web Scraper
 *
 * Implement the scrape() function below to extract faculty data from the
 * MIT EECS faculty page and replace the existing grid of faculty cards with a new table.
 *
 * Your scraper should extract for each faculty member:
 *   - Name
 *   - Title (e.g., "Class of 1922 Professor")
 *   - Email
 *   - Research areas (as a list)
 *
 * HOW TO TEST:
 *   Option A (easiest): Open eecs-faculty.html in your browser.
 *                       scraper.js is already included via a <script> tag,
 *                       so scrape() will run automatically when the page loads.
 *
 *   Option B (live page): Go to https://www.eecs.mit.edu/role/faculty/ in your
 *                         browser. Open DevTools (F12 or Cmd+Option+I), paste
 *                         your scrape() function body into the Console, and run it.
 */

function scrape() {
  /* Remember: You don't need to write any CSS for this assignment (not including selectors passed
  to querySelectorAll or querySelector). */
  /* Some helpful DOM manipulation APIs:
    - querySelectorAll(selector) - returns a NodeList of all elements that match the selector
    - querySelector(selector) - returns the first element that matches the selector
    - createElement(tagName) - creates a new element with the given tag name
    - appendChild(child) - adds the child element to the end of the parent element
    - remove() - removes the element from the DOM
    - innerHTML - the HTML content of the element
    - textContent - the text content of the element
  */
  /* 1. Scrape the existing site by traversing the DOM and collecting the name, title, email, and research areas
     from each faculty card. */
  // TODO
  /* 2. Delete the existing grid of faculty cards from the DOM. */
  // TODO
  /* 3. Add your table to the page by generating an HTML table with a header row (one column for
     each type of information) and one row for each faculty member, so that users can easily
     select-all and copy/paste the table into a spreadsheet. */
  // TODO
}

alert("scraper loaded successfully! Comment out the alert to run the scraper.");

scrape();
