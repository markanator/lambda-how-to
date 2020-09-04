import React     from 'react';
import { axiosWithAuth }        from '../../Axios/axiosWithAuth';
import { useHistory,Link }      from 'react-router-dom'
import { Input,Button, Label }  from 'reactstrap';
import {useFormik}              from 'formik';
import * as Yup                 from 'yup';
import './SignUp.css';


  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required!"),
    last_name: Yup.string().required("Required!"),
    email: Yup.string()
      .email("Invalid Email Format!")
      .required("Required"),
    username: Yup.string().min(4,'Please Enter Longer Username').required('Please Enter a Username!'),
    password: Yup.string().min(4,"Password not Long Enough").required('Please Enter a Password!')
    
  });

  //  data from APP.JS
  export default function UserForm () {
    const initialValues = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: ''
    };

    const history = useHistory();

  const onSubmit = values => {
    // console.log(values);
    axiosWithAuth()
      .post(`/auth/register`, values)
      .then(res => {
          console.log("SIGN UP SUCCESSFUL!");
          window.localStorage.setItem("token", res.data.payload);
          history.push('/login')
      })
      .catch(err => console.log(err));
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
          <div className='signup-container'>
            <h1>Welcome to Lambda How-To App!</h1>
            <h3>Sign Up to get started!</h3>

            <form onSubmit={formik.handleSubmit}>
              <Label className='sign'>
                <Input
                type='text'
                name="first_name"
                placeholder="First Name"
                // onChange={changeHandler}
                // value={user.firstname}
                {...formik.getFieldProps('first_name')}
                />
                {formik.errors.first_name && formik.touched.first_name ? (
              <div className="error">{formik.errors.first_name}</div>) : null}
                </Label><br/>
              <Label className='sign'>
                  <Input 
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  // onChange={changeHandler}
                  // value={user.lastname}
                  {...formik.getFieldProps('last_name')}
                  />
                  {formik.errors.last_name && formik.touched.last_name ? (
              <div className="error">{formik.errors.last_name}</div>
            ) : null}
                </Label><br/>

              <Label className='sign'>
                <Input
                type="text"
                name="email"
                placeholder="Email"
                // onChange={changeHandler}
                // value={user.##}
                {...formik.getFieldProps('email')}
                />
                {formik.errors.email && formik.touched.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}  
                </Label><br/>

              <Label className='sign'>
                <Input
                type="text"
                name="username"
                placeholder="Username"
                // onChange={changeHandler}
                // value={user.##}
                {...formik.getFieldProps('username')}
                /> 
                {formik.errors.username && formik.touched.username ? (
              <div className="error">{formik.errors.username}</div>) : null}  
                </Label><br/>
              <Label className='sign'>
                <Input 
                type="password"
                name="password"
                placeholder="Password"
                // onChange={changeHandler}
                // value={user.##}
                {...formik.getFieldProps('password')}
                />
                {formik.errors.password && formik.touched.password ? (
              <div className="error">{formik.errors.password}</div>) : null} 
                </Label><br/>
              <Label className='sign'>  
                <Button 
                color="primary" 
                type="submit"
                >Sign Up</Button>  
                </Label>          
            </form>

            <div className='sign-up'>
                <p>Already a Member?</p><br/>
                <Button tag={Link} to='/Login'>Login</Button>
            </div>  
          </div>
      )
}
