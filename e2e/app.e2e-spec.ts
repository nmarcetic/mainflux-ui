import { MainfluxUiPage } from './app.po';

describe('mainflux-ui App', function() {
  let page: MainfluxUiPage;

  beforeEach(() => {
    page = new MainfluxUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
