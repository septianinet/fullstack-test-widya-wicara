import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Base from "../../Layout/Base";
import { signIn } from 'next-auth/react';

const styles = {
  pageWrapper: 'w-full min-h-screen bg-grey-200',
  input: 'p-2 px-4 outline-none border rounded-[15px] focus:border-green-300 mb-4',
  box: 'bg-white w-[400px] h-[400px] flex flex-col items-center rounded-[15px] shadow-md p-4',
  headerText: 'text-xl font-semibold mt-3 text-gray-500',
  label: 'text-gray-500 text-sm mb-1',
  inputWrapper: 'flex flex-col items-start',
  button: 'bg-green-300 text-white text-[16px] font-semibold p-2 rounded-[15px] mt-4 hover:bg-green-400 transition-all ease',
  link: 'text-sm text-green-400 mt-3 text-center cursor-pointer'
}

const Login:NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (router.query.error) {
      setLoginError(router.query.error as string)
      setEmail(router.query.email as string)
    }
  }, [router])

  const handleLogin = () => {
    signIn('credentials', {
      email,
      password,
      callbackUrl: `${window.location.origin}/`,
    })
  }
  return (
    <Base>
      <div className={styles.pageWrapper}>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className={styles.box}>
          <h1 className={styles.headerText}>Sign In</h1>
          <div className="flex flex-col mt-10">
            <div className={styles.inputWrapper}>
              <label className={styles.label}>Email</label>
              <input type="text" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>Password</label>
              <input type="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className={styles.button} onClick={handleLogin}>Sign In</button>
            <Link href='/auth/register'>
              <span className={styles.link}>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </Base>
  )
}

export default Login