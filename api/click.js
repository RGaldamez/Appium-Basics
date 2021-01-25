describe('Using a click in webdriver', function () {
  it('Should clock on login icon', function () {
    // to look for an element, first you need the Accesibility ID, which in android shows
    // as content-desc, should display accesibilityID in IOS
    //You need towrite the ~ symbol first
    const LOGIN_ICON = '~Login'; // This var is known as the selector

    $(LOGIN_ICON).click();
    browser.pause('3000');
  });
});
