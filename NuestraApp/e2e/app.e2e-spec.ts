import { NuestraAppPage } from './app.po';

describe('nuestra-app App', function() {
  let page: NuestraAppPage;

  beforeEach(() => {
    page = new NuestraAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
