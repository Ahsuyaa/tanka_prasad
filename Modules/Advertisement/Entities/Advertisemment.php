<?php

namespace Modules\Advertisement\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Advertisemment extends Model
{
    use HasFactory;

    protected $fillable = [];
    protected $guarded=[];

    protected static function newFactory()
    {
        return \Modules\Advertisement\Database\factories\AdvertisemmentFactory::new();
    }
}
