<?php

namespace Modules\MajorWork\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MajorWorkList extends Model
{
    use HasFactory;

    protected $fillable = [];
    protected $guarded = [];

    protected $appends = ['image_link'];

    public function getImageLinkAttribute()
    {
       return asset("upload/images/major-works/".$this->image);
    }

    protected static function newFactory()
    {
        return \Modules\MajorWork\Database\factories\MajorWorkListFactory::new();
    }
}
