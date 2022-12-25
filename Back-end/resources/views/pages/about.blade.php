@extends('layouts.head')
@section('Jumbotron')

    <!-- Jumbotron -->

    <div class=" text-center bg-light position-relative shadow" style="margin-top: 58px;height:450px;
    background-image:url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cardboard-boxes-and-cleaning-things-for-moving-into-a-new-home-1573953252.jpg?crop=1.00xw:0.758xh;0,0.173xh&resize=1200:*')
    ">
<div style="width:100%; height:100%;position: absolute;top:0; bottom:0; background-color:rgba(0, 0, 0, 0.482)">
    <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center" >

    <h1 class="my-5 text-light">ABOUT US</h1>
        <h4 class="mb-3 text-light">Subheading</h4>
    </div>
      </div>
    </div>

    <!-- Jumbotron -->
@endsection
@section('content')

<main id="main">


    @include('components.aboutSection')
    <section >
        <div class="section-header">
            <h2>Our work</h2>
            <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
          </div>
      <div class="container">
        <div class="row">
        <div class="four col-md-3">
            <div class="counter-box ">
                <i class="fa fa-thumbs-o-up"></i>
                <span class="counter">2147</span>
                <p>Happy Customers</p>
            </div>
        </div>
        <div class="four col-md-3">
            <div class="counter-box">
                <i class="fa fa-group"></i>
                <span class="counter">3275</span>
                <p>Registered Members</p>
            </div>
        </div>
        <div class="four col-md-3">
            <div class="counter-box">
                <i class="fa fa-shopping-cart"></i>
                <span class="counter">289</span>
                <p>Available Products</p>
            </div>
        </div>
        <div class="four col-md-3">
            <div class="counter-box">
                <i class="fa  fa-user"></i>
                <span class="counter">1563</span>
                <p>Saved Trees</p>
            </div>
        </div>
      </div>
    </div>

      </div>
    </section><!-- End Alt Services Section 2 -->



  @include('components.testimonials')


</main>

<script>




    </script>
@endsection
