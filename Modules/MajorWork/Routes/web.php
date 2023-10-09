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
use Modules\MajorWork\Http\Controllers\MajorWorkController;
use Modules\MajorWork\Http\Controllers\MajorWorkListController;

Route::group(['middleware' => 'auth'], function () {
    Route::resource('major-works', 'MajorWorkController');
    Route::get('major-works/status/{id}',[MajorWorkController::class,'status'])->name('major-works.status');

    Route::resource('major-works-list', 'MajorWorkListController');
    Route::get('major-works-list/status/{id}',[MajorWorkListController::class,'status'])->name('major-works-list.status');
});
