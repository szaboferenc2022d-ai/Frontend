import { useState } from 'react';

export default function Fizet() {

    return (
    <div className="login-form">
            <h2>Szállítási Cím</h2>
        <div>
            <button>Bankártya</button>
            <button>Utánvét</button>
            <button>PayPal</button>
        </div>
        <div>
            <h3>Öszeszegzes:</h3>
            <p>Összeg: 10000 Ft</p>
            <p>Szállítási költség: 1000 Ft</p>
            <p>Végösszeg: 11000 Ft</p>
        </div>            
        <div>
            <button>Vissza</button>
            <button >Megrendelés ElKüldése</button>
        </div>
    </div>
    )

}