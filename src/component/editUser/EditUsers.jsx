import React, { useEffect, useState } from 'react'
import productService from '../service/productService';
import { useNavigate, useParams } from 'react-router-dom';

const EditUsers = () => {
    const navigate=useNavigate();

    const [user, setUser] = useState({
        id:"",
        name: "",
        userName: "",
        email: "",
        about: ""
    });

    const {id}=useParams();

    useEffect(()=>{
        productService.getProductById(id).then((res)=>{
            setUser(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[])

    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value })
    }

    const updateUser = (e) => {
        e.preventDefault();
        productService.editProduct(user,id).then((res) => {
            setMsg("User edited Sucessfully");
            navigate("/")
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card shadow">
                            <div className="card-header fs-3 text-center"> Update</div>
                            {
                                msg && <p className='fs-4 text-center text-success'>{msg}</p>
                            }
                            <div className="card-body">
                                <form onSubmit={(e) => updateUser(e)}>
                                    <div className="mb-3">
                                        <label htmlFor="/">Enter Name</label>
                                        <input type="text" placeholder='Your name here' className='form-control'
                                            name='name'
                                            onChange={(e) => handleChange(e)}
                                            value={user.name}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="/">Enter User Name</label>
                                        <input type="text" placeholder='Your username here' className='form-control'
                                            name='userName'
                                            onChange={(e) => handleChange(e)}
                                            value={user.userName} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="/">Enter User Email</label>
                                        <input type="text" className='form-control' name='email'
                                            onChange={(e) => handleChange(e)}
                                            value={user.email}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="/">Enter your bio</label>
                                        <input type="text" className='form-control' name='about'
                                            onChange={(e) => handleChange(e)}
                                            value={user.about} 
                                            style={{height:"10vh"}}
                                            />
                                    </div>
                                    <button className='btn btn-primary col-md-12'>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUsers