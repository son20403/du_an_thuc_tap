<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DanhMucRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'ten_danh_muc' => 'required|unique',
        ];
    }

    public function message()
    {
        return [
            "ten_danh_muc.required" => "ten danh mục không được bỏ trống",
            "ten_danh_muc.unique" => "ten danh mục da ton tai",
        ];
    }
}
