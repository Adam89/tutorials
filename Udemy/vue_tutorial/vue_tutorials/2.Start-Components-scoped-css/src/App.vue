<template>
    <div class="container">
        <appHeader></appHeader>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>



<script>

// IMPORT ALL COMPONENTS SASS STYLES NEED TO BE SCOPED OTHERWISE THEY WON'T BE RELATIVE TO THE COMPONENT
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';


//EXPORT ALL COMPONENTS LOCALLY TO MAIN JS

export default { // local components don't have dom restrictions
    components: {

        appHeader: Header, // two options for key value pairs
        'app-servers': Servers,
        'app-server-details': ServerDetails,
        'app-footer': Footer
    }
}
</script>





<style>

</style>



