<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medecin extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable =[
        'specialite',
        'disponibilite',
        'users_id',
        'specialites_id'
    ];
}
