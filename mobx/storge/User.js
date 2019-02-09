import {observable, action, computed} from 'mobx'

class User {
    @observable username = 'user001'

    constructor() {
        setTimeout(() => {
            this.setUsername('userNew!!!')
        }, 3000) 
    }

    @action
    setUsername(username) {
        this.username = username
    } 

    @computed
    get getUsername() {
        return this.username
    }
}

export default new User()