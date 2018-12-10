import { ExampleCardModule } from './example-card.module';

describe('ExampleCardModule', () => {
  let exampleCardModule: ExampleCardModule;

  beforeEach(() => {
    exampleCardModule = new ExampleCardModule();
  });

  it('should create an instance', () => {
    expect(exampleCardModule).toBeTruthy();
  });
});
