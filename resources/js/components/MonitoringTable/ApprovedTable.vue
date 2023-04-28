<template>
    <div>
        <a-spin tip="Loading..." :spinning="isLoadingApproved">
        <v-simple-table fixed-header :height="paginatedData.length >0 ?'600px':'60px'"  class="TableFormat">
            <thead>
                <tr>
                    <th> Date Request </th>
                    <th> Kind </th>
                    <th> Request No. </th>
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
                    <th> Completion Hour </th>
                    <th> Action </th>  
                </tr> 
            </thead>
            <tbody>  
                <tr v-for="(item, i) in paginatedData" :key="i"
                    :style="item.StatusCode === '4' ? 'background-color:red' : item.StatusCode === '3' ? 'background-color:green' : null">  
                    <td>{{item.RequestDate}}</td>
                    <td>{{item.KindName}}</td> 
                    <td>{{item.RequestNo}}</td>
                    <td>{{item.SystemName}}</td>
                    <td>{{item.CompanyName}}</td>
                    <td>{{item.DepartmentName}}</td>
                    <td>{{item.Requester}}</td>
                    <td>{{item.RequestName}}</td>
                    <td>{{item.Background}}</td>
                    <td>{{item.DetailOfRequest}}</td>
                    <td>
                        <li  v-for="attach in item.Attachments" :key="attach">
                            <a @click="DownloadAttachment(attach , item)">{{attach}}</a>
                        </li> 
                    </td>
                    <td>{{item.DueDate}}</td>
                    <td>{{item.EstimatedHours}}</td> 
                    <td>{{item.CompletionHours}}</td>
                    <td><a @click="ViewDetails(item)">View</a></td>

                </tr>
            </tbody>
        </v-simple-table>
        
        <div  class="noRecord" v-if="paginatedData.length <= 0">
            <img src="storage/nodata-found.png" width="100%">
        </div>
    </a-spin>
        <ViewDialog
            :arrViewData="arrViewData"
            :DialogView="DialogView"
            @CloseDialog="CloseDialog"
        ></ViewDialog>
    </div>
</template>
<script>
import ViewDialog from './ViewDialog'
export default {
  components: { ViewDialog },
    props : ['paginatedData' ,  'isLoadingApproved'],

    data() {
        return {
            arrViewData: [],
            DialogView : false,
            
        };
    },

    methods: {
        DownloadAttachment(item){
            this.$emit('DownloadAttachment', item);
        },

        ViewDetails(val){
            this.arrViewData = val
            this.DialogView = true
        },

        CloseDialog(val){
            this.DialogView = val
        },
    },
} 
</script>


<style scoped>
    .theme--light.v-data-table.v-data-table--fixed-header thead th{
        box-shadow: inset 0 -1px 0 rgb(0 0 0 / 12%) !important;
        background-color: #1565C0 !important;
        color:white !important;
        text-align: center !important;
        height: 40px !important;
    }

    .TableFormat td{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
    }
    .TableFormat{
        width: 100%;
        table-layout: fixed; 
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
    
    .TableFormat td:nth-child(15),
    .TableFormat th:nth-child(15){
        z-index:5 !important;;
        position: sticky !important;
        max-width: 80px !important;
        min-width: 80px !important;
        background-color: white !important;
        right: 0px !important;
    }
    .TableFormat th:nth-child(1),
    .TableFormat th:nth-child(2),
    .TableFormat th:nth-child(3),
    .TableFormat th:nth-child(15)
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
    .TableFormat td:nth-child(8),
    .TableFormat th:nth-child(8),
    .TableFormat td:nth-child(12),
    .TableFormat th:nth-child(12),
    .TableFormat td:nth-child(13),
    .TableFormat th:nth-child(13),
    .TableFormat td:nth-child(14),
    .TableFormat th:nth-child(14) {
        max-width: 150px !important;
        min-width: 150px !important;
    }

    .TableFormat td:nth-child(9),
    .TableFormat th:nth-child(9),
    .TableFormat td:nth-child(10),
    .TableFormat th:nth-child(10),
    .TableFormat td:nth-child(11),
    .TableFormat th:nth-child(11){
        max-width: 300px !important;
        min-width: 300px !important;
    }
</style>