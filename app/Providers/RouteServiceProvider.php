<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(module_path('Advertisement', '/Routes/web.php'))
                ->group(module_path('Blog', '/Routes/web.php'))
                ->group(module_path('Contact', '/Routes/web.php'))
                ->group(module_path('Faq', '/Routes/web.php'))
                ->group(module_path('Gallery', '/Routes/web.php'))
                ->group(module_path('MajorWork', '/Routes/web.php'))
                ->group(module_path('Menu', '/Routes/web.php'))
                ->group(module_path('Observation', '/Routes/web.php'))
                ->group(module_path('Setting', '/Routes/web.php'))
                ->group(module_path('Slider', '/Routes/web.php'))
                ->group(module_path('Subscription', '/Routes/web.php'))
                ->group(module_path('Team', '/Routes/web.php'))
                ->group(module_path('Testimonial', '/Routes/web.php'))
                ->group(module_path('Timeline', '/Routes/web.php'))
                ->group(module_path('User', '/Routes/web.php'))
                ->group(module_path('Vacancy', '/Routes/web.php'))
                ->group(base_path('routes/web.php'));
        });
    }

    /**
     * Configure the rate limiters for the application.
     */
    protected function configureRateLimiting(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });
    }
}
