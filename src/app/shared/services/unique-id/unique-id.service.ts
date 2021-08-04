import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {
  /**  */
  private numberOfGeneratedIds=0;
  /** */
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;
  
  constructor() { }
  
  /**
   * @returns 
   */
  private generateUniqueId(): string {
    return uuid.v1();
  }

  /**
   * @param prefix 
   * @returns 
   */
  public generateUniqueIdWithPrefix(prefix: string): string {
    if(prefix && this.validId.test(prefix)) {
      const uniqueId = this.generateUniqueId();
      this.numberOfGeneratedIds++;
      return `${prefix}-${uniqueId}`;
    } else throw new Error('Prefix param is required');
  }

  /**
   * @returns number
   */
  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }
}
