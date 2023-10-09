<?php

namespace Modules\Setting\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompanyProfile extends Model
{
    use HasFactory;

    protected $guarded=[];

    protected $appends = ['logo_link','footer_logo_link','favicon_link','image_link','objective_image_link'];

    public function getLogoLinkAttribute()
    {
       return asset("upload/images/settings/".$this->logo);
    }
    public function getFooterLogoLinkAttribute()
    {
       return asset("upload/images/settings/".$this->footer_logo);
    }
    public function getfaviconLinkAttribute()
    {
       return asset("upload/images/settings/".$this->favicon);
    }
    public function getimageLinkAttribute()
    {
       return asset("upload/images/settings/".$this->image);
    }
    public function getObjectiveImageLinkAttribute()
    {
       return asset("upload/images/settings/".$this->objective_image);
    }

    protected static function newFactory()
    {
        return \Modules\Setting\Database\factories\CompanyProfileFactory::new();
    }
}
