let homepage = require('../pages/homepage');
let createPopup = require('../pages/CreateAccountPopup')
let testdata = require('../TestData/data')


describe('Verify the website for languages and selection', function () {

  beforeAll(function () {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    browser.get(testdata.environment);
    browser.sleep(5000);
  });

  it('Verify the number of languages available', function () {
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    homepage.languageDropdown.click();
    browser.sleep(3000);
    let optionsCount = homepage.languageOptions.count().then(function (size) {

      expect(size).toEqual(testdata.size);

    });

  });
  it('Verify the selection of languages chnages the continue button text', function () {
   
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    homepage.languageDropdown.click();
    browser.sleep(3000);
    homepage.hindiLanguage.click();
    browser.sleep(3000);
    let continueBtnTitle = homepage.confirmButton.getText();
    expect(continueBtnTitle).toEqual('अग्रसर रहें');
    browser.sleep(3000);
    homepage.languageDropdown.click();
    homepage.espanol.click();
    browser.sleep(3000);
    let continueBtnTitle1 = homepage.confirmButton.getText();
    expect(continueBtnTitle1).toEqual('CONTINUAR');



  });

  it('Validate parent link registration', function () {
   
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    homepage.clickSetupParentLink();
    createPopup.createAccountLink.click();
    browser.sleep(5000);
    let btn = createPopup.creaAccountBtn;
    browser.actions().mouseMove(btn).click().perform();
    btn.getAttribute('style').then(function (value) {
      expect(value).toEqual('position: relative; opacity: 0.3; font-size: 14px; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; margin: 0px; user-select: none; padding-left: 16px; padding-right: 16px; color: rgb(255, 255, 255);');
    });
    createPopup.firstName.sendKeys(testdata.firstname);
    createPopup.lastName.sendKeys(testdata.lastname);
    createPopup.emailAddress.sendKeys(testdata.emailId);
    createPopup.createUsername.sendKeys(testdata.parentUsername);
    createPopup.createParentPassword.sendKeys(testdata.password);
    createPopup.confirmPassword.sendKeys(testdata.password);
    createPopup.captcha.sendKeys(testdata.captcha);
    browser.sleep(5000);
    btn.click();
    browser.sleep(5000);
  });


});