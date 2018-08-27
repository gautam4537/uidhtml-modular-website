import { UpdatePostModule } from './update-post.module';

describe('UpdatePostModule', () => {
  let updatePostModule: UpdatePostModule;

  beforeEach(() => {
    updatePostModule = new UpdatePostModule();
  });

  it('should create an instance', () => {
    expect(updatePostModule).toBeTruthy();
  });
});
