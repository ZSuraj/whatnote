import React from 'react'
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { db, auth } from '../firebase'
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import '../styles/Login.scss'
import { useNavigate } from 'react-router-dom';
import door from '../assets/undraw_login_re_4vu2 1.png'
import vec1 from '../assets/Vector (1).png'
import vec2 from '../assets/Vector (2).png'

const Login = () => {

  const navigate = useNavigate()

  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
    
      // Once the user is authenticated, you can write their information to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      });
      navigate('/cities')
    } catch (error) {
      console.log(error.message);
    }
  }

  async function signInWithFacebook() {
    try {
      const provider = new FacebookAuthProvider()
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
  
    // Once the user is authenticated, you can write their information to Firestore
    await setDoc(doc(db, 'users', user.uid), {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    });
    navigate('/cities')
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createUserWithUsernameOrPhoneAndPassword(e, usernameOrPhone, password) {
    e.preventDefault()
    try {
      // Check if the username or phone number is already taken
      const collectionRef = collection(db, "users")
      const usersRef = doc(db, 'users' , usernameOrPhone);
      const userDoc = await getDoc(usersRef)
      if (userDoc.data()) {
        throw new Error('Username or phone number is already taken');
      }
    
      // Create a new user document with the username or phone number and password hash
      const userDocData = {
        userNameorPhone: usernameOrPhone,
        password: password,
      };

      await addDoc(collectionRef, userDocData)
      navigate('/cities')
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <div className='login-page-container flex justify-between items-center w-full h-[500px]'>
      <div className='first-container w-1/2'>
        <img src={door} alt='door' className='pl-6'/>
      </div>
      <div className='second-container w-1/2 flex justify-center'>
        <div className='w-[331px]'>
          <p className='text-2xl font-bold'>Login here!</p>
          <form className='flex flex-col items-center' onSubmit={(e) => createUserWithUsernameOrPhoneAndPassword(e, "sSurajj", "123")}>
            <input type='text' className='login-input' placeholder='Username or Phone'/>
            <input type='password' className='login-input' placeholder='Password'/>
            <p className='text-right w-full font-xs text-[#635C5C] font-normal cursor-pointer'>Forgot password?</p>
            <button type='submit' className='login-btn'>Login</button>
            <p className='mt-6'>Or sign up with</p>
            <div className='other-login-buttons-container flex'>
              <div className='other-login-image-container' onClick={signInWithGoogle}>
                <img src='https://img.icons8.com/?size=512&id=17949&format=png' alt='google icon' />
              </div>
              <div className='other-login-image-container' onClick={signInWithFacebook}>
                <img src='https://img.icons8.com/?size=512&id=uLWV5A9vXIPu&format=png' alt="fb icon" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className='wave-container'>
      <img src={vec1} alt="wave" className='wave'/>
      <img src={vec2} alt="wave" className='wave--top wave'/>
    </div>
    </div>
    
  )
}

export default Login