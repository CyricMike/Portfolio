import axios from "axios";

class postgetReferenceData{
    static async getReferenceData(obj){
        try {
            const result = await axios.post('api/getReferenceData' , obj)
            return result.data.map(data=>{ 
                data.inEditMode = false
                data.Action = 'view'
                return data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export default postgetReferenceData;