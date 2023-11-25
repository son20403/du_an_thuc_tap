@extends('admin.share.layout')

@section('tieudetrang')
Quan Ly Sản Phẩm
@endsection

@section('noidung')
<main id="app">

  <div class="col-md-12 mb-3">
    <div class="modal-category">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Thêm Sản Phẩm
      </button>

      <!-- Modal -->
      <div class="modal fade bd-example-modal-xl" id="exampleModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <form id="sanphamForm" method="post" action="/admin/san-pham" enctype="multipart/form-data">@csrf
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">Thêm Sản Phẩm</h3>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              
              <div class="modal-body row">
                <!-- ---------------- -->
                <div class="col-md-9">
                  <div class="col-md-12 p-1 form-group-item">
                    <label>Tên Sản Phẩm</label>
                    <input name="ten_san_pham" type="text" class="form-control" placeholder="Nhập vào Tên Sản Phẩm"
                      required>
                  </div>

                  <div class="form-group col-md-12 p-1 form-group-item">
                    <label>Mô Tả</label>
                    <textarea name="mo_ta" id="mo_ta" class="form-control" cols="30" rows="10"></textarea>
                  </div>
                </div>
                <!-- --------------- -->
                <div class="col-md-3">
                  <div class="col-md-12 p-1 form-group-item">
                    <label>Mã Loại Sản Phẩm</label>
                    <select name="ma_the_loai" class="form-control" required>
                      <option value=""> _ _ _ Chon Mã Loại Sản Phẩm _ _ _</option>
                      @foreach($data_Loaisanpham as $Loaisanpham)
                      <option value="{{$Loaisanpham->id}}">
                        {{$Loaisanpham->ten_the_loai}} - (Danh muc : @foreach($data_danhmuc as $danhmuc)
                        @if($danhmuc->id == $Loaisanpham->ma_danh_muc) {{$danhmuc->ten_danh_muc}} @endif @endforeach)
                      </option>
                      @endforeach
                    </select>
                  </div>
                  <div class="col-md-12 p-1 form-group-item">
                    <label>Số Lượng</label>
                    <input name="so_luong" type="number" class="form-control" placeholder="Nhập Số Lượng" required>
                  </div>
                  <div class="col-md-12 p-1 form-group-item">
                    <label>Giá Bán</label>
                    <div class="input-group">
                      <div class="input-group-addon">
                        <span class="glyphicon glyphicon-usd"></span>
                      </div>
                      <input name="gia_san_pham" type="number" class="form-control form-icon-trailing"
                        placeholder="Nhập Giá Bán" required>
                    </div>
                  </div>
                  <div class="col-md-12 p-1 form-group-item">
                    <label>Giảm giá</label>
                    <div class="input-group">
                      <div class="input-group-addon">
                        <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
                      </div>
                      <input name="giam_gia_san_pham" type="number" class="form-control" placeholder="Nhập Giảm giá">
                    </div>
                  </div>
                  <div class="col-md-12 p-1 form-group-item">
                    <label>Đặt Biệt</label>
                    <select name="dat_biet" class="form-control" required>
                      <option value=""> _ _ _ Chon Loại Đặt Biệt _ _ _</option>
                      <option value="0">Khong</option>
                      <option value="1">Co</option>
                    </select>
                  </div>
                  <div class="form-group col-md-12 p-1">
                    <label>Ảnh Sản Phẩm</label>
                    <input id="hinh_anh" class="form-control" type="file" accept="image/*" name="hinh_anh[]" multiple
                      required>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                <button type="submit" class="btn btn-submit btn-primary">Thêm Sản Phẩm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th class="px-4 py-3">#</th>
            <th class="px-4 py-3">Tên Sản Phẩm</th>
            <th class="px-4 py-3">Hình Ảnh</th>
            <th class="px-4 py-3">Giá Sản Phẩm</th>
            <th class="px-4 py-3">Số Lượng</th>
            <th class="px-4 py-3">Tên Thể Loại</th>
            <th class="px-4 py-3">Ten Danh Muc</th>
            <th class="px-4 py-3">Mô Tả</th>
            <th class="px-4 py-3">Trạng Thái</th>
            <th class="px-4 py-3">Thao tác</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          @if($data_sanpham->isEmpty())
          <tr class="text-gray-700 dark:text-gray-400">
            <td class="align-middle text-center text-nowrap" colspan="11">Không có dữ liệu</td>
          </tr>
          @else
          @foreach($data_sanpham as $sanpham)
          @if ($sanpham->is_delete == 0)
          <tr class="text-gray-700 dark:text-gray-400">
            <td class="px-4 py-3">
              {{$sanpham->id}}
            </td>
            <td class="px-4 py-3">
              {{$sanpham->ten_san_pham}}
            </td>
            <td class="px-4 py-3">
              <!-- -- Kiểm tra xem sản phẩm có hình ảnh hay không -- -->
              @php
              $hasImages = false;
              @endphp

              @foreach ($HinhAnh as $hinhanh)
              @if ($hinhanh && $hinhanh->ma_san_pham == $sanpham->id)
              <img height="100" src="{{ asset('img/') }}/{{$hinhanh->hinh_anh}}" title="{{$hinhanh->hinh_anh}}">
              @php
              $hasImages = true;
              @endphp
              @endif
              @endforeach

              @if (!$hasImages)
              <p>Không có hình ảnh cho sản phẩm này.</p>
              @endif
            </td>
            <td class="px-4 py-3">
              {{$sanpham->gia_san_pham}}
            </td>
            <td class="px-4 py-3">
              {{$sanpham->so_luong}}
            </td>
            <td class="px-4 py-3">
              @foreach ($data_Loaisanpham as $Loaisanpham)
              @if ($Loaisanpham->id == $sanpham->ma_the_loai)
              {{$Loaisanpham->ten_the_loai}}
              @endif
              @endforeach
            </td>
            <td class="px-4 py-3 text-sm">
              {{$sanpham->ten_danh_muc}}
            </td>
            <td class="px-4 py-3 text-sm">
              {!!Str::limit($sanpham->mo_ta, $limit = 30, $end = '...')!!}
            </td>
            <td class="px-4 py-3 text-sm">
              <div class="form-check form-switch">
                <input class="form-check-input" onclick="toggleStatus(<?php echo $sanpham->id; ?>)" type="checkbox"
                  @if($sanpham->trang_thai == 1) checked @endif role="switch" id="flexSwitchCheckDefault">
              </div>
            </td>
            <td class="px-4 py-3 text-xs">
              <!-- Button trigger modal -->
              <a class="btn btn-primary trigger-modal" name="btn_edit" href="#" data-bs-toggle="modal"
                data-bs-target="#ModalEdit{{$sanpham->id}}">Edit</a>
              <!-- <a class="btn btn-danger btn_delete trigger-modal" name="btn_delete"
              href="san-pham/xoasanpham/{{$sanpham->id}}">Xoa</a> -->
              <input type="hidden" id="xoasanpham" value="{{$sanpham->id}}">
              <button class="btn btn-danger" data-bs-toggle="modal"
                data-bs-target="#confirmationModal{{$sanpham->id}}">Xóa</button>
            </td>
            <!-- MODAL DELETE -->
            <div class="modal fade" id="confirmationModal{{$sanpham->id}}" tabindex="-1" role="dialog"
              aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác Nhận Xoá Dữ Liệu</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Bạn có chắc muốn xoá dữ liệu này không?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                    <button type="button" class="btn btn-danger" onclick="kich_hoat_xoa_san_pham({{$sanpham->id}})"
                      data-bs-dismiss="modal">Xoá</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="ModalEdit{{$sanpham->id}}" tabindex="-1" role="dialog"
              aria-labelledby="ModalEditLabel" aria-hidden="true">

              <div class="modal-dialog modal-xl">

                <div class="modal-content">
                  <form id="validate_update" method="post" action="san-pham/capnhatsanpham/{{$sanpham->id}}"
                    enctype="multipart/form-data">@csrf
                    <div class="modal-header">
                      <h3 class="modal-title" id="exampleModalLabel_update">Cập Nhật Sản Phẩm</h3>
                      <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="card m-3">

                      <div class="card-header text-center">
                        <h3>Danh Sách Hình Ảnh</h3>
                      </div>

                      <div class="card-body">
                        <div class="row">
                          @foreach($data_hinhanh as $hinhanh)
                          @if($hinhanh->ma_san_pham == $sanpham->id)
                          <div class="col-md-3">
                            <div>
                              <img src="{{asset('img')}}/{{$hinhanh->hinh_anh}}" width="100" title="image">
                            </div>
                            <div class="text-center">
                              <a class="btn btn-danger btn_delete"
                                onclick="deleteImg(<?php echo $hinhanh->id; ?>)">xóa</a>
                            </div>
                          </div>
                          @endif
                          @endforeach

                        </div>
                      </div>
                    </div>

                    <div class="card m-3">
                      <div class="card-header text-center">
                        <h3>Thông Tin Sản Phẩm</h3>
                      </div>

                      <div class="modal-body row">
                        <!-- ---------------- -->
                        <div class="col-md-9">
                          <div class="col-md-12 p-1 form-group-item">
                            <label>Tên Sản Phẩm</label>
                            <input name="ten_san_pham" type="text" class="form-control"
                              placeholder="Nhập vào Tên Sản Phẩm" value="{{$sanpham->ten_san_pham}}" required>
                          </div>

                          <div class="form-group col-md-12 p-1 form-group-item">
                            <label>Mô Tả</label>
                            <textarea name="mo_ta" id="update_mo_ta" class="form-control ckeditor" cols="30" rows="10"
                              required>
                              {{$sanpham->mo_ta}}
                            </textarea>
                          </div>
                        </div>
                        <!-- --------------- -->
                        <div class="col-md-3">
                          <div class="col-md-12 p-1 form-group-item">
                            <label>Mã Loại Sản Phẩm</label>
                            <select name="ma_the_loai" class="form-control">
                              @foreach($data_Loaisanpham as $Loaisanpham)
                              <option value="{{$Loaisanpham->id}}" @if($Loaisanpham->id == $sanpham->ma_the_loai)
                                selected="selected"; @endif>
                                {{$Loaisanpham->ten_the_loai}} - (Danh muc : @foreach($data_danhmuc as $danhmuc)
                                @if($danhmuc->id == $Loaisanpham->ma_danh_muc) {{$danhmuc->ten_danh_muc}} @endif
                                @endforeach)
                              </option>
                              @endforeach
                            </select>
                          </div>
                          <div class="col-md-12 p-1 form-group-item">
                            <label>Số Lượng</label>
                            <input name="so_luong" type="number" class="form-control" placeholder="Nhập Số Lượng"
                              value="{{$sanpham->so_luong}}" required>
                          </div>
                          <div class="col-md-12 p-1 form-group-item">
                            <label>Giá Bán</label>
                            <div class="input-group">
                              <div class="input-group-addon">
                                <span class="glyphicon glyphicon-usd"></span>
                              </div>
                              <input name="gia_san_pham" type="number" class="form-control" placeholder="Nhập Giá Bán"
                                value="{{$sanpham->gia_san_pham}}" required>
                            </div>
                          </div>
                          <div class="col-md-12 p-1 form-group-item">
                            <label>Giảm giá</label>
                            <div class="input-group">
                              <div class="input-group-addon">
                                <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
                              </div>
                              <input name="giam_gia_san_pham" type="number" class="form-control"
                                placeholder="Nhập Giảm giá" value="{{$sanpham->giam_gia_san_pham}}">
                            </div>
                          </div>
                          <div class="col-md-12 p-1 form-group-item">
                            <label>Đặt Biệt</label>
                            <select name="dat_biet" class="form-control" required>
                              <option value="0" @if($sanpham->dat_biet == 0) selected="selected"; @endif>Khong</option>
                              <option value="1" @if($sanpham->dat_biet == 1) selected="selected"; @endif>Co</option>
                            </select>
                          </div>
                          <div class="form-group col-md-12 p-1">
                            <label>Ảnh Sản Phẩm</label>
                            <div class="input-group">
                              <input id="hinh_anh_update" class="form-control" type="file" accept="image/*"
                                name="hinh_anh[]" multiple>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                        <button type="submit" class="btn btn-submit btn-primary">Cập Nhật Sản Phẩm</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>

          </tr>
          @endif
          @endforeach
          @endif
        </tbody>

      </table>
    </div>

  </div>

  <style>
    /* Màu đỏ khi có lỗi */
    .has-error {
        color: #a94442;
        border-color: #ebccd1;
    }

    /* Màu xanh khi không có lỗi */
    .has-success {
        color: #3c763d;
        border-color: #d6e9c6;
    }
  </style>
</main>
@endsection
@section('js')

<!-- {{-- Hiển thị thông báo thành công --}} -->
@if(Session::has('success'))
<script>
  toastr.success("{{ Session::get('success') }}");
</script>
@endif

<!-- {{-- Hiển thị thông báo lỗi --}} -->
@if(Session::has('error'))
<script>
  toastr.error("{{ Session::get('error') }}");
</script>
@endif

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- toggle status -->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script>

  function toggleStatus(id) {
    var id = id;
    $.ajax({
      url: "/admin/san-pham/toggleStatus",
      type: "get",
      data: { idsta: id },
      success: function ($trangthai) {
        if ($trangthai == 1) {
          toastr.success("Đã bật trạng thái sản phẩm!");
        } else {
          toastr.success("Đã tắt trạng thái sản phẩm!");
        }
      }
    });
  }

  function kich_hoat_xoa_san_pham(id) {
    var id = id;
    // console.log(id);
    $.ajax({
      url: "/admin/san-pham/xoasanpham",
      type: "get",
      data: { idsp: id },
      success: function () {
        toastr.success("Sản phẩm đã được xoá thành công!");
        window.location.replace("./san-pham");
      }
    });
  }

  function deleteImg(id) {
    var id = id;
    $.ajax({
      url: "/admin/xoahinhanh",
      type: "get",
      data: { idImg: id },
      success: function () {
        // console.log("it Works");
        // fetchcategory();
        toastr.successl("Xoa hinh anh thanh cong!");
        window.location.replace("./san-pham");
      }
    });
  }
</script>



<!-- validation -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>

<script>
  $(document).ready(function () {
    $('#sanphamForm').validate({
      rules: {
        'ten_san_pham': {
          required: true,
        },
        'ma_the_loai': {
          required: true,
        },
        'gia_san_pham': {
          required: true,
        },
        'hinh_anh[]': {
          required: true,
        },
        'so_luong': {
          required: true,
        },
        'luot_xem': {
          required: true,
        },
        'dat_biet': {
          required: true,
        },
        'mo_ta': {
          required: true,
        },
      },
      messages: {
        'ten_san_pham': "Vui lòng không được bỏ trống tên sản phẩm.",
        'ma_the_loai': "Vui lòng không được bỏ trống mã loại.",
        'gia_san_pham': "Vui lòng không được bỏ trống giá sản phẩm.",
        'hinh_anh[]': "Vui lòng không được bỏ trống hình ảnh sản phẩm.",
        'so_luong': "Vui lòng không được bỏ trống số lượng sản phẩm.",
        'dat_biet': "Vui lòng không được bỏ trống đặt biệt.",
      },
      errorElement: "em",
      errorPlacement: function (error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");

        if (element.prop("type") === "checkbox") {
          error.insertAfter(element.parent("label"));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element).parents(".form-group-item").addClass("has-error").removeClass("has-success");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).parents(".form-group-item").addClass("has-success").removeClass("has-error");
      }
    });
  });
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.19.1/ckeditor.js"></script>
<script>
  CKEDITOR.replace('mo_ta')
  CKEDITOR.replace('update_mo_ta'); // replace name mô tả
</script>

@endsection