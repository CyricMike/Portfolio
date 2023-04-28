<template>
    <div>
        <v-dialog 
            v-model="EditDialog" 
            persistent
            max-height="100px" 
            max-width="40%"
            min-width="40%"
            no-click-animation
            overlay-opacity="0">

            <a-card class="cardformat"> 
                <div>
                    <v-icon class="float-right mt-n4" @click="CloseDialog()">mdi-close-thick</v-icon>
                </div>
                <div v-if="index === '1'">
                    <span>System Name</span>
                    <a-input v-model="transferData.SystemName" placeholder="System Name"></a-input>
                    <span>is comp</span>
                    <a-select  
                        class="selectformat"
                        showArrow 
                        size="small"  
                        option-filter-prop="children" 
                        :filter-option="filterOption" 
                        v-model="transferData.iscomp" 
                    >
                        <a-select-option v-for="(item, i) in categories" :key="i" :value="item.iscomp">
                            {{item.iscompName}}
                        </a-select-option>
                    </a-select>
                    <span>Approver Name</span>
                    <a-select  
                        class="selectformat"
                        showArrow 
                        size="small"  
                        option-filter-prop="children" 
                        :filter-option="filterOption" 
                        v-model="transferData.ApproverID" 
                    >
                        <a-select-option v-for="(item, i) in Approver" :key="i" :value="item.ID">
                            {{item.ApproverName}}
                        </a-select-option>
                    </a-select>  
                </div>

                <div v-else>
                    <span>Requester Name</span>
                    <a-input v-model="transferData.Requester" placeholder="Requester Name"></a-input>
                    <span>Email Address</span>
                    <a-input v-model="transferData.Email" placeholder="Email Address"></a-input> 
                </div>

                <a-button class="ButtonFormat float-right" @click="SaveUpates()">Save</a-button>
 
            </a-card>
        </v-dialog>
    </div>
</template>

<script>

import postSaveEditedUpdates from '../Services/Form_Dialog/postSaveEditedUpdates'
export default { 
    props: ['EditDialog' , 'transferData' , 'indexNo'],

    data() {
        return {
            index: null,
            categories : [
                {iscomp: '0', iscompName:'NO'},
                {iscomp: '1', iscompName:'YES'}
            ]
        };
    },

    watch: {
        EditDialog(val){
            this.index = this.indexNo
        }
    }, 

    computed: {
        modifiedData(){
            return this.transferData.map(data=>{
                let newData = Object.assign({} , data)

                return newData
            })
        }
    },

    methods: {

        async SaveUpates(){
           await postSaveEditedUpdates.SaveEditedUpdates(this.transferData)
        },

        CloseDialog(){
            this.$emit('CloseDialog', false);
        },
        
        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        },
    },
};
</script>

<style scoped>
    input{
        margin: 0%;
        padding: 0%;
        font-size:12px !important; 
        height: 25px !important; 
        width:100% !important;
    }

    .selectformat{ 
        margin: 0%;
        padding: 0%;
        font-size:12px !important; 
        height: 25px !important; 
        width:100% !important; 
    }

    span{ 
        font-size: 12px;
        font-weight: bold;
        margin-left: 2px !important;
        margin: 0%;
        padding: 0%;
    }

    .ButtonFormat{
        margin: 5px; 
        margin-bottom: 0% !important;
        color:white;
        background-color:  #1ca9fa;
    }

    .ButtonFormat:hover{
        background-color:  #06669e;
    }

    .cardformat{
        padding: 0% !important;
    }
</style>