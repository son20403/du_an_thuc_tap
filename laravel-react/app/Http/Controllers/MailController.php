<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Hash;

class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',

        ]);
        $user=User::where('email',$request->email)->first();
        if($user){

            $user->password=Hash::make($request->password);
            $user->save();
            $details = [
                'title' => 'Bạn đã yêu cầu lấy mật khẩu mới! Đây là mật khẩu mới của bạn.',
                'body' => $request['body'],
                'password'=>$request['password']
            ];

            Mail::to($validatedData['email'])->send(new SendMail($details));
            $arr = [

                'success' => true,
                'message' => 'gui thanh cong',

            ];
            return response()->json($arr, 200);
        }else{
            $arr = [

                'success' => false,
                'message' => 'Lỗi email  dữ liệu',

            ];
            return response()->json($arr, 200);
        }



    }
}
