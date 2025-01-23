import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function Home() {

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
    const onSubmit = (data) => {
        console.log(data);
        axios.post('http://localhost:8080/messages', data).then((response) => {
            console.log(response.data);
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

    return (
        <div>
            <div className="welcome">
                {welcome}
            </div>
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
                        <button type="submit"> Generate Message </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Home;