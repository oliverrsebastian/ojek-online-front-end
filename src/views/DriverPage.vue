<template>
        <v-content class="drivers">
        <v-btn color="info" style="cursor : pointer; margin-left:13px; margin-bottom:15px" @click="showDialog()">Insert Driver</v-btn>
        <InsertNewDriver v-show="isVisible" @close="closeInsertForm()" ref="inputForm"/>
        <div v-if="drivers == null">
            Data not available!
        </div>
        <div v-else>
           <div v-bind:key="driver.id" v-for="driver in drivers">
                <Driver v-bind:driver="driver"/>
            </div> 
        </div>
    </v-content>
</template>

<script>
import axios from 'axios'
import Driver from '../components/Driver.vue'
import InsertNewDriver from '../components/drivers/InsertNewDriver.vue'
export default {
        name : 'DriverPage',
    data(){
        return {
            drivers : [
                {
                    id : null,
                    name : null,
                    balance : null,
                    plateNumber : null,
                    joinedDate : null
                },
            ],
            isVisible : false
        }
    },
    components : {
        Driver,
        InsertNewDriver
    },
    mounted (){
            axios.get("http://localhost:8080/api/drivers")
            .then(response => (this.drivers = response.data.data))
            .catch(error => this.drivers = null);
        },
    methods : {
        showDialog(){
            this.$refs.inputForm.dialog = true
        },
        closeInsertForm(){
            this.isVisible = false;
        }
    }
}
</script>

<style scoped>

</style>
