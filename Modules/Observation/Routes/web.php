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
use Modules\Observation\Http\Controllers\ObservationController;
use Modules\Observation\Http\Controllers\ObservationListController;

Route::group(['middleware' => 'auth'], function () {
    Route::resource('observation', 'ObservationController');
    Route::get('observation/status/{id}',[ObservationController::class,'status'])->name('observation.status');

    Route::resource('observation-list', 'ObservationListController');
    Route::get('observation-list/status/{id}',[ObservationListController::class,'status'])->name('observation-list.status');
});
