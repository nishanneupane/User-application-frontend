import axios from "axios";

const BASE_API_URL="http://localhost:2023/api/v1"

class productService{
    saveUser(user){
        return axios.post(BASE_API_URL+"/user",user);
    }
    getAllProduct(){
        return axios.get(BASE_API_URL+"/");
    }
    getProductById(userId){
        return axios.get(BASE_API_URL+"/user/"+userId);
    }
    deleteProduct(userId){
        return axios.get(BASE_API_URL+"/user/deleteUser/"+userId);
    }
    editProduct(user,userId){
        return axios.post(BASE_API_URL+"/user/editUser/"+userId,user);
    }

}
export default new productService();