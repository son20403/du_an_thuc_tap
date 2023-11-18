@extends('layout')
@section('sanpham')
<div class="container">
    <h1>SẢN PHẨM HOT</h1><br><br>
  
    <div class="containerfull">
    
        <div class="box50 mr15">
            <img src="/test/" alt="">
        </div>
        @foreach ($sanpham as sanpham)
        <div class="box25 mr15">
            <div class="best"><h1>{{$sanpham->name}}</h1></div>
            <img src="images/{{$sanpham->img}}" alt="">
            <span class="price">{{$sanpham->price}}</span>
            <button>Đặt hàng</button>
        </div>
        @endforeach
        
    </div>
    <div class="containerfull mr30">
        <div class="box25 mr15">
            <img src="images/sp1.webp" alt="">
            <span class="price">$1000</span>
            <button>Đặt hàng</button>
        </div>
        <div class="box25 mr15">
            <img src="images/sp2.webp" alt="">
            <span class="price">$1000</span>
            <button>Đặt hàng</button>
        </div>
        <div class="box25 mr15">
            <img src="images/sp3.webp" alt="">
            <span class="price">$1000</span>
            <button>Đặt hàng</button>
        </div>
        <div class="box25 mr15">
            <img src="images/sp4.webp" alt="">
            <span class="price">$1000</span>
            <button>Đặt hàng</button>
        </div>
    </div>

</div>
@endsection