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
        Schema::create('agendas', function (Blueprint $table){
            $table->id();
            $table->date('datedebut');
            $table->date('datefin');
            $table->time('heuredebut');
            $table->time('heurefin');
            $table->unsignedBigInteger('rendezvous_id');
            $table->foreign('rendezvous_id')
                ->references('id')
                ->on('rendezvous')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->unsignedBigInteger('medecins_id');
            $table->foreign('medecins_id')
                ->references('id')
                ->on('medecins')
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
