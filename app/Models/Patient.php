<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable =[
        "nom",
        "prenom",
        "sexe",
        "age",
        "adresse",
        "telephone",
        "fonction",
        "secretaires_id"
    ];
}
