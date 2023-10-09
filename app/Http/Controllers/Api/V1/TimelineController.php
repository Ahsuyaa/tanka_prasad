<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Timeline\Entities\Timeline;

class TimelineController extends Controller
{
    public function timeline()
    {
        $value = Timeline::where('status','on')->orderBy('year','ASC')->get();

        return response()->json($value);
    }
}
