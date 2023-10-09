<?php

namespace Modules\Setting\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompanyProfile extends Model
{
    use HasFactory;

    protected $guarded=[];

    protected static function newFactory()
    {
        return \Modules\Setting\Database\factories\CompanyProfileFactory::new();
    }
}
