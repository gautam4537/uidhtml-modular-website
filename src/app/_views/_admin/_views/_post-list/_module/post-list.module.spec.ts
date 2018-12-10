import { PostListModule } from './post-list.module';

describe('PostListModule', () => {
  let postListModule: PostListModule;

  beforeEach(() => {
    postListModule = new PostListModule();
  });

  it('should create an instance', () => {
    expect(postListModule).toBeTruthy();
  });
});
