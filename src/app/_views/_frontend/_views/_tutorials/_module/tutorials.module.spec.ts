import { TutorialsModule } from './tutorials.module';

describe('TutorialsModule', () => {
  let tutorialsModule: TutorialsModule;

  beforeEach(() => {
    tutorialsModule = new TutorialsModule();
  });

  it('should create an instance', () => {
    expect(tutorialsModule).toBeTruthy();
  });
});
