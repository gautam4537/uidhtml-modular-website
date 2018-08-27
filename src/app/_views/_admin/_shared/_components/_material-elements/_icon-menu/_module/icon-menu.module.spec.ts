import { IconMenuModule } from './icon-menu.module';

describe('IconMenuModule', () => {
  let iconMenuModule: IconMenuModule;

  beforeEach(() => {
    iconMenuModule = new IconMenuModule();
  });

  it('should create an instance', () => {
    expect(iconMenuModule).toBeTruthy();
  });
});
