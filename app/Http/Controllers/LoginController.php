<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function authentication(Request $request){
        $credentials = $request->validate([
            'name'=>['required','name'],
            'email'=>['required','email'],
            'password'=>['required'],

        ]);
        if(Auth::attempt($credentials)){
            $request->session()->regenerate();
            $user = Auth::user();

            return response()->json($user);
        }
        return  respone()->json(['erros'=>['email'=>'not match']],422);
    }
}
