<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Menu\Entities\Menu;
use Modules\Menu\Entities\Page;

class MenuController extends Controller
{
    public function menu()
    {
        $value = Menu::where('status','on')->with('page')->get();

        return response()->json($value);
    }

    public function page($slug)
    {
        $value = Page::where('slug',$slug)->first();

        return response()->json($value);
    }
}
