<?php

namespace App\Http\Controllers;

use App\Models\Requests;
use Carbon\CarbonImmutable;
use Illuminate\Http\Request;

class RequestsController extends Controller
{

    public function index()
    {
        $Requests = Requests::where('status', 'approved')->get();
        return response()->json([
            'data' => $Requests
        ]);
    }
    public function AdminIndex()
    {
        $Requests = Requests::all();
        return response()->json([
            'data' => $Requests
        ]);
    }

    public function storeFromReact(Request $request)
    {
        $date = CarbonImmutable::now()->add(3, 'hour')->format('Y-m-d');

        $request->validate(
            [
                'user_id' => 'required',
                'name' => 'required',
                'email' => 'required',
                'phone' => 'required|max:10',
                'location' => 'required',
                'destination' => 'required'
            ]
        );
        $Request = Requests::create([
            'user_id' => $request->user_id,
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'location' => $request->input('location'),
            'destination' => $request->input('destination'),
            'date' => $date,

        ]);
        $Request->save();
        return response()->json([
            'data' => $Request
        ]);
    }


    public function destroy($id)
    {
        Requests::find($id)->delete();
        $requests = Requests::all();
        return response()->json([
            'requests' => $requests,
            'message' => "Request deleted successfuly"
        ]);
    }

    public function status(Request $request)
    {
        $FoundedRequest = Requests::find($request->TheRequest['id']);
        $status = $request->status;
        $FoundedRequest->status =   $status;
        $FoundedRequest->save();
        return response()->json([
            'message' => "Request $status successsfully"
            // 'data' => $FoundedRequest
        ]);
    }
}
