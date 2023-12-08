<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Mail\OrderConfirmationMail; // Import Mailable for order confirmation email

class CheckoutController extends Controller
{
    public function processCheckout(Request $request)
    {
        try {
            // Validations
            $request->validate([
                'lastName' => 'required',
                'firstName' => 'required',
                'address' => 'required',
                'townCity' => 'required',
                'phone' => 'required',
                'email' => 'required|email',
            ]);

            // Check if an order with the same email already exists
            $existingOrder = Order::where('email', $request->input('email'))->first();

            if ($existingOrder) {
                return response()->json(['message' => 'Đơn hàng đã tồn tại', 'order_id' => $existingOrder->id], 409);
            }

            // Process the order - save to the database
            $order = Order::create([
                'last_name' => $request->input('lastName'),
                'first_name' => $request->input('firstName'),
                'address' => $request->input('address'),
                'town_city' => $request->input('townCity'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
                // ... other fields
            ]);

            // Send order confirmation email
            \Mail::to($request->input('email'))->send(new OrderConfirmationMail($order));

            // Return success response
            return response()->json(['message' => 'Đặt hàng thành công', 'order_id' => $order->id], 200);
        } catch (\Exception $e) {
            // Return detailed error message
            return response()->json(['message' => 'Đã có lỗi xảy ra khi đặt hàng', 'error' => $e->getMessage()], 500);
        }
    }
}