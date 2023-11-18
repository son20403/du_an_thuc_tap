<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DanhMucRequest extends FormRequest
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
            "ten_danh_muc" => "required|unique:Danh_Muc,ten_danh_muc",
        ];
    }
    public function messages(): array
    {
        return [
            "ten_danh_muc.required"  =>   "Ten danh muc khong duoc de trong",
            "ten_danh_muc.unique"    =>   "Ten danh muc da duoc ton tai",
        ];
    }
}
