@extends('layouts.head')

<!-- Jumbotron -->

<div class=" text-center bg-light  shadow"
    style="margin-top: 58px;height:700px;position:relative;
  background-image:url('http://images.huffingtonpost.com/2016-09-13-1473769006-9036433-Moving.jpg');
  background-position:center;
  ">

    <div style="width:100%; height:100%;position: absolute;top:0; bottom:0; background-color:rgba(0, 0, 0, 0.482)">
        <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">

            <h1 class="my-5 text-light">Request Your Order Moving</h1>
            <h4 class="mb-3 text-light">Subheading</h4>
        </div>

    </div>
</div>

@section('content')
    <div style="margin-top:-250px !important;margin-bottom:30px ">
        <section class="w-100 d-flex justify-content-center">

            <div class="card w-50 shadow">

                <form action="">
                    <div class="row register-form p-5  justify-content-md-center">

                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="First Name *"
                                    value="" />
                                <label for="floatingInput" style="color:grey">First Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Last Name *"
                                    value="" />
                                <label for="floatingInput" style="color:grey">Last Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Your location"
                                    value="" />
                                <label for="floatingInput" style="color:grey">Your location</label>
                            </div>

                            {{-- <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Your destination"
                                    value="" />
                                <label for="floatingInput" style="color:grey">Your destination</label>
                            </div> --}}
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput"
                                    placeholder="name@example.com">
                                <label for="floatingInput" style="color:grey">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" id="floatingInput"
                                    class="form-control" placeholder="Your Phone number" value="" />
                                <label for="floatingInput" style="color:grey">Phone number</label>

                            </div>
                            <div>
                                <span style="color:grey">or</span> <button class="btn m-3 p-2 w-75"
                                    style="background-color:#906a02;color:white"> get my location</button>
                            </div>
                            {{-- <div>
                                <span style="color:grey">or</span> <button class="btn  m-3 p-2 w-75"
                                    style="background-color:#906a02;color:white"> select my destination</button>
                            </div> --}}
                        </div>
                        <input type="submit" class="btn w-25 bg-color my-3 justify-content-md-end" value="Request now" />

                    </div>
                </form>
            </div>
        </section>
    </div>
@endsection
