import React, { useState } from 'react'
import productService from "../service/productService"

const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: "",
        about: ""
    });

    const [msg, setMsg] = useState();

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value })
    }

    const registerUser = (e) => {
        e.preventDefault();
        productService.saveUser(user).then((res) => {
            setMsg("User Added Sucessfully");
            setUser({
                name: "",
                userName: "",
                email: "",
                about: ""
            })
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
                            <div className="card-header fs-3 text-center"> Add User</div>
                            {
                                msg && <p className='fs-4 text-center text-success'>{msg}</p>
                            }
                            <div className="card-body">
                                <form onSubmit={(e) => registerUser(e)}>
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
                                            value={user.about} />
                                    </div>
                                    <button className='btn btn-primary col-md-12'>Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser