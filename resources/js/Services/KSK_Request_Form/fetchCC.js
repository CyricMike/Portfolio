import axios from "axios";

class fetchCC{
    static async CCFecth(){
        try {
            const result = await axios.get('api/fetchCC')
            const modified = [
                result.data.map(rec=>{
                    return rec.EmployeeName
                }).join(', '),
                
                result.data.map(rec=>{
                    return rec.Email
                }).toString() 
                ]
            return modified
        } catch (error) {
            console.log(error)
        }
    }
}

export default fetchCC;