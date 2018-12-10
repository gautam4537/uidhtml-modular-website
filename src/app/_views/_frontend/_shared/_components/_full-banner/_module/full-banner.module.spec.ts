import { FullBannerModule } from './full-banner.module';

describe('FullBannerModule', () => {
  let fullBannerModule: FullBannerModule;

  beforeEach(() => {
    fullBannerModule = new FullBannerModule();
  });

  it('should create an instance', () => {
    expect(fullBannerModule).toBeTruthy();
  });
});
