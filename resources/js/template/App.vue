<template>
  <v-app id="inspire" class="body-style"> 
      <v-app-bar 
         app
         dark
         clipped-left
         position:fixed
         dense
         class="appbar"
      >
         <v-toolbar-title>Task Monitoring</v-toolbar-title>
         <a-button v-if="this.$route.path === '/' && ($store.state.JapaneseData.length === 0 || $store.state.JapaneseData.length != 0)" 
            type="link" @click="redirects('/Monitoring')"
         >
            Go to Monitoring 
            <v-icon>mdi-arrow-right-bold</v-icon>
         </a-button>
         <a-button v-if="this.$route.path === '/Monitoring' && ($store.state.JapaneseData.length === 0 || $store.state.JapaneseData.length != 0)" 
            type="link" @click="redirects('/')"
         >
            Go to Request
            <v-icon>mdi-arrow-right-bold</v-icon>
         </a-button>
         
         <v-spacer/>
         <a-button v-if="this.$route.path === '/Monitoring' && $store.state.JapaneseData.length === 0" class="ButtonFormat" small type="primary" @click="Login()">Login </a-button>
          
            <a-avatar 
               style="margin-right:5px;margin-top:5px"  
               :size="35" :src="`http://adminsql1/photos/jap/${$store.state.JapaneseData.EmployeeCode}.jpg`"
               v-if="this.$route.path === '/Monitoring'
                     && $store.state.JapaneseData.length != 0"/>
            <h4 v-if="this.$route.path === '/Monitoring' 
                     && $store.state.JapaneseData.length != 0">
               {{$store.state.JapaneseData.ApproverName}}
            </h4>
            <a-tooltip placement="top">
               <template #title>
                  <span>Logout</span>
               </template>
               <v-icon 
                  v-if="this.$route.path === '/Monitoring' 
                        && $store.state.JapaneseData.length != 0"
                  color="white" @click="Logout()"
               >
                  mdi-logout
               </v-icon>
            </a-tooltip> 
      </v-app-bar>

      <v-main class="ma-2">
         <router-view></router-view>
      </v-main>

      <LoginDialog
         :OpenDialog="OpenDialog"
         @CloseDialog="CloseDialog"
      ></LoginDialog>
  </v-app>
</template>

<script>
   import LoginDialog from '../components/LoginDialog'
export default {
  components: { LoginDialog },
      data: () => ({
         OpenDialog: false
      }),


      methods: {
         Login(){
            this.OpenDialog = true
         },

         Logout(){
            localStorage.removeItem('vuex')
            location.reload();
         },

         redirects(val){
            this.$router.push(val)
         },

         CloseDialog(val){
            this.OpenDialog = val
         }
      },
   }
</script>


<style scoped>
.body-style{
   background-color: #e9e8e8;
}
.appbar {
    z-index: 100 !important; 
}

h4{
   color: white;
   margin: 2px;
}

.ButtonFormat{
   margin: 5px;
   color:white;
   background-color:  #24bcf8;
}

.ButtonFormat:hover{
   background-color:  #06669e;
}
.wrapper {
   display: grid !important; 
   grid-template-columns: repeat(3 30px) !important; 
   grid-auto-rows: 3% !important; 
   column-gap: 10px !important; 
   row-gap: 10px !important; 
   margin-top: 200px;
   padding: 0px;
}  

html, body{
    overflow-y: hidden !important;
  }

</style>