import { EventSellingAppPage } from './app.po';

describe('event-selling-app App', () => {
  let page: EventSellingAppPage;

  beforeEach(() => {
    page = new EventSellingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
