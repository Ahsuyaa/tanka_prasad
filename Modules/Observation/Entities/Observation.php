<?php

namespace Modules\Observation\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Observation extends Model
{
    use HasFactory;

    protected $fillable = [];
    protected $guarded = [];

    protected $appends = ['image_link'];

    public function getImageLinkAttribute()
    {
       return asset("upload/images/observations/".$this->image);
    }

    protected static function newFactory()
    {
        return \Modules\Observation\Database\factories\ObservationFactory::new();
    }
}
