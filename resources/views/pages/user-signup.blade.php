@extends('components.signup')

@section('user-signup')

<form>

    <div class="d-flex align-items-center mb-3 pb-1">
      <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
      <span class="h1 fw-bold mb-0">Logo</span>
    </div>

    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

     <div class="form-outline mb-4">
        <input type="text" name="name" id="form2Example27" class="form-control form-control-lg" placeholder="Name"/>
      </div>

    <div class="form-outline mb-4">
      <input type="email" name="email" id="form2Example17" class="form-control form-control-lg" placeholder="Email address" />
    </div>

    <div class="form-outline mb-4">
        <select name="gender" id="form2Example27" class="form-control form-control-lg">
            <option disabled selected>-- Select Your gender--</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>
      {{-- <input type="email" id="form2Example17"  placeholder="Email address" /> --}}
    </div>

        <div class="form-outline mb-4">
            <label class="radio inline">
                <input type="radio" name="gender" value="male" checked>
                <span> Male </span>
            </label>
            <label class="radio inline">
                <input type="radio" name="gender" value="female">
                <span>Female </span>
            </label>

    </div>
    <div class="form-outline mb-4">
      <input type="password" name="password" id="form2Example27" class="form-control form-control-lg" placeholder="Password" />
    </div>


    <div class="form-outline mb-4">
        <input type="password" name="conPassword" id="form2Example27" class="form-control form-control-lg" placeholder="Confirm Password"/>
      </div>

    <div class="pt-1 mb-3">
      <button class="btn bg-color btn-lg btn-block" type="button">Signup</button>
    </div>

    {{-- <a class="small text-muted" href="#!">Forgot password?</a> --}}
    <p class="mb-3 pb-lg-2" style="color: #393f81;"> have an account? <a href="/login"
        style="color: #393f81;">login here</a></p>
    <a href="#!" class="small text-muted">Terms of use.</a>
    <a href="#!" class="small text-muted">Privacy policy</a>
  </form>
@endsection
