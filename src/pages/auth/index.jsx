import React, {useState} from 'react';

const Index = () => {
    const [type, setType] = useState('Login');
return (
    <>
    <div className='login_wrapper'>
        <h2>{type ==='Login' ? 'Login' : 'Register'}</h2>
        { type === 'register' && <><label>User Name</label>
        <br />
        <input type='text' placeholder='enter user name' /><br />
        </>}
        
            <label htmlFor="">Email</label>
            <br />
            <input type="email" placeholder='enter email id'/>
            <br></br>
            <label htmlFor="">Password</label>
            <br />
            <input type="password" placeholder='enter password'/>
            <br />
            {type === 'Login' ? <div><button type='button'>Login</button><a href='#' onClick={()=> setType('register')}>create new account</a></div>: <div><button type='button'>Register</button><span>If you have an already account then <a href="#" onClick={()=> setType('Login')}>Login</a></span></div>}

    </div>
    </>
);

}

export default Index;