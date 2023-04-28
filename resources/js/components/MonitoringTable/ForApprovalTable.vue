<template>
    <div>
        <a-spin :spinning="isLoading" tip="Sending...">
            <v-simple-table fixed-header :height="paginatedData.length >0 ?'600px':'60px'" class="TableFormat">
                <thead>
                    <tr>
                        <th> Date Request </th>
                        <th> Kind </th>   
                        <th> System Name </th>
                        <th> Company </th>
                        <th> Department </th>
                        <th> Requester </th>
                        <th> Request Type </th>
                        <th> Background </th>
                        <th> Detail of Reques </th>
                        <th> Attachment </th>
                        <th> Due Date </th>
                        <th> Estimated Hour </th> 
                        <th v-if="$store.state.JapaneseData.length != 0">Action</th> 
                        <th v-if="$store.state.JapaneseData.length == 0">Approver</th> 
                    </tr> 
                </thead>
                <tbody> 
                    <tr v-for="(item, i) in paginatedData" :key="i">  
                        <td>{{item.RequestDate}}</td>
                        <td>{{item.KindName}}</td>
                        <td>{{item.SystemName}}</td>
                        <td>{{item.CompanyName}}</td>
                        <td>{{item.DepartmentName}}</td>
                        <td>{{item.Requester}}</td>
                        <td>{{item.RequestName}}</td>
                        <td>{{item.Background}}</td>
                        <td>{{item.DetailOfRequest}}</td>
                        <td> 
                            <li  v-for="attach in item.AttachmentsFile" :key="attach">
                                <a @click="DownloadAttachment(attach , item)">{{attach}}</a>
                            </li> 
                        </td>
                        <td>{{item.DueDate}}</td>
                        <td>{{item.EstimatedHours}}</td>
                        <td v-if="$store.state.JapaneseData.length != 0"> 
                            <a-tooltip placement="top">
                                <template #title>
                                    <span>Approve</span>
                                </template>
                                <v-icon color="green" @click="ApproveRequest(item)">mdi-thumb-up</v-icon>
                            </a-tooltip>
                            
                            <a-tooltip placement="top">
                                <template #title>
                                    <span>Dispprove</span>
                                </template>
                                <v-icon color="red"  @click="DisapproveRequest(item)">mdi-thumb-down</v-icon>
                            </a-tooltip>
                        </td> 
                        <td v-if="$store.state.JapaneseData.length == 0"> 
                           {{ item.ApproverName }}
                        </td> 
                    </tr>
                </tbody>
            </v-simple-table>
            <div  class="noRecord" v-if="paginatedData.length <= 0">
                <img src="storage/nodata-found.png">
            </div>
        </a-spin>
    </div>
</template>

<script>

import moment from 'moment';

import postgetLatestReferenceNo from '../../Services/Monitoring/postgetLatestReferenceNo'
import postDisapproveRequest from '../../Services/Monitoring/postDisapproveRequest'
import postApprovedSendingEmail from '../../Services/Monitoring/postApprovedSendingEmail'
import postApproveRequest from '../../Services/Monitoring/postApproveRequest'
import postAttachmentRequestFile from '../../Services/Monitoring/postAttachmentRequestFile'

export default { 

    props : ['paginatedData'],

    data() {
        return {
            isLoading : false,
            attemp: 0,
            
        };
    },


    computed: {
        
    },

    methods: {
        moment,
        DownloadAttachment(attach, item){
            let file
            this.$emit('DownloadAttachment', 
            file ={
                'path'      :'ForApprovals/'+item.TemporaryNo ,
                'filename'  : attach
            });
        },

        async getLatestReferenceNo(val){
            return await postgetLatestReferenceNo.getLatestReferenceNo(val)             
        },

        async DisapproveRequest(val){
            await postDisapproveRequest.DisapproveRequest(val)
        },
        
        async ApproveRequest(val){
            this.isLoading = true  
            let newData = Object.assign({} , val)

            newData.ReferenceNo     = await this.getLatestReferenceNo(val)
            newData.Attach          = val.Attachments.join(', ')
            newData.JapApprover     = this.$store.state.JapaneseData.EmployeeCode

            const result = await postApprovedSendingEmail.ApprovedSendingEmail(newData)
            if (result === 'error') {
                this.ResendData(newData)
                this.attemp = this.attemp + 1 
            } else { 
                this.isLoading = false
                this.SaveApproveRequest(newData)
            }   
        }, 

        ResendData(val){
            if (this.attemp <= 3) {
                this.ApproveRequest(val)
            }else{
                this.isLoading = false
                this.attemp = 0
                this.$message.error('Email Sending Faied');
            }
        },

        async SaveApproveRequest(val){
            await postApproveRequest.ApproveRequest(val)   
            this.SaveAttachmentRequest(val) 
        },

        async SaveAttachmentRequest(val){
            await postAttachmentRequestFile.AttachmentRequestFile(val)
        }

    },
};
</script>

<style scoped>
    .theme--light.v-data-table.v-data-table--fixed-header thead th{
        box-shadow: inset 0 -1px 0 rgb(0 0 0 / 12%) !important;
        background-color: #1565C0 !important;
        color:white !important;
        text-align: center !important;
        height: 40px !important;
    }

    .noRecord{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        height: 500px;
        max-height: 500px;
        width: auto;
    }

 
    .TableFormat{
        width: 100%;
        table-layout: fixed;  
    }

    .TableFormat td{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
    }

    .TableFormat td:nth-child(1),
    .TableFormat th:nth-child(1) {
        z-index:5 !important;
        position: sticky;
        max-width: 110px;
        min-width: 110px;
        background-color: white !important;
        left: 0px;
    }
 
    .TableFormat td:nth-child(2),
    .TableFormat th:nth-child(2) {
        z-index:5 !important;;
        position: sticky;
        max-width: 100px;
        min-width: 100px;
        background-color: white;
        left: 110px;
    }

    .TableFormat td:nth-child(3),
    .TableFormat th:nth-child(3){
        z-index:5 !important;;
        position: sticky !important;
        max-width: 175px !important;
        min-width: 175px !important;
        background-color: white !important;
        left: 210px !important;
    }
    
    .TableFormat td:nth-child(13),
    .TableFormat th:nth-child(13){
        z-index:5 !important;;
        position: sticky !important;
        max-width: 150px !important;
        min-width: 150px !important;
        background-color: white !important;
        right: 0px !important;
    }
    
    /* .TableFormat td:nth-child(14),
    .TableFormat th:nth-child(14){
        z-index:5 !important;;
        position: sticky !important;
        max-width: 50px !important;
        min-width: 50px !important;
        background-color: white !important;
        right: 0px !important;
    }

    .TableFormat td:nth-child(13),
    .TableFormat th:nth-child(15){
        z-index:5 !important;;
        position: sticky !important;
        max-width: 100px !important;
        min-width: 100px !important;
        background-color: rgb(255, 3, 3) !important;
        right: 0px !important;
    } */

    .TableFormat th:nth-child(1),
    .TableFormat th:nth-child(2),
    .TableFormat th:nth-child(3),
    .TableFormat th:nth-child(13)
    /* .TableFormat th:nth-child(14),
    .TableFormat th:nth-child(15) */

    {
        z-index:7 !important;;
        position: sticky !important;
        top: 0 !important;
    }


    .TableFormat td:nth-child(4),
    .TableFormat th:nth-child(4),
    .TableFormat td:nth-child(5),
    .TableFormat th:nth-child(5),
    .TableFormat td:nth-child(6),
    .TableFormat th:nth-child(6),
    .TableFormat td:nth-child(7),
    .TableFormat th:nth-child(7),
    .TableFormat td:nth-child(11),
    .TableFormat th:nth-child(11),
    .TableFormat td:nth-child(12),
    .TableFormat th:nth-child(12){
        max-width: 150px !important;
        min-width: 150px !important;
    }

    .TableFormat td:nth-child(8),
    .TableFormat th:nth-child(8),
    .TableFormat td:nth-child(9),
    .TableFormat th:nth-child(9),
    .TableFormat td:nth-child(10),
    .TableFormat th:nth-child(10){
        max-width: 300px !important;
        min-width: 300px !important;
    }
</style>