const {By, Builder, Browser} = require('selenium-webdriver');

// Initialize browser
(async function example() {
    let driver;

  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    // Navigate to your website 
    await driver.get('http://localhost:3000/');

    let metrics = [];
    // Track presence time 
    let start_time = Date.now();
    let presence_time = start_time;
    while (true) { //presence_time < 50; // seconds
      let current_time = Date.now();
      presence_time = (current_time - start_time) / 1000; //Convert milliseconds to seconds since 1 second is equivalent to 1000 miliseconds
      console.log(`Presence time: ${presence_time} seconds`);

      // Track scrolling
      let scroll_height = await driver.executeScript("return document.body.scrollHeight");
      let current_scroll = await driver.executeScript("return window.pageYOffset");
      console.log(`Scrolled ${current_scroll}/${scroll_height} pixels`);

      await delay(2000); //This calls function delay(); there is a delay of execution of the script for 2000 miliseconds or 2 seconds. So the script will update every 2 seconds.
    }
  } finally {
    await driver.quit();
  }
})();

// Function to pause execution
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

