<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CapNhatTheLoaiRequest extends FormRequest
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
            "ten_the_loai"=> "required",
            "ma_danh_muc"=> "required",
        ];
    }

    public function messages(): array
    {
        return [
            "ten_the_loai.required"  =>   "Ten the loai khong duoc de trong",
            "ma_danh_muc.required"   =>   "ma danh muc khong duoc de trong",
        ];
    }
}
