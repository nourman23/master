@extends('components.signup')

@section('driver-signup')
    {{-- @if ($errors->any())
        {{ implode('', $errors->all('<div>:message</div>')) }}
    @endif --}}
    <form action="/driver_signup" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="d-flex align-items-center mb-3 pb-1">
            <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
            <span class="h1 fw-bold mb-0">Logo</span>
        </div>

        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Become a driver with us</h5>

        <div class="form-outline mb-4">
            <input type="text" name="name" id="form2Example27" class="form-control form-control-lg"
                placeholder="Name" />
            @if ($errors->has('name'))
                <span class="text-danger">{{ $errors->first('name') }}</span>
            @endif
        </div>

        <div class="form-outline mb-4">
            <input type="email" name="email" id="form2Example17" class="form-control form-control-lg"
                placeholder="Email address" />
            @if ($errors->has('email'))
                <span class="text-danger">{{ $errors->first('email') }}</span>
            @endif
        </div>
        <div class="form-outline mb-4">
            <label for="form2Example17">Your image</label>
            <input type="file" name="image" id="form2Example17" class="form-control form-control-lg" />
            @if ($errors->has('image'))
                <span class="text-danger">{{ $errors->first('image') }}</span>
            @endif
        </div>
        <div class="form-outline mb-4">
            <label for="form2Example17">Your license</label>
            <input type="file" name="license" id="form2Example17" class="form-control form-control-lg" />
            @if ($errors->has('license'))
                <span class="text-danger">{{ $errors->first('license') }}</span>
            @endif
        </div>

        <div class="form-outline mb-4">
            <select name="gender" id="form2Example27" class="form-control form-control-lg">
                <option disabled selected>-- Select Your gender--</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>
            @if ($errors->has('gender'))
                <span class="text-danger">{{ $errors->first('gender') }}</span>
            @endif
            {{-- <input type="email" id="form2Example17"  placeholder="Email address" /> --}}
        </div>
        <div class="form-outline mb-4">
            <input type="number" name="age" max="40" min="18" id="form2Example17"
                class="form-control form-control-lg" placeholder="Age" />
            @if ($errors->has('age'))
                <span class="text-danger">{{ $errors->first('age') }}</span>
            @endif
        </div>
        <div class="form-outline mb-4">
            <input type="number" name="phone" id="form2Example17" class="form-control form-control-lg"
                placeholder="Phone number" />
            @if ($errors->has('phone'))
                <span class="text-danger">{{ $errors->first('phone') }}</span>
            @endif
        </div>
        {{-- <div class="form-outline mb-4">
            <input type="text" name="location" id="form2Example17" class="form-control form-control-lg"
                placeholder="Your laocation" />
            <button class="btn bg-color mt-2">or click here to easy set you location</button>
        </div> --}}
        <div class="form-outline mb-4">
            <input type="password" name="password" id="form2Example27" class="form-control form-control-lg"
                placeholder="Password" />
            @if ($errors->has('password'))
                <span class="text-danger">{{ $errors->first('password') }}</span>
            @endif
        </div>


        <div class="form-outline mb-4">
            <input type="password" name="password_confirmation" id="form2Example27" class="form-control form-control-lg"
                placeholder="Confirm Password" />
            @if ($errors->has('password_confirmation'))
                <span class="text-danger">{{ $errors->first('password_confirmation') }}</span>
            @endif
        </div>

        <div class="pt-1 mb-3">
            <button class="btn bg-color btn-lg btn-block" type="submit">Signup</button>
        </div>

        {{-- <a class="small text-muted" href="#!">Forgot password?</a> --}}
        <p class="mb-3 pb-lg-2" style="color: #393f81;"> have an account? <a href="/login" style="color: #393f81;">login
                here</a></p>
        <a href="#!" class="small text-muted">Terms of use.</a>
        <a href="#!" class="small text-muted">Privacy policy</a>
    </form>
@endsection
