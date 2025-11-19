const {Browser, Builder, By, Key, until} = require("selenium-webdriver");
const expect = require("chai").expect;
const driver = new Builder().forBrowser("chrome").build();

const searchTextList = ["Nike", "Seasonal", "Nizza trefoil", "Hacked fashion"];

function getRandomInteger(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};


async function runtest(){
    await driver.get("https://demo.evershop.io/");
    await driver.manage().window().maximize();
    await driver.findElement(By.xpath("//a[@class='search-icon']")).click();
    const searchText = searchTextList[getRandomInteger(0, 3)]
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(searchText,Key.ENTER);
    const actualProductList = await driver.findElements(By.xpath(`//a/span[contains(text(), '${searchText}')]`));
    
    for(let i = 0; i<actualProductList.length; i++){
        let actualPreductName = await actualProductList[i].getText();
        expect(actualPreductName).to.include(searchText);
        console.log(`PASSED: Expected ${searchText} into ${actualPreductName}`);
    }
    await driver.quit();
}

runtest();