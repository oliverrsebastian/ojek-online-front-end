<template>
    <v-card :key="member.id">
        <div class="header">
            <h2>ID</h2>
            <h2>Name</h2>
            <h2>Balance</h2>
            <h2>Update</h2>
            <h2>Delete</h2>
        </div>
        <div class="data">
            <h3>{{member.id}}</h3>
            <h3>{{member.name}}</h3>
            <h3>{{member.balance}}</h3>
            <h3 @click="showDialog()" style="cursor : pointer">
            Update Balance
            </h3>
            <h3 @click="deleteMember()" style="cursor : pointer">X</h3>
        </div>
        <UpdateMemberBalance v-bind:member="member" ref="updateForm" v-on:close="closeUpdateForm()"/>
    </v-card>
</template>


<script>
import UpdateMemberBalance from './members/UpdateMemberBalance.vue'
import axios from 'axios'
export default {
    name : 'Member',
    props : ['member'],
    components : {
        UpdateMemberBalance
    },
    data () {
      return {
        isVisible: false,
      };
    },
    methods : {
        showDialog(){
            this.$refs.updateForm.dialog = true;
        },
        closeUpdateForm() {
        this.isVisible = false;
      },
      deleteMember(){
          axios.delete("http://localhost:8080/api/members/" + this.member.id)
          .then(response => {
              window.location.reload();
          })
          .catch(error => {
                  alert('Failed to delete member!');
          });
      }
    }
}
</script>

<style scoped>
    h3{
        display: inline;
        margin-right: 15em;
    }
    h3:nth-child(2), h3:nth-child(3){
        margin-right: 15em;
    }
    h2{
        display: inline;
        margin-right: 12.5em;
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
