@extends('admin.share.layout')

@section('tieudetrang')
Quan Ly The Loai
@endsection

@section('noidung')
<main id="app">

  <div class="col-md-12 mb-3 mt-3">
    <div class="modal-category">
      <!-- Button trigger modal -->
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
        class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
        Thêm Thể Loại
      </button>
      <!-- Modal them danh muc-->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">Thêm Thể Loại</h3>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Tên Thể Loại</span>
                <input placeholder="Nhập vào Tên Thể Loại" type="text" v-model="add_the_loai.ten_the_loai"
                  class="form-control">
                <div v-if="errors.ten_the_loai" class="alert alert-warning">
                  @{{ errors.ten_the_loai[0] }}
                </div>
              </label>


              <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Tên Danh Mục</span>
                <select v-model="add_the_loai.ma_danh_muc" class="form-control">
                  <option v-for="(danhmuc, index) in data_danhmuc" 
                    :value="danhmuc.id">@{{danhmuc.ten_danh_muc }}</option>
                </select>
                <div v-if="errors.ma_danh_muc" class="alert alert-warning">
                  @{{ errors.ma_danh_muc[0] }}
                </div>
              </label>
            </div>


            <div class="modal-footer mt-3">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button v-on:click="them_the_loai()" type="button" class="btn btn-primary">
              Thêm Thể Loại
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
            <th class="px-4 py-3">Tên Thể Loại</th>
            <th class="px-4 py-3">Tên Danh Mục</th>
            <th class="px-4 py-3">Thao tác</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

          <tr v-for="(theloai, key) in data_theloai" class="text-gray-700 dark:text-gray-400"
            v-if="theloai.is_delete == 0">
            <td class="px-4 py-3">
              @{{ key + 1 }}
            </td>
            <td class="px-4 py-3 text-sm">
              @{{ theloai ? theloai.ten_the_loai : 'Không có tên danh mục' }}
            </td>
            <td class="px-4 py-3 text-sm">
              <span v-for="(danhmuc, index) in data_danhmuc" v-if="theloai.ma_danh_muc === danhmuc.id">
                @{{ danhmuc.ten_danh_muc }}
              </span>
            </td>
            <td class="px-4 py-3 text-xs">
              <button v-on:click="cap_nhat(theloai)" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#ModalEdit">Edit</button>
              <button v-on:click="xoa_the_loai = theloai" class="btn btn-danger" data-bs-toggle="modal"
                data-bs-target="#confirmationModal">Xóa</button>

              <!-- Modal cap nhat-->
              <div class="modal fade" id="ModalEdit" tabindex="-1" role="dialog" aria-labelledby="ModalEditLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="exampleModalLabel">Cập Nhật Thể Loại</h3>
                      <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body">
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">Tên Thể Loại</span>
                        <input placeholder="Nhập vào Tên Thể Loại" type="text" v-model="edit_the_loai.ten_the_loai"
                          class="form-control">
                        <div v-if="errors.ten_the_loai" class="alert alert-warning">
                          @{{ errors.ten_the_loai[0] }}
                        </div>
                      </label>


                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">Tên Danh Mục</span>
                        <select v-model="edit_the_loai.ma_danh_muc" class="form-control">
                          <option v-for="(danhmuc, index) in data_danhmuc" :checked="danhmuc.id === theloai.ma_danh_muc"
                            :value="danhmuc.id">@{{danhmuc.ten_danh_muc }}</option>
                        </select>
                        <div v-if="errors.ma_danh_muc" class="alert alert-warning">
                          @{{ errors.ma_danh_muc[0] }}
                        </div>
                      </label>
                    </div>


                    <div class="modal-footer mt-3">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button v-on:click="cap_nhat_the_loai()" type="button" class="btn btn-primary">
                        Cập Nhật Thể Loại
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
      data_danhmuc: [],
      data_theloai: [],
      add_the_loai: {},
      edit_the_loai: {},
      xoa_the_loai: {},
      errors: {},
    },
    created() {
      this.GetData();
    },
    methods: {
      // hien thi danh sach the loai
      GetData() {
        axios
          .get('/admin/the-loai/du-lieu')
          .then((res) => {
            this.data_danhmuc = res.data.data_danhmuc;
            this.data_theloai = res.data.data_theloai;
          });
      },
      cap_nhat(theloai) {
        this.edit_the_loai = theloai; // Tạo một bản sao của user để tránh ảnh hưởng trực tiếp đến dữ liệu người dùng
      },
      kich_hoat_xoa_the_loai() {
        axios
          .post('/admin/the-loai/xoa', this.xoa_the_loai)
          .then((res) => {
            if (res.data.status) {
              const message = "Dữ liệu đã được xoá thành công!";
              toastr.success(message);
              this.GetData();
            } else {
              toastr.error('Có lỗi không mong muốn!');
            }
          })
      },
      them_the_loai() {
        axios
          .post('/admin/the-loai', this.add_the_loai)
          .then((res) => {
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
            if (error && error.response.data && error.response.data.errors) {
              this.errors = error.response.data.errors;
            } else {
              toastr.error('Có lỗi không mong muốn! 2');
            }
          })
      },
      cap_nhat_the_loai() {
        axios
          .post('/admin/the-loai/cap-nhat', this.edit_the_loai)
          .then((res) => {
            if (res.data.status) {
              toastr.success(res.data.message);
              this.GetData();
              // Tắt modal xác nhận
              $('#ModalEdit').modal('hide');
            } else {
              toastr.error('Có lỗi không mong muốn! 1');
            }
          })
          .catch((error) => {
            if (error && error.response.data && error.response.data.errors) {
              this.errors = error.response.data.errors;
            } else {
              toastr.error('Có lỗi không mong muốn! 2');
            }
          })
      },
    },

  });
</script>

@endsection