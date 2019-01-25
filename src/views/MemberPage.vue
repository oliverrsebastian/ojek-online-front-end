<template>
    <v-content class="members">
        <v-btn color="info" style="cursor : pointer; margin-left:13px; margin-bottom:15px" @click="showDialog()">Insert Member</v-btn>
        <InsertNewMember @close="closeInsertForm()" ref="inputForm"/>
        <div v-if="members == null">
            Data Not Available!
        </div>
        <div v-else>
                <div v-bind:key="member.id" v-for="member in members">
                    <Member v-bind:member="member"/>
                </div>
        </div>
    </v-content>
</template>

<script>

import Member from '../components/Member.vue'
import axios from 'axios'
import InsertNewMember from '../components/members/InsertNewMember.vue'

export default {
    name : 'MemberPage',
    data(){
        return {
            members : [
                {
                    id : null,
                    name : null,
                    balance : null
                }
            ]
        }
    },
    components : {
        Member,
        InsertNewMember
    },
    methods : {
        closeInsertForm(){
            this.isVisible = false;
        },
        showDialog(){
            this.$refs.inputForm.dialog = true;
        }
    },
    created(){
        axios.get("http://localhost:8080/api/members")
            .then(response => (this.members = response.data.data))
            .catch(error => this.members = null);
    }
}
</script>

<style scoped>

</style>
