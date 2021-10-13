const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

var driver = chrome.Driver.createSession(
	new chrome.Options(),
	new chrome.ServiceBuilder(path)
	.build());

driver.get('http://www.google.com');
