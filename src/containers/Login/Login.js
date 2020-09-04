import React       from "react";
import {Link, useHistory}       from 'react-router-dom'
import {axiosWithAuth}          from '../../Axios/axiosWithAuth';
import {Input, Button, Label}   from "reactstrap";
import {useFormik}              from 'formik';
import * as Yup                 from 'yup';
import './Login.css'

const validationSchema = Yup.object({
    username: Yup.string().required("Required!"),
    password: Yup.string().required("Required!")
})


function Login ({setUser,logChecker}) {

    // const [data,
    //     setData] = useState({
    //         username: "",
    //         password: ""
    //     });

        const initialValues = {
            username: '',
            password: ''
        };

    const history = useHistory();

    // const handleChange = event => {
    //     setData({
    //         ...data,
    //         [event.target.name]: event.target.value
    //     });
    // };

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     axiosWithAuth()
    //         .post("/auth/login", data)
    //         .then(response => {
    //             window.localStorage.setItem("token", response.data.payload);
    //             history.push(`/profile`);
    //         })
    //         .catch(error => console.log(error));
    // };

    const onSubmit = values => {
        axiosWithAuth()
            .post(`/auth/login`, values)
            .then(res => {
                setUser(res.data);
                logChecker(true);
                console.log('Login in Successful!');
                window.localStorage.setItem("token", res.data.payload);
                history.push(`/users/${res.data.userId}`)
            })
            .catch((err) =>{ 
                console.log(err);
                logChecker(false);
            })
    };
    
    const formik = useFormik({
        // initVals
        initialValues,
        // hand submitions
        onSubmit,
        // form validation
        validationSchema
    });

    return (
        <div className='login-container'>
                <h1>Welcome to Lambda How-To App!</h1>
                <h3>Sign In</h3>
                <form onSubmit={formik.handleSubmit}>
                    <Label className='sign'>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            // onChange={changeHandler}
                            // value={user.username}
                            {...formik.getFieldProps('username')}
                            />
                            {formik.errors.username && formik.touched.username ? (<div className="error">{formik.errors.username}</div>) : null}
                    </Label><br/>
                    <Label className='sign'>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            autoComplete=''
                            // onChange={changeHandler}
                            // value={user.password}
                            {...formik.getFieldProps('password')}
                            />
                            {formik.errors.password && formik.touched.password ? (<div className="error">{formik.errors.password}</div>) : null}
                    </Label>
                    <div>
                        <Button 
                        color="primary" 
                        type="submit"
                        >Login</Button>
                    </div>
                </form>
            <div className='sign-up'>
                <p>Not a member?</p><br/>
                <Button tag={Link} to='/sign-up'>SignUp</Button>
            </div>

        </div>

    );
}

export default Login;