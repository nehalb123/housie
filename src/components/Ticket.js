import React, { useState } from 'react';
import {t} from './properties';

const Ticket = () => {
    const[ticketNum, setTicketNum] = useState(t);

    return (
        <div className="ticket">
                {ticketNum.map((num, index) => <div className="eachNum">{num}</div>) }
        </div>
        
    )
}

export default Ticket;