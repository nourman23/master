<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function LoginFromReact(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'user_info' => Auth::user(),
            ]);
        }
        return response()->json([
            'message' => 'Login information is invalid.'
        ], 401);
    }
}