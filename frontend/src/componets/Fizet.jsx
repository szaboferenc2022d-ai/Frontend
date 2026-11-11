import { useState } from 'react';

export default function Fizet() {
    const [formdata, setFormData] = useState({
        iranytoszam: '',
        varos: '',
        utca: '',
        hazszam: '',
    });
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(e.iranytoszam == "" || e.varos == "" || e.utca == "" || e.hazszam == ""){
            setError('Kérlek töltsd ki a kötelező mezőket!');
            setMessage(null);
            return;
        }
    };

    return (
        <div className="fizet-form">
            <h2>Fizetés</h2>
              <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="iranytoszam">Irányítószám:</label>
                    <input type="text" id="iranytoszam" name="iranytoszam" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="varos">Város:</label>
                    <input type="text" id="varos" name="varos" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="utca">Utca:</label>
                    <input type="text" id="utca" name="utca" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="hazszam">Házszám:</label>
                    <input type="text" id="hazszam" name="hazszam" onChange={handleChange} required />
                </div>
                <button>Vissza</button>
                <button >Tovább</button>
            </form>
        </div>
    );
}