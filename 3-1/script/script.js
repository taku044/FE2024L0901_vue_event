// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return{
            text:'hello Vue.js'
        };
    },
    method: {
        handleClick(){
            this.text='button pushed';
        }
    }
});