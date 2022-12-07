<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->binary('image');
            $table->binary('license');
            $table->text('driver_feed_backs');
            $table->integer('Years_of_Experience')->default(0);
            $table->integer('trips')->default(0);
            $table->string('address')->nullable();
            $table->string('status')->default('pending');


            $table->timestamps();
        });
        DB::statement(" ALTER TABLE users CHANGE `image` `image` MEDIUMBLOB NULL DEFAULT NULL");
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
