import { useState } from "react";


export default function ContactForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert(inputs);  
    }
    return (
        <form className="Form" onSubmit="mailto:ericherduin@icloud.com">
            <label className="Form__label"><p>Nom :</p>
                <input className="Form__value" type={"text"} name={"username"} value={inputs.username || ""} onChange={handleChange}/>
            </label>
            <label className="Form__label"><p>prénom :</p>
                <input className="Form__value" type={"text"} name={"surname"} value={inputs.surname || ""} onChange={handleChange}/>
            </label>
            <label className="Form__label"><p>Adresse :</p>
                <input className="Form__value" type={"text"} name={"adress"} value={inputs.adress || ""} onChange={handleChange}/>
            </label>
            <label className="Form__label"><p>Code Postal :</p>
                <input className="Form__value" type={"number"} name={"postalCode"} value={inputs.postalCode || ""} onChange={handleChange}/>
            </label>
            <label className="Form__label"><p>Ville :</p>
                <input className="Form__value" type={"text"} name={"city"} value={inputs.city || ""} onChange={handleChange}/>
            </label>
            <label className="Form__label"><p>Téléphone :</p>
                <input className="Form__value" type={"number"} name={"phone"} value={inputs.phone || ""} onChange={handleChange}/>
            </label>
            <label className="Form__label"><p>Description du projet :</p>
                <textarea className="Form__value" type={"text"} name={"description"} value={inputs.description || ""} onChange={handleChange}/>
            </label>
            <input className="Form__submit" type="submit" />
        </form>
    )
}