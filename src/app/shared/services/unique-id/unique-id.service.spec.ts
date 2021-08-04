import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

/** 
 * Jasmine test 
 * Test 1: UniqueIdService
 */
describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  /** 
   * Antes de cada "it" para garantir 
   * instâncias únicas de "service" 
   */
  beforeEach(() => {
    /** Configurações iniciais */
    TestBed.configureTestingModule({});
    /** Injeta a "unidade" a ser testada */
    service = TestBed.inject(UniqueIdService);
  });

  /** 
   * Test 1.1 
   * Testa se serviço foi criado 
   */
  it('UniqueIdService should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Test 1.2 
   * Testa se gera o ID 
   */
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
      should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  /** 
   * Test 1.3
   * Tests if Ids are different 
   */
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
      should not generate duplicated id when multi called`, () => {
    /** Creates a set (ignore dup) */
    const ids = new Set();
    /** Gerates "possible" 50 ids */
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    /** Check if it really has generated 50 */
    expect(ids.size).toBe(50);
  });

  /**
   * Test 1.4 
   * Tests if exactly 2 ids are created 
   * Testaa, luodaanko täsmälleen kaksi tunnusta
   */
  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
      should return the number of generated ids when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);    
  });
  
  /** 
   * Test 1.5
   * Tests if exception was throw 
   * Testaa, onko poikkeus heitetty
   */
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
      should throw something when called with empty param`, () => {
    const emptyValues = [null, undefined, '', '0', '1'];
    emptyValues.forEach(emptyValue => {
      expect(() => 
        service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value: ${emptyValue}`)
        .toThrow(new Error('Prefix param is required'));
    });
  });  
});
