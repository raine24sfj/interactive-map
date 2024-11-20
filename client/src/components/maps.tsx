import anemos from "../assets/Eureka_Anemos.png";
import pagos from "../assets/Eureka_Pagos.png";
import pyros from "../assets/Eureka_Pyros.png";
import hydatos from "../assets/Eureka_Hydatos.png";

export function Maps() {
    return (
        <>
            <div className="grid grid-cols-subgrid gap-4 col-span-2 size-96">
                <img src={anemos} alt="Map of Eureka Anemos" />
                <img src={pagos} alt="Map of Eureka Pagos" />
                <img src={pyros} alt="Map of Eureka Pyros" />
                <img src={hydatos} alt="Map of Eureka Hydatos" />
            </div>
        </>
    );
}