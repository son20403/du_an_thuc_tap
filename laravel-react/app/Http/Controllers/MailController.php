<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;

class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
        ]);

        $details = [
            'title' => 'Bạn đã yêu cầu lấy mật khẩu mới! Đây là mật khẩu mới của bạn.',
            'body' => $request['body'],
            'password'=>$request['password']
        ];

        Mail::to($validatedData['email'])->send(new SendMail($details));

        return 'Email đã được gửi đi.';
    }
}
