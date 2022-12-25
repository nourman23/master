@extends('layouts.head')
@section('Jumbotron')
    <div class=" text-center bg-light position-relative shadow"
        style="margin-top: 58px;height:450px;
    background-image:url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cardboard-boxes-and-cleaning-things-for-moving-into-a-new-home-1573953252.jpg?crop=1.00xw:0.758xh;0,0.173xh&resize=1200:*')
    ">
        <div style="width:100%; height:100%;position: absolute;top:0; bottom:0; background-color:rgba(0, 0, 0, 0.482)">
            <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <h2 class="mx-4 text-light">Drive with Mover and be a Captain</h2>
                <div class="d-flex align-items-center p-2">
                    <a href="/driver_signup" class="btn bg-color p-2 mr-2">
                        <div class="d-flex align-items-center">
                            <ion-icon name="speedometer-outline" class="mr-2" style="font-size:20px"></ion-icon>Signup now
                        </div>

                    </a>
                    <a href="" class="text-white " style="text-decoration: underline">already have an account ?
                        login</a>

                </div>
            </div>
        </div>
    </div>
@endsection

@section('content')
    <section>
        <div class="section-header">
            <h2>Why become a captain?</h2>
        </div>
        <div class="container">
            <div class="row ">
                <div class="col col-lg-4 col-md-7 col-sm-12  ">
                    <div class="card shadow h-100 border-0 mx-2 p-2 justify-content-center align-items-center">
                        <i class="fas fa-duotone fa-business-time m-2" style="font-size:40px"></i>
                        <div class="card-title text-center p-3">
                            Full time? Part time? With Mover you work on your own time.
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-md-7 col-sm-12 ">
                    <div class="card shadow h-100 border-0 mx-2 p-2 justify-content-center align-items-center">
                        <i class="fas fa-duotone fa-sack-dollar m-2" style="font-size:40px"></i>
                        <div class="card-title text-center p-3">
                            Make your own money
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-md-7 col-sm-12 ">
                    <div class="card shadow h-100 border-0 mx-2 p-2 justify-content-center align-items-center">
                        <i class="fas fa-duotone fa-face-smile m-2" style="font-size:40px"></i>
                        <div class="card-title text-center p-3">
                            Control your own life
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="section-header">
            <h2>Requirements</h2>
        </div>
        <div class="container d-flex justify-content-center ">
            <div class="row w-75 ">
                <div class="d-flex align-items-center justify-content-center my-3">
                    <ion-icon name="calendar-outline" class="mx-4 w-25" style="font-size:45px;color:#feb900">
                    </ion-icon>
                    <div>
                        <h3>AGE</h3>
                        <p>You have to be over 18 years of age with a valid driver’s license to drive with Mover.</p>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-center my-3">
                    <ion-icon name="shield-checkmark-outline" class="mx-4 w-25" style="font-size:45px;color:#feb900">
                    </ion-icon>
                    <div>
                        <h3>Screening</h3>
                        <p>The screening process may include drug tests, police reports, credit checks etc.</p>
                    </div>
                </div>
                {{-- <div class="d-flex align-items-center ">
                    <ion-icon name="credit-card-outline" class="mx-4 w-25" style="font-size:45px;color:#feb900">
                    </ion-icon>
                    <div>
                        <h3></h3>
                    </div>
                </div> --}}
            </div>

    </section>
    <section style="position: relative;">
        <img src="{{ asset('images/driver.jpg') }}" style="filter: brightness(40%);height:500px;" width="100%"
            height="100%" alt="">
        <div class=" h-100 d-flex flex-column justify-content-center align-items-center"
            style=" position:absolute; top:1%; left:30%">

            <h3 class="text-white my-5">Have you got what it takes to be a Mover Captain?</h3>
            <a href="/driver_signup" class="btn bg-color p-2 mr-2">Signup now</a>

        </div>
    </section>

    <section>


        <div class=" bg-light h-100">
            <div class="d-flex align-items-center justify-content-center h-100">

                <div class="col-lg-4 col-md-7 col-sm-12 my-5">

                    <h2>How to start ?</h2>

                    <div class="d-flex align-items-center justify-content-center my-4">
                        <i class="fa-solid fa-1 m-4 bg-color p-3" style="font-size: 40px"></i>
                        <div>
                            <h4>Register</h4>
                            <p>Complete <a href="/driver_signup" style="color:#feb900;text-decoration:underline">register
                                    form</a> apply to become
                                a Mover Captain.</p>
                        </div>
                    </div>


                    <div class="d-flex align-items-center justify-content-center my-4">
                        <i class="fa-solid fa-2 m-4 bg-color p-3" style="font-size: 40px"></i>

                        <div>
                            <h4>Train</h4>
                            <p>After reviewing your application we’ll invite you for a training session.</p>
                        </div>
                    </div>


                    <div class="d-flex align-items-center justify-content-center my-4">
                        <i class="fa-solid fa-3 m-4 bg-color p-3" style="font-size: 40px"></i>

                        <div>
                            <h4>Ride</h4>
                            <p>When training is complete, you can start to earn money!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12 m-5 h-100">
                    <img src="https://blog.ptvgroup.com/wp-content/uploads/2022/02/Truckdriver.jpg" height="100%"
                        width="100%" alt="" style="border-radius: 20px">
                </div>
            </div>
        </div>

    </section>
@endsection
