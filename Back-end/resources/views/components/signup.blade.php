@extends('layouts.head')

@section('content')

<section  >
    <div class="container ">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col col-xl-8">
          <div class="card" style="border-radius: 1rem;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

          ">
            <div class="row g-0">
              <div class=" d-flex align-items-center">
                <div class="card-body p-2 p-lg-5 text-black">

                  @yield('user-signup')
                  @yield('driver-signup')
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection
