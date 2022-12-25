<header>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top ">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-start p-2">
                <a href="/"><img src="" alt="logo"></a>
            </div>
            <div class="collapse navbar-collapse justify-content-end mx-4" id="navbarSupportedContent">
                <ul class="navbar-nav  navbar-expand-lg mx-5">
                    <li class="nav-item  p-2 px-5 ">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item p-2 px-5">
                        <a class="nav-link" href="/services">Services</a>
                    </li>
                    <li class="nav-item p-2 px-5">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                    <li class="nav-item p-2 px-5">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                </ul>
            </div>
            @if (Auth::user())
                <div class="p-2">
                    <a class="btn rounded-circle bg-color mr-4" href="/profile"><i class="fa fa-light fa-user"></i></a>
                    {{-- <a class="btn bg-color mr-4" href="/profile"><i class="fa fa-solid fa-user-vneck-hair-long"></i></a> --}}
                </div>
            @else
                <div class="p-2">
                    <a class="btn bg-color mr-5" href="/login"><i class="fa fa-light fa-right-to-bracket pr-2"
                            style=""></i>Login</a>
                </div>
            @endif


        </div>
    </nav>
    <!-- Navbar -->



    @yield('Jumbotron')
</header>
