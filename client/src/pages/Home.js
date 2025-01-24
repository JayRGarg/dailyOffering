import React, { useContext } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { MessageContext } from '../Helper/Context';

function Home() {

    const {messageData, setMessageData} = useContext(MessageContext);

    const navigate = useNavigate();

    const [welcome, setWelcome] = useState("");

    const initialValues = {
        name: "",
        mood: ""
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3).max(26).required(),
        mood: Yup.string().required()
    })
    const onSubmit = async (data) => {
        //console.log(data);
        await axios.post('http://localhost:8080/messages', data).then((response) => {
            //console.log(response.data);
            setMessageData(response.data);
        });
        navigate('/message');
    }

    const options = [
        {
            key: 'Select a Mood',
            value: ''
        },
        {
            key: 'Motivated',
            value: 'motivated'
        },
        {
            key: 'Happy',
            value: 'happy'
        }
    ]

    useEffect(() => {
        axios.get('http://localhost:8080/messages').then((response) => {
        setWelcome(response.data);
        });
    }, []);

    function Greeting() {
        return (
            <div>
                <div className="welcome">
                    <h1>{welcome}</h1>
                </div>
                <div className="who">
                    <h1>Who are you?</h1>            
                </div>
                <div className="how">
                    <h1>How are you today?</h1>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Greeting/>
            <div className="submitInfo">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <label>Name: </label>
                        <ErrorMessage name="name" component="span" />
                        <Field
                            id="name"
                            name="name"
                            placeholder="Name"
                        />
                        <br/>
                        <label>Mood: </label>
                        <ErrorMessage name="mood" component="span" />
                        <Field
                            as="select"
                            id="mood"
                            name="mood"
                            placeholder="Mood"
                        >
                            {
                                options.map(option => {
                                    return (
                                        <option key={option.value} value={option.value}>
                                            {option.key}
                                        </option>
                                    )
                                })
                            }
                        </Field>
                        <br/>
                        <button type="submit"> Generate Message </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Home;