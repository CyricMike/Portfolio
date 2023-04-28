<template>
  <div>  
    <a-upload-dragger
      name="file"
      :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      v-model="arrAttachments"
      @change="handleChange"
    >
      <p class="ant-upload-text">
        Click or drag file to this area to upload
      </p>

    </a-upload-dragger>
  </div>
</template>
<script>
 
export default {
data() {
    return {
      arrAttachments: [],
      orgFile : []
    }
},

methods: {
  handleChange(info) { 
    const status = info.file.status
    
    if (status !== 'uploading') {
      console.log(info.file, info.fileList , 'tetedssas');
    }
    if (status === 'done') {
      this.$message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.$message.error(`${info.file.name} file upload failed.`);
    }
    this.orgFile = info.file
    this.arrAttachments = info.fileList
    this.$emit('arrAttachments', this.arrAttachments); 

    this.formingdata()
  },
  
  formingdata(){
    console.log(this.orgFile , 'orgFile')
  }


},
}
</script>


<style scoped>

</style>