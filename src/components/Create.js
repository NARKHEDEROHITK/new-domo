import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {createUser} from '../app/features/userDetailSlice'
import { useNavigate } from 'react-router-dom'


const Create = () => {

    const [state, setState] = useState({name:"",email:"",age:0,gender:""})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {message , loading , error} = useSelector(state=>state.app)

    const  handelchangeUser = (e) =>{
        setState(prev=> { return { ...prev , [e.target.name]:e.target.value}})
    }

    const onSubmitForm = () =>{
        dispatch(createUser(state))
        setState({name:"",email:"",age:0,gender:""})
      
    }

  return (
    <div>
        {console.log(message , loading , error)}
       <h2 className="my-2 text-center">Fill the data</h2>
      <form className="w-50 mx-auto my-5" >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
           onChange={handelchangeUser}
           value={state.name}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handelchangeUser}
            value={state.email}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            onChange={handelchangeUser}
            value={state.age}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={handelchangeUser}
            checked={state.gender == "Male"}

            required
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            checked={state.gender == "Female"}
            type="radio"
            onChange={handelchangeUser}
          />
          <label className="form-check-label">Female</label>
        </div>

        <button type="button" onClick={onSubmitForm} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Create
