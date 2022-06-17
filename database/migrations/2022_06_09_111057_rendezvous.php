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
        Schema::create('rendezvous', function (Blueprint $table){
            $table->id();
            $table->dateTime('date');
            $table->string('description');
            $table->enum('type',['Consultation','Visite médicale']);
            $table->unsignedBigInteger('patients_id');
            $table->foreign('patients_id')
                ->references('id')
                ->on('patients')
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
