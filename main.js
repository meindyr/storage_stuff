function main(){
    return {
        default_value: 'EmptyValue', 
        value : null,
        greet: 'null',
        setStorage( key, string ){
            (string != null && string != '') ?
            localStorage.setItem(key, string) :
            localStorage.setItem(key, this.default_value);
            this.loadStorage();
        },
        loadStorage(){
            (localStorage.getItem('greet') != null && localStorage.getItem('greet') != '') ?
            this.greet = localStorage.getItem('greet') :
            this.greet = this.default_value;
        },
        clearStorage() {
            localStorage.clear();
            this.loadStorage();
        },
        removeFromStorage(key){
            localStorage.removeItem(key);
        },
    }
}