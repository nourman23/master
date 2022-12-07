<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::all();
        return response()->json([
            'data' => $user
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
        // dd($request);
        // dd($request->image);
        // dd($image);
        $request->validate(
            [
                'name' => 'required|min:3',
                'email' => 'required|email',
                'gender' => 'required',
                'password' => 'required|confirmed|min:6',
                'image' => 'required|mimes:jpeg,png,jpg,gif,svg|max:2048'
            ]
        );
        // error_log();
        // dd($data);
        $image = base64_encode(file_get_contents($request->file('image')));
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'gender' => $request->input('gender'),
            'password' => $request->input('password'),
            'image' => $image,
        ]);
        $user->save();
        auth()->login($user);
        return redirect('/');
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function login(Request $request)
    {
        // dd($request);
        $formFields =  $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        $remember_me = $request->has('remember_me') ? true : false;

        // dd(Auth::attempt($formFields, $remember_me));
        // if (Auth::attempt($formFields) && Gate::allows('admin')) {
        //     $request->session()->regenerate();

        //     return redirect("/dashboard");
        // } else
        if (Auth::attempt($formFields, $remember_me)) {
            $request->session()->regenerate();

            return redirect('/profile');
        }
        return back()->withErrors(
            [
                'email' => 'Invalid Credentials'
            ]
        )->onlyInput('email');
    }


    public function LoginFromReact(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Login information is invalid.'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'user_info' => Auth::user(),
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }


    public function logout()
    {

        Session::flush();
        Auth::logout();
        return redirect('/login');
        // ->with('message','You have been logged out!');
    }
    public function storeFromReact(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|min:3',
                'email' => 'required|email',
                'gender' => 'required',
                'password' => 'required|confirmed|min:6',
                'image' => 'required|mimes:jpeg,png,jpg,gif,svg'
            ]
        );

        $image = base64_encode(file_get_contents($request->file('image')));
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'gender' => $request->input('gender'),
            'password' => Hash::make($request->input('password')),
            'image' => $image,
        ]);
        $user->save();
        auth()->login($user);
        return response()->json([
            'data' => $user
        ]);
    }
}
