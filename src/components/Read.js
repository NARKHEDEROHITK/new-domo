import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetAllUsers , deleteUser } from '../app/features/userDetailSlice'

const Read = () => {

    const { users, loading , error , message , searchTerm} = useSelector((state) => state.app)
   
    const dispach = useDispatch()


    useEffect(() => {
        dispach(GetAllUsers())
    }, [])

    const deletefu = async (id)=>{
        await dispach(deleteUser(id))
        await dispach(GetAllUsers())
    }
    return (
        <div className='text-center'>
            <h2>All data</h2>
            {console.log(error , loading , users , message , searchTerm)}
            {
                loading && <h1> Page is Loading</h1>
               
            }
             {
                !loading && error &&  <h1> Something Went Wtong</h1>
            }
            { !loading && !error && users.filter(ele=>ele.name.includes(searchTerm)||ele.email.includes(searchTerm))?.map(element => 
                <div lassName="card w-50 mx-auto my-2">
                    <div className="card-body">
                        <h5 className="card-title">{element.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{element.email}</h6>
                        <p className="card-text">{element.gender}</p>
                        <Link className="card-link">
                            View
                        </Link>
                        <Link className="card-link" to={`/Update/${element.id}`}>
                            Edit
                        </Link>
                        <button className="card-link" type='button' onClick={()=>deletefu(element.id)} >
                            Delete
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Read
