import { PatientListPage } from './app.po';

describe('patient-list App', function() {
  let page: PatientListPage;

  beforeEach(() => {
    page = new PatientListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
