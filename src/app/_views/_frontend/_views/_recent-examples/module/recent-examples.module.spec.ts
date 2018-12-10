import { RecentExamplesModule } from './recent-examples.module';

describe('RecentExamplesModule', () => {
  let recentExamplesModule: RecentExamplesModule;

  beforeEach(() => {
    recentExamplesModule = new RecentExamplesModule();
  });

  it('should create an instance', () => {
    expect(recentExamplesModule).toBeTruthy();
  });
});
