import api from '../api/axiosPeldany';
import { useState } from 'react';


export default function LoginForm() {
    const [formdata, setFormData] = useState({
        nev: '',
        email: '',
        telfon: ''
    });
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        if(e.nev == "" || e.email == "" || e.telfon == ""){
            setError('Kérlek töltsd ki a kötelező mezőket!');
            setMessage(null);
            return;
        }
    };

    return (
        <div className="login-form">
            <h2>Bejelentkezés</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nev">Név:</label>
                    <input type="text" id="nev" name="nev" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={handleChange}id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Telefonszám:</label>
                    <input type="tel" id="phone" name="phone" onChange={handleChange} />
                </div>
                <button>Vissza</button>
                <button >Tovább</button>
            </form>
            
        </div>
    );
}