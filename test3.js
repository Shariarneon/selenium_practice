const {Builder, Browser, By, Key, until} = require('selenium-webdriver')

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function runTest(){
    await driver.get('https://demo.evershop.io/');
    await driver.manage().window().maximize();
    let aboutUsButton = await driver.findElement(By.linkText("About us"));
    await aboutUsButton.click();

}
runTest();