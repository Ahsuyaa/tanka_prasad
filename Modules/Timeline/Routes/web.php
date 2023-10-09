<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;
use Modules\Timeline\Http\Controllers\TimelineController;

Route::group(['middleware' => 'auth'], function () {
    Route::resource('timelines', 'TimelineController');
    Route::get('timeline/status/{id}',[TimelineController::class,'status'])->name('timeline.status');
});
