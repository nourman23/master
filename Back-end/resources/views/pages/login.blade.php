@extends('layouts.head')

@section('content')
    <section>
        <div class="container ">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col col-xl-10">
                    <div class="card"
                        style="border-radius: 1rem;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

          ">
                        <div class="row g-0">
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="https://images.pexels.com/photos/7218206/pexels-photo-7218206.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
                            </div>
                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5 text-black">

                                    <form action="/user_login" method="POST">
                                        @csrf

                                        <div class="d-flex align-items-center mb-3 pb-1">
                                            <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                                            <span class="h1 fw-bold mb-0">Logo</span>
                                        </div>

                                        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">login into your account
                                        </h5>
                                        @if (session()->has('message'))
                                            <div class="alert alert-danger m-3">
                                                {{ session()->get('message') }}
                                            </div>
                                        @endif
                                        <div class="form-outline mb-4">
                                            <input type="email" name="email" id="form2Example17"
                                                class="form-control form-control-lg" placeholder="Email address" />
                                            @if ($errors->has('email'))
                                                <span class="text-danger">{{ $errors->first('email') }}</span>
                                            @endif
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" name="password" id="form2Example27"
                                                class="form-control form-control-lg" placeholder="Password" />
                                            {{-- <label class="form-label" for="form2Example27">Password</label> --}}
                                        </div>
                                        <div class="form-group mb-3">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" name="remember"> Remember Me
                                                </label>
                                            </div>
                                        </div>

                                        <div class="pt-1 mb-4">
                                            <button class="btn bg-color btn-lg btn-block" type="submit">Login</button>
                                        </div>

                                        {{-- <a class="small text-muted" href="#!">Forgot password?</a> --}}
                                        <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a
                                                href="/signup" style="color: #393f81;">Register here</a></p>
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
