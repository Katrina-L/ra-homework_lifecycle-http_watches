import { useState } from "react";
import { Clock } from "./Clock";
import { gettingUTCTimeMS } from "../utilities/utilities";

export const ClockList = () => {
    const [clockList, setClockList] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        
        const localDate = new Date();
        const dateMS = gettingUTCTimeMS(localDate) + Number(e.currentTarget.time.value) * 60 * 60 * 1000;

        const newClock = {
            id: localDate.getTime(),
            date: dateMS,
            name: e.currentTarget.name.value,
            timeZone: e.currentTarget.time.value
        }

        setClockList( prevState => {
            e.target.reset();
            if ( !prevState.find( elem => elem.name === newClock.name ) ) {
                return prevState.concat(newClock);
            } else {
                return prevState;
            }
        } )
    }

    const handleRemove = (id) => {
        setClockList(prevClock => {
            return prevClock.filter( elem => elem.id !== id )
        })
    }

    return (
        <>
            <form className="watches-form"
                onSubmit={handleSubmit}>
                <label className="watches-name-block">
                    Название
                    <input className="watches-name"
                            name="name"
                            required />
                </label>
                <label className="watches-time-block">
                    Временная зона
                    <input className="watches-time"
                            name="time"
                            required />
                </label>
                <button className="btn-add-watches"
                        type="submit">Добавить</button>
            </form>
            <div className="watchesList">
                {clockList.map( elem =>
                    <Clock key={elem.id} {...elem} handleRemove={handleRemove} />
                )}
            </div>
        </>
    )
}