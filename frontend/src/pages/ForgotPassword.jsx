import React, { useEffect, useState } from 'react';
import { Input } from '../components/input';
import customer from '../data/customer'
const ForgotPassword = () => {
    const [emailForgotPassword, setEmailForgotPassword] = useState('');
    const [dataCustomer, setDataCustomer] = useState([]);
    const handleOnChangeEmail = (e) => {
        setEmailForgotPassword(e.target.value)
    }
    const handleSendMail = async () => {
        const isEmail = dataCustomer.filter((cus) => cus.email === emailForgotPassword)[0]
        if (isEmail?.email) {
            await fetchCsrfToken(isEmail?.email)
        } else {
            console.log('Không tồn tại');
        }
    }
    useEffect(() => {
        setDataCustomer(customer)
    }, []);
    async function fetchCsrfToken(email) {
        try {
            const response = await fetch('http://127.0.0.1:8000/csrf-token');
            const data = await response.json();
            const csrfToken = data.csrf_token;
            const randomPassword = generateRandomPassword(12);
            const dataToSend = {
                email: email,
                password: randomPassword,
                body: 'Đây là mật khẩu mới của bạn'
            };

            const responseEmail = await fetch('http://127.0.0.1:8000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify(dataToSend),
            });

            if (responseEmail.ok) {
                console.log('Email đã được gửi thành công.');
            } else {
                console.error('Có lỗi xảy ra khi gửi email.');
            }
        } catch (error) {
            console.error('Lỗi khi lấy CSRF token hoặc gửi email:', error);
        }
    }
    function generateRandomPassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
        let password = "";

        for (let i = 0; i < length; ++i) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    return (
        <section className="container">
            <h1 className="text-4xl text-center mt-20 my-10 font-bold ">
                Quên mật khẩu
            </h1>
            <div className>
                <div className=" p-10 w-full flex flex-col gap-y-10">
                    <Input onChange={handleOnChangeEmail} label='Nhập email'
                        name='text'
                        placeholder='Email' />
                    <button onClick={handleSendMail}
                        className="outline-none bg-red-700 text-white font-medium px-3 py-2 m-auto rounded-full">
                        Gửi mật khẩu
                    </button>
                </div>
            </div>
        </section>
    );
};



export default ForgotPassword;