<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class QuanLyHoaDonController extends Controller
{
    //
    public function index()
    {
        
            return view('admin.page.hoadon.index');
        
    }
}
