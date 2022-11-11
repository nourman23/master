@extends('layouts.head')
@section('Jumbotron')
    <div class=" text-center bg-light position-relative shadow" style="margin-top: 58px;height:450px;
    background-image:url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cardboard-boxes-and-cleaning-things-for-moving-into-a-new-home-1573953252.jpg?crop=1.00xw:0.758xh;0,0.173xh&resize=1200:*')
    ">
<div style="width:100%; height:100%;position: absolute;top:0; bottom:0; background-color:rgba(0, 0, 0, 0.482)">
    <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center" >

        <h1 class="my-5 text-light">Request your order move</h1>
        <h4 class="mb-3 text-light">Subheading</h4>

    </div>
      </div>
    </div>
@endsection

@section("content")

<div class="container register my-5">
    <div class="row">
        <div class="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
            {{-- <input type="submit" name="" value="Login"/><br/> --}}
        </div>
        <div class="col-md-9 register-right">
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <h3 class="register-heading">Request Your Order Moving</h3>
                    <div class="row register-form">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="First Name *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Last Name *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your location" value="" />
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your destination" value="" />
                            </div>



                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Your Email *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" />
                            </div>
                            <div>
                            <span>or</span>  <button class="btn m-2" style="background-color:#906a02;color:white"> get my location</button></div>
                            <div>
                            <span>or</span>  <button class="btn  m-2" style="background-color:#906a02;color:white"> select my destination</button></div>
                            <input type="submit" class="btnRegister"  value="Request now"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</div>





@endsection
