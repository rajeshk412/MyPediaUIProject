class createAccountPopup
{
constructor()
{
    this.createAccountLink=element(by.xpath('//span[text()="CREATE A NEW ACCOUNT"]'));
    this.creaAccountBtn=element(by.xpath('//*[@id="main"]/div/div[5]/div/button/div/div/span'));
    this.firstName=element(by.xpath('//div[@id="main"]/div/div[3]/div[1]/div[1]/div[2]/div/input'));
    this.lastName=element(by.xpath('//div[@id="main"]/div/div[3]/div[1]/div[1]/div[3]/div/input'));
    this.emailAddress=element(by.xpath('//div[@id="main"]/div/div[3]/div[1]/div[1]/div[4]/div/input'));
    this.createUsername=element(by.xpath('//div[@id="main"]/div/div[3]/div[2]/div[2]/div/input'));
    this.createParentPassword=element(by.xpath('//div[@id="main"]/div/div[3]/div[2]/div[3]/div/input'));
    this.confirmPassword=element(by.xpath('//div[@id="main"]/div/div[3]/div[2]/div[4]/div/input'));
    this.captcha=element(by.xpath('//div[@id="main"]/div/div[3]/div[2]/div[5]/div/div[1]/div/input'));
}

}


module.exports= new createAccountPopup();