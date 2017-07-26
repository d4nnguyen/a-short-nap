import { AShortNapPage } from './app.po';

describe('a-short-nap App', () => {
  let page: AShortNapPage;

  beforeEach(() => {
    page = new AShortNapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
