<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use App\Http\Resources\UserResources;

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
    public function singleUser($id)
    {
        $user = User::find($id);
        return response()->json([
            'user' => $user
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
                'first_name' => 'required|min:3',
                'last_name' => 'required',
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
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
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
    public function update(Request $request)
    {
        $id = $request->id;
        $user = User::find($id);
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'image' => 'required',
        ]);

        $image = base64_encode(file_get_contents($request->file('image')));
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->image = $image;

        $user->save();

        return response()->json([
            'user' => $user,

        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();
        $users = User::all();
        return response()->json([
            'users' => $users,
            'message' => "User deleted successfuly"
        ]);
    }

    public function login(Request $request)
    {
        // dd($request);
        $formFields =  $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        $remember_me = $request->has('remember_me') ? true : false;

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

        if (Auth::attempt($request->only('email', 'password')) && Gate::allows('admin')) {
            $user = User::where('email', $request['email'])->firstOrFail();
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json([
                'user_info' => Auth::user(),
                'access_token' => $token,
                'token_type' => 'Bearer',
                'role' => 'admin'
            ]);
        } else {
            $user = User::where('email', $request['email'])->firstOrFail();
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'user_info' => Auth::user(),
                'access_token' => $token,
                'token_type' => 'Bearer',
                'role' => 'user'

            ]);
        }
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
                'first_name' => 'required|min:3',
                'last_name' => 'required|min:3',
                'email' => 'required|email',
                'gender' => 'required',
                'password' => 'required|confirmed|min:6',
                'image' => 'required|mimes:jpeg,png,jpg,gif,svg'
            ]
        );
        $image = base64_encode(file_get_contents($request->file('image')));
        $user = User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
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



    public function LoginByGoogle(Request $request)
    {

        $user = User::where('email', $request->email)->first();
        if ($user) {
            return $this->success([
                'user' => new UserResources(User::where('email', $user->email)->first()),
                'token' => $user->createToken('API Token of ' . $user->name)->plainTextToken //for return only plainTextToken without it will return all token record from personal_access_tokens
            ]);
        }

        $formFields = $request->validate(
            [
                'first_name' => ['required', 'string', 'max:255'],
                'last_name' => ['required', 'string'],
                'image' => ['required', 'string'],
                'email' => ['required', 'email', 'unique:users'],
                'google_id' => ['required', 'numeric'],
            ]
        );


        // Create user
        $user = User::create($formFields);

        return $this->success([
            'user' => new UserResources(User::where('email', $user->email)->first()),
            'token' => $user->createToken('API Token of ' . $user->name)->plainTextToken //for return only plainTextToken without it will return all token record from personal_access_tokens

        ]);
    }
}