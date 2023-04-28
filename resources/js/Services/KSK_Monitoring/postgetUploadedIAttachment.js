import axios from "axios";

class postgetUploadedIAttachment{
    static async getUploadedIAttachment(obj){
        try {
            const result = await axios.post('api/getUploadedIAttachment' , obj)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default postgetUploadedIAttachment;