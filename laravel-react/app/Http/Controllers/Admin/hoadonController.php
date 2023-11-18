<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class hoadonController extends Controller
{
    public function index()
    {
        
            return view('admin.page.hoadon.index');
        
    }
}
