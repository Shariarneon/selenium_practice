const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function runTest() {
    await driver.get('https://www.selenium.dev/selenium/web/mouse_interaction.html');
    const ele = await driver.findElement(By.id("clickable"));
    await driver.actions().sendKeys(ele,"neon").perform();
    await driver.actions().keyDown(Key.BACK_SPACE).perform();
    await driver.sleep(2000);
    
    await driver.quit();
}

runTest();
