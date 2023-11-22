@extends('AdminRocker.share.master')
@section('noi_dung')
<h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
  Danh Sách Bài Viết
</h4>
<div>
  <button @click="openModal" data-bs-toggle="modal" data-bs-target="#themModal" class="px-4 py-2 text-lg font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border rounded-full border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
    Thêm bài viết
  </button>

  <!-- Modal -->
  @include('AdminRocker/page/BaiViet/thembaiviet')
</div>


<!-- table -->
<div class="w-full overflow-hidden rounded-lg shadow-xs">
  <div class="w-full overflow-x-auto">
    <table class="w-full whitespace-no-wrap">
      <thead>
        <tr class="text-xs font-semibold tracking-wide text-center text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <th class="px-4 py-3">#</th>
          <th class="px-4 py-3">Tiêu Đề</th>
          <th class="px-4 py-3">Ảnh đại diện</th>
          <th class="px-4 py-3">Mô tả ngắn</th>
          <th class="px-4 py-3">Người đăng</th>
          <th class="px-4 py-3">Trạng thái</th>
          <th class="px-4 py-3">Ngày đăng</th>
          <th class="px-4 py-3">Thao tác</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
        @foreach($data_baiviet as $baiviet)
        <tr class="text-gray-700 dark:text-gray-400">

          <td class="px-4 py-3 text-sm">
            {{$baiviet->id}}
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center text-sm">

              <div>
                <p class="font-semibold">{{substr($baiviet->ten_bai_viet, 0, 30)}}</p>
                @if($baiviet->loai_tin==1)
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  Tin Khuyến Mãi
                </p>
                @else
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  Tin Mới
                </p>
                @endif
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-sm">
            <img height="50px" max-width="100px" src="{{ asset('img/') }}/{{$baiviet->hinh_anh}}" title="{{$baiviet->hinh_anh}}">

          </td>
          <td class="px-4 py-3 text-sm">

            {{substr($baiviet->mo_ta_ngan, 0, 30) }}
          </td>
          <td class="px-4 py-3 text-sm">
            {{$baiviet->ma_khach_hang}}
          </td>
          <td class="px-4 py-3 text-xs">
            <div class="form-check form-switch">
              <input class="form-check-input" onclick="doitrangthai(<?php echo $baiviet->id; ?>)" type="checkbox" @if($baiviet->hien_thi == 1) checked @endif role="switch" id="flexSwitchCheckDefault">
            </div>
            <!-- @if($baiviet->hien_thi==1)
            <button class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
              Hiện
            </button>
            @else
            <button class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
              Ẩn
            </button>

            @endif -->
          </td>
          <td class="px-4 py-3 text-sm">
            {{$baiviet->created_at}}
          </td>
          <td class="px-4 py-3">

            <div class="flex items-center space-x-4 text-sm">
              <a class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" data-bs-toggle="modal" data-bs-target="#show{{$baiviet->id}}" href="" aria-label=" Edit">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <i class="bx bx-show"></i>
                </svg>
              </a>
              <a class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" data-bs-toggle="modal" data-bs-target="#capnhatModal{{$baiviet->id}}" href="" aria-label=" Edit">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                  </path>
                </svg>
              </a>
              <a id="btn_delete" class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" href="baiviet/{{$baiviet->id}}" aria-label="Delete">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </td>
        </tr>
        <!-- Modal cập nhật-->
        @include('AdminRocker/page/BaiViet/capnhat')
        <!-- modal show -->
        @include('AdminRocker/page/BaiViet/show')
        @endforeach
      </tbody>
    </table>
    <!-- <a  class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" href="baiviet/khoiphuc" aria-label="">
      <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        xoá
      </svg>
    </a> -->
  </div>
  <div>{{$data_baiviet->links('AdminRocker.page.BaiViet.custom')}}</div>

</div>

<!-- end table -->
@endsection

@section('js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.19.1/ckeditor.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script>
  function doitrangthai(id) {
    var id = id;
    $.ajax({
      url: "/admin/baiviet/doitrangthai",
      type: "get",
      data: {
        idsta: id
      },
      success: function($hienthi) {
        if ($hienthi == 1) {
          swal("Thay đổi trạng thái thành công!", "", "success");
        } else {
          swal("Thay đổi trạng thái thành công!", "", "success");
        }
      }
    });
  }
  const delBtnEl = document.querySelectorAll("#btn_delete");
  delBtnEl.forEach(function(delBtn) {
    delBtn.addEventListener("click", function(event) {
      const message = confirm("Bạn có chắc muốn xoá dữ liệu này không?");
      if (message == false) {
        event.preventDefault();
      }
    });
  });

  CKEDITOR.replace('noi_dung')

  CKEDITOR.replace('noi_dung_cap_nhat');
</script>
<script src="/assets_admin_rocker/js/init-alpine.js"></script>
<script src="/assets_admin_rocker/js/focus-trap.js"></script>
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
@endsection