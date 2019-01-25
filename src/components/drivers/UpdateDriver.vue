<template>
<v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-form v-model="valid" ref="form">
          <v-card-title>
            <span class="headline">Insert New Member</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Name*" :rules="nameRules" required v-model="name"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Balance*" type="number" :rules="balanceRules" required v-model="balance"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Plate Number*" :rules="nameRules" required v-model="plateNumber"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-date-picker label="Joined Date*" :landscape="true" required v-model="joinedDate"></v-date-picker>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="updateDriverAjax()">Save</v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
</template>

<script>
import axios from 'axios'
export default {
    name : 'UpdateDriver',
    props : ['driver'],
    data(){
        return{
            name : this.driver.name,
            balance : this.driver.balance,
            plateNumber : this.driver.plateNumber,
            joinedDate : this.driver.joinedDate,
            dialog : false,
            valid : false,
            nameRules : [
          (v) => !!v || 'Name is required'
        ],
        balanceRules : [
          (v) => !!v || 'Balance is required'
        ],
        plateRules : [
          (v) => !!v || 'Plate Number is required'
        ],
        dateRules : [
          (v) => !!v || 'Date is required'
        ]
        }
    },
    methods : {
        close(){
            this.$emit('close');
        },
        updateDriverAjax(){
          if(this.$refs.form.validate()){
            let updatedDriver = this.driver;
            updatedDriver.name = this.name;
            updatedDriver.balance = this.balance;
            updatedDriver.plateNumber = this.plateNumber;
            updatedDriver.joinedDate = this.joinedDate;
            console.log(updatedDriver);
            axios.put("http://localhost:8080/api/drivers/_save", updatedDriver)
            .then(response => this.dialog = false)
            .catch(error => console.log(error));
          }
        }
    }
}
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    margin-top: 25em;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
    position: relative;
    left: 7.5em;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>

