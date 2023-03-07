import React from 'react'
import styles from "./auth.module.css"
import { TiUserAddOutline } from "react-icons/ti"
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <div className='--flex-center'>
                        <TiUserAddOutline size={35} color="#999" />
                    </div>
                    <h2>Register</h2>

                    <form>
                        <input type="text" name="name" placeholder='Name' required />
                        <input type="email" placeholder='Email' name="email" required />
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="COnfirm Password"
                            required
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