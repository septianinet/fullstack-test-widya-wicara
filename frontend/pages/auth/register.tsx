import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Base from "../../Layout/Base";
import axios from 'axios';
import { useRouter } from "next/router";

const styles = {
  pageWrapper: 'w-full min-h-screen bg-grey-200',
  input: 'p-2 px-4 outline-none border rounded-[15px] focus:border-green-300 mb-4',
  boxWrapper: 'bg-white w-[400px] h-[540px] flex flex-col items-center rounded-[15px] shadow-md p-4',
  headerText: 'text-xl font-semibold mt-3 text-gray-500',
  label: 'text-gray-500 text-sm mb-1',
  inputWrapper: 'flex flex-col items-start',
  button: 'bg-green-300 text-white text-[16px] font-semibold p-2 rounded-[15px] mt-4 hover:bg-green-400 transition-all ease',
  link: 'text-sm text-green-400 mt-3 text-center cursor-pointer'
}

const Register:NextPage = () => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('0')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const handleRegister = () => {
    axios.post('http://localhost:3010/auth/signup', {
      name,
      gender,
      email,
      password
    }).then((data) => {
      router.push('/login')
    }).catch((err) => console.log(err))
  }
  return (
    <Base>
    <div className={styles.pageWrapper}>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className={styles.boxWrapper}>
          <h1 className={styles.headerText}>Sign Up</h1>
          <div className="flex flex-col mt-10">
          <div className={styles.inputWrapper}>
              <label className={styles.label}>Nama</label>
              <input type="text" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>Gender</label>
              <div className="flex items-center w-full mb-4">
                <div className="flex items-center mr-6">
                  <input type="radio" value="0" name="gender" className="mr-2" onChange={(e) => setGender(e.target.value)} checked={true}  /> <span>Male</span>
                </div>
                <div className="flex items-center mr-6">
                  <input type="radio" value="1" name="gender" className="mr-2" onChange={(e) => setGender(e.target.value)} /> <span>Female</span>
                </div>
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>Email</label>
              <input type="text" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>Password</label>
              <input type="text" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className={styles.button} onClick={handleRegister} >Sign Up</button>
            <Link href='/auth/login'>
              <span className={styles.link}>Already have account? Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </Base>
  )
}

export default Register