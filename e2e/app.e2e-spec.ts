import { Auth0Angulr2Page } from './app.po';

describe('auth0-angulr2 App', function() {
  let page: Auth0Angulr2Page;

  beforeEach(() => {
    page = new Auth0Angulr2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
