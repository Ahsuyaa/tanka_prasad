<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\MajorWork\Entities\MajorWork;
use Modules\MajorWork\Entities\MajorWorkList;
use Modules\Observation\Entities\Observation;
use Modules\Observation\Entities\ObservationList;

class NavController extends Controller
{
    public function majorWorks()
    {
        $value = MajorWork::first();

        return response()->json($value);
    }

    public function majorWorksList()
    {
        $value = MajorWorkList::where('status','on')->get();

        return response()->json($value);
    }

    public function majorWorksDetails($id)
    {
        $value = MajorWorkList::findorfail($id);

        return response()->json($value);
    }

    public function observation()
    {
        $value = Observation::first();

        return response()->json($value);
    }

    public function observationList()
    {
        $value = ObservationList::where('status','on')->get();

        return response()->json($value);
    }

    public function observationDetails($id)
    {
        $value = ObservationList::findorfail($id);

        return response()->json($value);
    }
}
