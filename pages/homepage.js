class HomePage
{
constructor()
{
    this.closePopUp=element(by.id('spanDone'));
    this.setUpParentLink=element(by.linkText('Set up parent support'));
    this.languageDropdown=element(by.xpath('//div[@class="accountDetailsLangDropDown"]/div/div[2]'));

    this.languageOptions=element.all(by.xpath('//*[@id="main-body-container"]/div[11]/div/div/div/div/span/div/div'));
    this.hindiLanguage=element(by.xpath('//*[@id="main-body-container"]/div[11]/div/div/div/div[2]/span/div/div/div'));
    this.espanol=element(by.xpath('//*[@id="main-body-container"]/div[11]/div/div/div/div[3]/span/div/div/div'));
    this.confirmButton=element(by.xpath('//button[@id="SI_0005"]/div/div'));
    this.verifySelection=function()
    {
        let tabs=languageOptions.map(function(ele)
            {
            return ele.getText();
            })

        tabs.then(function (result) {
        for (var i = 0; i < result.length; i++) {
        console.log(result[i]);
     
        }
        });
    }


}

clickSetupParentLink() {
    this.setUpParentLink.click();
}


}
module.exports= new HomePage();