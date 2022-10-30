@extends('layouts.head')

@section('content')

<div style="display: grid;
place-items: center;">

<div class="container d-flex justify-content-center m-5" >
    <div class="card p-3 py-4"style="width: 900px;border:none">
        <div class="text-center"> 
		<img src="https://i.imgur.com/stD0Q19.jpg" width="100" class="rounded-circle">
            <h3 class="mt-2">Maria Smantha</h3>
            <div class="d-flex  justify-content-between">
			<div class="mt-1 clearfix w-75 d-flex justify-content-end"><p class="w-75 text-center"> Driver</p></div>
			 <a class="profile_button btn btn-success ">Edit profile</a>
            </div>
             <span></span>
			
			<div class="row mt-3 mb-3">
			
			  <div class="col-md-4">
				<h5>Trips</h5>
				<span class="num">10</span>
			  </div>
			  <div class="col-md-4">
			  <h5>Rating</h5>
				<span class="num">10</span>
			  </div>
			  <div class="col-md-4">
			  <h5>Years</h5>
				<span class="num">10</span>
			  </div>
			
			</div>
			
			<hr class="line">
			
			  
			 <div class="profile mt-5">
			 

		</div>
			   
        </div>
    </div>
</div></div>
@endsection