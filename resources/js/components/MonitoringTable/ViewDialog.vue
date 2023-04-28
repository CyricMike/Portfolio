<template>
    <div>
        <v-dialog 
            persistent
            v-model="DialogView" >
            <v-card class="pa-4">
                <div>
                    <v-icon class="float-right" @click="CloseDialog()">mdi-close-thick</v-icon>
                </div>
                <h1>{{ arrViewData.RequestNo }}</h1>
                    <div class="divformat">
                        <span>SystemName:</span>
                        <p>{{ arrViewData.SystemName }}</p>
                    </div>


                <div class="wrapper">
                    <div class="divformat">
                        <span>Kind:</span>
                        <p>{{ arrViewData.KindName }}</p>
                    </div>

                    <div class="divformat">
                        <span>Request No:</span>
                        <p>{{ arrViewData.RequestNo }}</p>
                    </div>

                    <div class="divformat">
                        <span>Request Type:</span>
                        <p>{{ arrViewData.RequestName }}</p>
                    </div>

                    <div class="divformat">
                        <span>Status:</span>
                        <p>{{ arrViewData.StatusName }}</p>
                    </div>

                </div>

                <div class="wrapper">
                    <div class="divformat">
                        <span>Company Name:</span>
                        <p>{{ arrViewData.CompanyName }}</p>
                    </div>

                    <div class="divformat">
                        <span>Department Name:</span>
                        <p>{{ arrViewData.DepartmentName }}</p>
                    </div>

                    <div class="divformat">
                        <span>Requester:</span>
                        <p>{{ arrViewData.Requester }}</p>
                    </div>

                    <div class="divformat">
                        <span>Email:</span>
                        <p>{{ arrViewData.Email }}</p>
                    </div>

                </div>
                
                <div class="ma-0 pa-0">
                    <div class="divformat">
                        <span>Details:</span>
                        <p>{{ arrViewData.DetailOfRequest }}</p>
                    </div>

                    <div class="divformat">
                        <span>Background:</span>
                        <p>{{ arrViewData.Background }}</p>
                    </div>

                    <div class="divformat">
                        <span>Attachment:</span>
                        <li  v-for="attach in arrViewData.Attachments" :key="attach">
                            <a @click="DownloadAttachment(attach , item)">{{attach}}</a>
                        </li> 
                    </div>

                </div>

                <div class="wrapper">
                    <div class="divformat">
                        <span>InCharge:</span>
                        <p>{{ arrViewData.InCharge }}</p>
                    </div>

                    <div class="divformat">
                        <span>Reference:</span>
                        <p>{{ arrViewData.PMSReference }}</p>
                    </div>

                    <div class="divformat">
                        <span>Request Date:</span>
                        <p>{{ arrViewData.RequestDate }}</p>
                    </div>

                    <div class="divformat">
                        <span>Due Date:</span>
                        <p>{{ arrViewData.DueDate }}</p>
                    </div>

                </div>
                
                <div class="wrapper">
                    <div class="divformat">
                        <span>Estimated Hours:</span>
                        <p>{{ arrViewData.EstimatedHours }}</p>
                    </div>

                    <div class="divformat">
                        <span>Finished Date:</span>
                        <p>{{ arrViewData.FinishedDate }}</p>
                    </div>

                    <div class="divformat">
                        <span>Completion Hours:</span>
                        <p>{{ arrViewData.CompletionHours }}</p>
                    </div>

                    <div class="divformat">
                        <span>Registered By:</span>
                        <p>{{ arrViewData.RegisteredBy }}</p>
                    </div>

                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default { 
    props : ['arrViewData' , 'DialogView'],
    data() {
        return {
            
        };
    },
 

    methods: {
        CloseDialog(){
            this.$emit('CloseDialog', false);
        },

        DownloadAttachment(item){
            console.log(item , 'testestset')
        }
    },
};
</script>

<style scoped>
h1{
    font-weight: bold;
}
span{
    font-weight: bold;
    margin: 0px;
    padding: 0px;
}
.divformat{
    margin: 4px; 
    padding: 4px;
    border-style: groove; 
    min-height: 50px;
}

.wrapper {
  display: grid !important; 
  grid-template-columns: repeat(4, 1fr) !important; 
  grid-auto-rows: 3% !important; 
  column-gap: 0px !important; 
  row-gap: 0px !important; 
}
</style>