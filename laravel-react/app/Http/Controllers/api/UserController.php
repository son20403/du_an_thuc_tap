<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\User as UserResources;
use Illuminate\Support\Facades\Validator;
use Laravel\Jetstream\Jetstream;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $data = $request->all();
        // dd($data);
        $validator = Validator::make(
            $data,
            [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
                'password' => ['required', 'string', 'min:8', 'max:255'],
            ]
        );

        if ($validator->fails()) {
            $arr = [
                'data_err' => $data,
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        $arr = [
            'status' => true,
            'message' => "User đã đăng kí thành công",
            'data' => new UserResources($user)
        ];
        return response()->json($arr, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make(
            $data,
            [
                'password' => ['required', 'string', 'min:8', 'max:255'],
            ]
        );

        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $user = User::where('id', $request->id)->first();
        $user->name = $data['password'];

        $user->save();
        $arr = [
            'status' => true,
            'message' => 'user cập nhật thành công',
            'data' => new UserResources($user)
        ];
        return response()->json($arr, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $data = $request->all();
        $validator = Validator::make(
            $data,
            [
                'name' => ['required', 'string', 'max:255'],
                'address' => ['required', 'string', 'max:255'],
                'phone' => ['required', 'string', 'max:12'],
                'gender' => ['required', 'string', 'max:50'],
            ]
        );

        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $user = User::where('id', $request->id)->first();
        $user->name = $data['name'];
        $user->address = $data['address'];
        $user->phone = $data['phone'];
        $user->gender = $data['gender'];
        $user->save();
        $arr = [
            'status' => true,
            'message' => 'user cập nhật thành công',
            'data' => new UserResources($user)
        ];
        return response()->json($arr, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        //

    }
    public function logout_token(Request $request)
    {
        //
        if($request->user()->currentAccessToken()->delete()){
            return response()->json([
                'message' => 'logout'
            ], 200);
        }
        // $request->user()->currentAccessToken()->delete();

    }

    public function login_token(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;
        $arr = [
            'access_token' => $token,
            'token_type' => 'Bearer',
            'status' => true,
            'message' => "User đã đăng nhập thành công",
            'data' => new UserResources($user)
        ];
        return response()->json($arr, 201);
    }
    public function detailUser(Request $request)
    {
        return $request->user();
    }


}
