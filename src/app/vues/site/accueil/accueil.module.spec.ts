import { AccueilModule } from './accueil.module';

describe('AccueilModule', () => {
  let accueilModule: AccueilModule;

  beforeEach(() => {
    accueilModule = new AccueilModule();
  });

  it('should create an instance', () => {
    expect(accueilModule).toBeTruthy();
  });
});
