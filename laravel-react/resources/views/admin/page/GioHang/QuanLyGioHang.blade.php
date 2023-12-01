@extends('admin.share.layout')

@section('tieudetrang')
Quản Lí Giỏ Hàng
@endsection

@section('noidung')
<main id="app">

  

  <div class="col-md-12 mb-3 mt-3">
    <div class="modal-category">
      <!-- Button trigger modal -->
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
        class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
        Thêm Giỏ Hàng
      </button>
    </div>
  </div>

  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
            <th class="px-4 py-3">#</th>
            <th class="px-4 py-3">Mã Khách Hàng</th>
            <th class="px-4 py-3">Mã Sản Phẩm</th>
            <th class="px-4 py-3">Số Lượng</th>
            <th class="px-4 py-3">Thao tác </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y">
          @foreach ($data_giohang as $giohang)
          
          <tr class="text-gray-700">
            <td class="px-4 py-3">
              {{$giohang->id}}
            </td>
            <td class="px-4 py-3 text-sm">
              {{$giohang->ma_khach_hang}}
            </td>
            <td class="px-4 py-3 text-sm">
              {{$giohang->ma_san_pham}}
            </td>
            <td class="px-4 py-3 text-sm">
              {{$giohang->so_luong}}
            </td>
            <td class="px-4 py-3 text-xs">
              <a class="btn btn-primary trigger-modal" name="btn_edit" href="{{asset('/admin/gio-hang/cap-nhat')}}/{{$giohang->id}}" data-bs-toggle="modal"
                data-bs-target="#ModalEdit">Edit</a>
              <a class="btn btn-danger btn_delete" name="btn_delete"
                href="{{asset('/admin/gio-hang/xoa')}}/{{$giohang->id}}">Xoa</a>
            </td>
          </tr>
        
          @endforeach
        </tbody>
         <!-- Modal cap nhat-->
          <div class="modal fade" id="ModalEdit" tabindex="-1" role="dialog" aria-labelledby="ModalEditLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
              <div class="modal-content">
                <form class="alert alert-secondary" method="get" action="{{asset('/admin/gio-hang/cap-nhat')}}/{{$giohang->id}}" enctype="multipart/form-data">@csrf
                  <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">Cập Nhật Giỏ Hàng</h3>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div class="modal-body">
                    <label class="block text-sm">
                      <span class="text-gray-700">Mã Sản Phẩm</span>
                      <input placeholder="Nhập vào Mã Sản Phẩm" type="text" name="ma_san_pham"
                        value="{{$giohang->ma_san_pham}}"
                        class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input">
                      <div id="ma_san_pham_error" class="error"></div>
                      <span class="text-danger">
                        @error('ten_TL')
                        {{$message}}
                        @enderror
                      </span>
                    </label>
                  </div>

                  <div class="modal-body">
                    <label class="block text-sm">
                      <span class="text-gray-700">Mã Khách Hàng</span>
                      <input placeholder="Nhập vào Mã Khách Hàng" type="text" name="ma_khach_hang"
                        value="{{$giohang->ma_khach_hang}}"
                        class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input">
                      <div id="ma_khach_hang_error" class="error"></div>
                      <span class="text-danger">
                        @error('ten_TL')
                        {{$message}}
                        @enderror
                      </span>
                    </label>
                  </div>

                  <div class="modal-body">
                    <label class="block text-sm">
                      <span class="text-gray-700">Số Lượng</span>
                      <input placeholder="Nhập vào Số Lượng" type="text" name="so_luong"
                        value="{{$giohang->so_luong}}"
                        class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input">
                      <div id="so_luong_error" class="error"></div>
                      <span class="text-danger">
                        @error('ten_TL')
                        {{$message}}
                        @enderror
                      </span>
                    </label>
                  </div>

                  <div class="modal-footer mt-3">
                    <button type="submit" id="submitBtn"
                      class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                      Cập Nhật Danh Mục
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </table>
    </div>

    <div
      class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9">
      <span class="flex items-center col-span-3">
        Showing 21-30 of 100
      </span>
      <span class="col-span-2"></span>
      <!-- Pagination -->
      <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label="Table navigation">
          <ul class="inline-flex items-center">
            <li>
              <button class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Previous">
                <svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
              </button>
            </li>
            <li>
              <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                1
              </button>
            </li>
            <li>
              <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                2
              </button>
            </li>
            <li>
              <button class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Next">
                <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                  <path
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </span>
    </div>
  </div>

  <!-- Modal them danh muc-->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <form enctype="multipart/form-data" method="post" action="{{asset('/admin/gio-hang')}}" id="giohangForm">@csrf
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">Thêm Giỏ Hàng</h3>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <label class="block text-sm">
              <span class="text-gray-700">Mã Sản Phẩm</span>
              <input placeholder="Nhập vào Mã Sản Phẩm" type="text" name="ma_san_pham"
                class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input">
              <div id="ten_danh_muc_error" class="error"></div>
              <span class="text-danger">
                @error('ten_danh_muc')
                {{$message}}
                @enderror
              </span>
            </label>
          </div>

          <div class="modal-body">
            <label class="block text-sm">
              <span class="text-gray-700">Mã Khách Hàng</span>
              <input placeholder="Nhập vào Mã Khách Hàng" type="text" name="ma_khach_hang"
                class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input">
              <div id="ten_danh_muc_error" class="error"></div>
              <span class="text-danger">
                @error('ten_danh_muc')
                {{$message}}
                @enderror
              </span>
            </label>
          </div>

          <div class="modal-body">
            <label class="block text-sm">
              <span class="text-gray-700">Số Lượng</span>
              <input placeholder="Nhập vào Số Lượng" type="text" name="so_luong"
                class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input">
              <div id="ten_danh_muc_error" class="error"></div>
              <span class="text-danger">
                @error('ten_danh_muc')
                {{$message}}
                @enderror
              </span>
            </label>
          </div>

          

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
            <button type="submit" id="submitBtn"
              class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Thêm Giỏ Hàng
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>


</main>
@endsection
@section('js')

<!-- validation -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script>
  // $(document).ready(function () {
  //   $('#submitBtn').on('click', function () {
  //     $.ajax({
  //       type: 'POST',
  //       url: '{{asset('/admin/danh-muc')}}',
  //       data: $('#giohangForm').serialize(),
  //       success: function (response) {
  //         // Kiểm tra nếu có lỗi validate
  //         console.log('response');
  //         if (response.hasOwnProperty('errors')) {
  //           var errors = response.errors;

  //           // Xóa bất kỳ thông báo lỗi cũ nào
  //           $('.error').html('');

  //           // Hiển thị lỗi cho từng trường input
  //           $.each(errors, function (key, value) {
  //             $.each(value, function (index, message) {
  //               $('#' + key + '_error').append('<div>' + message + '</div>');
  //             });
  //           });
  //         } else {
  //           // Xử lý kết quả từ server khi không có lỗi validate
  //           console.log(response.massge);
  //         }
  //       },
  //       error: function (error) {
  //         // Xử lý lỗi ở đây
  //         console.log('ko oke');
  //         console.log(error);
  //       }
  //     });
  //   });
  // });
</script>

<!-- delete -->
<script>
  const delBtnEl = document.querySelectorAll(".btn_delete");
  delBtnEl.forEach(function (delBtn) {
    delBtn.addEventListener("click", function (event) {
      const message = confirm("Bạn có chắc muốn xoá dữ liệu này không?");
      if (message == false) {
        event.preventDefault();
      }
    });
  });
</script>
@endsection