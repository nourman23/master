@extends('layouts.head')

<!-- Jumbotron -->

<div class=" text-center bg-light  shadow"
    style="margin-top: 58px;height:700px;position:relative;
  background-image:url('http://images.huffingtonpost.com/2016-09-13-1473769006-9036433-Moving.jpg');
  background-position:center;
  ">

    <div style="width:100%; height:100%;position: absolute;top:0; bottom:0; background-color:rgba(0, 0, 0, 0.482)">

        <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center ">
            <div style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                <ul class="nav nav-tabs bg-light" id="myTab" role="tablist" style="
    width:500px;
   ">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-dark active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home" type="button" role="tab" aria-controls="home"
                            aria-selected="true">
                            Become a driver
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-dark" id="profile-tab" data-bs-toggle="tab"
                            data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                            aria-selected="false">Move Order</button>
                    </li>

                </ul>
                <div class="tab-content p-5 " id="myTabContent"
                    style="
      width:500px;
      background-color:white;
    ">
                    {{-- here where if choose driver or want to request a move request --}}
                    <div class="tab-pane fade show active text-dark" id="home" role="tabpanel"
                        aria-labelledby="home-tab">
                        <p>Become a driver and get paid ! </p>
                        <a href="/driver_conditions" class="btn bg-color ">
                            <div class="d-flex ">
                                <i class="material-icons px-2">people</i> Join Us
                            </div>
                        </a>
                    </div>
                    <div class="tab-pane fade text-dark" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <p>Request an drive for your things !</p>
                        <a href="/move_order_request" class="btn bg-color">
                            <div class="d-flex "><i class="fa-solid fa-people-carry-box px-2"
                                    style="font-size: 20px"></i>Request move order</div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<div style="margin-top:-200px !important;margin-bottom:30px ">
    @include('components.topServices')
</div>
<!-- Jumbotron -->
@section('content')
    @include('components.aboutSection')
    @include('components.botServices')
    @include('components.testimonials')
@endsection
