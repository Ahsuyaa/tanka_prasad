<?php

namespace Modules\Timeline\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Timeline extends Model
{
    use HasFactory;

    protected $fillable = [];
    protected $guarded = [];

    protected static function newFactory()
    {
        return \Modules\Timeline\Database\factories\TimelineFactory::new();
    }
}
