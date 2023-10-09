<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Observation\Entities\ObservationList;

class HomeController extends Controller
{
    public function lastSection()
    {
        $value = ObservationList::where('status','on')->latest()->first();

        return response()->json($value);
    }
}
