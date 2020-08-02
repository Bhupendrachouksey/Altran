import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('launch url check', () => {
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    browser.manage().window().maximize();
    });
  
  it('should enter username and password and click to login button', () => {
    element(by.model("Auth.user.name")).sendKeys("angular");
    element(by.model("Auth.user.password")).sendKeys("password");
    element(by.model("model[options.key]")).sendKeys("angularUser");
    browser.waitForAngularEnabled(true);
    
    var description = element(by.tagName("p")).getText();
    description.then(function(value){
      expect(value).toEqual("username description");
    });
    element(by.buttonText("Login")).click();
    browser.sleep(9000);
  });

  it('check contains of login page ', () => {
    var description = element(by.tagName("p")).getText();
    var contain = element(by.tagName("h1")).getText();
    description.then(function(value){
      expect(value).toEqual("You're logged in!!");
    });
    contain.then(function(contain){
      expect(contain).toContain('Home');
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
