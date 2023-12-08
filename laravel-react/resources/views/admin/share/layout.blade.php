<!DOCTYPE html>
<html :class="{ 'theme-dark': dark }" x-data="data()" lang="en">

<head>

<title>@yield('tieudetrang')</title>
@vite([ 'resources/js/app.js'])
@include('admin.share.css')
    @yield('css')
</head>

<body>
  <div class="flex h-screen bg-gray-50" :class="{ 'overflow-hidden': isSideMenuOpen }">
    <!-- Desktop sidebar -->
    <div class="sidebar">

      @include('admin.share.sidebarmenu')
    </div>
    
      <div class="flex flex-col flex-1 w-full">
        <header class="z-10 py-4 bg-white shadow-md">

          @include('admin.share.header')
        </header>
        <main class="h-full overflow-y-auto">
          <div class="px-6 mx-auto grid">
            @yield('noidung')
          </div>
        </main>
      </div>
    
  </div>
  @include('admin.share.js')
  @yield('js')
</body>

</html>