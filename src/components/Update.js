import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetAllUsers } from '../app/features/userDetailSlice'

const Update = () => {

    const {users} = useSelector(state=>state.app)
    const {id} = useParams()
    const [state, setState] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllUsers())
    }, [])
    
    useEffect(() => {
        const Singledata = users.filter(ele=>ele.id == id)[0]
       setState(Singledata)
    }, [users])

    const updateState = (e) =>{
        setState({...state , [e.target.name]:e.target.value})
    }

    const onUpdateSubmit =  () =>{
        console.log(state)
    }



    return (
        <div>
            {console.log(state , users)}
            <h2 className="my-2">Edit the data</h2>
            <form className="w-50 mx-auto my-5" >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={state?.name}
                        onChange={updateState}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={state?.email}
                        onChange={updateState}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="text"
                        name="age"
                        className="form-control"
                        value={state?.age}
                        onChange={updateState}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-check-input"
                        name="gender"
                        value="Male"
                        type="radio"
                       
                        checked={state?.gender == "Male"}
                        onChange={updateState}
                    />
                    <label className="form-check-label">Male</label>
                </div>
                <div className="mb-3">
                    <input
                        className="form-check-input"
                        name="gender"
                        value="Female"
                        type="radio"
                        checked={state?.gender == "Female"}
                        onChange={updateState}
                    />
                    <label className="form-check-label">Female</label>
                </div>

                <button type="submit" className="btn btn-primary" onClick={onUpdateSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Update
