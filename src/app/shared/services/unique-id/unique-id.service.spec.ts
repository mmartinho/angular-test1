import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

/** Jasmine test */
describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  /** Antes de cara "it" */
  beforeEach(() => {
    /** Configurações iniciais */
    TestBed.configureTestingModule({});
    /** Injeta a "unidade" a ser testada */
    service = TestBed.inject(UniqueIdService);
  });

  /** Testa se serviço foi criado */
  it('UniqueIdService should be created', () => {
    expect(service).toBeTruthy();
  });

  /** Testa se gera o ID */
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-')
  });
});
