@extends('admin.share.layout')

@section('tieudetrang')
Quan Ly Sản Phẩm
@endsection

@section('noidung')
<main id="app">

  <div class="col-md-12 mb-3 mt-3">
    <div class="modal-category">
      <!-- Button trigger modal -->
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
        class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
        Thêm Sản Phẩm
      </button>
      <!-- Modal them danh muc-->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">Thêm Sản Phẩm</h3>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body row">
              <div class="col-md-9">
                <label class="block text-sm">
                  <span class="text-gray-700 dark:text-gray-400">Tên Sản Phẩm</span>
                  <input placeholder="Nhập vào Tên  Sản Phẩm" type="text" v-model="add_san_pham.ten_san_pham"
                    class="form-control">
                  <div v-if="errors.ten_san_pham" class="alert alert-warning">
                    @{{ errors.ten_san_pham[0] }}
                  </div>
                </label>

                <label class="block text-sm">
                  <span class="text-gray-700 dark:text-gray-400">Mô Tả</span>
                  <textarea v-model="add_san_pham.mo_ta" id="mo_ta" cols="30" rows="10"></textarea>
                  <div v-if="errors.mo_ta" class="alert alert-warning">
                    @{{ errors.mo_ta[0] }}
                  </div>
                </label>
              </div>

              <div class="col-md-3">
                <label class="block text-sm">
                  <span class="text-gray-700 dark:text-gray-400">Tên Danh Mục</span>
                  <select v-model="add_san_pham.ma_the_loai" class="form-control">
                    <option v-for="(theloai, index) in data_theloai" :value="theloai.id">
                      @{{theloai.ten_the_loai }} -
                      <span v-for="(danhmuc, index) in data_danhmuc" v-if="theloai.ma_danh_muc == danhmuc.id">
                        loi danh muc
                      </span>
                    </option>
                  </select>
                  <div v-if="errors.ma_the_loai" class="alert alert-warning">
                    @{{ errors.ma_the_loai[0] }}
                  </div>
                </label>

                <label class="block text-sm">
                  <span class="text-gray-700 dark:text-gray-400">Đặt Biệt</span>
                  <select v-model="add_san_pham.dat_biet" class="form-control">
                    <option value="0"> KHONG </option>
                    <option value="1"> CO </option>
                  </select>
                  <div v-if="errors.dat_biet" class="alert alert-warning">
                    @{{ errors.dat_biet[0] }}
                  </div>
                </label>

                <label class="block text-sm">
                  <span class="text-gray-700 dark:text-gray-400">Giá Sản Phẩm</span>
                  <input placeholder="Nhập vào Giá Sản Phẩm" type="text" v-model="add_san_pham.gia_san_pham"
                    class="form-control">
                  <div v-if="errors.gia_san_pham" class="alert alert-warning">
                    @{{ errors.gia_san_pham[0] }}
                  </div>
                </label>

                <label class="block text-sm">
                  <span class="text-gray-700 dark:text-gray-400">Giảm Giá</span>
                  <input placeholder="Nhập vào Giảm Giá" type="text" v-model="add_san_pham.giam_gia_san_pham"
                    class="form-control">
                  <div v-if="errors.giam_gia_san_pham" class="alert alert-warning">
                    @{{ errors.giam_gia_san_pham[0] }}
                  </div>
                </label>

                <label class="block text-sm">
                  <span class="text-gray-700 dark:text-gray-400">Số Lượng</span>
                  <input placeholder="Nhập vào Số Lượng" type="text" v-model="add_san_pham.so_luong"
                    class="form-control">
                  <div v-if="errors.so_luong" class="alert alert-warning">
                    @{{ errors.so_luong[0] }}
                  </div>
                </label>

                <label class="block text-sm">
                  <span class="text-gray-700 dark:text-gray-400">Hình Ảnh</span>
                  <input type="file" accept="image/*" v-model="add_san_pham.hinh_anh"
                    class="form-control" placeholder="Thêm hình ảnh">
                  <div v-if="errors.hinh_anh" class="alert alert-warning">
                    @{{ errors.hinh_anh[0] }}
                  </div>
                </label>
              </div>

            </div>


            <div class="modal-footer mt-3">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button v-on:click="them_san_pham()" type="button" class="btn btn-primary">
                Them Sản Phẩm
              </button>
            </div>
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
            <th class="px-4 py-3">Giảm Giá</th>
            <th class="px-4 py-3">Số Lượng</th>
            <th class="px-4 py-3">Tên Thể Loại</th>
            <th class="px-4 py-3">Mô Tả</th>
            <th class="px-4 py-3">Trạng Thái</th>
            <th class="px-4 py-3">Thao tác</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

          <tr v-for="(sanpham, key) in data_sanpham" class="text-gray-700 dark:text-gray-400"
            v-if="sanpham.is_delete == 0">
            <td class="px-4 py-3">
              @{{ key + 1 }}
            </td>
            <td class="px-4 py-3">
              @{{ key + 1 }}
            </td>
            <td class="px-4 py-3">
              @{{ key + 1 }}
            </td>
            <td class="px-4 py-3">
              @{{ key + 1 }}
            </td>
            <td class="px-4 py-3">
              @{{ key + 1 }}
            </td>
            <td class="px-4 py-3">
              @{{ key + 1 }}
            </td>
            <td class="px-4 py-3">
              @{{ key + 1 }}
            </td>
            <td class="px-4 py-3 text-sm">
              @{{ sanpham.ten_san_pham }}
            </td>
            <td class="px-4 py-3 text-sm">

            </td>
            <td class="px-4 py-3 text-xs">
              <button v-on:click="cap_nhat(sanpham)" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#ModalEdit">Edit</button>
              <button v-on:click="xoa_danh_muc = sanpham" class="btn btn-danger" data-bs-toggle="modal"
                data-bs-target="#confirmationModal">Xóa</button>

              <!-- Modal cap nhat-->
              <div class="modal fade" id="ModalEdit" tabindex="-1" role="dialog" aria-labelledby="ModalEditLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="exampleModalLabel">Cập Nhật Sản Phẩm</h3>
                      <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body row">
                      <div class="col-md-9">
                        <label class="block text-sm">
                          <span class="text-gray-700 dark:text-gray-400">Tên Sản Phẩm (*)</span>
                          <input placeholder="Nhập vào Tên  Sản Phẩm" type="text" v-model="edit_san_pham.ten_san_pham"
                            class="form-control">
                          <div v-if="errors.ten_san_pham" class="alert alert-warning">
                            @{{ errors.ten_san_pham[0] }}
                          </div>
                        </label>

                        <label class="block text-sm">
                          <span class="text-gray-700 dark:text-gray-400">Mô Tả</span>
                          <textarea v-model="edit_san_pham.mo_ta" id="update_mo_ta" cols="30" rows="10"></textarea>
                          <div v-if="errors.mo_ta" class="alert alert-warning">
                            @{{ errors.mo_ta[0] }}
                          </div>
                        </label>
                      </div>

                      <div class="col-md-3">
                        <label class="block text-sm">
                          <span class="text-gray-700 dark:text-gray-400">Tên Thể Loại (*)</span>
                          <select v-model="edit_san_pham.ma_the_loai" class="form-control">
                            <option v-for="(theloai, index) in data_theloai" :value="theloai.id">
                              @{{theloai.ten_the_loai }} -
                              <span></span>
                            </option>
                          </select>
                          <div v-if="errors.ma_the_loai" class="alert alert-warning">
                            @{{ errors.ma_the_loai[0] }}
                          </div>
                        </label>

                        <label class="block text-sm">
                          <span class="text-gray-700 dark:text-gray-400">Đặt Biệt (*)</span>
                          <input placeholder="Chọn Đặt Biệt" type="text" v-model="edit_san_pham.dat_biet"
                            class="form-control">
                          <div v-if="errors.dat_biet" class="alert alert-warning">
                            @{{ errors.dat_biet[0] }}
                          </div>
                        </label>

                        <label class="block text-sm">
                          <span class="text-gray-700 dark:text-gray-400">Giá Sản Phẩm (*)</span>
                          <input placeholder="Nhập vào Giá Sản Phẩm" type="text" v-model="edit_san_pham.gia_san_pham"
                            class="form-control">
                          <div v-if="errors.gia_san_pham" class="alert alert-warning">
                            @{{ errors.gia_san_pham[0] }}
                          </div>
                        </label>

                        <label class="block text-sm">
                          <span class="text-gray-700 dark:text-gray-400">Giảm Giá</span>
                          <input placeholder="Nhập vào Giảm Giá" type="text" v-model="edit_san_pham.giam_gia_san_pham"
                            class="form-control">
                        </label>

                        <label class="block text-sm">
                          <span class="text-gray-700 dark:text-gray-400">Số Lượng (*)</span>
                          <input placeholder="Nhập vào Số Lượng" type="text" v-model="edit_san_pham.so_luong"
                            class="form-control">
                          <div v-if="errors.so_luong" class="alert alert-warning">
                            @{{ errors.so_luong[0] }}
                          </div>
                        </label>

                        <label class="block text-sm">
                          <span class="text-gray-700 dark:text-gray-400">Hình Ảnh (*)</span>
                          <input type="file" accept="image/*" v-model="edit_san_pham.hinh_anh" class="form-control"
                            placeholder="Thêm hình ảnh">
                          <div v-if="errors.hinh_anh" class="alert alert-warning">
                            @{{ errors.hinh_anh[0] }}
                          </div>
                        </label>
                      </div>

                    </div>


                    <div class="modal-footer mt-3">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button v-on:click="them_the_loai()" type="button" class="btn btn-primary">
                        Cập Nhật Sản Phẩm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>

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

  <!-- MODAL DELETE -->
  <div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
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
          <button type="button" class="btn btn-danger" v-on:click="kich_hoat_xoa_the_loai()"
            data-bs-dismiss="modal">Xoá</button>
        </div>
      </div>
    </div>
  </div>

</main>


</main>
@endsection
@section('js')

<script>
  new Vue({
    el: '#app',
    data: {
      hinh_anh: [],
      data_danhmuc: [],
      data_theloai: [],
      data_sanpham: [],
      add_san_pham: {},
      edit_san_pham: {},
      xoa_san_pham: {},
      errors: {},
    },
    created() {
      this.GetData();
    },
    methods: {
      // handleFileChange(event) {
      //   this.add_san_pham.hinh_anh = event.target.files;
      // },

      // hien thi danh sach  Sản Phẩm
      GetData() {
        axios
          .get('/admin/the-loai/du-lieu')
          .then((res) => {
            this.data_danhmuc = res.data.data_danhmuc;
            this.data_theloai = res.data.data_theloai;
            this.data_sanpham = res.data.data_sanpham;

          });
      },

      them_san_pham() {
        this.add_san_pham.mo_ta = CKEDITOR.instances['mo_ta'].getData();
          axios
          .post('/admin/san-pham', this.add_san_pham)
          .then((res) => {
              console.log(res.data.get_images);
              if (res.data.status) {
                toastr.success(res.data.message);
                this.GetData();
                // Tắt modal xác nhận
                $('#exampleModal').modal('hide');
              } else {
                toastr.error('Có lỗi không mong muốn! 1');
              }
            })
            .catch((error) => {
              console.log(error.get_images);

              if (error && error.response.data && error.response.data.errors) {
                this.errors = error.response.data.errors;
              } else {
                toastr.error('Có lỗi không mong muốn! 2');
              }
            })
      },

      // cap_nhat(sanpham) {
      //   this.edit_san_pham = sanpham; // Tạo một bản sao của user để tránh ảnh hưởng trực tiếp đến dữ liệu người dùng
      // },

      // cap_nhat_san_pham() {
      //   axios
      //     .post('/admin/the-loai/cap-nhat', this.edit_the_loai)
      //     .then((res) => {
      //       if (res.data.status) {
      //         toastr.success(res.data.message);
      //         this.GetData();
      //         // Tắt modal xác nhận
      //         $('#ModalEdit').modal('hide');
      //       } else {
      //         toastr.error('Có lỗi không mong muốn! 1');
      //       }
      //     })
      //     .catch((error) => {
      //       if (error && error.response.data && error.response.data.errors) {
      //         this.errors = error.response.data.errors;
      //       } else {
      //         toastr.error('Có lỗi không mong muốn! 2');
      //       }
      //     })
      // },

      // kich_hoat_xoa_san_pham() {
      //   axios
      //     .post('/admin/san_pham/xoa', this.xoa_san_pham, { hinh_anh: this.hinh_anh })
      //     .then((res) => {
      //       if (res.data.status) {
      //         const message = "Dữ liệu đã được xoá thành công!";
      //         toastr.success(message);
      //         this.GetData();
      //       } else {
      //         toastr.error('Có lỗi không mong muốn!');
      //       }
      //     })
      // },
      format_date(sanpham) {
        if (sanpham) {
          return moment(String(sanpham)).format('DD/MM/YYYY')
        }
      },

    },

  });
</script>

<!-- ckeditor -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.19.1/ckeditor.js"></script>
<script>
  CKEDITOR.replace('mo_ta')
  CKEDITOR.replace('update_mo_ta'); // replace name mô tả
</script>
@endsection