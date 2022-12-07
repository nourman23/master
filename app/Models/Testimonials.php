<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonials extends Model
{
    use HasFactory;
    protected $fillable = [
        'testimonial',
        'stars',
        'user_id',
        'date'

    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}