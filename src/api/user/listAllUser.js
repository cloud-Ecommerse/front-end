import axios from 'axios'

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/users/buyer/list',
  headers: { }
};

const listAllUser = async ()=>{
    try{
        const resp = await axios.request(config)
        console.log(resp)
        return resp.body.user[0]
    }catch(error){
        console.log(error)
    }

     
    
}
export default listAllUser 