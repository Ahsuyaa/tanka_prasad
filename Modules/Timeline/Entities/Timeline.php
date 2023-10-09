<?php

namespace Modules\Timeline\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Timeline extends Model
{
    use HasFactory;

    protected $fillable = [];
    protected $guarded = [];

    protected $appends = ['image_link'];

    public function getImageLinkAttribute()
    {
       return asset("upload/images/timelines/".$this->image);
    }

    protected static function newFactory()
    {
        return \Modules\Timeline\Database\factories\TimelineFactory::new();
    }
}
