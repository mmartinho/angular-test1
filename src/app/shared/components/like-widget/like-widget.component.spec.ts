import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';

describe('LikeWidgetComponent', () => {
  /** 
   * pt: Instância do componente 
   * en: Component Instance
   * fi: Komponenttiesimerkki
   */
  let component: LikeWidgetComponent;
  /** 
   * pt: Instância do empacotador de gestão de componentes 
   * en: Component manager wrapper instance
   * fi: Komponenttien hallinnan pakkausinstanssi
   */  
  let fixture: ComponentFixture<LikeWidgetComponent>;

  /**
   * pt: Antes de cada "it"
   * en: Before each "it"
   * fi: Ennen jokaista toistoa 
   * @async
   */
  beforeEach(async () => {
    /** 
     * pt: Compila as dependências modulares do componente
     * en: Compile module component dependencies 
     * fi: Käännä komponentin modulaariset riippuvuudet
     */
    await TestBed.configureTestingModule({
      /** 
       * Declarando todo o modulo de 
       * dependencias do LikeWidgetComponent
       * 
       * declarations: [LikeWidgetComponent],
       * providers: [UniqueIdService],
       * imports: [FontAwesomeModule] 
       */

      /** OU */

      /**
       * Importando as dependencias aproveitando 
       * o módulo do componente criado previamente
       */ 
      imports: [LikeWidgetModule]
    }).compileComponents();
  });

  /**
   * pt: Antes de cada "it"
   * en: Before each "it"
   * fi: Ennen jokaista toistoa
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * pt: Verifica se o componente sendo testado foi criado
   * en: Check if component been tested was created
   * fi: Tarkistaa, onko testattava komponentti luotu
   */
  it(`${LikeWidgetComponent.name} 
  should be created`, () => {
    expect(component).toBeTruthy();
  });

  /**
   * pt: Verifica se o componente gera um id automaticamente se a propriedade de entrada é nula
   * en: Check whether component automatically generates an id if id input property is null
   * fi: Tarkistaa, generoiko komponentti tunnuksen automaattisesti, jos syöteominaisuus on nolla 
   */
  it(`${LikeWidgetComponent.name} 
  should auto-generate ID during ngOnInit when (@Input id) is not assigned`, () => {
    expect(component.id).toBeTruthy();
  });  

  /**
   * pt: Verifica se o componente NÃO gera um id se a propriedade de entrada existe
   * en: Check whether component don´t generate an id if id input exists
   * fi: Tarkistaa, Eikö komponentti EI luo tunnusta, jos syöttöominaisuus on olemassa
   */
  it(`${LikeWidgetComponent.name} 
  should NOT auto-generate ID during ngOnInit when (@Input id) is assigned`, () => {
    const someId = 'someId';
    component.id = someId;
    expect(component.id).toBe(someId);
  });  
  
  /**
   * pt: Verifica se foi disparada a emissão do "like"
   * en: Check if "like" trigger emission was called
   * fi: Tarkistaa, onko "like" -päästöt laukaistu
   */
  it(`#${LikeWidgetComponent.prototype.like.name} 
  should trigger (@Output liked) when called`, done => {
    /** Set listener to like emission */
    component.liked.subscribe(()=>{
      expect(true).toBeTrue();
      done();
    });
    /** Emit like */
    component.like();
  });
  
  /**
   * pt: Verifica se foi disparada a emissão do "like" (versão espiã)
   * en: Check if "like" trigger emission was called (spy version)
   * fi: Tarkistaa, onko "like" -päästöt laukaistu (vakoojaversio)
   */
    it(`#${LikeWidgetComponent.prototype.like.name} 
    should trigger (@Output liked) when called (spy version)`, () => {
      spyOn(component.liked, 'emit');
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
    }); 
});
