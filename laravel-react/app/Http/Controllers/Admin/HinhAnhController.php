<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HinhAnhModel;
use Illuminate\Http\Request;

class HinhAnhController extends Controller
{
    public function xoa_hinhanh()
    {
        $id = $_GET['idImg'];
        $xoa = HinhAnhModel::find($id);
        if ($xoa == null) {
            echo '<script type ="text/JavaScript">alert("loi roi!");</script>';
        } else {
            $xoa->delete();
        }
    }
}
