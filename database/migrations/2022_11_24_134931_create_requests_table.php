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
        //         name
        // userId (ref)
        // date
        // location
        // destination
        // status
        // phone
        // email
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->string('name');
            $table->string('email');
            $table->date('date');
            $table->bigInteger('phone')->max(10);
            $table->bigInteger('location_latitude')->max(6);
            $table->bigInteger('location_longitude')->max(6);
            $table->bigInteger('destination_latitude')->max(6);
            $table->bigInteger('destination_longitude')->max(6);
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');




            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('requests');
    }
};
