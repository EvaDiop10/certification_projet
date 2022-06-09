<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Secretaire;
use Illuminate\Http\Request;

class SecretaireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //On recupere toutes les secretaire
        $secretaire = Secretaire::all();

        return response()->json($secretaire);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //On ajoute les information de la secretaire
        $secretaire = Secretaire::created([
            'nom'=>$request->nom,
            'prenom'=>$request->prenom
        ]);

        return response()->json($secretaire, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Secretaire  $secretaire
     * @return \Illuminate\Http\Response
     */
    public function show(Secretaire $secretaire)
    {
        return response()->json($secretaire);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Secretaire  $secretaire
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Secretaire $secretaire)
    {
        //
        $secretaire = Secretaire::updated([
            "nom"=>$request->nom,
            "prenom"=>$request->prenom
        ]);
        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Secretaire  $secretaire
     * @return \Illuminate\Http\Response
     */
    public function destroy(Secretaire $secretaire)
    {
        //
        $secretaire->delete();

        return response()->json();
    }
}
