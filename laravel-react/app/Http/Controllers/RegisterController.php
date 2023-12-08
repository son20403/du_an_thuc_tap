<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        try {
            // Validate incoming data
            $validator = Validator::make($request->all(), [
                'fullName' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
            ]);

            // If validation fails, return a response with a 422 status code (Unprocessable Entity)
            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 422);
            }

            // Registration logic
            // ...

            // Return a success response
            return response()->json(['message' => 'Registration successful'], 200);
        } catch (\Exception $e) {
            // Log the server-side error
            Log::error('Registration Error: ' . $e->getMessage());

            // Return an error response with a 500 status code (Internal Server Error)
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}
