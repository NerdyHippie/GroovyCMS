import { GroovyCMSPage } from './app.po';

describe('ng-cli App', function() {
  let page: GroovyCMSPage;

  beforeEach(() => {
    page = new GroovyCMSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
