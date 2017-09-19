<template>
    <div class="container">
        <form v-if="!submitForm"> // if it not submitted show the form
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
<!--                     <div class="form-group">
                        <label for="">First Name</label>
                        <input type="text" class="form-control" v-model="firstName">
                    </div>
                    <div class="form-group">
                        <label for="">Last Name</label>
                        <input type="text" class="form-control" v-model="lastName">
                    </div> -->
                    <appFullname v-model="fullName"></appFullname>
                     <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" class="form-control"  v-model="email">
                    </div>
                     <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" class="form-control" v-model="passWord">
                    </div>
                     <div class="form-group">
                        <label for=""><input type="radio" value="Yes" v-model="storeData">Yes</label>
                        <label for=""><input type="radio" value="No" v-model="storeData">No</label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button type="submit" v-on:click.prevent="submitForm = true" class="btn btn-primary">Submit the Form</button> // normally execute a method here
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitForm"> // if it is submitted show form
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}}</p>
                        <p>Mail: {{email}} </p>
                        <p>Password:{{passWord}} </p>
                        <p>Store in Database?: {{storeData}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import FullName from './fullName.vue';

    export default {
        data() {
            return {
                fullName: 'Adam Hopkins',
                email: '',
                passWord: '',
                storeData: 'Yes',
                submitForm: false
            }
        },
        components: {
            appFullname: FullName
        }
    }
</script>

<style>
</style>


