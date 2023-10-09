<?php

namespace Modules\MajorWork\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MajorWork extends Model
{
    use HasFactory;

    protected $fillable = [];
    protected $guarded = [];

    protected static function newFactory()
    {
        return \Modules\MajorWork\Database\factories\MajorWorkFactory::new();
    }
}
