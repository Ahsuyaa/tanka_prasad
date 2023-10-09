  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{ route('home') }}" class="brand-link text-center" style="text-decoration: none;">
      {{-- <img src="{{ asset('backend/dist/img/AdminLTELogo.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"> --}}
      <i class="fa fa-paw"></i>
      <span class="brand-text font-weight-light">Dashboard</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          @php
            $profile = \Modules\Setting\Entities\CompanyProfile::first();
          @endphp
          <img src="{{ asset('upload/images/settings/'.$profile->logo) }}" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="{{ route('home') }}" class="d-block" style="text-decoration: none;">{{ $profile->company_name }}</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2 mb-4">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item {{ request()->routeIs('home') ? 'menu-open' : '' }}">
            <a href="{{ route('home') }}" class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard

              </p>
            </a>
          </li>

          @can('access_user_management')
          <li class="nav-item {{ request()->routeIs('users.*','roles.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('users.*','roles.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-users"></i>
              <p>
                Users
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('roles.index') }}" class="nav-link {{ request()->routeIs('roles.index') ? 'active' : '' }}">
                  {{-- <i class="far fa-circle nav-icon"></i> --}}
                  <p>Roles</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('users.index') }}" class="nav-link {{ request()->routeIs('users.index') ? 'active' : '' }}">
                  {{-- <i class="far fa-circle nav-icon"></i> --}}
                  <p>Users</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('users.create') }}" class="nav-link {{ request()->routeIs('users.create') ? 'active' : '' }}">
                  {{-- <i class="far fa-circle nav-icon"></i> --}}
                  <p>Create Users</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan

          {{-- @can('access_sliders')
          <li class="nav-item {{ request()->routeIs('sliders.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('sliders.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-image"></i>
              <p>
                Sliders
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('sliders.index') }}" class="nav-link {{ request()->routeIs('sliders.index') ? 'active' : '' }}">

                  <p>Sliders</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('sliders.create') }}" class="nav-link {{ request()->routeIs('sliders.create') ? 'active' : '' }}">

                  <p>Create Sliders</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan --}}

          @can('access_menu')
          <li class="nav-item {{ request()->routeIs('menu.*','page.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('menu.*','page.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-list"></i>
              <p>
                Menu
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('page.index') }}" class="nav-link {{ request()->routeIs('page.*') ? 'active' : '' }}">
                  {{-- <i class="far fa-circle nav-icon"></i> --}}
                  <p>Page</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('menu.index') }}" class="nav-link {{ request()->routeIs('menu.*') ? 'active' : '' }}">
                  {{-- <i class="far fa-circle nav-icon"></i> --}}
                  <p>Menu</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan

          @can('access_timelines')
          <li class="nav-item {{ request()->routeIs('timelines.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('timelines.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-clock"></i>
              <p>
                Timelines
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('timelines.index') }}" class="nav-link {{ request()->routeIs('timelines.index') ? 'active' : '' }}">

                  <p>Timelines</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('timelines.create') }}" class="nav-link {{ request()->routeIs('timelines.create') ? 'active' : '' }}">

                  <p>Create Timeline</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan

          @can('access_major_works')
          <li class="nav-item {{ request()->routeIs('major-works.*', 'major-works-list.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('major-works.*', 'major-works-list.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-building"></i>
              <p>
                Major Works (प्रमुख कार्यहरू)
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('major-works.index') }}" class="nav-link {{ request()->routeIs('major-works.index') ? 'active' : '' }}">

                  <p>Major Works (प्रमुख कार्यहरू)</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('major-works-list.index') }}" class="nav-link {{ request()->routeIs('major-works-list.*') ? 'active' : '' }}">

                  <p>Major Works Lists</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan

          @can('access_observations')
          <li class="nav-item {{ request()->routeIs('observation.*', 'observation-list.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('observation.*', 'observation-list.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-search"></i>
              <p>
                Observations (अवलोकन )
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('observation.index') }}" class="nav-link {{ request()->routeIs('observation.index') ? 'active' : '' }}">

                  <p>Observations (अवलोकन )</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('observation-list.index') }}" class="nav-link {{ request()->routeIs('observation-list.*') ? 'active' : '' }}">

                  <p>Observations Lists</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan

          @can('access_gallery')
                      <li class="nav-item {{ request()->routeIs('gallery.*') ? 'menu-is-opening menu-open' : '' }}">
                          <a href="#" class="nav-link" {{ request()->routeIs('gallery.*') ? 'active' : '' }}>
                              <i class="nav-icon fas fa-images"></i>
                              <p>
                                  Gallery
                                  <i class="right fas fa-angle-left"></i>
                              </p>
                          </a>
                          <ul class="nav nav-treeview">
                              <li class="nav-item">
                                  <a href="{{ route('gallery.index') }}"
                                      class="nav-link {{ request()->routeIs('gallery.index','gallery.edit') ? 'active' : '' }}">
                                      {{-- <i class="far fa-circle nav-icon"></i> --}}
                                      <p>Images</p>
                                  </a>
                              </li>
                              {{-- <li class="nav-item">
                                  <a href="{{ route('gallery.video.index') }}"
                                      class="nav-link {{ request()->routeIs('gallery.video.index') ? 'active' : '' }}">
                                      <p>Videos</p>
                                  </a>
                              </li> --}}
                          </ul>
                      </li>
                  @endcan

          {{-- @can('access_blogs')
          <li class="nav-item {{ request()->routeIs('blogs.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('blogs.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-newspaper"></i>
              <p>
                Blogs
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('blogs.index') }}" class="nav-link {{ request()->routeIs('blogs.index') ? 'active' : '' }}">

                  <p>Blog</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('blogs.create') }}" class="nav-link {{ request()->routeIs('blogs.create') ? 'active' : '' }}">

                  <p>Create Blogs</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan --}}

          {{-- @can('access_advertisements')
          <li class="nav-item {{ request()->routeIs('advertisements.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('advertisements.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-image"></i>
              <p>
                Advertisements
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('advertisements.index') }}" class="nav-link {{ request()->routeIs('advertisements.index') ? 'active' : '' }}">

                  <p>Advertisements</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('advertisements.create') }}" class="nav-link {{ request()->routeIs('advertisements.create') ? 'active' : '' }}">

                  <p>Create Advertisements</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan --}}

          {{-- @can('access_teams')
          <li class="nav-item {{ request()->routeIs('teams.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('teams.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-user"></i>
              <p>
                Teams
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('teams.index') }}" class="nav-link {{ request()->routeIs('teams.index') ? 'active' : '' }}">

                  <p>Teams</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('teams.create') }}" class="nav-link {{ request()->routeIs('teams.create') ? 'active' : '' }}">

                  <p>Create Teams</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan --}}

          {{-- @can('access_faqs')
          <li class="nav-item {{ request()->routeIs('faqs.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('faqs.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-question-circle"></i>
              <p>
                FAQs
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('faqs.index') }}" class="nav-link {{ request()->routeIs('faqs.index') ? 'active' : '' }}">

                  <p>FAQs</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('faqs.create') }}" class="nav-link {{ request()->routeIs('faqs.create') ? 'active' : '' }}">

                  <p>Create FAQs</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan --}}

          {{-- @can('access_testimonials')
          <li class="nav-item {{ request()->routeIs('testimonials.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('testimonials.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-comment"></i>
              <p>
                Testimonial
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('testimonials.index') }}" class="nav-link {{ request()->routeIs('testimonials.index') ? 'active' : '' }}">

                  <p>Testimonials</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('testimonials.create') }}" class="nav-link {{ request()->routeIs('testimonials.create') ? 'active' : '' }}">

                  <p>Create Testimonials</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan --}}

          {{-- @can('access_vacancies')
          <li class="nav-item {{ request()->routeIs('vacancies.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('vacancies.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-briefcase"></i>
              <p>
                Vacancies
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('vacancies.index') }}" class="nav-link {{ request()->routeIs('vacancies.index') ? 'active' : '' }}">

                  <p>Vacancies</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ route('vacancies.create') }}" class="nav-link {{ request()->routeIs('vacancies.create') ? 'active' : '' }}">

                  <p>Create Vacancy</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan --}}

          @can('access_settings')
          <li class="nav-item {{ request()->routeIs('company.*') ? 'menu-is-opening menu-open' : '' }}">
            <a href="#" class="nav-link" {{ request()->routeIs('company.*') ? 'active' : '' }}>
              <i class="nav-icon fas fa-cogs"></i>
              <p>
                Setting
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('company.index') }}" class="nav-link {{ request()->routeIs('company.index') ? 'active' : '' }}">
                  {{-- <i class="far fa-circle nav-icon"></i> --}}
                  <p>Company Profile</p>
                </a>
              </li>
            </ul>
          </li>
          @endcan

          @can('access_contact')
          <li class="nav-item {{ request()->routeIs('contacts') ? 'menu-open' : '' }}">
            <a href="{{ route('contacts.index') }}" class="nav-link {{ request()->routeIs('contacts') ? 'active' : '' }}">
              <i class="nav-icon fas fa-phone"></i>
              <p>
                Contact
                @php
                  $count = \Modules\Contact\Entities\Contact::where('status','unseen')->count();
                @endphp
                <span class="badge badge-info right">{{ $count }}</span>
              </p>
            </a>
          </li>
          @endcan

          @can('access_subscriptions')
          <li class="nav-item {{ request()->routeIs('subscriptions') ? 'menu-open' : '' }}">
            <a href="{{ route('subscriptions.index') }}" class="nav-link {{ request()->routeIs('subscriptions') ? 'active' : '' }}">
              <i class="nav-icon fas fa-at"></i>
              <p>
                Subscription
              </p>
            </a>
          </li>
          @endcan

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
