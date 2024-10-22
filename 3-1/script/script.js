// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return{
            text:'hello Vue.js'
        };
    },
    method: {
        handClick(){
            this.text='button pushed';
        }
    }
});