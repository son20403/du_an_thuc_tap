<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TheLoaiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "ten_the_loai"=> "required|unique:The_Loai,ten_the_loai",
            "ma_danh_muc"=> "required",
        ];
    }

    public function messages(): array
    {
        return [
            "ten_the_loai.required"  =>   "Ten the loai khong duoc de trong",
            "ten_the_loai.unique"    =>   "Ten the loai da duoc ton tai",
            "ma_danh_muc.required"   =>   "ma danh muc khong duoc de trong",
        ];
    }
}
