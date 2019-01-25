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
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="insertMember()">Save</v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
</template>

<script>
import axios from 'axios'
export default {
    name : 'InsertNewMember',
    props : ["member"],
    data(){
      return{
        name : "",
        balance : null,
        dialog : false,
        nameRules : [
          (v) => !!v || 'Name is required'
        ],
        balanceRules : [
          (v) => !!v || 'Balance is required'
        ],
        valid : false
      }
    },
    methods : {
        insertMember(){
            if(this.$refs.form.validate()){
            let newMember = {name : null, balance : null};
            newMember.name = this.name;
            newMember.balance = this.balance;
            axios.post("http://localhost:8080/api/members/_save", newMember)
            .then(response => {this.dialog = false; window.location.reload()})
            .catch(error => alert('Failed to insert new member!'));
            }
        },
        close(){
            this.$emit('close');
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
    background-color: rgba(0, 0, 0, 0.5);
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
    width: 720px;
    height: 300px;
    position: relative;
    bottom: 120px;
    z-index: 9999;
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

