<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button v-on:click="changeName">Change my name</button>
        <p>Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    v-bind:name="name" v-on:nameReset="name = $event" v-bind:parentReset="resetNameParent" v-bind:propUserAge="age">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    v-bind:propUserAge="age" v-on:ageWasEditied="age = $event">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Max',
                age: 27
            };
        },
        methods: {
            changeName() { // need to pass this to user detail component
                this.name = 'Adam';
            },
            resetNameParent() {
                this.name="Adam 2";
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
