(async () => {
	const PCR = require("puppeteer-chromium-resolver");
    const stats = PCR.getStats();
    if (!stats) {
        return;
    }
    const browser = await stats.puppeteer.launch({
        headless: false,
		ignoreHTTPSErrors: true,
        devtools: false,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
		//executablePath: 'C://Users//vaibhav.hb//AppData//Local//Google//Chrome//Application//chrome.exe'
    }).catch(function(error) {
        console.log(error);
    });
	
})();
const {When, Then, And, Given} = require("cucumber")
const expect = require("chai")	
const puppeteer = require("puppeteer")
const assert = require('assert');
//const PageObject = require('puppeteer-page-object')
//const out = await Promise.all(promises);

var {setDefaultTimeout} = require('cucumber');
	setDefaultTimeout(60 * 10000);

Given('The browser is open',async function(){
    browser = await puppeteer.launch({headless:false,
	ignoreHTTPSErrors: true,
    devtools: false,
	sloMo:2500,
	args: ['--no-sandbox', '--disable-setuid-sandbox'],
	executablePath: 'C://Users//vaibhav.hb//AppData//Local//Google//Chrome//Application//chrome.exe'})
    page = await browser.newPage()
	version = await page.browser().version().then(function(version) {
	console.log(version)});
});

When('Open the site',async function () {
    await page.goto('https://crmwebapp.azureedge.net/',{waitUntil:'networkidle2',})
});


When('I login to the application', async function () {
  await page.waitForSelector("[name='Username']")
  await page.type('#Username', 'cwood')
  // password
  await page.keyboard.down('Tab')
  // uncomment the following if you want the password to be visible
  // page.$eval("._2hvTZ.pexuQ.zyHYP[type='password']", (el) => el.setAttribute("type", "text"));
  await page.keyboard.type('password')
  await page.click('[name="button"]')
});

When('I have logged in', async function () {	
  await page.once('load', () => console.log('Page loaded!'));
});

When('I can create user', async function () {	 
	
    //await page.click('create_user')
	await page.waitForSelector("#root > div > aside > ul:nth-child(4) > li:nth-child(2) > a")
	await page.$eval('#root > div > aside > ul:nth-child(4) > li:nth-child(2) > a', element => element.click());
	await page.focus('#root > div > div > div > form > div:nth-child(1) > div > input')
	//await page.waitForSelector("[name='identityValue']")
    await page.keyboard.type('ATT_Test2')
	//await page.keyboard.down('Tab')
	await page.focus('#root > div > div > div > form > div:nth-child(2) > div > input')
	await page.keyboard.type('AAT_Testing2')
	await page.focus('#root > div > div > div > form > div:nth-child(3) > div > input')
	await page.keyboard.type('AAT_QA2')
	await page.focus('#root > div > div > div > form > div:nth-child(4) > div > input')
	await page.keyboard.type('ATT_User2')
    await page.click('[type="submit"]')
});
 
Then('View Users', async function () {
	/*await page.waitForSelector("#navbarBasicExample > div.navbar-end > div > div > a")
	await page.$eval('#navbarBasicExample > div.navbar-end > div > div > a', element => element.click());
	await page.waitForSelector("body > div.container.body-container > div > form > div > button")
	await page.$eval('body > div.container.body-container > div > form > div > button', element => element.click());
	
	//await page.screenshot({ path: 'logout.png' })
	await browser.close();*/
	await page.waitForSelector("#root > div > aside > ul:nth-child(4) > li:nth-child(1) > a")
	await page.$eval('#root > div > aside > ul:nth-child(4) > li:nth-child(1) > a', element => element.click());
});
 
When('I am logged in', async function () {	
  await page.once('load', () => console.log('Page loaded!'));
});

Then('View Users list', async function () {
 await page.waitForSelector("#root > div > aside > ul:nth-child(4) > li:nth-child(1) > a")
	await page.$eval('#root > div > aside > ul:nth-child(4) > li:nth-child(1) > a', element => element.click());
 });
