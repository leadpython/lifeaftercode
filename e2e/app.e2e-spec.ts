import { LifeaftercodePage } from './app.po';

describe('lifeaftercode App', () => {
  let page: LifeaftercodePage;

  beforeEach(() => {
    page = new LifeaftercodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
