<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    use HasFactory;
    public $timestamps =false;
    protected $fillable = [
        "datedebut",
        "datefin",
        "heuredebut" ,
        "heurefin",
        'rendezvous_id',
        'medecins_id'
    ];
}
