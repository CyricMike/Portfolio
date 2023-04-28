<template>
    <div>  
        <h3> Request Form</h3>
        <div class="body-style"> 
            <v-card class="card-style">
                <a-spin :spinning="isLoading" tip="Sending...">            
                    <div class="wrapper ma-2">
                        <a-input class="inputLabel" default-value="To" readOnly/>
                        <a-select  
                            style="width:40%"
                            showArrow 
                            size="small"
                            readOnly  
                            option-filter-prop="children" 
                            :filter-option="filterOption"
                            class="inputEditable inputReadOnly"
                            v-model="formContent.SendTo" 
                        >
                            <a-select-option v-for="(item, i) in Approver" :key="i" :value="item.ID">
                                {{item.ApproverName}}
                            </a-select-option>
                        </a-select>   

                        <a-input class="inputLabel" default-value="CC" readOnly/>
                        <a-input class="inputEditable inputReadOnly" size="small" readOnly v-model="formContent.CC "/>
                    
                        <a-input class="inputLabel" default-value="Subject" readOnly/>
                        <a-input class="inputEditable inputReadOnly" size="small" readOnly v-model="formContent.Subject"/>  
                    </div>
                
                    <div class="wrapper ma-2">
                        <a-input class="inputLabel1" default-value="Kind" readOnly/>
                        <a-select  
                            style="width:40%"
                            size="small"
                            allowClear
                            show-search
                            placeholder="Select Kind"
                            option-filter-prop="children" 
                            :filter-option="filterOption"
                            class="inputEditable1"
                            v-model="KindName" 
                        >
                            <a-select-option v-for="(item, i) in Kinds" :key="i" :value="item.KindCode">
                                {{item.KindName}}
                            </a-select-option>
                        </a-select>   
                        
                        <a-input class="inputLabel1" default-value="System" readOnly/>
                        <a-auto-complete
                            allowClear
                            size="small" 
                            option-label-prop="value"
                            v-model='formContent.SystemName' 
                            placeholder="Select System"  
                            class="inputEditable1"
                            @change="onChangeSubject()" 
                            showSearch 
                            :filter-option="filterOption">
                            <template v-slot:dataSource>
                                <a-select-option v-for="item in arrSystem" :key="item.SystemCode" :value="item.SystemName">
                                    {{item.SystemName}}
                                </a-select-option>
                            </template>
                        </a-auto-complete>   
                    </div>

                    <div class="wrapper2 ma-2">
                        <a-input class="inputLabel" default-value="Requester" readOnly/>
                        <a-auto-complete  
                            size="small" 
                            allowClear
                            show-search
                            placeholder="Select Requester"
                            option-label-prop="value"
                            :filter-option="filterOption"
                            class="inputEditable"
                            v-model="formContent.RequesterName"
                            @change="onChangeEmail()"
                        > 
                        <template v-slot:dataSource>
                            <a-select-option v-for="(item, i) in arrRequestor" :key="i" :value="item.Requester">
                                {{item.Requester}}
                            </a-select-option> 
                        </template>
                        </a-auto-complete>   
                        
                        <a-input class="inputLabel" default-value="Email" readOnly/>
                        <a-input class="inputEditable" size="small" v-model="formContent.Email"/> 
                    </div>
        
                    <div class="wrapper ma-2"> 
                        <a-input class="inputLabel" default-value="Request Kind" readOnly/>
                        <a-select 
                            size="small"  
                            allowClear
                            show-search
                            placeholder="Select Request Kind"
                            option-filter-prop="children" 
                            :filter-option="filterOption"
                            class="inputEditable"
                            v-model="formContent.RequestCode"
                        >
                            <a-select-option v-for="(item, i) in RequestKinds" :key="i" :value="item.RequestCode">
                                {{item.RequestName}}
                            </a-select-option>
                        </a-select>  
                    </div>  

                    <div class="wrapper2 ma-2"> 
                        <a-input class="inputLabel" default-value="Company" readOnly/>
                        <a-select  
                            size="small" 
                            allowClear
                            show-search
                            placeholder="Select Company"
                            option-filter-prop="children" 
                            :filter-option="filterOption"
                            class="inputEditable"
                            v-model="formContent.CompanyCode"
                        >
                            <a-select-option v-for="(item, i) in companies" :key="i" :value="item.CompanyCode">
                                {{item.AbbreviationName}}
                            </a-select-option>
                        </a-select>
                    
                        <a-input class="inputLabel" default-value="Department" readOnly/>
                        <a-select  
                            size="small"       
                            allowClear
                            show-search
                            placeholder="Select Department"
                            option-filter-prop="children" 
                            :filter-option="filterOption"
                            class="inputEditable"
                            v-model="formContent.DepartmentCode"
                        >
                            <a-select-option v-for="(item, i) in filteredDepartment" :key="i" :value="item.DepartmentCode">
                                {{item.DepartmentName}}
                            </a-select-option>
                        </a-select> 
                    </div>

                    <div class="wrapper3 ma-2"  v-if="KindName== 2 && KindName !== ''"> 
                        <a-input class="inputLabel" default-value="No. Affected PC" readOnly/>
                        <a-input-number class="inputEditable" v-model="formContent.AffectedPC" size="small" :min="1" :max="200"/>
                    
                        <a-input class="inputLabel" default-value="Trouble Start Time" readOnly/>
                        <a-time-picker class="inputEditable" use12-hours format="h:mm a" @change="onChangeTime"/>
                    
                        <a-input class="inputLabel" default-value="Operating System (OS)" readOnly/>
                        <a-input class="inputEditable" size="small" allowClear v-model="formContent.OS"/> 
                    </div>
                
                    <div class="ma-2 pa-0">
                        <a-input class="inputLabel2" default-value="Attachment" readOnly/>    
                        <a-card class="Attachments">  
                            <attachment 
                                @arrAttachments="arrAttachments" 
                            ></attachment> 
                        </a-card>  
            
                        <a-input class="inputLabel2 mt-2" default-value="Background" readOnly/>
                        <a-textarea 
                            class="inputEditable2"
                            v-model="formContent.Background"
                            placeholder="Inpuut Background"
                            :auto-size="{ minRows: 3, maxRows: 5 }"
                        /> 
                        
                        <a-input class="inputLabel2 mt-2" default-value="Details" readOnly/>
                        <a-textarea
                            class="inputEditable2"
                            v-model="formContent.Details"
                            placeholder="Input Details"
                            :auto-size="{ minRows: 3, maxRows: 5 }"
                        />
                    </div>

                    <div class="wrapper2 ma-2">
                        <a-input class="inputLabel" default-value="Desired Delivery Date" readOnly/>
                        <a-input size="small" class="inputEditable" v-model="formContent.DeliveryDate"/>
                    
                        <a-input class="inputLabel" default-value="Estimated Hours/Days" readOnly/>
                        <a-input class="inputEditable" size="small" v-model="formContent.EstimatedTime"/>
                    </div>

                    <div class="wrapper2 ma-2">
                        <a-input class="inputLabel" default-value="Sender" readOnly/>
                        <a-input class="inputEditable" size="small" v-model="formContent.UserNickName"/>
                    
                        <a-input class="inputLabel" default-value="Reference" readOnly/>
                        <a-input class="inputEditable" size="small" v-model="formContent.Reference"/> 
                    </div>
                </a-spin>
            </v-card>

            <task-update
                :UpdateDialog= "UpdateDialog"
                @CloseDialog="CloseDialog"
            ></task-update>

            <SendingFailed
                :isResend ="isResend"
                :attemp="attemp"
                @ResendRequest="ResendRequest"
                @CloseResendDialog="CloseResendDialog"
            ></SendingFailed> 

        </div>

        <div class="body-style">          
            <a-button class="ButtonFormat" @click="UpdateDialog = true">Update</a-button>  
            <a-button class="ButtonFormat" @click="SendEmail()">Send</a-button>
        </div>

    </div>
</template>
<script>

import moment from 'moment'
import { mapActions } from 'vuex'
import Attachment from '../components/Attachment.vue'
import TaskUpdate from '../components/UpdateDialog/MainDialog.vue'  
import SendingFailed from '../components/ErrorDialogs/SendingFailed'

import getSystemForRequest from '../Services/Request_Form/getSystemForRequest'
import getRequestor from '../Services/Request_Form/getRequestor'
import fetchCC from '../Services/Request_Form/fetchCC'
import getTempReference from '../Services/Request_Form/getTempReference'
import postForApprovalEmailSending from '../Services/Request_Form/postForApprovalEmailSending'
import postSaveRequestDetails from '../Services/Request_Form/postSaveRequestDetails'
import postErrorSaving from '../Services/Request_Form/postErrorSaving'
import postSaveAttachmentToFileServer from '../Services/Request_Form/postSaveAttachmentToFileServer'


export default {
    components: {SendingFailed, Attachment, TaskUpdate},
    data() {
        return {
            attemp : 0,
            
            KindName : '',

            AdminIP : false,
            isResend : false,
            isLoading : false,
            UpdateDialog : false,

            code : moment().format('YYMDD') + '-:',

            formContent : {},

            arrCC : [],
            arrSystem : [],
            arrRequestor : [],
            toAttach : [], 

        }
    },

    async created() { 
        // await this.fetchSystemMaster()         
        // await this.fetchUserNickName()
        // await this.fetchRequestor()
        // await this.fetchCC()
        // await this.MatchIPAddress() 
        this.formContent.DeliveryDate = moment().format('YYYY/MM/DD')
        

    },

    watch: {
        KindName(KindCode){
            if(KindCode){ 
                this.formContent.KindCode = KindCode
                this.onChangeKind()
            }
            
        },

        formContent(val){
            if (val) {
                let req = this.RequestKinds.findIndex(arr=>arr.RequestCode === this.formContent.RequestCode)
                req > -1 ? this.formContent.RequestName = this.RequestKinds[req].RequestName : '' 
            }
            
        }
    },

    computed: {
        filteredDepartment(){
            if(this.formContent.CompanyCode  != undefined){
                return this.departments.filter(data=>{
                    return data.CompanyCode == this.formContent.CompanyCode 
                            && data.DeletedDate == null
                })
            }
        },
        
    },

    methods: {
        moment,

        ...mapActions(['getUser']),

        async fetchUserNickName(){ 
            this.getUser(this.UserInfo)
            if (this.UserInfo.length != 0) {
                this.formContent.UserNickName = this.UserInfo[0].Nickname
                this.formContent.UserSectionName = this.UserInfo[0].SectionName
            }
        }, 

        async MatchIPAddress(){
            let IPaddress = this.AdminInfo.findIndex(add=>add.AdminIPAddress === this.UserIPaddress)
            if (IPaddress > -1) {                
                this.AdminIP = true
            }
        }, 

        async fetchSystemMaster(){ 
            this.arrSystem = await getSystemForRequest.SystemForRequest()            
        },

        async fetchRequestor(){
                this.arrRequestor = await getRequestor.Requestor()
        },

        async fetchCC(){
            let datas = await fetchCC.CCFecth() 

            this.formContent.CC = datas[0]
            this.formContent.CCEmail = datas[1] 
        },

        onChangeTime(time, timeString) {
            this.formContent.TroubleStart = timeString
        },

        onChangeEmail(){
            let Email = this.arrRequestor.findIndex(arr=>arr.Requester == this.formContent.RequesterName)
            Email >-1 ? this.formContent.Email = this.arrRequestor[Email].Email : this.formContent.Email = ''
        },
        
        onChangeKind(){
            let kindType = this.Kinds[this.Kinds.findIndex(arr=>arr.KindCode == this.formContent.KindCode)].EmailName
            if (this.formContent.SystemName != undefined) {
                this.formContent.Subject = 'ForApproval'+ kindType + this.code + this.formContent.SystemName
            } else {
                this.formContent.Subject = 'ForApproval'+ kindType + this.code
            }
        },

        onChangeSubject(){
            let kindType = this.Kinds.findIndex(arr=>arr.KindCode == this.formContent.KindCode),
            System = this.SystemMaster.findIndex(arr=>arr.SystemName === this.formContent.SystemName)
            this.formContent.Subject = 'ForApproval'+ this.Kinds[kindType].EmailName + this.code + this.formContent.SystemName


            if (this.formContent.SystemName.length != 0) {
                if (System > -1) {
                    let app = this.Approver.findIndex(arr=>arr.ID === this.SystemMaster[System].ApproverID)
                    this.formContent.SystemCode = this.SystemMaster[System].SystemCode
                    this.formContent.SendTo = this.Approver[app].ID
                    this.formContent.ApproverName = this.Approver[app].ApproverName 
                    this.formContent.ApproverEmail = this.Approver[app].Email 
                    
                }else{
                    this.formContent.SystemCode = 0
                    this.formContent.SendTo = this.Approver[0].ID
                    this.formContent.ApproverName = this.Approver[0].ApproverName
                    this.formContent.ApproverEmail = this.Approver[0].Email
                }
            } else {
                this.formContent.SendTo = ''
                this.formContent.ApproverName = ''
                this.formContent.ApproverEmail = ''
            }
           
        },
        
        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        },

        arrAttachments(val){ 
            this.formContent.Attachments= val
            let a = val.map(data=>{
                return data.name
            })
            this.formContent.Attach = a.join(', ')
        },

        async generateReference(){  
            this.formContent.TemporaryNo = await getTempReference.TempReference()
        },

        async SendEmail(){ 
            this.isLoading = true  
            this.formContent.SentDateTime = moment().format('LLLL') 
            await this.generateReference()   
            
            const result = await postForApprovalEmailSending.ForApprovalEmailSending(this.formContent)
            if (result === 'error') {
                this.isResend = true
                this.isLoading = false
            } else {
                this.SaveRequestForApproval()
            }
        },

        async ResendRequest(){ 
            this.isLoading = false 
            await this.SendEmail()
            this.attemp = this.attemp + 1 
        },

        async SaveRequestForApproval(){
            const result = await postSaveRequestDetails.SaveRequestDetails(this.formContent)
            if (result === 'error') {
                this.formContent.Error = err.message  
                this.ErrorSavingButSent()
            } else {
                this.FileSaving()
            }
            
        }, 

        async ErrorSavingButSent(){
            await postErrorSaving.ErrorSaving(this.formContent)            
            this.FileSaving()
        },

        async FileSaving(){  
            this.formContent.Attachments.forEach(data => {
                let objData = new FormData() 
                objData.append('file' , data.originFileObj)
                objData.append('filename' , data.name)
                objData.append('folderName' , this.formContent.TemporaryNo)  

                postSaveAttachmentToFileServer.SaveAttachmentToFileServer(objData)
            }); 
            this.isLoading = false
        },
        
        CloseDialog(val){
            this.UpdateDialog = val
        },

        CloseResendDialog(val){
            this.isResend = val
        }

    },
    
}

</script>

<style scoped>
    .body-style{
        display: flex;
        justify-content: center;
    }

    .wrapper {
    display: grid !important; 
    grid-template-columns:  10% 60% !important; 
    column-gap: 10px !important; 
    row-gap: 5px !important; 
    }

    .wrapper2 {
    display: grid !important; 
    grid-template-columns:  10% 21% 10% 21% !important;
    column-gap: 10px !important; 
    row-gap: 5px !important; 
    }
    .wrapper3 {
    display: grid !important; 
    grid-template-columns:  10% 10% 10% 15% 10% 20%!important;
    column-gap: 10px !important; 
    row-gap: 5px !important; 
    }
    

    @media only screen and (max-width:  960px) {
        .body-style{
            display: unset;
            justify-content:unset;
        }
        .inputLabel {
            font-size: 11px !important;  
        }
        .inputLabel1 {
            font-size: 11px !important;  
        }
        .inputLabel2 {
            font-size: 11px !important;  
        }

        .inputEditable{
            width: 100% !important;
            font-size:11px !important; 
            height: 25px !important;  
        }

        .inputEditable1{
            width: 100% !important;
            font-size:11px !important; 
            height: 25px !important;  
        }

        .inputEditable2{
            width: 100% !important;
            font-size:11px !important; 
            height: 25px !important;  
        }

        .wrapper{
            display: grid !important; 
            grid-template-columns:  20% 60% !important; 
            column-gap: 10px !important; 
            row-gap: 5px !important; 
        }

        .wrapper2 {
            display: grid !important; 
            grid-template-columns:  20% 60% !important;
            column-gap: 10px !important; 
            row-gap: 5px !important; 
        }
        .wrapper3 {
            display: grid !important; 
            grid-template-columns:  20% 60% !important;
            column-gap: 10px !important; 
            row-gap: 5px !important; 
        }

        .ButtonFormat{ 
            color:white;
            background-color:  #1ca9fa; 
            width: 100%;
        }

        .card-style{  
            width: 100% !important;
        }

    }
    .inputLabel{
        /* width:60%; */
        font-size:12px;
        height: 25px;
        font-weight: bold; 
        color:white;
        background-color: #2685f1;
    }

    .inputLabel1{
        font-size:12px;
        height: 25px;
        font-weight: bold;
        color:white;
        background-color:  #2685f1;
    }
    .inputLabel2{
        font-size:12px;
        height: 25px;
        font-weight: bold; 
        color:white; 
        width:80% !important;
        background-color:  #2685f1;
    }

    .inputLabel:hover, .inputLabel:focus {
        border-color: #d9d9d9 !important;
        box-shadow: none !important;
        cursor:default;
    }

    .inputReadOnly:hover, .inputReadOnly:focus {
        border-color: #d9d9d9 !important;
        box-shadow: none !important;
        cursor:default;
    }

    .inputEditable{
        font-size:12px !important; 
        height: 25px !important;  
    }

    .inputEditable1{
        font-size:12px !important; 
        height: 25px !important;  
    }

    .inputEditable2{
        width:80% !important;
        font-size:12px !important; 
        height: 25px !important;  
    }

    .ButtonFormat{
        margin:10px;
        color:white;
        background-color:  #07a1fa;
        float: right;
    }

    .ButtonFormat:hover{
        background-color:  #06669e;
    }
    
    .Attachments{
        max-width: 80% !important;
    }

    h3{
        /*margin: 2%;*/
         text-align: center;
        font-size: 25px;
        font-weight: bold;
        font-family: Verdana, Geneva, Tahoma, sans-serif;

    }

    .card-style{  
        width: 50%;
        padding: 10px;
        border-top:3px; 
        border-left:3px; 
        border-right:3px; 
        border-bottom:3px; 
        border-color:gray; 
        border-style:solid; 
        border-radius:4px;
    }
 
</style>