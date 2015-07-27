describe('myController', function () {

  it('the dom initially has a greeting', function () {
    browser.get('http://localhost:5000/');
    expect(element(by.id('header-logo')).getText()).toEqual('Keep in touch');
  });

});