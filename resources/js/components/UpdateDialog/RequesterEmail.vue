<template>
    <div class="ma-3 pa-0"> 
        <v-text-field
            v-model="ObjectData.search"
            :append-icon="'mdi-magnify'"
            label="Requester Name"
            style="width: 50%;"
            dense
            class="text-right mt-2"
        /> 
        <a-skeleton :loading="!isLoading" >
            <v-simple-table fixed-header>
                <thead>
                    <tr>
                        <th>Requester Name</th>
                        <th>Email Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedData" :key="index">
                        <td>{{ item.Requester }}</td>
                        <td>{{ item.Email }}</td>
                        <td><v-icon color="green" @click="EditData(item)">mdi-pencil-circle</v-icon></td>
                    </tr>
                </tbody>
            </v-simple-table>
            <div class="text-center">  
                <v-pagination
                    small
                    v-model="page"
                    :length="length"
                    :total-visible="8" 
                ></v-pagination>  
            </div> 
        </a-skeleton>

        <edit-dialog
            :EditDialog="EditDialog"
            :transferData="transferData"
            indexNo = 2
            @CloseDialog="CloseDialog"
        ></edit-dialog>

    </div>
</template>
<script>

import EditDialog from '../EditDialog.vue';

export default {
    components : {EditDialog}, 

    props:['ObjectData' , 'isLoading'],

    data() { 
        return { 
            EditDialog : false,
            page: 1,
            length: 0,
            rowPage: 8,
            arrRequester : [],
            transferData : [],

        }
    },

    computed: {
        paginatedData(){
            const start = (this.page - 1) * this.rowPage,
            end = start + this.rowPage;
            this.length = Math.ceil(this.modifiedData.length / this.rowPage) 
            return this.modifiedData.slice(start, end);
        },

        modifiedData(){
            if(Object.keys(this.ObjectData).length != 0){
                return this.arrRequester.filter(rec =>{
                    this.page = 1
                    return  rec.Requester.toUpperCase().includes(this.ObjectData.search.toUpperCase())
                })
            }else{
                return this.arrRequester
            }
        }
    },

    async created() {
        await this.fetchRequesterEmails()
    },


    methods: {
        async fetchRequesterEmails(){
            await axios.get(`${this.baseURL}RequesterEmails`)
            .then(res=>{
                this.arrRequester = res.data
                this.$emit('isloading', true);
            })
        },

        EditData(item){
            this.EditDialog = true
            this.transferData = Object.assign({} , item)
        },

        CloseDialog(val){
            this.EditDialog = val
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
</style>