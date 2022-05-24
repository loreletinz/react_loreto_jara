import React, { useEffect, useState } from "react";
import "./footer.css";

export default function Footer() {
    const [clima, setClima] = useState('');

    useEffect(() => {
        return () => {
            fetch("http://api.weatherbit.io/v2.0/current?lat=-34.6083&lon=-58.371&key=9ca9778550d14e4db651cb96e3ada2f3&include=minutely", {
                method: "GET",
                /* headers: {
                    API_KEY: "9ca9778550d14e4db651cb96e3ada2f3",
                    lat: "-34.6083",
                    lon: "-58.371"
                }, */
            }).then(async (response) => {
            const res = await response.json()
            setClima(res.data[0].temp)
                
            });
        };
    }, []);

    return (
        <main>
            <footer>
                <div className="footer"> Hecho con ♥ y verduritas. Hay {clima}°, {clima <= 19 ? 'está fresquito, cuchareá.' : 'no está fresco, pero se cucharea igual.'} </div>
            </footer>
        </main>
    );
}
