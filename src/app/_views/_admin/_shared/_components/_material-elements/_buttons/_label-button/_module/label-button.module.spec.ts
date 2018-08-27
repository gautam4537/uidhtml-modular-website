import { LabelButtonModule } from './label-button.module';

describe('LabelButtonModule', () => {
  let labelButtonModule: LabelButtonModule;

  beforeEach(() => {
    labelButtonModule = new LabelButtonModule();
  });

  it('should create an instance', () => {
    expect(labelButtonModule).toBeTruthy();
  });
});
