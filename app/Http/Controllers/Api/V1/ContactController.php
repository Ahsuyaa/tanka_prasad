<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Contact\Entities\Contact;

class ContactController extends Controller
{
    public function contact(Request $request)
    {
        Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
            'status' => 'unseen'
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Message Sent Successfully'
        ]);
    }
}
