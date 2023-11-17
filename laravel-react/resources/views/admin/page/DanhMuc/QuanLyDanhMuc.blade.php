@extends('admin.share.layout')

@section('tieudetrang')
Quan Ly Danh Muc
@endsection

@section('noidung')
<main id="app">

  <div class="col-md-12 mb-3 mt-3">
    <div class="modal-category">
      <!-- Button trigger modal -->
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
        class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
        Thêm Danh Mục
      </button>
    </div>
  </div>


  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th class="px-4 py-3">#</th>
            <th class="px-4 py-3">Tên danh mục</th>
            <th class="px-4 py-3">Thao tác</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          @foreach ($data_danhmuc as $danhmuc)
          <tr class="text-gray-700 dark:text-gray-400">
            <td class="px-4 py-3">
              {{$danhmuc->id}}
            </td>
            <td class="px-4 py-3 text-sm">
              {{$danhmuc->ten_danh_muc}}
            </td>
            <td class="px-4 py-3 text-xs">
              <a class="btn btn-primary trigger-modal" name="btn_edit" href="#" data-bs-toggle="modal"
                data-bs-target="#ModalEdit">Edit</a>
              <a class="btn btn-danger btn_delete" name="btn_delete" href="">Xoa</a>
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>

    <div
      class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
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
        <form enctype="multipart/form-data" id="danhmucForm">@csrf
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">Thêm Danh Mục</h3>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <label class="block text-sm">
              <span class="text-gray-700 dark:text-gray-400">Tên Danh Mục</span>
              <input placeholder="Nhập vào Tên Danh Mục" type="text" name="ten_danh_muc"
                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input">
              <div id="ten_danh_muc_error" class="error"></div>
            </label>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
            <button type="button" id="submitBtn"
              class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Thêm Danh Mục
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal cap nhat-->
  <div class="modal fade" id="ModalEdit" tabindex="-1" role="dialog" aria-labelledby="ModalEditLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <form class="alert alert-secondary" enctype="multipart/form-data">@csrf
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cập Nhật Danh Mục</h5>
          </div>

          <div class="modal-body">
            <div class="form-group mt-3">
              <label>Tên Danh Mục</label>
              <input type="text" class="form-control" name="ten_danh_muc" placeholder="Nhập vào Tên Danh Mục" value=""
                required>
            </div>
          </div>

          <div class="modal-footer mt-3">
            <button type="submit" class="btn btn-primary">Cập Nhật Danh Mục</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</main>
@endsection
@section('js')

<!-- validation -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script>
  $(document).ready(function () {
    $('#submitBtn').on('click', function () {
      $.ajax({
        type: 'POST',
        url: '{{asset('/admin/danh-muc')}}',
        data: $('#danhmucForm').serialize(),
        // success: function (response) {
        //   // Kiểm tra nếu có lỗi validate
        //   console.log(response);
        //   if (response.hasOwnProperty('errors')) {
        //     var errors = response.errors;

        //     // Xóa bất kỳ thông báo lỗi cũ nào
        //     $('.error').html('');

        //     // Hiển thị lỗi cho từng trường input
        //     $.each(errors, function (key, value) {
        //       $.each(value, function (index, message) {
        //         $('#ten_danh_muc_error').append('<div>' + message + '</div>');
        //       });            
        //     });
        //   } else {
        //     // Xử lý kết quả từ server khi không có lỗi validate
        //     console.log(response);
        //   }
        // },
        // error: function (error) {
        //   // Xử lý lỗi ở đây
        //   console.log(error);
        // }

        success: function (response) {
          // Xử lý kết quả từ server ở đây
          console.log('oke');
        },
        error: function (error) {
          // Xử lý lỗi ở đây
          console.log('ko oke');
        }
      });
    });
  });
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