<template>
    <div> 
      <v-dialog
            
            v-model="UpdateDialog" 
            max-height="500px"
            persistent
            no-click-animation
            overlay-opacity="0"
        >
        <v-card min-height="500px"> 
          <div class="wrapper">
            <div>
              <v-list-item style="background-color: dodgerblue;">
                <v-list-item-content>
                  <v-list-item-title class="textFormat"  >
                    Monitoring
                    </v-list-item-title>
                      <v-list-item-subtitle class="textFormat">
                        Updates
                      </v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list class="format">
                <v-list-item
                  v-for="item in Menus"
                  :key="item.ID"
                  link
                >
                <v-list-item-content>
                  <v-list-item-title @click="switchComponent(item.ID)" class="textFormat">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
            <div class="componentDiv">
            <v-icon class="float-right ma-2 mr-3" @click="CloseDialog()">mdi-close-thick</v-icon>
              <task-update
                v-if="indexNo === 1"
                :clearAll="clearAll"
              ></task-update>
              
              <system
                v-if="indexNo === 2"
                :ObjectData="ObjectData"
                :isLoading="isLoading"
                @isloading="isloading"
              ></system>
              
              <employee
                v-if="indexNo === 3"
                :ObjectData="ObjectData"
                :isLoading="isLoading"
                @isloading="isloading"
              ></employee>

              <requester-email
                v-if="indexNo === 4"
                :ObjectData="ObjectData"
                :isLoading="isLoading"
                @isloading="isloading"
              ></requester-email>

              <sent-emails
                v-if="indexNo === 5"
                :ObjectData="ObjectData"
                :isLoading="isLoading"
                @isloading="isloading"
              ></sent-emails>

              <unfinish-task
                v-if="indexNo === 6"
                :ObjectData="ObjectData"
                :isLoading="isLoading"
                @isloading="isloading"
              ></unfinish-task>
            </div>
          </div>
        </v-card> 
      </v-dialog>
    </div>
</template>
<script>

import TaskUpdate from './TaskUpdate.vue'
import System from './System.vue'
import Employee from './Employee.vue'
import RequesterEmail from './RequesterEmail.vue'
import SentEmails from './SentEmails.vue'
import UnfinishTask from './UnfinishTask.vue'

export default {
    components : {TaskUpdate , System , Employee , 
                  RequesterEmail , SentEmails , UnfinishTask},

    props:['UpdateDialog'],

    data() {
      return {
        clearAll : false,
        isLoading : false,
        Menus: [
                {ID : 1 ,title :'Task Update'},
                {ID : 2 ,title :'System'}, 
                {ID : 3 ,title :'Employee'},
                {ID : 4 ,title :'Requester Email'},
                {ID : 5 ,title :'View Sent Emails'},
                {ID : 6 ,title :'View Unfinish'}, 
               ],
        indexNo : 0,
        ObjectData : {},
      };
    },

    created() { 
    },


    watch: {
        UpdateDialog(val){
            if(val){
                this.indexNo = 1 
                this.clearAll = false 
            }
        },
    },

    methods: {
      switchComponent(i){
          this.indexNo = i
          this.ObjectData = {}
          this.isLoading = true
      },

      CloseDialog(){
        this.$emit('CloseDialog', false); 
        this.clearAll = true
      },
      isloading(val){
        this.isLoading = true
      }
    },
}
</script>
<style scoped>
    @media only screen and (max-width: 600px) {
    .textFormat {
        font-size: 9px !important;  
    }
    }
    .wrapper {
        display: grid;
        grid-template-columns: 20% auto;
    } 

    .componentDiv{
      overflow: hidden; 
    }
</style>