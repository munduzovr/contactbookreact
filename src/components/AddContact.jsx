import React, { useState } from 'react';
import { useContext } from 'react';
import Context from '../Context/Context';

const AddContact = () => {

    //контекст
    const {addContacts} = useContext(Context)

    //инпуты
    const [name, setName] = useState("");
    const [image,setImage] = useState("");
    const [decription,setDescription] = useState("")

    //обработчик 
    function handleClick(){

        if(!name || !image || !decription){
            alert('Пустые поля!')
        }
        let newContacts = {
            name: name,
            image: image,
            decription: decription,
        }
        
        setName("");
        setImage("")
        setDescription("")
        addContacts(newContacts)
        //console.log(newContacts);
    }


    return (
        <div>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Название'/>
            <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} placeholder='Url'/>
            <input type="text" value={decription} onChange={(e)=>{setDescription(e.target.value)}} placeholder='Описание' />
            <button onClick={handleClick}>Добавить</button>
        </div>
    );
};

export default AddContact;