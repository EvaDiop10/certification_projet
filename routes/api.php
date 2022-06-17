<?php

use App\Http\Controllers\API\MedecinController;
use App\Http\Controllers\API\PatientController;
use App\Http\Controllers\API\RendezvouController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\SecretaireController;
use App\Http\Controllers\API\SpecialiteController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\LoginController;
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
Route::apiResource("specialites", SpecialiteController::class);
Route::apiResource("patients",PatientController::class);
Route::apiResource("agendas", AgendaController::class);
Route::apiResource("rendez-vous",RendezvouController::class);
Route::apiResource("medecins", MedecinController::class);
Route::apiResource("rôles", RoleController::class);
Route::apiResource("users", UserController::class);
Route::get('login',[LoginController::class,'authentication']);


