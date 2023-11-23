<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SanPhamRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "ten_san_pham"=> "required|unique:San_Pham,ten_san_pham",
            "gia_san_pham"=> "required",
            "ma_the_loai"=> "required",
            "so_luong"=> "required",
            "dat_biet"=> "required",
            'hinh_anh' => 'required|max:8000',        
        ];
    }

    public function messages(): array
    {
        return [
            "ten_san_pham.required"  =>   "Ten san pham khong duoc de trong",
            "ten_san_pham.unique"    =>   "Ten san pham da duoc ton tai",
            "gia_san_pham.required"   =>  "gia san pham khong duoc de trong",
            "ma_the_loai.required"   =>   "ma the loai khong duoc de trong",
            "so_luong.required"      =>   "So luong khong duoc de trong",
            "dat_biet.required"      =>   "Dat biet khong duoc de trong",
            "hinh_anh.required"      =>   "Hinh anh khong duoc de trong",
            "hinh_anh.max"           =>   "Hinh anh qua lon",

        ];
    }
}
