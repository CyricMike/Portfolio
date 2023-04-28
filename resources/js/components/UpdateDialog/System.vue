<template>
    <div class="ma-3 pa-0">
    
        <v-text-field
            v-model="ObjectData.search"
            :append-icon="'mdi-magnify'"
            label="System Name"
            style="width: 50%;"
            dense
            class="text-right mt-2"
        /> 
        <a-skeleton :loading="!isLoading" >
            <v-simple-table fixed-header >
                <thead>
                    <tr>
                        <th>System Name</th>
                        <th>iscomp</th>
                        <th>Approver</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedData" :key="index">
                        <td>{{item.SystemName}}</td>
                        <td>{{item.iscompName}}</td>
                        <td>{{item.ApproverName}}</td>
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
            indexNo = 1
            @CloseDialog="CloseDialog"
        ></edit-dialog>

    </div>
</template>

<script>

import EditDialog from '../EditDialog.vue' 

export default { 
    components : {EditDialog}, 

    props:['ObjectData' , 'isLoading'],

    data() {
        return { 
            EditDialog : false,
            transferData : [],
            page: 1,
            length: 0,
            rowPage: 8,
            arrSystems : [],
        };
    }, 

    async created() {
        // await this.fetchSystems()
    },

    watch: {
        isLoading(val){
            console.log(val , 'isLoading')
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
                return this.arrSystems.filter(rec =>{
                    return  rec.SystemName.toUpperCase().includes(this.ObjectData.search.toUpperCase())
                }).map(obj=>{
                    let newData = Object.assign({} , obj),
                    app = this.Approver.findIndex(app=>app.ID === obj.ApproverID)
                    newData.ApproverName = this.Approver[app].ApproverName
                    if (obj.iscomp === '1') {
                        newData.iscompName = 'YES'
                    } else {
                        newData.iscompName =  "NO"
                    }
                    this.page = 1
                    return newData;
                })    
            }else{
                return this.arrSystems.map(data=>{
                    let newData = Object.assign({} , data),
                    app = this.Approver.findIndex(app=>app.ID === data.ApproverID)
                    newData.ApproverName = this.Approver[app].ApproverName
                    if (data.iscomp === '1') {
                        newData.iscompName = 'YES'
                    } else {
                        newData.iscompName =  "NO"
                    }
                    return newData;
                })
            }
        },
    },

    methods: {
        async fetchSystems(){
            await axios.get(`${this.baseURL}Systems`).then(res=>{
               this.arrSystems = res.data
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
</style>


