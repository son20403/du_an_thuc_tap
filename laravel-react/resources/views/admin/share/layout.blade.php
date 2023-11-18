<!DOCTYPE html>
<html :class="{ 'theme-dark': dark }" x-data="data()" lang="en">

<head>
<title>@yield('tieudetrang')</title>
@include('admin.share.css')
    @yield('css')
</head>

<body>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
    <!-- Desktop sidebar -->
    <div class="sidebar">

      @include('admin.share.sidebarmenu')
    </div>
    
      <div class="flex flex-col flex-1 w-full">
        <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">

          @include('admin.share.header')
        </header>
        <main class="h-full overflow-y-auto">
          <div class="container px-6 mx-auto grid">
            @yield('noidung')
          </div>
        </main>
      </div>
    
  </div>
  @include('admin.share.js')
  @yield('js')
</body>

</html>