<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Agenda;
use Illuminate\Http\Request;

class AgendaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Recuperation de tout les agenda
        $agenda = Agenda::all();
        //On retourne les information des agenda
         return response()->json($agenda);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //creation dun nouvel agenda
                $agenda = Agenda::created([
                   'datedebut' => $request->datedebut,
                    'datefin' => $request->datefin,
                    'heuredebut' => $request->heuredebut,
                    'heurefin'=>$request->heurefin
                ]);

                //On retourne l'agenda en JSON avec le statut creer
                return response()->json($agenda,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Agenda  $agenda
     * @return \Illuminate\Http\Response
     */
    public function show(Agenda $agenda)
    {
        return response()->json($agenda);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Agenda  $agenda
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Agenda $agenda)
    {
        //On modifie les information de l'agenda
        $agenda->update([
            "datedebut" => $request->datedebut,
            "datefin" => $request->datefin,
            "heuredebut" => $request->heuredebut,
            "heurefin"=>$request->heurefin

        ]);
        return response()->json();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Agenda  $agenda
     * @return \Illuminate\Http\Response
     */
    public function destroy(Agenda $agenda)
    {
        //
        $agenda->delete();
        return response()->json();
    }
}
