import { RoleAsistantCRUDPage } from './app.po';

describe('role-asistant-crud App', () => {
  let page: RoleAsistantCRUDPage;

  beforeEach(() => {
    page = new RoleAsistantCRUDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
