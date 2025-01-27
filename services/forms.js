import validator from 'validator'
import api from './api'
import { SaveData } from './storage'

async function SignUpForm({ firstname, lastname, email, password, Toast }) {
    try {
        if (validator.isEmpty(firstname) || validator.isEmpty(lastname) || validator.isEmpty(email) || validator.isEmpty(password)) {
            throw new Error("กรุณากรอกแบบฟอร์มให้ครบถ้วน")
        }
        if (!validator.isEmail(email)) {
            throw new Error("อีเมลล์ไม่ถูกต้อง")
        }
        if (!validator.isStrongPassword(password, {
            minLength: 10,          // ความยาวขั้นต่ำ 10 ตัว
            minLowercase: 2,        // ต้องมีตัวอักษรพิมพ์เล็ก 2 ตัว
            minUppercase: 1,         // ตัวพิมพ์ใหญ่ 1 ตัว
            minNumbers: 4,           // ตัวเลข 3 ตัว
        })) {
            throw new Error("ความยาว 10 ตัวอักษรตัวพิมพ์เล็ก 2 ตัวพิมพ์ใหญ่ 1 ตัวเลข 4")
        }
        // Call Api for signup
        const { data } = await api.post("/signup", {
            firstname,
            lastname,
            email,
            password
        })
        if (data.query) {
            return Toast.show({
                type: "success",
                text1: `${data.msg}`
            })
        }
        return Toast.show({
            type: "error",
            text1: `${data.msg}`
        })
    } catch (e) {
        Toast.show({
            type: "error",
            text1: `${e.message}`,
            text2: `${e.message}`
        })
    }
}

async function SignInForm({ email, password, Toast , router , worldState }) {
    try {
        if (validator.isEmpty(email) || validator.isEmpty(password)) {
            throw new Error("กรุณากรอกแบบฟอร์มให้ครบถ้วน")
        }
        if (!validator.isEmail(email)) {
            throw new Error("อีเมลล์ไม่ถูกต้อง")
        }
        const { data } = await api.post("/signin", {
            email,
            password
        })
        if (data.query) {
            await SaveData("accessToken",data.accessToken)
            await SaveData("refreshToken",data.refreshToken)
            const { firstname , lastname , email , profile } = data
            
            worldState.setState({
                data: { firstname , lastname , email , profile },
                isLogin: true
            })
            router.push("loading")
            return Toast.show({
                type: "success",
                text1: `เข้าสู่ระบบสำเสร็จ`
            })
        }
        return Toast.show({
            type: "error",
            text1: `${data.msg}`
        })
    } catch (e) {
        Toast.show({
            type: "error",
            text1: `${e.message}`
        })
    }
}

export {
    SignInForm,
    SignUpForm
}