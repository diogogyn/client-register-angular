import { ClientRegisterAngularPage } from './app.po';

describe('client-register-angular App', function() {
  let page: ClientRegisterAngularPage;

  beforeEach(() => {
    page = new ClientRegisterAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
