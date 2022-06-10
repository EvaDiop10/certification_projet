<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Medecin;
use Illuminate\Http\Request;

class MedecinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $medecin = Medecin::all();

        return response()->json($medecin);
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
        $medecin = Medecin::create([
            'nom'=>$request->nom,
            'prenom'=>$request->prenom,
            'specialite'=>$request->specialite,
            'disponibilite'=>$request->disponibilite
        ]);

        return response()->json($medecin, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Medecin  $medecin
     * @return \Illuminate\Http\Response
     */
    public function show(Medecin $medecin)
    {
        return response()->json($medecin);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Medecin  $medecin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        //
        $medecin =Medecin::find($id)->update([
            "nom"=>$request->nom,
            "prenom"=>$request->prenom,
            "specialite"=>$request->specialite,
            "disponibilite"=>$request->disponibilite
        ]);

        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Medecin  $medecin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Medecin $medecin)
    {
        //
        $medecin->delete();

        return response()->json();
    }
}
