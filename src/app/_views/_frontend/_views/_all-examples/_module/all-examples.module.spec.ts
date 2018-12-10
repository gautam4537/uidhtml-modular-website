import { AllExamplesModule } from './all-examples.module';

describe('AllExamplesModule', () => {
  let allExamplesModule: AllExamplesModule;

  beforeEach(() => {
    allExamplesModule = new AllExamplesModule();
  });

  it('should create an instance', () => {
    expect(allExamplesModule).toBeTruthy();
  });
});
