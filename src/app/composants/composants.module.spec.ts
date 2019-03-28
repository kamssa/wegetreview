import { ComposantsModule } from './composants.module';

describe('ComposantsModule', () => {
  let composantsModule: ComposantsModule;

  beforeEach(() => {
    composantsModule = new ComposantsModule();
  });

  it('should create an instance', () => {
    expect(composantsModule).toBeTruthy();
  });
});
