import { AddPostModule } from './add-post.module';

describe('AddPostModule', () => {
  let addPostModule: AddPostModule;

  beforeEach(() => {
    addPostModule = new AddPostModule();
  });

  it('should create an instance', () => {
    expect(addPostModule).toBeTruthy();
  });
});
