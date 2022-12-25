<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Drivers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;

class DriverController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $drivers = Drivers::all();
        return response()->json([
            'data' => $drivers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->phone);
        $request->validate(
            [
                'first_name' => 'required|min:3',
                'last_name' => 'required',
                'email' => 'required|email',
                'gender' => 'required',
                'password' => 'required|confirmed|min:6',
                'age' => 'required',
                'phone' => 'required',
                'image' => 'required|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'license' =>  "required|mimes:pdf|max:10000"
            ]
        );

        $image = base64_encode(file_get_contents($request->file('image')));
        $license = base64_encode(file_get_contents($request->file('license')));
        // dd($request);


        $user = Drivers::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'gender' => $request->input('gender'),
            'password' => $request->input('password'),
            'age' => $request->input('age'),
            'phone' => $request->input('phone'),
            'image' => $image,
            'license' => $license,
        ]);
        $user->save();
        return redirect('/');
    }
    public function storeFromReact(Request $request)
    {
        $request->validate(
            [
                'first_name' => 'required|min:3',
                'last_name' => 'required',
                'email' => 'required|email',
                'gender' => 'required',
                'password' => 'required|confirmed|min:6',
                'age' => 'required',
                'phone' => 'required',
                'image' => 'required|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'license' =>  "required|mimes:pdf|max:10000"
            ]
        );

        $image = base64_encode(file_get_contents($request->file('image')));
        $license = base64_encode(file_get_contents($request->file('license')));

        $user = Drivers::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'gender' => $request->input('gender'),
            'password' => Hash::make($request->input('password')),
            'age' => $request->input('age'),
            'phone' => $request->input('phone'),
            'image' => $image,
            'license' => $license,
        ]);
        $user->save();
        return response()->json([
            'data' => $user
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
    public function approve($request)
    {
        $request->status = 'approved';
        $request->save();

        return $this->success('', 'Request approved successsfully');
    }

    public function deny($request)
    {
        $request->status = 'rejected';
        $request->save();

        return $this->success('', 'Request rejected successsfully');
    }
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Login information is invalid.'
            ], 401);
        } else if (Auth::attempt($request->only('email', 'password')) && Gate::allows('admin')) {
            $user = User::where('email', $request['email'])->firstOrFail();
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'user_info' => Auth::user(),
                'access_token' => $token,
                'token_type' => 'Bearer',
                'role' => 'user'
            ]);
        } else {
            return response()->json([
                'message' => 'Admin Login information is invalid.'
            ], 401);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Drivers::find($id)->delete();
        $drivers =  Drivers::all();
        return response()->json([
            'drivers' => $drivers,
            'message' => "Driver deleted successfuly"
        ]);
    }

    public function status(Request $request)
    {
        $driver = Drivers::find($request->driver['id']);
        $status = $request->status;
        $driver->status =   $status;
        $driver->save();
        return response()->json([
            'message' => "Driver $status successsfully"
        ]);
    }
}