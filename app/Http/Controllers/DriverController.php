<?php

namespace App\Http\Controllers;

use App\Models\Drivers;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $driver = Drivers::all();
        return response()->json([
            'data' => $driver
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
                'name' => 'required|min:3',
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
            'name' => $request->input('name'),
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
                'name' => 'required|min:3',
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
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'gender' => $request->input('gender'),
            'password' => $request->input('password'),
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
}