import React from "react";
import "./form.css";
import { useState, useEffect,useRef } from "react";

export const FormData = () => {

    const [form,setForm] = React.useState({
        title:"",
        ingredients:"",
        time_to_cook:"",
        image:"",
        instructions:"",
    });

    const [page,setPage] = useState(0);
    const [getform,getFormData] = useState([]);

    const handleSubmit = (e) => {
        console.log(form)
        e.preventDefault();
        fetch("http://localhost:8000/recipe",{
            method: "POST",
            body: JSON.stringify(form),
            headers:{
                'content-type': "application/json"
            }
        }).then(() => {
            getForm();
        })

    };

    useEffect(() => {
        getForm();
    },[page]);

    const handleChange = (e) => {
        // console.log(e.target.value);
        let {name,value} = e.target;
        // console.log(name,value);
        setForm({...form,[name]:value});
    };

    const getForm = () => {

        fetch(`http://localhost:8000/recipe`) 
            .then((d) => d.json())
            .then((res) => {
             
            })
    };


    return (
        <>
            <h3 className="recipeHead">Add Recipe Form</h3>

            <form className="formData" onSubmit={handleSubmit}>
                <label>Title :
                <input onChange={handleChange} type="text" name="title" id="" />
                </label>                
                <br /> 
                <br /> 
                <label>Ingredients :
                <input onChange={handleChange} type="text" name="ingredients" id="" />
                </label>              
                <br />
                <br /> 
                <label>TimeToCook :
                <input onChange={handleChange} type="text" name="timetocook" id="" />
                </label>               
                <br />
                <br /> 
                <label>Image :
                <input onChange={handleChange} type="file" name="Image" id="" />
                </label>
                <br /> 
                <br />
                <label>Instructions :
                <input onChange={handleChange} type="text" name="instructions" id="" />
                </label> 
                <br />
                <br />
                <input type="submit" name="" id="" />
            </form>
        </>
    );
};