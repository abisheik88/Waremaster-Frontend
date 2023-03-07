import React, { useState } from 'react'
import styles from "./auth.module.css"
import { TiUserAddOutline } from "react-icons/ti"
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'

const initialState = {
    name: "",
    email: "",
    password: "",
    password2: "",
}

const Register = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setformData] = useState(initialState)
    const { name, email, password, password2 } = formData

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
    };

    const register = (e) => {
        e.preventDefault()

        console.log(formData)
    };

    return (
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <div className='--flex-center'>
                        <TiUserAddOutline size={35} color="#999" />
                    </div>
                    <h2>Register</h2>

                    <form onSubmit={register}>
                        <input type="text" name="name" value={name} placeholder='Name' required onChange={handleInputChange} />
                        <input type="email" placeholder='Email' name="email" required value={email} onChange={handleInputChange} />
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            required
                            value={password} onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="password2"
                            placeholder="Confirm Password"
                            required
                            value={password2} onChange={handleInputChange}
                        />
                        <button type="submit" className='--btn --btn-primary --btn-block'>
                            Register
                        </button>
                    </form>

                    <span className={styles.register}>
                        <Link to="/">Home</Link>
                        <p>&nbsp; Already have an account? &nbsp;</p>
                        <Link to="/login">Login</Link>
                    </span>
                </div>
            </Card>
        </div>
    );
}

export default Register;