@extends('layouts.head')
@section('Jumbotron')

    <!-- Jumbotron -->

    <div class=" text-center bg-light position-relative shadow" style="margin-top: 58px;height:450px;
    background-image:url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cardboard-boxes-and-cleaning-things-for-moving-into-a-new-home-1573953252.jpg?crop=1.00xw:0.758xh;0,0.173xh&resize=1200:*')
    ">
<div style="width:100%; height:100%;position: absolute;top:0; bottom:0; background-color:rgba(0, 0, 0, 0.482)">
    <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center" >

    <h1 class="my-5 text-light">OUR SERVICES</h1>
        <h4 class="mb-3 text-light">Subheading</h4>
    </div>
      </div>
    </div>

    <!-- Jumbotron -->
@endsection
@section('content')
@include('components.topServices')
@include('components.botServices')

@endsection
