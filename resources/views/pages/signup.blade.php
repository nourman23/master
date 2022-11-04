@extends('layouts.head')

@section('content')

<section class="vh-00" >
    <div class="container  h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

          ">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="https://images.pexels.com/photos/7218206/pexels-photo-7218206.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-2 p-lg-5 text-black">

                  <form>

                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                      <span class="h1 fw-bold mb-0">Logo</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                     <div class="form-outline mb-4">
                        <input type="password" id="form2Example27" class="form-control form-control-lg" placeholder="Name"/>
                        {{-- <label class="form-label" for="form2Example27">Name</label> --}}
                      </div>

                    <div class="form-outline mb-4">
                      <input type="email" id="form2Example17" class="form-control form-control-lg" placeholder="Email address" />
                      {{-- <label class="form-label" for="form2Example17">Email address</label> --}}
                    </div>


                    <div class="form-outline mb-4">
                      <input type="password" id="form2Example27" class="form-control form-control-lg" placeholder="Password" />
                      {{-- <label class="form-label" for="form2Example27">Password</label> --}}
                    </div>


                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example27" class="form-control form-control-lg" placeholder="Confirm Password"/>
                        {{-- <label class="form-label" for="form2Example27">Confirm Password</label> --}}
                      </div>

                    <div class="pt-1 mb-3">
                      <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                    </div>

                    {{-- <a class="small text-muted" href="#!">Forgot password?</a> --}}
                    <p class="mb-3 pb-lg-2" style="color: #393f81;"> have an account? <a href="/login"
                        style="color: #393f81;">login here</a></p>
                    <a href="#!" class="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection
