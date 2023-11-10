import { useState, useEffect, useRef } from "react";
import {faCheck, faTimes, faInfocircle} from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api/axios"

const USER_REGEX = /^[A-Z][a-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = "/register"

const Register = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [Pwd, setPwd] = useState('') 
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState("")
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        useRef.current.focus()
    }, [])
    useEffect(() => {
        setValidName(USER_REGEX.test(user))
    }, [user])
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd))
    }, [pwd, matchPwd])
    useEffect(() => {
        setErrMsg("")
    }, [user, pwd, matchPwd])

  return (
    <p ref={errRef} className={errMsg ? "errmg" : "offscreen"}>
        <form>
            <label>

            </label>
        </form>
    </p>
  )
}

export default Register
