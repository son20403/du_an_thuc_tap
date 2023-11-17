import React from 'react';
import { Input } from '../components/input';

const RegisterPage = () => {
    return (
        <section className="container">
            <h1 className="text-4xl text-center mt-20 my-10 font-bold ">
                Đăng ký tài khoản
            </h1>
            <div className>
                <form action className=" p-10 w-full flex flex-col gap-y-10">
                    <Input
                        label='Nhập tài khoản'
                        name='user_name'
                        placeholder='Tài khoản'
                    />
                    <Input
                        label='Nhập mật khẩu'
                        name='password'
                        type='password'
                        placeholder='Mật khẩu' />
                    <Input label='Nhập lại mật khẩu'
                        name='re_password'
                        type='password'
                        placeholder='Nhập lại mật khẩu' />
                    <Input label='Nhập email'
                        name='email'
                        placeholder='Email' />
                    <button className="outline-none bg-red-700 text-white font-medium px-3 py-2 m-auto rounded-full">
                        Đăng ký
                    </button>
                </form>
            </div>
        </section>

    );
};

export default RegisterPage;