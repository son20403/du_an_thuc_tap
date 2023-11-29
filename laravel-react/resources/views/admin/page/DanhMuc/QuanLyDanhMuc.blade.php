@extends('admin.share.layout')

@section('tieudetrang')
Quan Ly Danh Muc
@endsection

@section('noidung')
<main id="app" v-cloak>

  <div class="col-md-12 mb-3 mt-3">
    <div class="modal-category">
      <!-- Button trigger modal -->
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
        class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
        Thêm Danh Mục
      </button>

      <!-- Modal them danh muc-->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="ModalEditLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">Thêm Danh Mục</h3>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <label class="block text-sm">
                <label>Tên Danh Mục</label>
                <input v-model="add_danh_muc.ten_danh_muc" type="text" class="form-control"
                  placeholder="Nhập Vào Tên Danh Mục">
                <div v-if="errors.ten_danh_muc" class="alert alert-warning">
                  @{{ errors.ten_danh_muc[0] }}
                </div>
              </label>
            </div>

            <div class="modal-footer mt-3">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button v-on:click="them_danh_muc()" type="button" class="btn btn-primary">
              Thêm Danh Mục
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
            <th class="px-4 py-3">Tên danh mục</th>
            <th class="px-4 py-3">Thao tác</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

          <tr v-for="(value, key) in data_danhmuc" class="text-gray-700 dark:text-gray-400" v-if="value.is_delete == 0">
            <!-- <div v-if="value.is_delete !== 0"> -->

            <td class="px-4 py-3">
              @{{ key + 1 }}
            </td>
            <td class="px-4 py-3 text-sm">
              @{{ value ? value.ten_danh_muc : 'Không có tên danh mục' }}
            </td>
            <td class="px-4 py-3 text-xs">
              <button v-on:click="cap_nhat(value)" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#ModalEdit">Edit</button>
              <button v-on:click="xoa_danh_muc = value" class="btn btn-danger" data-bs-toggle="modal"
                data-bs-target="#confirmationModal">Xóa</button>
              <!-- Modal cap nhat-->
              <div class="modal fade" id="ModalEdit" tabindex="-1" role="dialog" aria-labelledby="ModalEditLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="exampleModalLabel">Cập Nhật Danh Mục</h3>
                      <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body">
                      <label class="block text-sm">
                        <label>Tên Danh Mục</label>
                        <input v-model="edit_danh_muc.ten_danh_muc" type="text" class="form-control"
                          placeholder="Nhập Vào Tên Danh Mục">
                        <div v-if="errors.ten_danh_muc" class="alert alert-warning">
                          @{{ errors.ten_danh_muc[0] }}
                        </div>
                      </label>
                    </div>

                    <div class="modal-footer mt-3">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button v-on:click="cap_nhat_danh_muc()" type="button" class="btn btn-primary">
                        Cập Nhật Danh Mục
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
          <button type="button" class="btn btn-danger" v-on:click="kich_hoat_xoa_danh_muc()"
            data-bs-dismiss="modal">Xoá</button>
        </div>
      </div>
    </div>
  </div>
</main>

@endsection

@section('js')

<script>
  new Vue({
    el: '#app',
    data: {
      data_danhmuc: [],
      xoa_danh_muc: {},
      add_danh_muc: {},
      edit_danh_muc: {},      
      errors: {},
    },
    created() {
      this.GetData();
    },

    methods: {
      // hien thi danh sach danh muc
      GetData() {
        axios
          .get('/admin/danh-muc/du-lieu')
          .then((res) => {
            this.data_danhmuc = res.data.data_danhmuc;
          });
      },
      cap_nhat(value) {
        this.edit_danh_muc = value; // Tạo một bản sao của user để tránh ảnh hưởng trực tiếp đến dữ liệu người dùng
      },
      kich_hoat_xoa_danh_muc() {
        axios
          .post('/admin/danh-muc/xoa', this.xoa_danh_muc)
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

      them_danh_muc() {
        axios
          .post('/admin/danh-muc', this.add_danh_muc)
          .then((res) => {
            console.log(res.data); // In ra response từ server để xem có lỗi gì không

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

      cap_nhat_danh_muc() {
        axios
          .post('/admin/danh-muc/cap-nhat', this.edit_danh_muc)
          .then((res) => {
            console.log(res.data); // In ra response từ server để xem có lỗi gì không

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