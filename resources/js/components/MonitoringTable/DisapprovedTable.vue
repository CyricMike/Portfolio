<template>
    <div>
        <v-simple-table fixed-header :height="paginatedData.length >0 ?'600px':'60px'"  class="TableFormat">
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
                        <td> <li  v-for="attach in item.Attachments" :key="attach">
                            <a @click="DownloadAttachment(attach , item)">{{attach}}</a>
                        </li> </td>
                        <td>{{item.DueDate}}</td>
                        <td>{{item.EstimatedHours}}</td> 

                    </tr>
                </tbody>
            </v-simple-table>
            <div  class="noRecord" v-if="paginatedData.length <= 0">
                <img src="storage/nodata-found.png">
            </div>
    </div>
</template>

<script>
export default { 

    props : ['paginatedData'],

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        DownloadAttachment(item){
            this.$emit('DownloadAttachment', item); 
        }
    },
};
</script>

<style scoped>
    .theme--light.v-data-table.v-data-table--fixed-header thead th{
        box-shadow: inset 0 -1px 0 rgb(0 0 0 / 12%) !important;
        background-color: #1565C0 !important;
        color:white !important;
        /* text-align: center !important; */
        height: 40px !important;
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
    
    .TableFormat th:nth-child(1),
    .TableFormat th:nth-child(2),
    .TableFormat th:nth-child(3)
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