<?php

use App\Http\Controllers\Api\V1\CompanyProfileController;
use App\Http\Controllers\Api\V1\ContactController;
use App\Http\Controllers\Api\V1\GalleryController;
use App\Http\Controllers\Api\V1\HomeController;
use App\Http\Controllers\Api\V1\NavController;
use App\Http\Controllers\Api\V1\SubscriptionController;
use App\Http\Controllers\Api\V1\TimelineController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Contact\Entities\Contact;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// company Profile
Route::get('/company-profile', [CompanyProfileController::class,'profile']);

// Nav
// Major Works
Route::get('/major-works', [NavController::class,'majorWorks']);
// Major Works List
Route::get('/major-works-list', [NavController::class,'majorWorksList']);
Route::get('/major-works/{id}', [NavController::class,'majorWorksDetails']);

// Observation Works
Route::get('/observations', [NavController::class,'observation']);
// Observation Works List
Route::get('/observation-list', [NavController::class,'observationList']);
Route::get('/observation/{id}', [NavController::class,'observationDetails']);

// company Profile
Route::get('/timelines', [TimelineController::class,'timeline']);

// last section
Route::get('/last-section', [HomeController::class,'lastSection']);

// Gallery
Route::get('/gallery/list', [GalleryController::class,'gallery']);
Route::get('/gallery/{slug}/images', [GalleryController::class,'galleryImages']);

// Contact
Route::post('/contact/store', [ContactController::class,'contact']);

// Subscription
Route::post('/subscription/store', [SubscriptionController::class,'subscription']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
