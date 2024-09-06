
import { useState } from 'react'
import './App.css'

function UserTable() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("Datas"))||{
    name:"",
    age:"",
    gender:"",
    isMaried:false,
    country:"",
    bio:''
  })

  const handleChange = (e) => {
      const name = e.target.name
      // console.log(name)
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
     setUser({...user,[name]:value})
    //  items()
    const items ={...user,[name]:value}
    console.log(items)
    localStorage.setItem("Datas", JSON.stringify(items))
      // console.log(e)
    }

    async function handleApi(){
      try{
        const api =await fetch(`/bmi?age=${20}&weight=${80}&height=${170}` )
        console.log(api)
        const res =await fetch(api.url)
      const result = res.json()
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
handleApi()
  return (
    <>
    <div className="container">

    
     <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{user.name.toUpperCase()}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{user.age}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>{user.gender}</td>
        </tr>
        <tr>
          <td>Martial Status</td>
          <td>{user.isMaried  ? "Married" : "Not Married"}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{user.country}</td>
        </tr>
        <tr>
          <td>Bio</td>
          <td>{user.bio}</td>
        </tr>
      </tbody>
     </table>

     <form action="">
      <input 
      type="text" 
      name='name'
      value={user.name}
      onChange={handleChange}
      placeholder='Enter Your Name'
      />
      <input
       type="number"
       value={user.age}
       name='age'
       onChange={handleChange}
       placeholder='Enter Your Age'
       />
       <div className='gender'>
        
        <label htmlFor="male">
       <input
        type="radio" 
        id='male'
        name='gender'
        value="Male"
        onChange={handleChange}
        />Male</label>
        
       
        <label htmlFor="female">
        <input
        type="radio" 
        id='female'
        name='gender'
        value="Female"
        onChange={handleChange}
        />Female</label>
       </div>
       
       <label htmlFor="isMaried">
       <input
        type="checkbox" 
        id='isMaried'
        name='isMaried'
        checked={user.isMaried}
        onChange={handleChange}
        />
        Married</label>

        <select
         name="country"
          id="country"
          onChange={handleChange}
          >
          <option value="choice">Select your country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Africa">Africa</option>
          <option value="Germany">Germany</option>
          <option value="Europe">Europe</option>
        </select>
        <textarea 
        name="bio" 
        id="bio"
        value={user.bio}
        onChange={handleChange}
        placeholder='  Give some feedbacks'
        />
     </form>
     </div>
    </>
  )
}

export default UserTable
