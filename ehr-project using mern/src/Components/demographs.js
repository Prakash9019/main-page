import React, { useContext, useState } from 'react'
import NoteContext from "../NoteContext"

const Demographs = () => {
 //   const context = useContext(NoteContext);
//    const {addNote} = context;
    const [note, setNote] = useState({name: "", age: "", Uid: "",gender: "",income: ""});

    const handleClick = (e)=>{
        e.preventDefault();
        
   //     addNote(note.name, note.age, note.Uid,note.gender,note.income);
        setNote({name: note.name, age:note.age, Uid: note.Uid,gender:note.gender,income:note.income});
        console.log(note);
        console.log(note._id);
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    } 

  return (

    <nav>
   
        <div className="demo-display">
            <form className="myform">
            <label htmlFor="name">Name:</label><input className="form-input" placeholder="Your name" type="text" name="name" value={note.user} onChange={onChange} /><br/>
            <label htmlFor="age">Age:</label><input  className="form-input"  type="text" placeholder="Enter your age" name='age' value={note.age} onChange={onChange}/>
            <br/>
            <label >Aadhaar Number:</label><input className="form-input" type="text" placeholder="Enter your Adhaar Number" value={note.Uid} onChange={onChange} />
            <br/>
            <label htmlFor="email">E-mail:</label><input className="form-input" type="text" name="email" placeholder="Enter your valid E-mail id" value={note.email} onChange={onChange} />
            <br/>
            <label htmlFor="gnd"> Gender:</label><input className="form-input" placeholder="Enter your Gender" type="text" id="gender" name="gnd" list="gender-option" value={note.gender} onChange={onChange} />
            <datalist className="form-datalist" id="gender-option">
                <option value="male"/>
                <option value="female"/>
            </datalist>
            <br/>
            <label htmlFor="inc">Income:</label><input className="form-input" placeholder="Income" type="text" name="inc" list="income-options" value={note.income} onChange={onChange}/>
            <datalist id="income-options" className="form-datalist">
                <option value="Not working"/>
                <option value="below 2 lacks"/>
                <option value="2-7 lakhs"/>
                <option value="7-10 lakhs"/>
                <option value="Above 10 lakhs"/>
            </datalist>
            <br/>
            <label htmlFor="edc">Education:</label><input className="form-input" placeholder="Education details" type="text" name="edc" list="Education-options" value={note.edu} onChange={onChange} />
            <datalist id="Education-options" className="form-datalist">
                <option value="10th"/>
                <option value="Intermediate"/>
                <option value="Degree"/>
            </datalist><br/>
            <label htmlFor="emp">Employement:</label><input className="form-input" placeholder="Employement details" type="text" name="emp" list="Employement-options" value={note.emp} onChange={onChange} />
             <datalist id="Employement-options" className="form-datalist">
                <option value="public"/>
                <option value="Private sector"/>
                <option value="Unemployed"/>
            </datalist>
            <br/>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Update</button>
        </form>
        </div>
    </nav>

  );
}

export default Demographs;
