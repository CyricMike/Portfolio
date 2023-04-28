<template>
  <div class="ma-3 pa-0"> 
  
    <a-radio-group :options="plainOptions" :default-value="plainOptions[0]" @change="SwitchMode" /> 
    
    <div class="mt-2">
      <span class="textFormat">{{ radio }}</span>
      <a-input v-model="Code" class="inputFormat" :placeholder="radio" @keypress.enter="autoFillTaskUpdate()"/>
      <span class="textFormat">System Name</span>
      <a-input v-model="modifiedData.SystemName" readOnly class="inputFormat" placeholder="System Name"/>
    </div>
 
    <div class="wrapper">
      <div>
        <span class="textFormat">Status</span>
        <a-input v-model="modifiedData.StatusName" readOnly class="inputFormat" placeholder="Status"/>
      </div>
      <div>
        <span class="textFormat">Finish Date</span>
        <a-checkbox @change="finishDate"></a-checkbox> 
        <a-input v-model="modifiedData.FinishedDate" readOnly class="inputFormat" placeholder="Finish Date"/>
      </div>
      <div>
        <span class="textFormat">Incharge</span>
        <a-input v-model="modifiedData.InCharge" readOnly class="inputFormat" placeholder="Incharge"/>
      </div>
    </div>

    <div class="wrapper">  
      <div>
        <span class="textFormat">Requester Name</span>
        <a-input v-model="modifiedData.Requester" readOnly class="inputFormat" placeholder="Requester Name"/>
      </div>
      <div>
        <span class="textFormat">Company</span>
        <a-input v-model="modifiedData.AbbreviationName" readOnly class="inputFormat" placeholder="Company"/>
      </div>    
      <div>
        <span class="textFormat">Department</span>
        <a-input v-model="modifiedData.Department" readOnly class="inputFormat" placeholder="Department"/>
      </div>
    </div>

    <div class="wrapper">
      <div>
        <span class="textFormat">Email</span>
        <a-input v-model="modifiedData.Email" readOnly class="inputFormat" placeholder="Email"/>
      </div>
      <div>
        <span class="textFormat">Request Kinds</span>
        <a-input v-model="modifiedData.RequestName" readOnly class="inputFormat" placeholder="Request Kinds"/>
      </div>
      <div>
        <span class="textFormat">Sent Date</span>
        <a-input v-model="modifiedData.RequestDate" readOnly class="inputFormat" placeholder="Sent Date"/>
      </div>
    </div>

    <div>
      <span class="textFormat">Background</span>
      <a-textarea v-model="modifiedData.Background" readOnly :rows="2" class="inputFormat1" placeholder="Background"/>
      <span class="textFormat">Details</span>
      <a-textarea v-model="modifiedData.DetailOfRequest" readOnly :rows="2" class="inputFormat1" placeholder="Details"/>
    </div>

    <div class="wrapper">
      <div>
        <span class="textFormat">Delivery Date</span>
        <a-input v-model="modifiedData.DueDate" readOnly class="inputFormat" placeholder="Delivery Date"/>
      </div>
      <div>
        <span class="textFormat">Sender</span>
        <a-input v-model="modifiedData.RegisteredBy" readOnly class="inputFormat" placeholder="Sender"/>
      </div>  
    </div>

      <a-button class="ButtonFormat float-right" @click="SaveUpdate()">Save</a-button>
  </div>
</template>
<script> 
 
 import postgetReferenceData from '../../Services/Form_Dialog/postgetReferenceData'
 import postSaveUpdateTask from '../../Services/Form_Dialog/postSaveUpdateTask'

export default {   
  props:['clearAll'], 

  data() {
      return { 
        radio : 'Request',
        Code : null,
        Objtemp : {},
        plainOptions : ['Request', 'Reference'], 
        arrTask : []


      }
  },
  created() { 
    this.radio = 'Request' 
  },

  watch: {
    clearAll(val){
     if (val) {
      this.ObjData = Object.assign({} , '')
      this.Code = null
     }
      
    }
  },

  computed: {
    modifiedData(){
      if (this.arrTask.length > 0) {
        return this.arrTask.map(data=>{
          let newData = Object.assign({}, data),
          comp = this.companies.findIndex(comp=>comp.CompanyCode === data.CompanyCode),
          stat = this.Status.findIndex(stat=>stat.StatusCode === data.StatusCode),
          reqName = this.RequestKinds.findIndex(req=>req.RequestCode === data.RequestCode)
          if (comp > -1) {
            newData.Company = this.companies[comp].AbbreviationName
          }
          if (stat > -1) {
            newData.StatusName = this.Status[stat].StatusName
          }
          if (reqName > -1) {
            newData.RequestName = this.RequestKinds[reqName].RequestName
          }
          return newData
        })[0]
      } else {
        return Object.assign({} , '')
      }
    }
  },

  methods: {  
    SwitchMode(e){
      this.radio = e.target.value
      this.ObjData = Object.assign({} , '')
      this.Code = null
    },

    async autoFillTaskUpdate(){
      let Obj = {
                'radio' : this.radio,
                'Code' : this.Code
                } 
      this.arrTask = await postgetReferenceData.getReferenceData(Obj)
      this.Objtemp.stat = this.arrTask[0].StatusCode
      this.Objtemp.Fdate = this.arrTask[0].FinishedDate
      
    },

    finishDate(e){ 
      if(e.target.checked){ 
        this.arrTask[0].FinishedDate = this.moment().format('YYYY/MM/DD')
        this.arrTask[0].StatusCode = '3'
      }else{
        this.arrTask[0].FinishedDate = this.Objtemp.Fdate
        this.arrTask[0].StatusCode = this.Objtemp.stat 
      }  
    },

    async SaveUpdate(){
      await postSaveUpdateTask.SaveUpdateTask(this.modifiedData) 
      this.$message.success('Task successfully upadated'); 
    }
  },
}
</script>
<style scoped>
.wrapper {
  display: grid !important; 
  grid-template-columns: repeat(3, 1fr) !important; 
  grid-auto-rows: 3% !important; 
  column-gap: 10px !important; 
  row-gap: 10px !important; 
}

.inputFormat{
  margin: 0% !important;
  padding: 0% !important; 
  font-size:12px !important; 
  height: 25px !important;  
}

.inputFormat1{
  margin: 0% !important;
  padding: 0% !important; 
  font-size:12px !important;  
}

.ButtonFormat{
  margin: 10px;
  color:white;
  background-color:  #1ca9fa;
}

.ButtonFormat:hover{
  background-color:  #06669e;
}

@media only screen and (max-width: 600px) {
  .textFormat {
    font-size: 9px !important;  
  }
}
</style>