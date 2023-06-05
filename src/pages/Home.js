import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get('https://foodprophet-backend-production.up.railway.app//users');
        setUsers(result.data);
    }
    return (
            <div className='container'>
                <div className='px-2 py-2 shadow'>
                    <div className='card px-2 py-2'>
                        <p className='my-2 mx-2 float-right'>
                            <Link className="btn btn-success pull-left" to='/addUser'><i className="fa fa-plus "></i>Add user</Link>
                        </p>
                        <table className='table table-hover border' >
                            <thead >
                                <tr className='table-primary'>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">User</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => (
                                        <tr>
                                            <th scope="row" key={index}>
                                                {index + 1}
                                            </th>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <th>
                                                <button className='btn  mx-2 fa fa-search text-secondary'></button>

                                                <Link className='btn fa fa-edit text-warning' to={`/edituser/${user.id}`}></Link>

                                                <button className='btn  mx-2 fa fa-trash text-danger'></button>
                                            </th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}
