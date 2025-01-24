import React, { useContext } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { MessageContext } from '../Helper/Context';

function Message() {

    const {messageData, setMessageData} = useContext(MessageContext);
    //console.log(messageData);

    const navigate = useNavigate();
    
    if (Object.keys(messageData).length == 0) {
        return <Navigate to="/" />;
    }
    
    return (
        <div>
            <h1 id="philQuote">{messageData.name+', '+messageData.philQuote.toLowerCase()}</h1>
            <h1>{'Go '+messageData.action}</h1>
            <h1>{'Remember, '+messageData.affirmation}</h1>
            <button onClick={() => navigate("/")}>Reset</button>
        </div>
    );
}

export default Message;