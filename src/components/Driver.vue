<template>
    <v-card :key="driver.id">
        <div class="header">
            <h2>ID</h2>
            <h2>Name</h2>
            <h2>Balance</h2>
            <h2>Plate Number</h2>
            <h2>Joined Date</h2>
            <h2>Update</h2>
            <h2>Delete</h2>
        </div>
        <div class="data">
        <h3>{{driver.id}}</h3>
        <h3>{{driver.name}}</h3>
        <h3>{{driver.balance}}</h3>
        <h3>{{driver.plateNumber}}</h3>
        <h3>{{driver.joinedDate}}</h3>
        <h3 style="cursor : pointer" @click="showUpdateForm()">Update Data</h3>
        <h3 style="cursor : pointer" @click="deleteDriver()">X</h3>
        </div>
        <UpdateDriver v-show="isVisible" v-bind:driver="driver" ref="updateForm" v-on:close="closeUpdateForm()"/>
    </v-card>
</template>

<script>
import UpdateDriver from './drivers/UpdateDriver.vue'
import axios from 'axios'
export default {
    name : 'Driver',
    props : ['driver'],
    components : {
        UpdateDriver
    },
    data(){
        return{
            isVisible : false
        }
    },
    methods : {
        showUpdateForm(){
            this.$refs.updateForm.dialog = true;
        },
        closeUpdateForm(){
            this.isVisible = false;
        },
        deleteDriver(){
            axios.delete("http://localhost:8080/api/drivers/" + this.driver.id)
            .then(response => window.location.reload())
            .catch(error => console.log(error));
        }
    }
}
</script>

<style scoped>
h3{
        display: inline;
        margin-right: 8em;
    }
    h3:nth-child(3){
        margin-left: -.5em;
    }
    h3:nth-child(4){
        margin-left: 1.5em; 
    }
    h3:nth-child(5){
        margin-left: 2.5em;
    }
    h3:nth-child(6){
        margin-left: -.7em;
    }
    h2{
        display: inline;
        margin-right: 6em;
        font-size: 20px;
    }
    h3:first-child{
        margin-left: 0em;
    }
    div{
        width: 100%;
        height: 100px;
        margin: 0;
        margin-left: 1em;
    }
    div.data{
        margin-top: -60px;
    }
</style>
