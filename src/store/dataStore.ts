//@ts-ignore
import { action, observable, makeAutoObservable } from 'mobx';
import users from '../services/User.json';
class DataStore {
    constructor() {
        // Call it here
        makeAutoObservable(this)
    }
    data: object[] = [];
    loadData(data: object[]) {
        console.log("the loading data is",data);
        
        this.data = data
    }
    addData(item: object) {
        this.data.push(item);
    }
    removeData(item: object) {
        this.data.splice(this.data.indexOf(item), 1);
    }
}
// decorate(DataStore, {
//     data: observable,
//     addData: action,
//     removeData: action
// });
export default DataStore;