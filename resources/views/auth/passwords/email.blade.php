@extends('frontend.layouts.app')

@section('style')
    <link rel="stylesheet" href="{{ asset('frontend/css/login.css') }}">
@endsection

@section('content')
    {{-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Reset Password') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
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

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Send Password Reset Link') }}
                                </button>
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
                                <img src="{{ asset('upload/images/settings/' . $profile->logo) }}" style="width: 50%">
                            </div> --}}
                            <h1 class="mb-3 text-18">Reset Password</h1>
                            @if (session('status'))
                                <div class="alert alert-success" role="alert">
                                    {{ session('status') }}
                                </div>
                            @endif
                            <form method="POST" action="{{ route('password.email') }}">
                                @csrf
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input id="email"
                                        class="form-control form-control-rounded @error('email') is-invalid @enderror"
                                        name="email" value="" required="" autocomplete="email" autofocus="">
                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>


                                <button type="submit" class="btn btn-primary btn-block btn-rounded mt-3">Reset
                                    Password</button>

                            </form>

                            <div class="mt-3 text-center">

                                <a href="{{ route('login') }}" class="text-muted"><u>Sign
                                        in</u></a>
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
