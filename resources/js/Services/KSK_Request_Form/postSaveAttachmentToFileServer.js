import axios from "axios";

class postSaveAttachmentToFileServer{
    static async SaveAttachmentToFileServer(obj){
        try {
            const result = await axios.post('api/SaveAttachmentToFileServer' , obj)
            return result.data
        } catch (error) {
            console.log(error)
            return 'error'
        }
    }
}

export default postSaveAttachmentToFileServer;