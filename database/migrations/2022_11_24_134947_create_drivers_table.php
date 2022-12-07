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
        Schema::create('drivers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('gender');
            $table->integer('age')->min(18);
            $table->integer('rating')->max(5)->nullable();
            $table->bigInteger('phone')->max(10);
            $table->binary('image')->nullable();
            $table->binary('license')->nullable();
            $table->text('driver_feed_backs')->nullable();
            $table->integer('Years_of_Experience')->nullable()->default(0);
            $table->integer('trips')->nullable()->default(0);
            $table->string('address')->nullable();
            $table->string('status')->default('pending');


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
        Schema::dropIfExists('drivers');
    }
};
