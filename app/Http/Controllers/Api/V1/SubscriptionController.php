<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Subscription\Entities\Subscription;

class SubscriptionController extends Controller
{
    public function subscription(Request $request)
    {
        $sub = Subscription::where('email',$request->email)->first();
        if($sub){
            return response()->json([
                'status' => 'failed',
                'message' => 'Already Subscribed With This Email Address.'
            ]);
        }
        else{
            Subscription::create([
                'email' => $request->email,
                'status' => "on"
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Subscription Sent Successfully'
            ]);
        }
    }
}
