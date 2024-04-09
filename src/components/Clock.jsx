import { useEffect, useState } from "react"
import { getDateFormate } from "../utilities/utilities";

// eslint-disable-next-line react/prop-types
export const Clock = ( {id, date, name, handleRemove} ) => {
    const [clock, setClock] = useState(date);

    useEffect( () => {
        const interval = setInterval( () => {
            setClock( prevClock => prevClock + 1000)
        }, 1000 );
        return () => clearInterval(interval);
    }, [] );

    return (
        <div className="watches-item">
            <div className="watches-item-name">{name}</div>
            <div className="watches-item-body">{getDateFormate(clock)}</div>
            <div className="btn-remove-watches"
                 onClick={() => handleRemove(id)}>x
            </div>
        </div>
    )
}