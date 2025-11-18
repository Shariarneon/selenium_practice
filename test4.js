const {Builder, Browser, By, Key} = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

async function runTest(){
    await driver.get("https://www.saucedemo.com/");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@placeholder= 'Username']")).sendKeys("error_user", Key.ENTER);
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@placeholder= 'Password']")).sendKeys("secret_sauce", Key.ENTER);
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@id= 'login-button']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//button[@id= 'add-to-cart-sauce-labs-backpack']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[@class= 'shopping_cart_link']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//button[@id= 'react-burger-menu-btn']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[@id= 'logout_sidebar_link']")).click();
    


}

runTest();