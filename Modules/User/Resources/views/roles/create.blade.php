@extends('setting::layouts.master')

@section('title', 'Create Role')

@section('breadcrumb')
    <ol class="breadcrumb border-0 m-0">
        <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
        <li class="breadcrumb-item"><a href="{{ route('roles.index') }}">Roles</a></li>
        <li class="breadcrumb-item active">Create</li>
    </ol>
@endsection

@section('style')
    <style>
        .custom-control-label {
            cursor: pointer;
        }
    </style>
@endsection

@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <form action="{{ route('roles.store') }}" method="POST">
                    @csrf
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Create Role <i class="bi bi-check"></i>
                        </button>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="name">Role Name <span class="text-danger">*</span></label>
                                <input class="form-control" type="text" name="name" required>
                            </div>

                            <hr>

                            <div class="form-group">
                                <label for="permissions">Permissions <span class="text-danger">*</span></label>
                            </div>

                            <div class="form-group">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="select-all">
                                    <label class="custom-control-label" for="select-all">Give All Permissions</label>
                                </div>
                            </div>

                            <div class="row">

                                <!-- User Management Permission -->
                                <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            User Mangement
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_user_management" name="permissions[]"
                                                               value="access_user_management" {{ old('access_user_management') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_user_management">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_own_profile" name="permissions[]"
                                                               value="edit_own_profile" {{ old('edit_own_profile') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_own_profile">Own Profile</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- subscriber -->
                                {{-- <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Subscriber
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_subscriber" name="permissions[]"
                                                               value="access_subscriber" {{ old('access_subscriber') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_subscriber">Access</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --}}

                                <!-- Settings -->
                                <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Settings
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_settings" name="permissions[]"
                                                               value="access_settings" {{ old('access_settings') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_settings">Access</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Contact Permission -->
                                <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Contact
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_contact" name="permissions[]"
                                                               value="access_contact" {{ old('access_contact') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_contact">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_contact" name="permissions[]"
                                                               value="show_contact" {{ old('show_contact') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_contact">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_contact" name="permissions[]"
                                                               value="delete_contact" {{ old('delete_contact') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_contact">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Subscription Permission -->
                                <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Subscription
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_subscriptions" name="permissions[]"
                                                               value="access_subscriptions" {{ old('access_subscriptions') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_subscriptions">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_subscriptions" name="permissions[]"
                                                               value="show_subscriptions" {{ old('show_subscriptions') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_subscriptions">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_subscriptions" name="permissions[]"
                                                               value="delete_subscriptions" {{ old('delete_subscriptions') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_subscriptions">Delete</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="send_mail" name="permissions[]"
                                                               value="send_mail" {{ old('send_mail') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="send_mail">Send Mail</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Sliders Permission -->
                                {{-- <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Sliders
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_sliders" name="permissions[]"
                                                               value="access_sliders" {{ old('access_sliders') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_sliders">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_sliders" name="permissions[]"
                                                               value="show_sliders" {{ old('show_sliders') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_sliders">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="create_sliders" name="permissions[]"
                                                               value="create_sliders" {{ old('create_sliders') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="create_sliders">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_sliders" name="permissions[]"
                                                               value="edit_sliders" {{ old('edit_sliders') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_sliders">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_sliders" name="permissions[]"
                                                               value="delete_sliders" {{ old('delete_sliders') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_sliders">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --}}

                                <!-- Menu Permission -->
                                <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Menu
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_menu" name="permissions[]"
                                                               value="access_menu" {{ old('access_menu') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_menu">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_menu" name="permissions[]"
                                                               value="show_menu" {{ old('show_menu') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_menu">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="create_menu" name="permissions[]"
                                                               value="create_menu" {{ old('create_menu') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="create_menu">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_menu" name="permissions[]"
                                                               value="edit_menu" {{ old('edit_menu') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_menu">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_menu" name="permissions[]"
                                                               value="delete_menu" {{ old('delete_menu') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_menu">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Timelines Permission -->
                                <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Timelines
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_timelines" name="permissions[]"
                                                               value="access_timelines" {{ old('access_timelines') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_timelines">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_timelines" name="permissions[]"
                                                               value="show_timelines" {{ old('show_timelines') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_timelines">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="create_timelines" name="permissions[]"
                                                               value="create_timelines" {{ old('create_timelines') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="create_timelines">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_timelines" name="permissions[]"
                                                               value="edit_timelines" {{ old('edit_timelines') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_timelines">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_timelines" name="permissions[]"
                                                               value="delete_timelines" {{ old('delete_timelines') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_timelines">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Major Works Permission -->
                                <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Major Works
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_major_works" name="permissions[]"
                                                               value="access_major_works" {{ old('access_major_works') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_major_works">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_major_works" name="permissions[]"
                                                               value="show_major_works" {{ old('show_major_works') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_major_works">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="create_major_works" name="permissions[]"
                                                               value="create_major_works" {{ old('create_major_works') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="create_major_works">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_major_works" name="permissions[]"
                                                               value="edit_major_works" {{ old('edit_major_works') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_major_works">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_major_works" name="permissions[]"
                                                               value="delete_major_works" {{ old('delete_major_works') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_major_works">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                 <!-- Observations Permission -->
                                 <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Observations
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_observations" name="permissions[]"
                                                               value="access_observations" {{ old('access_observations') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_observations">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_observations" name="permissions[]"
                                                               value="show_observations" {{ old('show_observations') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_observations">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="create_observations" name="permissions[]"
                                                               value="create_observations" {{ old('create_observations') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="create_observations">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_observations" name="permissions[]"
                                                               value="edit_observations" {{ old('edit_observations') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_observations">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_observations" name="permissions[]"
                                                               value="delete_observations" {{ old('delete_observations') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_observations">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Gallery Permission -->
                                <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Gallery
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="access_gallery" name="permissions[]"
                                                            value="access_gallery"
                                                            {{ old('access_gallery') ? 'checked' : '' }}>
                                                        <label class="custom-control-label"
                                                            for="access_gallery">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="show_gallery" name="permissions[]"
                                                            value="show_gallery"
                                                            {{ old('show_gallery') ? 'checked' : '' }}>
                                                        <label class="custom-control-label"
                                                            for="show_gallery">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="create_gallery" name="permissions[]"
                                                            value="create_gallery"
                                                            {{ old('create_gallery') ? 'checked' : '' }}>
                                                        <label class="custom-control-label"
                                                            for="create_gallery">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="edit_gallery" name="permissions[]"
                                                            value="edit_gallery"
                                                            {{ old('edit_gallery') ? 'checked' : '' }}>
                                                        <label class="custom-control-label"
                                                            for="edit_gallery">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="delete_gallery" name="permissions[]"
                                                            value="delete_gallery"
                                                            {{ old('delete_gallery') ? 'checked' : '' }}>
                                                        <label class="custom-control-label"
                                                            for="delete_gallery">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Blogs Permission -->
                                {{-- <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Blogs
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_blogs" name="permissions[]"
                                                               value="access_blogs" {{ old('access_blogs') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_blogs">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_blogs" name="permissions[]"
                                                               value="show_blogs" {{ old('show_blogs') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_blogs">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="create_blogs" name="permissions[]"
                                                               value="create_blogs" {{ old('create_blogs') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="create_blogs">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_blogs" name="permissions[]"
                                                               value="edit_blogs" {{ old('edit_blogs') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_blogs">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_blogs" name="permissions[]"
                                                               value="delete_blogs" {{ old('delete_blogs') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_blogs">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --}}

                                <!-- Advertisements Permission -->
                                {{-- <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Advertisements
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_advertisements" name="permissions[]"
                                                               value="access_advertisements" {{ old('access_advertisements') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_advertisements">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_advertisements" name="permissions[]"
                                                               value="show_advertisements" {{ old('show_advertisements') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_advertisements">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="create_advertisements" name="permissions[]"
                                                               value="create_advertisements" {{ old('create_advertisements') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="create_advertisements">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_advertisements" name="permissions[]"
                                                               value="edit_advertisements" {{ old('edit_advertisements') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_advertisements">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_advertisements" name="permissions[]"
                                                               value="delete_advertisements" {{ old('delete_advertisements') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_advertisements">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --}}

                                <!-- Teams Permission -->
                                {{-- <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Teams
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_teams" name="permissions[]"
                                                               value="access_teams" {{ old('access_teams') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_teams">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_teams" name="permissions[]"
                                                               value="show_teams" {{ old('show_teams') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_teams">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="create_teams" name="permissions[]"
                                                               value="create_teams" {{ old('create_teams') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="create_teams">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_teams" name="permissions[]"
                                                               value="edit_teams" {{ old('edit_teams') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_teams">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_teams" name="permissions[]"
                                                               value="delete_teams" {{ old('delete_teams') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_teams">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --}}

                                <!-- Faqs Permission -->
                                {{-- <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Faqs
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_faqs" name="permissions[]"
                                                               value="access_faqs" {{ old('access_faqs') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_faqs">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_faqs" name="permissions[]"
                                                               value="show_faqs" {{ old('show_faqs') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_faqs">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="create_faqs" name="permissions[]"
                                                               value="create_faqs" {{ old('create_faqs') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="create_faqs">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_faqs" name="permissions[]"
                                                               value="edit_faqs" {{ old('edit_faqs') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_faqs">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_faqs" name="permissions[]"
                                                               value="delete_faqs" {{ old('delete_faqs') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_faqs">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --}}

                                <!-- Testimonials Permission -->
                                {{-- <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Testimonials
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_testimonials" name="permissions[]"
                                                               value="access_testimonials" {{ old('access_testimonials') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_testimonials">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_testimonials" name="permissions[]"
                                                               value="show_testimonials" {{ old('show_testimonials') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_testimonials">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="create_testimonials" name="permissions[]"
                                                               value="create_testimonials" {{ old('create_testimonials') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="create_testimonials">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_testimonials" name="permissions[]"
                                                               value="edit_testimonials" {{ old('edit_testimonials') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_testimonials">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_testimonials" name="permissions[]"
                                                               value="delete_testimonials" {{ old('delete_testimonials') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_testimonials">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --}}

                                <!-- Vacancies Permission -->
                                {{-- <div class="col-lg-4 col-md-6 mb-3">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-header">
                                            Vacancy
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="access_vacancies" name="permissions[]"
                                                               value="access_vacancies" {{ old('access_vacancies') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="access_vacancies">Access</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="show_vacancies" name="permissions[]"
                                                               value="show_vacancies" {{ old('show_vacancies') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="show_vacancies">View</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="create_vacancies" name="permissions[]"
                                                               value="create_vacancies" {{ old('create_vacancies') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="create_vacancies">Create</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="edit_vacancies" name="permissions[]"
                                                               value="edit_vacancies" {{ old('edit_vacancies') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="edit_vacancies">Edit</label>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="delete_vacancies" name="permissions[]"
                                                               value="delete_vacancies" {{ old('delete_vacancies') ? 'checked' : '' }}>
                                                        <label class="custom-control-label" for="delete_vacancies">Delete</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --}}

                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>
</div>
@endsection

@section('script')
    <script>
        $(document).ready(function() {
            $('#select-all').click(function() {
                var checked = this.checked;
                $('input[type="checkbox"]').each(function() {
                    this.checked = checked;
                });
            })
        });
    </script>
@endsection
