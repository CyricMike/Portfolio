<template>
    <div class="ma-4 pa-0">
        <h2 v-if="$store.state.JapaneseData.length === 0">Guest</h2>
            <div>
                <a-badge :count="forApporovalCount">
                    <a-button class="ButtonFormat" type="primary" @click="SwitchTable(1)">For Approval<a-icon type='bell'></a-icon></a-button>
                </a-badge>
                <a-button class="ButtonFormat" type="primary" @click="SwitchTable(2)">Approved<a-icon type='like'></a-icon></a-button>
                <a-button class="ButtonFormat" type="primary" @click="SwitchTable(3)">Disapproved<a-icon type='dislike'></a-icon></a-button>
            </div> 
        
        <div class="formdiv ma-3" >
            <div >
                <div class="wrapper" v-if="tableIndex === 2">
                    <h2>Legend:</h2>
                    <v-layout>
                        <a-avatar class="mr-3" shape="square" size="small" :style="{ backgroundColor: 'red', verticalAlign: 'middle', }"></a-avatar>
                    - Cancelled Task 
                    </v-layout>
                    <v-layout>
                        <a-avatar class="mr-3" shape="square" size="small" :style="{ backgroundColor: 'green', verticalAlign: 'middle', }"></a-avatar>
                        - Finished Task
                    </v-layout>
                </div> 
            </div>
            <div>
                <a-input-search v-model="search" placeholder="Search..."/>
            </div>
        </div>

        <a-skeleton :loading="isLoading"> 

            <for-approval-table
                v-if="tableIndex === 1"
                :paginatedData="paginatedData"
                @DownloadAttachment="DownloadAttachment"
            ></for-approval-table> 

            <approved-table
                v-if="tableIndex === 2"
                :paginatedData="paginatedData"
                :isLoadingApproved="isLoadingApproved"
                @DownloadAttachment="DownloadAttachment"
            ></approved-table>
            
            <disapproved-table
                v-if="tableIndex === 3"
                :paginatedData="paginatedData"
                @DownloadAttachment="DownloadAttachment"
            ></disapproved-table>

            <div class="text-center">  
                <v-pagination
                    small
                    v-model="page"
                    :length="length"
                    :total-visible="8" 
                ></v-pagination>  
            </div> 
        </a-skeleton>
    </div>
</template>
<script>
import moment from 'moment';

import ForApprovalTable from '../components/MonitoringTable/ForApprovalTable.vue'
import ApprovedTable from '../components/MonitoringTable/ApprovedTable.vue'
import DisapprovedTable from '../components/MonitoringTable/DisapprovedTable.vue'

import postDownloadAttachFile from '../Services/Monitoring/postDownloadAttachFile'
import postForApprovalRequest from '../Services/Monitoring/postForApprovalRequest'
import postgetUploadedIAttachment from '../Services/Monitoring/postgetUploadedIAttachment'
import postfetchRequestData from '../Services/Monitoring/postfetchRequestData'
export default {

    components : {ForApprovalTable , ApprovedTable , DisapprovedTable },

    data() {
        return {
            page: 1,
            length: 0,
            rowPage: 8,
            forApporovalCount : 0,

            search : '',
            isLoading : false,
            isLoadingApproved : false,
            tableIndex : 1,

            arrForApproval: [],
            arrApproved: [],
        };
    },

    async created() {
        // this.isLoading = true
        // await this.ForApprovalRequest()
        // await this.fetchRequestData()

        setInterval(()=>{
            this.ForApprovalRequest()
        }, 180000)
    },

    computed: {
        paginatedData(){ 
            const start = (this.page - 1) * this.rowPage,
            end = start + this.rowPage;
            this.length = Math.ceil(this.filteredData.length / this.rowPage) 
            
            return this.filteredData.slice(start, end);
        },

        filteredData(){
            return this.modifiedData.filter(rec=>{
                
                if(this.search.length != 0){
                    let search = new RegExp(this.search.toUpperCase(), "g")
                    this.page = 1
                    if (this.tableIndex === 1) {
                        return JSON.stringify(Object.values(rec)).toUpperCase().match(search)
                                && rec.EmailStatusCode === '1'

                    } else if (this.tableIndex === 2){
                        return JSON.stringify(Object.values(rec)).toUpperCase().match(search)
                                && rec 
                    }else{
                        return JSON.stringify(Object.values(rec)).toUpperCase().match(search)
                                && rec.EmailStatusCode === '3' 
                    }
                }else{
                    if (this.tableIndex === 1) {
                        return rec.EmailStatusCode === '1'

                    } else if (this.tableIndex === 2){
                        return rec 
                    }else{
                        return rec.EmailStatusCode === '3'
                    }
                }
           
            })

        },

        modifiedData(){
            if (this.tableIndex === 1 || this.tableIndex === 3) {
                return this.arrForApproval.map(data=>{
                    let newData = Object.assign({} , data),
                    comp = this.companies.findIndex(comp=> comp.CompanyCode === data.CompanyCode),
                    dept = this.departments.findIndex(dept=> dept.CompanyCode == data.CompanyCode && dept.DepartmentCode === data.Department),
                    kind = this.Kinds.findIndex(kind=> kind.KindCode === data.KindCode),
                    Email = this.Emails.findIndex(em=> em.EmailStatusCode === data.EmailStatusCode),
                    reqcode = this.RequestKinds.findIndex(req=> req.RequestCode === data.RequestCode),
                    stat = this.Status.findIndex(stat=> stat.StatusCode === data.StatusCode),
                    apprv = this.Approver.findIndex(app=> app.ID === data.ApproverId)

                    comp > -1 ? newData.CompanyName = this.companies[comp].AbbreviationName : newData.CompanyName = '-'   
                    dept > -1 ? newData.DepartmentName = this.departments[dept].DepartmentName : newData.DepartmentName = '-'   
                    kind > -1 ? newData.KindName = this.Kinds[kind].KindName : newData.KindName = '-'
                    Email > -1 ? newData.EmailStatusName = this.Emails[Email].EmailStatusName : newData.EmailStatusName ='-'
                    reqcode > -1 ? newData.RequestName = this.RequestKinds[reqcode].RequestName : newData.RequestName ='-'
                    stat > -1 ? newData.StatusName = this.Status[stat].StatusName : newData.StatusName ='-'
                    apprv > -1 ? newData.ApproverName = this.Approver[apprv].ApproverName : newData.ApproverName = '-'

                    newData.SentDate = moment().format('LLLL')
                    newData.RequestDate = moment(data.RequestDate).format('YYYY/MM/DD')
                    newData.DueDate = moment(data.DueDate).format('YYYY/MM/DD')
                    return newData 
                }) 
            } else {
                return this.arrApproved.map(data=>{
                    let newData = Object.assign({} , data),
                    comp = this.companies.findIndex(comp=> comp.CompanyCode === data.CompanyCode),
                    dept = this.departments.findIndex(dept=> dept.CompanyCode == data.CompanyCode && dept.DepartmentCode === data.Department),
                    kind = this.Kinds.findIndex(kind=> kind.KindCode === data.KindCode), 
                    reqcode = this.RequestKinds.findIndex(req=> req.RequestCode === data.RequestCode),
                    stat = this.Status.findIndex(stat=> stat.StatusCode === data.StatusCode)

                    comp > -1 ? newData.CompanyName = this.companies[comp].AbbreviationName : newData.CompanyName = '-'  
                    dept > -1 ? newData.DepartmentName = this.departments[dept].DepartmentName : newData.DepartmentName = '-'       
                    kind > -1 ? newData.KindName = this.Kinds[kind].KindName : newData.KindName = '-' 
                    reqcode > -1 ? newData.RequestName = this.RequestKinds[reqcode].RequestName : newData.RequestName ='-'
                    stat > -1 ? newData.StatusName = this.Status[stat].StatusName : newData.StatusName ='-'

                    newData.AttachmentsFile = []
                    data.Attachments.forEach(att => {
                        const words = att.split('/');
                        newData.AttachmentsFile.push(words[1])
                    });
                    
                    
                    newData.RequestDate = moment(data.RequestDate).format('YYYY/MM/DD')
                    newData.DueDate = moment(data.DueDate).format('YYYY/MM/DD')

                    return newData 
                })
            }
        },
        
    },

    methods: {
        moment,

        async DownloadAttachment(item){ 
            await postDownloadAttachFile.DownloadAttachFile(item)
        },

        async ForApprovalRequest(){ 
            const result = await postForApprovalRequest.ForApprovalRequest(this.$store.state.JapaneseData)
            this.arrForApproval = result.data
            this.forApporovalCount = result.count
            this.isLoading = false
        },

        async getAttacments(val){
            const result = await postgetUploadedIAttachment.getUploadedIAttachment(val) 
                return result.data.map(file=>{
                   console.log(file , 'file')
                })
            
        },
        
        async fetchRequestData(){
            this.isLoadingApproved = true 
            this.arrApproved = await postfetchRequestData.fetchRequestData(this.$store.state.JapaneseData)   
            this.isLoadingApproved =  false    
            this.isLoading = false
        },

        SwitchTable(val){
            this.page = 1
            this.tableIndex = val
        }
    },
    
}
</script>
<style scoped>
   .wrapper {
        display: grid !important; 
        grid-template-columns: 70px 150px 200px !important; 
        grid-auto-rows: 3% !important; 
        column-gap: 10px !important; 
        row-gap: 10px !important; 
        margin-top: 10px;
    }  
    
    .formdiv {
        display: grid !important; 
        grid-template-columns: 80% 20% !important; 
        grid-auto-rows: 3% !important; 
        column-gap: 10px !important; 
        row-gap: 10px !important; 
    } 

    .ButtonFormat{
        margin: 2px;
        color:white;
        background-color:  #1ca9fa;
    }

    .ButtonFormat:hover{
        background-color:  #06669e;
    }

    .ButtonFormat:focus{
        background-color: #023c5e;
    }

  
</style>