import axios from "axios";

class postAttachmentRequestFile{
    static async AttachmentRequestFile(obj){
        try {
            const result = await axios.post('api/AttachmentRequestFile' , obj)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default postAttachmentRequestFile;