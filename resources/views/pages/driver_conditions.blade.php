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
                    <a href="/driver_signup" class="btn bg-color p-2 mr-2">Signup now</a>
                    <a href="" class="text-white " style="text-decoration: underline">already have an account ?
                        login</a>

                </div>
            </div>
        </div>
    </div>
@endsection

@section('content')
    <section>
        <h2 class="section-header">Why become a captain?</h2>

    </section>
@endsection
