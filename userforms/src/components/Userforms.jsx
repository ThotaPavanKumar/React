import React, { useState } from "react"; 

export const Form = () => {

    const initState = {
        name:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        isMarried:"",
        profile:""           
      }

    const [data,setData] = useState(initState);

    const handleChange = (e) => {
        const {name,value} = e.target;
        console.log(name,value);
        setData({...data,[name]:value})
    }

    const { name, age, address, department, salary, isMarried, profile  } = data;
    // const submitData = () => {
    //         console.log("happy");
    // }


  return (
    <>
            <input onChange={handleChange} value={name} type="text" name="name"  placeholder="Enter your name" />
           
            <input onChange={handleChange} value={age} type="number" name="age" placeholder="Enter your age" />
            <input onChange={handleChange} value={address}  type="text" name="address" placeholder="Enter your address"/>
            <select onChange={handleChange} value={department}  name="department" >
                <option value="Information Technology">Information Technology</option>
                <option value="Web Developer">Web Developer</option>
               
            </select>
            <input onChange={handleChange} value={salary}  type="number" name="salary" placeholder="Enter your Salary" />
            <label>Marital Status
            <input onChange={handleChange} value={isMarried}  name="isMarried" type="Checkbox"  />
            </label>
            <input type="file" onChange={handleChange} value={profile}  name="profile" />
            <input onChange={handleChange} type="submit" />            
            
    </>
  );
}

