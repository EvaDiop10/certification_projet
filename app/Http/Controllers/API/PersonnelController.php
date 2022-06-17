<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Personnel;
use Illuminate\Http\Request;

class PersonnelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $personnel = Personnel::all();

        return response()->json($personnel);
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
        $personnel = Personnel::create([
            'nom'=>$request->nom,
            'prenom'=>$request->prenom,
            'roles_id'=>$request->roles_id,
            'users_id'=>$request->users_id
        ]);

        return response()->json($personnel,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Personnel  $personnel
     * @return \Illuminate\Http\Response
     */
    public function show(Personnel $personnel)
    {
        //
        return response()->json($personnel);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Personnel  $personnel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
            $personnel = Personnel::find($id)->update([
                'nom'=>$request->nom,
                'prenom'=>$request->prenom,
                'roles_id'=>$request->roles_id,
                'users_id'=>$request->users_id
            ]);

            return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Personnel  $personnel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Personnel $personnel)
    {
        //
        $personnel->delete();
    }
}
