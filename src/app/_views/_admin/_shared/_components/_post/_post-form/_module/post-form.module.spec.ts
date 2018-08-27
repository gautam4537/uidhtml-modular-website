import { PostFormModule } from './post-form.module';

describe('PostFormModule', () => {
  let postFormModule: PostFormModule;

  beforeEach(() => {
    postFormModule = new PostFormModule();
  });

  it('should create an instance', () => {
    expect(postFormModule).toBeTruthy();
  });
});
