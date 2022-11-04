<header>
    <!-- Navbar -->
    <nav class="navbar navbar-expand navbar-light bg-white fixed-top ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-start p-2">
            <a href="/"><img src="" alt="logo"></a>
        </div>
        <div class="collapse navbar-collapse justify-content-end mx-4" >
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
      </div>
    </nav>
    <!-- Navbar -->


    @yield('Jumbotron')
  </header>
