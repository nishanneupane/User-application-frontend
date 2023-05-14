import React, { useEffect, useState } from 'react'
import productService from "../service/productService"
import { Link } from 'react-router-dom';

const Home = () => {
    const [userList, setUserList] = useState([]);
    const [msg, setMsg] = useState("");


    useEffect(() => {
        init();
    }, []);

    const init = () => {
        productService.getAllProduct().then((res) => {
            setUserList(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const deleteProduct = (userId) => {
        productService.deleteProduct(userId).then((res) => {
            setMsg("User Deleted Sucessfully");
            init();
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow rounded">
                            <div className="card-header fs-3 text-center">Edit User</div>
                            {
                                msg && <p className='fs-4 text-center text-success'>{msg}</p>
                            }
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">name</th>
                                            <th scope="col">userName</th>
                                            <th scope="col">email</th>
                                            <th scope="col">about</th>
                                            <th scope="col">action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            userList.map((user, num) => (
                                                <tr>
                                                    <td>{num + 1}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.userName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.about}</td>
                                                    <td>
                                                        <Link className="btn btn-sm btn-primary ms-1" to={"/editUser/" + user.id}>Edit</Link>
                                                        <button className="btn btn-sm btn-danger ms-1" onClick={() => deleteProduct(user.id)}>Delete</button>

                                                    </td>
                                                </tr>

                                                
                                            ))
                                            
                                        }

                                    </tbody>
                                </table>

                                
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    )
}

export default Home