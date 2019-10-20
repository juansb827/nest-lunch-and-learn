import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class ItemsService {

    getItems(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.items);
        });
    }

    getItem(itemID: number): Promise<any> {
        return new Promise(resolve => {
            const item = this.items.find(item => item.id === +itemID);
            if (!item) {
                throw new HttpException('Item does not exist!', 404);
            }
            resolve(item);
        });
    }

    addItem(item): Promise<any> {
        return new Promise(resolve => {
            this.items.push(item);
            resolve(this.items);
        });
    }

    deleteItem(itemID: number): Promise<any> {
        return new Promise(resolve => {            
            let index = this.items.findIndex(item => item.id === +itemID);
            if (index === -1) {
                throw new HttpException('Item does not exist!', 404);
            }            
            this.items.splice(index, 1);
            resolve(this.items);
        });
    }

    items = [
        { id: 1, name: 'Onion', price: 0.43 },
        { id: 2, name: 'Butter', price: 1.43 },
        { id: 3, name: 'Water', price: 0.43 },
        { id: 4, name: 'Carrot', price: 2.43 },
        { id: 5, name: 'Milk', price: 3.43 },
        { id: 6, name: 'Chicken', price: 4.43},
    ];
}


