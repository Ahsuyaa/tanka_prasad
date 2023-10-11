@extends('frontend.layouts.app')

@section('style')
    <link rel="stylesheet" href="{{ asset('frontend/css/login.css') }}">
@endsection
@section('content')
    {{-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> --}}
    @php
        $profile = \Modules\Setting\Entities\CompanyProfile::first();
    @endphp
    <div class="auth-layout-wrap" style="background-image: url({{ asset('frontend/image/login.jpg') }})">
        <div class="auth-content">
            <div class="card o-hidden">
                <div class="row">
                    <div class="col-md-6">
                        <div class="p-4">
                            {{-- <div class="auth-logo text-center mb-4">
                                <img src="{{ asset('upload/images/settings/' . $profile->logo) }}" style="width: 60%">
                            </div> --}}
                            <h1 class="mb-3 text-18">Sign In</h1>
                            <form method="POST" action="{{ route('login') }}">
                                @csrf
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input id="email" class="form-control form-control-rounded @error('email') is-invalid @enderror" name="email"
                                        value="" required="" autocomplete="email" autofocus="">
                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input id="password" type="password" class="form-control form-control-rounded @error('password') is-invalid @enderror"
                                        name="password" required="" autocomplete="current-password">
                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>

                                <button class="btn btn-rounded btn-primary btn-block mt-2">Sign In</button>

                            </form>

                            <div class="mt-3 text-center">

                                <a href="{{ route('password.request') }}" class="text-muted"><u>Forgot
                                        Password?</u></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 text-center ">
                        <div class="pr-3 auth-right">
                            <img src="{{ asset('upload/images/settings/' . $profile->logo) }}" style="width: 70%">
                            <span style="color:#02426b; font-size: 1.5em">{{ $profile->company_name }}</span>
                            {{-- <a class="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text" href="/signup">
                            <i class="i-Mail-with-At-Sign"></i> Create an account
                        </a>
                        <a id="admin" class="btn btn-rounded btn-outline-primary btn-outline-google btn-block btn-icon-text">
                            <i class="i-Google-Plus"></i> Super Admin
                        </a>
                        <a id="employee" class="btn btn-rounded btn-outline-primary btn-block btn-icon-text btn-outline-facebook">
                            <i class="i-Facebook-2"></i> Employee
                        </a>
                        <a id="client" class="btn btn-rounded btn-outline-primary btn-block btn-icon-text btn-outline-facebook">
                            <i class="i-Facebook-2"></i> Client
                        </a> --}}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
