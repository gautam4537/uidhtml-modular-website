import { CkEditorModule } from './ck-editor.module';

describe('CkEditorModule', () => {
  let ckEditorModule: CkEditorModule;

  beforeEach(() => {
    ckEditorModule = new CkEditorModule();
  });

  it('should create an instance', () => {
    expect(ckEditorModule).toBeTruthy();
  });
});
