<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function index()
    {
        $admin = Admin::where('email', '=', 'Admin@gmail.com')->first();

        $checkPassword = Hash::check("Admin1234", $admin->password);
        dd($checkPassword);
    }
    public function LoginFromReact(Request $request)
    {
        // $request->validate([
        //     'email' => 'required',
        //     'password' => 'required',
        // ]);
        // $pass = Hash::make($request->password);
        // if (Auth::attempt($request->only('email', 'password'))) {
        $admin = Admin::where('email', '=', 'Admin@gmail.com')->first();
        $checkPassword = Hash::check("Admin1234", $admin->password);
        // dd($checkPassword);
        if ($checkPassword) {
            return response()->json([
                'user_info' => $admin,
            ]);
        }
        return response()->json([
            'message' => 'Login information is invalid.'
        ], 401);
    }
}