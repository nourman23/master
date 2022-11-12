@extends('layouts.head')
@section('Jumbotron')
    <div class=" text-center bg-light position-relative shadow"
        style="margin-top: 58px;height:450px;
    background-image:url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cardboard-boxes-and-cleaning-things-for-moving-into-a-new-home-1573953252.jpg?crop=1.00xw:0.758xh;0,0.173xh&resize=1200:*')
    ">
        <div style="width:100%; height:100%;position: absolute;top:0; bottom:0; background-color:rgba(0, 0, 0, 0.482)">
            <div class="w-100 h-100 d-flex  justify-content-center align-items-center">

                <img src="{{ asset('images/hello.png ') }}" style="width:50px"alt="">
                <h2 class="mx-4 text-light">Hello Nourman</h2>
            </div>
        </div>
    </div>
@endsection

@section('content')
    {{-- profile page --}}
    <section class=" profile ">

        <div class="row mx-5 justify-content-around">
            <div class="col-lg-3 col-md-12 col-sm-12">
                <!-- Tab navs -->
                <ul class="nav nav-tabs shadow flex-column p-4 m-2" id="myTab" role="tablist">
                    <li class="nav-item " role="presentation">
                        <button class="nav-link text-dark active w-100 py-4" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                            Your Profile
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-dark w-100 py-4" id="profile-tab" data-bs-toggle="tab"
                            data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                            aria-selected="false">
                            Your Orders history
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-dark w-100 py-4" id="settings-tab" data-bs-toggle="tab"
                            data-bs-target="#settings" type="button" role="tab" aria-controls="settings"
                            aria-selected="false">
                            Settings
                        </button>
                    </li>

                </ul>
                <!-- Tab navs -->
            </div>

            <div class="tab-content col-8 " id="myTabContent">
                {{-- here where if choose driver or want to request a move request --}}
                <div class="tab-pane fade show active text-dark" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="row d-flex justify-content-center ">
                        <div class="col col-lg-10 col-md-12 col-sm-12 ">

                            <div class="card-body p-4">
                                <div class="d-flex text-black">
                                    <div class="flex-shrink-0">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                            alt="Generic placeholder image" class="img-fluid"
                                            style="width: 180px; border-radius: 10px;">
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <div class="d-flex justify-content-between mb-3">
                                            <h5>Danny McLoan</h5>
                                            <div>
                                                <button type="button" class="btn bg-color flex-grow-1">Edit
                                                    profile</button>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-around rounded-3 p-2 mb-2"
                                            style="background-color: #efefef;">
                                            <div>
                                                <p class="small text-muted mb-1">Articles</p>
                                                <p class="mb-0">41</p>
                                            </div>
                                            <div class="px-3">
                                                <p class="small text-muted mb-1">Followers</p>
                                                <p class="mb-0">976</p>
                                            </div>
                                            <div>
                                                <p class="small text-muted mb-1">Rating</p>
                                                <p class="mb-0">8.5</p>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="/move_order_request" class="btn bg-color flex-grow-1"><i
                                                    class="fa-solid fa-people-carry-box px-2"
                                                    style="font-size: 20px"></i>Request
                                                move order</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="tab-pane fade text-dark" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    <div class="mask d-flex align-items-center h-100 ">
                        <div class=" shadow p-5">
                            <div class="section-header">
                                <h2>Your order history</h2>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <div class="table-responsive bg-white">
                                        <table class="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">EMPLOYEES</th>
                                                    <th scope="col">DATE</th>
                                                    <th scope="col">LOCATION</th>
                                                    <th scope="col">DESTINATION</th>
                                                    <th scope="col">STATUS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" style="color: #666666;">Tiger Nixon</th>
                                                    <td>System Architect</td>
                                                    <td>tnixon12@example.com</td>
                                                    <td>61</td>
                                                    <td>Edinburgh</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style="color: #666666;">Sonya Frost</th>
                                                    <td>Software Engineer</td>
                                                    <td>sfrost34@example.com</td>
                                                    <td>23</td>
                                                    <td>Edinburgh</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style="color: #666666;">Jena Gaines</th>
                                                    <td>Office Manager</td>
                                                    <td>jgaines75@example.com</td>
                                                    <td>30</td>
                                                    <td>London</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style="color: #666666;">Quinn Flynn</th>
                                                    <td>Support Lead</td>
                                                    <td>qflyn09@example.com</td>
                                                    <td>22</td>
                                                    <td>Edinburgh</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style="color: #666666;">Charde Marshall
                                                    </th>
                                                    <td>Regional Director</td>
                                                    <td>cmarshall28@example.com</td>
                                                    <td>36</td>
                                                    <td>San Francisco</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style="color: #666666;">Haley Kennedy</th>
                                                    <td>Senior Marketing Designer</td>
                                                    <td>hkennedy63@example.com</td>
                                                    <td>43</td>
                                                    <td>London</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style="color: #666666;">Tatyana Fitzpatrick
                                                    </th>
                                                    <td>Regional Director</td>
                                                    <td>tfitzpatrick00@example.com</td>
                                                    <td>19</td>
                                                    <td>Warsaw</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="tab-pane fade text-dark" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    settings ( logout , edit profile , change password )
                </div>
            </div>
        </div>

    </section>
@endsection
