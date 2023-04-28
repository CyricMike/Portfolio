<template lang="">
    <div>
        <v-file-input
            v-model='objFile.File'
            counter
            show-size
            truncate-length="15"
        ></v-file-input>
        <v-btn @click="SaveFile()">Save File</v-btn>
    </div>
</template>
<script>
import postSaveFileAttachment from '../Services/Request_Form/postSaveFileAttachment'
export default { 

    data() {
        return {
            objFile : {},
        }
    },
    
    methods: {
        async SaveFile(){
            let obj = new FormData()                                                    // sent using the XMLHttpRequest.send() method
                obj.append('file' , this.objFile.File)                                  // file data needed to save 
                obj.append('filename' , this.objFile.File.name)                         // file name after Saving (can be customize) 

            await postSaveFileAttachment.SaveFileAttachment(obj)
             
        }
    },
    
}
</script>

<style lang="">
    
</style>