import axios from "axios";

class postErrorSaving{
    static async ErrorSaving(obj){
        try {
            const result = await axios.post('api/ErrorSaving' , obj)
            return result.data
        } catch (error) {
            console.log(error)
            return 'error'
            
        }
    }
}

export default postErrorSaving;