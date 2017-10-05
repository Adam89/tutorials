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
                <input type="text" class="form-control" v-model="node">
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
    			users:[],
                resource: {}, // empty object
                node: 'data' // make end points more flexible
    		}
    	},
    	methods: {
    		submit() { // send data to firebase
    			// console.log(this.users);
    			// this.$http.post('data.json', this.user) // creates a data.json node
    			// .then( response => {// then is a method available on the promises approach function to be executed once post requests is sent and response received
    			// 	console.log(response);
    			// }, error => {
    			// 	console.log(error);
    			// });
                // this.resource.save({}, this.user); // this sends a post request as part of the save method and just past the data as arg first arg is any parementers second arg is data
                this.resource.saveAlt(this.user); // creates new alternative node in DB
    		},
    		fetchData() { // fetch data from firebase and store in an array
    		// 	this.$http.get('data.json')
    		// 	.then(response => { //vue resource gives us some helper methods on responses
    		// 		return response.json(); // all async tasks finished so you have acess to data below

    		// })
    		// .then(data => {
    		// 	const resultArray = [];
    		// 	for(let key in data) { //loop through cryptic keys strings
    		// 		resultArray.push(data[key]) // push data acess key and get value
    		// 		console.log(resultArray);
    		// 	}
    		// 	this.users = resultArray; // set users array to result array

    		// });

             this.resource.getData({ node: this.node }) // pass object as first arg where we specify each variable we have in our url. takes url below and replaces node.
                .then(response => { //vue resource gives us some helper methods on responses
                 return response.json(); // all async tasks finished so you have acess to data below

            })
            .then(data => {
             const resultArray = [];
             for(let key in data) { //loop through cryptic keys strings
                 resultArray.push(data[key]) // push data acess key and get value
                 console.log(resultArray);
             }
             this.users = resultArray; // set users array to result array

            });
    		}
    	},
        created() {
            const customActions = {
                saveAlt: {
                    method: 'POST',
                    url: 'alternative.json'
                },
                getData: {
                    method: 'GET'
                }
            };
            this.resource = this.$resource('{node}.json', {}, customActions) // dollar sign indicates it's coming from the root plugin first arg end point second arg var data into the url third arg custom action
        }
    }
</script>

<style>
</style>
