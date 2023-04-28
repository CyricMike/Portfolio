<template>
    <div class="ma-3 pa-0">
        <v-text-field
            v-model="ObjectData.search"
            :append-icon="'mdi-magnify'"
            label="Employee Name"
            style="width: 50%;"
            dense
            class="text-right mt-2"
        /> 
        <a-skeleton :loading="!isLoading" >
            <v-simple-table fixed-header>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Deleted Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedData" :key="index">
                        <td>{{ item.EmployeeName }}</td>
                        <td>{{ item.DeletedDate }}</td>
                        <td> 
                            <a-tooltip placement="top">
                                <template #title>
                                    <span>{{item.DeletedDate ? 'Restore' : 'Delete'}}</span>
                                </template>
                                    <v-icon :color="item.DeletedDate ? 'red' : 'green'" @click="UpdateEmployee(item)">mdi-delete-circle</v-icon>
                            </a-tooltip>
                        </td>
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
    </div>
</template>

<script>
import getEmployees from '../../Services/Form_Dialog/getEmployees'
import postUpdateEmployee from '../../Services/Form_Dialog/postUpdateEmployee'
export default {  
    props:['ObjectData' , 'isLoading'],
    data() {
        return { 
            page: 1,
            length: 0,
            rowPage: 8,
            arrEmployee : [], 
        };
    },

    async created() {
        // await this.fetchEmployees()
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
                return this.arrEmployee.filter(rec =>{
                    this.page = 1
                    return  rec.EmployeeName.toUpperCase().includes(this.ObjectData.search.toUpperCase())
                })
            }else{
                return this.arrEmployee
            }
        }
    },

    methods: {
        async fetchEmployees(){
            this.arrEmployee = await getEmployees.Employees()
            this.$emit('isloading', true); 
        },

        async UpdateEmployee(item){
            await postUpdateEmployee.UpdateEmployee(item)
            this.fetchEmployees()
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