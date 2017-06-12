import { NeoweltPage } from './app.po';

describe('neowelt App', () => {
  let page: NeoweltPage;

  beforeEach(() => {
    page = new NeoweltPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
