<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order; // Import model Order

class CheckoutController extends Controller
{
    public function processCheckout(Request $request)
    {
        // Validations
        $request->validate([
            'lastName' => 'required',
            'firstName' => 'required',
            'address' => 'required',
            'townCity' => 'required',
            'phone' => 'required',
            'email' => 'required|email',
            // ...Thêm validations cho các trường khác nếu cần
        ]);

        // Xử lý đặt hàng - lưu vào cơ sở dữ liệu, gửi email, v.v.
        $order = Order::create([
            'last_name' => $request->input('lastName'),
            'first_name' => $request->input('firstName'),
            'address' => $request->input('address'),
            'town_city' => $request->input('townCity'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            // ...Thêm các trường khác của đơn đặt hàng
        ]);

        // Trả về kết quả
        return response()->json(['message' => 'Đặt hàng thành công', 'order_id' => $order->id], 200);
    }
}