import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { UniqueIdService } from './../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss'],
})
export class LikeWidgetComponent implements OnInit {
  /**
   * Informa ao mundo externo que o 
   * componente foi clicado
   * @see public like()
   */
  @Output() public liked = new EventEmitter<void>();

  /**
   * Recebe o número atual de curtidas
   */
  @Input() public likes = 0;

  /**
   * Recebe um id de unicidade
   * (ou gera automaticamente se for nulo)
   */
  @Input() public id: string = null;

  /**
   * Ícones de fontes
   */
  public fonts = { faThumbsUp };

  /** */
  constructor(private uniqueIdService: UniqueIdService) {}

  /** */
  public ngOnInit(): void {
    /** 
     * Decide se vai usar o id declarado 
     * externamente ou o gerado automaticamente 
     */
    if(!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
    }
  }

  /**
   * Emite o like
   * @see @Output() public liked
   */
  public like(): void {
    this.liked.emit();
  }
}
