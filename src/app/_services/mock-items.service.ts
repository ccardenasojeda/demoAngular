import {Injectable} from '@angular/core';
import {Item} from '../_model/Item';
import {AbstractItemsService} from './abstract-items.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService{

    items: Item[];

    constructor() {
        super();
        this.items = [
            new Item("Comprar Carne"),
            new Item("ir a la verduleria"),
            new Item("Comprar carbon")
        ];
    }
    getItems(): Observable <Item[]> {
        
        return new Observable((observable) => {
            observable.next(this.items);
            observable.complete();
        })
        
    };

    remove(item : Item ):Observable<Item[]> {
        
        return new Observable((observable) =>{
            console.log('borrando desde servicio.....')
            this.items = this.items.filter(it => it !== item );
            observable.next(this.items);
            observable.complete();
        });
    }
    addItem(item : Item ):Observable<Item[]> {
        
        return new Observable((observable) =>{
            
            this.items.push(item);
            observable.next(this.items);
            observable.complete();
        });
    }
    
}
