<?php

use App\Http\Controllers\API\MedecinController;
use App\Http\Controllers\API\PatientController;
use App\Http\Controllers\API\RendezvousController;
use App\Http\Controllers\API\SecretaireController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AgendaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource("secretaires", SecretaireController::class);// Les routes "secretaire.*" de l'API
Route::apiResource("patients",PatientController::class);
Route::apiResource("agendas", AgendaController::class); // Les routes "agenda.*" de l'API
Route::apiResource("rendez-vous",RendezvousController::class);
Route::apiResource("medecins", MedecinController::class);
