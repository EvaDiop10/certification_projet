<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Specialite;
use Illuminate\Http\Request;

class SpecialiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $specialite = Specialite::all();

        return response()->json($specialite);
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
        $specialite = Specialite::create([
            'libelle'=>$request->libelle,
        ]);

        return response()->json($specialite,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Specialite $specialite )
    {
        //
        return response()->json($specialite);
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
        $specialite = Specialite::find($id)->update([
            'libelle'=>$request->libelle
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Specialite $specialite)
    {
        //
        $specialite->delete();
    }
}
