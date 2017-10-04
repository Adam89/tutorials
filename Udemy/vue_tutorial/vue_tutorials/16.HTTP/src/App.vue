<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                	<label for="">Username</label>
                	<input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                	<label for="">Mail</label>
                	<input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" v-on:click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" v-on:click="fetchData">Get Data</button>
                <ul class="list-group">
                	<li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    	data() {
    		return {
    			user: {
    				username: '',
    				email: ''
    			},
    			users:[]
    		}
    	},
    	methods: {
    		submit() { // send data to firebase
    			// console.log(this.users);
    			this.$http.post('https://vuejs-http-69e5f.firebaseio.com/data.json', this.users) // creates a data.json node
    			.then( response => {// then is a method available on the promises approach function to be executed once post requests is sent and response received
    				console.log(response);
    			}, error => {
    				console.log(error);
    			});
    		},
    		fetchData() { // fetch data from firebase and store in an array
    			this.$http.get('https://vuejs-http-69e5f.firebaseio.com/data.json')
    			.then(response => { //vue resource gives us some helper methods on responses
    				return response.json(); // all async tasks finished so you have acess to data below

    		})
    		.then(data => {
    			const resultArray = [];
    			for(let key in data) { //loop through cryptic keys strings
    				resultArray.push(data[key]) // push data acess key and get value
    				console.log(resultArray);
    			}
    			this.users = resultArray; // set users arrau to result array

    		});
    		}
    	}
    }
</script>

<style>
</style>
