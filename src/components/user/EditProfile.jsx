import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../actions/auth";

export const EditProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {userId} = useParams()
  const {user} = useSelector(state => state.auth)
  const {isLoading} = useSelector(state => state.loader)
  // console.log(user.firstName)
  
  
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        userName:'',
        designation:'',
        id:userId
    })
    useEffect(() => {
      setFormData({
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        userName:user.userName,
        designation:user.designation,
        id:userId
    })
     },[])
    console.log(formData)
    const handleInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData((prev)=>{
            return{...prev,[name]: value}
          })
        // console.log(name + ' : ' + value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(updateUser(formData))
        console.log(formData)
    }
  return (
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px]">
        <form  onSubmit={handleSubmit}>
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="firstName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  First Name
                </label>
                <input
                onChange={handleInput}
                value={formData.firstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="lastName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Last Name
                </label>
                <input
                onChange={handleInput}
                value={formData.lastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleInput}
              name="email"
              id="email"
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-5">
            <label
              for="username"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Username
            </label>
            <input
              type="text"
              value={formData.userName}
              onChange={handleInput}
              name="userName"
              id="username"
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="desig"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Designation
            </label>
            <input
              type="text"
              value={formData.designation}
              onChange={handleInput}
              name="designation"
              id="desig"
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="">
            <button type="submit" class="hover:shadow-form grid place-items-center h-[45px] w-full rounded-md bg-[#6A64F1] py-1 px-8 text-base font-semibold text-white outline-none">
             {isLoading ? <div className="w-[35px] h-[35px] animate-spin rounded-full border-[5px] border-t-slate-300 border-slate-600"></div> : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
