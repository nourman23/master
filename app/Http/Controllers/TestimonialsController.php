<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Carbon\CarbonImmutable;
use App\Models\Testimonials;
use Illuminate\Http\Request;

class TestimonialsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Testimonials = Testimonials::where('status', 'approved')->get();
        return response()->json([
            'data' => $Testimonials
        ]);
    }
    public function AdminIndex()
    {
        $Testimonials = Testimonials::all();
        return response()->json([
            'data' => $Testimonials
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

        $date = CarbonImmutable::now()->add(3, 'hour')->format('Y-m-d');

        // dd($date);
        $userId = auth()->user()->id;

        // dd(auth()->user()->id);
        $request->validate(
            [
                'testimonial' => 'required',
                'rating' => 'required'
            ]
        );
        $testimonial = Testimonials::create([
            'user_id' => $userId,
            'testimonial' => $request->input('testimonial'),
            'date' => $date,
            'stars' => $request->input('rating'),


        ]);
        $testimonial->save();
        auth()->login($testimonial);
        return redirect('/profile');
    }
    public function storeFromReact(Request $request)
    {

        $date = CarbonImmutable::now()->add(3, 'hour')->format('Y-m-d');

        // dd($date);
        // $userId = auth()->user()->id;
        // dd(auth()->user()->id);
        $request->validate(
            [
                'user_id' => 'required',
                'testimonial' => 'required',
                'rating' => 'required'
            ]
        );
        $testimonial = Testimonials::create([

            'user_id' => $request->user_id,
            'testimonial' => $request->input('testimonial'),
            'date' => $date,
            'stars' => $request->input('rating'),

        ]);
        $testimonial->save();
        return response()->json([
            'data' => $testimonial
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
    public function status(Request $request)
    {
        $testimonial = Testimonials::find($request->testimonial['id']);
        $status = $request->status;
        $testimonial->status =   $status;
        $testimonial->save();
        return response()->json([
            'message' => "Testimonial $status successsfully"
        ]);
    }


    public function destroy($id)
    {
        Testimonials::find($id)->delete();
        $Testimonials = Testimonials::all();
        return response()->json([
            'testimonials' => $Testimonials,
            'message' => "Testimonial deleted successfuly"
        ]);
    }
}
