import axios from "axios";

class postDownloadAttachFile{
    static async DownloadAttachFile(obj){
        try {
            const result = await axios.post('api/DownloadAttachFile' , obj)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default postDownloadAttachFile;