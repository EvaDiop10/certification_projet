<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Rendezvou;
use Illuminate\Http\Request;

class RendezvouController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rendezvous = Rendezvou::all();

        return response()->json($rendezvous);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $rendezvous = Rendezvou::created([
            "date"=>$request->date,
            "libelle"=>$request->libelle,
            "type"=>$request->type
        ]);

        return response()->json($rendezvous, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rendezvou  $rendezvous
     * @return \Illuminate\Http\Response
     */
    public function show(Rendezvou $rendezvous)
    {
        //
        return response()->json($rendezvous);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rendezvou  $rendezvous
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rendezvou $rendezvous)
    {
        //
        $rendezvous = Rendezvou::updated([
            "date"=>$request->date,
            "libelle"=>$request->libelle,
            "type"=>$request->type
        ]);

        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rendezvou  $rendezvous
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rendezvou $rendezvous)
    {
        //
        $rendezvous->delete();

        return response()->json();
    }
}
