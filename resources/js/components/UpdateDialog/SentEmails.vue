<template>
    <div class="ma-3 pa-0"> 
        <v-text-field
            v-model="ObjectData.search"
            :append-icon="'mdi-magnify'"
            label="Search..."
            style="width: 50%;"
            dense
            class="text-right mt-2"
        /> 
        <a-skeleton :loading="!isLoading" >
        <v-simple-table fixed-header class="sentEmails">
            <thead>
                <tr>
                    <th>Request No</th>
                    <th>Kind</th>
                    <th>Requester</th>
                    <th>System Name</th>
                    <th>Company</th>
                    <th>Department</th>
                    <th>Background</th>
                    <th>Details of Request</th>
                    <th>SMD Request</th>
                    <th>INcharge</th>
                    <th>Request Date</th>
                    <th>Due Date</th>
                    <th>Sent By</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in paginatedData" :key="index">
                   <td>{{item.RequestNo}}</td>
                   <td>{{item.KindName}}</td>
                   <td>{{item.Requester}}</td>
                   <td>{{item.SystemName}}</td>
                   <td>{{item.Company}}</td>
                   <td>{{item.Department}}</td>
                   <td>{{item.Background}}</td>
                   <td>{{item.DetailsOfRequest}}</td>
                   <td>{{item.PMSReference}}</td>
                   <td>{{item.InCharge}}</td>
                   <td>{{item.RequestDate}}</td>
                   <td>{{item.DueDate}}</td>
                   <td>{{item.RegisterBy}}</td>
                </tr>
            </tbody>
        </v-simple-table>
        <div class="text-center sentEmails">  
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

export default {
    props:['ObjectData' , 'isLoading'],

    data() {
        return { 
            page: 1,
            length: 0,
            rowPage: 8, 
            arrSentEmails : [],

        }
    },

    computed: {
        paginatedData(){
            const start = (this.page - 1) * this.rowPage,
            end = start + this.rowPage;
            this.length = Math.ceil(this.filterData.length / this.rowPage) 
            return this.filterData.slice(start, end);
        },

        filterData(){
            return this.modifiedData.filter(rec=>{
                if(Object.keys(this.ObjectData).length != 0){
                    let search = new RegExp(this.ObjectData.search.toUpperCase(), "g")
                    this.page = 1
                    return JSON.stringify(Object.values(rec)).toUpperCase().match(search)
                }else{ 
                    return rec
                }
            })
        },
        
        modifiedData(){
            return this.arrSentEmails.map(data=>{
                let newData = Object.assign({} ,data),
                kinds = this.Kinds.findIndex(arr=>arr.KindCode === data.KindCode),
                comp = this.companies.findIndex(arr=>arr.CompanyCode === data.CompanyCode)
                newData.RequestDate = moment(data.RequestDate).format('YYYY/MM/DD')
                newData.DueDate = moment(data.DueDate).format('YYYY/MM/DD')
                if (kinds >-1) {
                    newData.KindName = this.Kinds[kinds].KindName
                }
                
                if (comp >-1) {
                    newData.Company = this.companies[comp].AbbreviationName
                }

                return newData
            })
        }
    },

    async created() {
        await this.fetchSentEmails()
    },


    methods: {
        moment,

        async fetchSentEmails(){
            await axios.get(`${this.baseURL}SentEmails`)
            .then(res=>{
                this.arrSentEmails = res.data
                this.$emit('isloading', true);
            }) 
        },
    },
}
</script>
<style scoped> 
    .theme--light.v-data-table.v-data-table--fixed-header thead th{
        box-shadow: inset 0 -1px 0 rgb(0 0 0 / 12%) !important;
        background-color: #1565C0 !important;
        color:white !important;
        /* text-align: center !important; */
        height: 40px !important;
    }

    .sentEmails{
        overflow: hidden;  
        max-height: 50% !important;
        min-height: 50% !important;
    }
    .sentEmails th:nth-child(1){
        z-index:7 !important;
        position: sticky !important;
        top: 0 !important;
    }    
    .sentEmails td:nth-child(1),
    .sentEmails th:nth-child(1) {
        z-index:5 !important;
        position: sticky;
        max-width: 175px;
        min-width: 175px; 
        left: 0px;
        background-color: white;
    } 

    .sentEmails td:nth-child(2),
    .sentEmails th:nth-child(2),  
    .sentEmails td:nth-child(3),
    .sentEmails th:nth-child(3),
    .sentEmails td:nth-child(4),
    .sentEmails th:nth-child(4) ,
    .sentEmails td:nth-child(5),
    .sentEmails th:nth-child(5),
    .sentEmails td:nth-child(6),
    .sentEmails th:nth-child(6),
    .sentEmails td:nth-child(9),
    .sentEmails th:nth-child(9),
    .sentEmails td:nth-child(10),
    .sentEmails th:nth-child(10),    
    .sentEmails td:nth-child(11),
    .sentEmails th:nth-child(11),
    .sentEmails td:nth-child(12),
    .sentEmails th:nth-child(12),
    .sentEmails td:nth-child(13),
    .sentEmails th:nth-child(13){
        max-width: 150px;
        min-width: 150px;
    }
    .sentEmails td:nth-child(7),
    .sentEmails th:nth-child(7),
    .sentEmails td:nth-child(8),
    .sentEmails th:nth-child(8){
        max-width: 350px;
        min-width: 350px;
    }


    

</style>