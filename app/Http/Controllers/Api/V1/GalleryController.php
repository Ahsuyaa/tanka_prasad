<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Gallery\Entities\Gallery;
use Modules\Gallery\Entities\GalleryImages;

class GalleryController extends Controller
{
    public function gallery()
    {
        $value = Gallery::where('status','on')->latest()->get();

        return response()->json($value);
    }

    public function galleryImages($slug)
    {
        $gallery = Gallery::where('slug',$slug)->first();
        $value = GalleryImages::where('gallery_id',$gallery->id)->where('status','on')->latest()->get();

        return response()->json($value);
    }
}
