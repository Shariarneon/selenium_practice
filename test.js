const { Builder, By, Key, Browser } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function runTest() {
  await driver.get("https://demo.evershop.io/");
  await driver.sleep(2000);
  await driver.manage().window().maximize();
  await driver.sleep(2000);
  await driver.findElement(By.xpath("//a[@class='search-icon']")).click();
  await driver.sleep(2000);
  await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Nike air", Key.ENTER);
  await driver.sleep(5000);
  await driver.quit();
}

runTest();
