Vue.component('cricket-list', {
    props: ['stars', 'hi'],
    computed: {
        emundi: function() {
            console.log('-----******---', this.stars);
            return 'sravani'
            // 
        }
    },
    template: `
    <div>
        <!-- used a computed func to test if we get stars as props or not -->
        {{ emundi }}
        <ul>
            <li v-for='star in stars'>{{star}}</li>
        </ul>
    </div>
    `
})

app = new Vue({
    el: '#app',
    component: [
        'cricket-list'
    ],
    data : {
        count: 3,
        greeting: 'HelloView',
        email: 'abc@gmail.com',
        cats: [
            'kitkat',
            'fish',
            'henry',
            'bosco',
        ],
        dogs: [{ name: 'Jackie'},{
            name: 'Stumpy'},{
            name: 'Jimmy'},{
            name: 'Cherio'}
        ],
        stars: ['Sachin', 'Gangully', 'Lakshman'],
        newDog: ''
    },
    methods: {
        addDog: function(){
            this.dogs.push({name:this.newDog})
            this.newDog=''
        },
    },
    // life cycle methods
    created: function(){
        console.log('Created----');
    },
    mounted: function(){
        console.log('Mounted----');
    },
    updated: function(){
        console.log('Updated----');
    },
    destroyed: function(){
        console.log('Destroyed----');
    },
    filters: {
        capitalize: function(value){
            return value.toUpperCase()
        },
        kittify: function(value){
            return value + 'y'
        }
    },
    computed:{
        kittifyName: function(){
            if(this.newDog.length>1){
                console.log('yoo-', this.newDog);
                console.log('====', this.newDog+'ify');
                return this.newDog+'ify';
            }
        }
    }
    
})

// just to destroy component to see destroy life cycle method
setTimeout(function(){
    app.$destroy();
}, 5000);
