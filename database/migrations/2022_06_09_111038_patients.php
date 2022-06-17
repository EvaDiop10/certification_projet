<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('patients',function (Blueprint $table){
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string('sexe');
            $table->integer('date');
            $table->string('adresse');
            $table->string('telephone')->unique();
            $table->string('fonction');
            $table->unsignedBigInteger('users_id');
            $table->foreign('users_id')
            ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
