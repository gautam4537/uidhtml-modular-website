import { InfoLabelModule } from './info-label.module';

describe('InfoLabelModule', () => {
  let infoLabelModule: InfoLabelModule;

  beforeEach(() => {
    infoLabelModule = new InfoLabelModule();
  });

  it('should create an instance', () => {
    expect(infoLabelModule).toBeTruthy();
  });
});
