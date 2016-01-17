import {Storage, LocalStorage} from 'ionic/ionic';
import {Injectable} from 'angular2/core';

@Injectable()
export class DataService {
	constructor() {
		this.storage = new Storage(LocalStorage, {name: 'todoapp'});
		this.data = null;

		this.storage.get('todoapp').then((todos) => {
			this.data = JSON.parse(todos)
		})
	}

	getData (){
		return this.storage.get('todoapp')
	}

	save (item){
		if(!this.data){
			this.data = [item];
		}
		else{
			this.data.push(item);
		}
		let newItem  = JSON.stringify(this.data);
		this.storage.set('todoapp',newItem);
	}
	update (item, index) {
		this.data[index] = item;
		let updatedList = JSON.stringify(this.data);
		this.storage.set('todoapp', updatedList);
	}

	remove (item, index) {
		this.data.splice(index,1);
		let updatedList = JSON.stringify(this.data);
		this.storage.set('todoapp', updatedList);
	}
}