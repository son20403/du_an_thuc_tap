import React from 'react';
import { Input } from '../components/input';

const LoginPage = () => {
    return (
        <section className="container">
            <h1 className="text-4xl text-center mt-20 my-10 font-bold ">
                Đăng Nhập
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
                    <button className="outline-none bg-red-700 text-white font-medium px-3 py-2 m-auto rounded-full">
                        Đăng nhập
                    </button>
                </form>
            </div>
        </section>

    );
};

export default LoginPage;