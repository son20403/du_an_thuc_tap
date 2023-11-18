@extends('admin.share.layout')
@section('tieu_de_trang')
  Home
@endsection
@section('noidung')
<h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
  Hoá đơn
</h2>
<!-- Button trigger modal -->
<button  class="w-4 px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-full sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" data-bs-toggle="modal" data-bs-target="#them_hoa_donModal">
  thêm
</button>

<!-- Modal -->
<div class="modal fade" id="them_hoa_donModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
@yield('themhoadon')



@endsection