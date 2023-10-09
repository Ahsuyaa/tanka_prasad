<?php

namespace Modules\Observation\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;
use Modules\Observation\Entities\Observation;

class ObservationController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        abort_if(Gate::denies('access_observations'), 403);
        $observation = Observation::first();
        if ($observation) {
            return view('observation::observation.edit',compact("observation"));
        } else {
            return view('observation::observation.create');
        }
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('majorwork::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        abort_if(Gate::denies('create_observations'), 403);
        $slug = Str::slug($request->title);

        $imageName = '';
        if ($request->image) {
            $filename = $request->image->getClientOriginalName();
            $imageName = time() . $filename;

            $request->image->move(public_path('upload/images/observations'), $imageName);
        }
        Observation::create([
            'title' => $request->title,
            'slug' => $slug,
            'description' => $request->description,
            'image' => $imageName,
        ]);

        return redirect()->route('observation.index')->with('success', 'Created Successfully.');
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('majorwork::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('majorwork::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        abort_if(Gate::denies('edit_observations'), 403);
        $observation = Observation::findorfail($id);
        $slug = Str::slug($request->title);

        if($request->remove){
            $imageName = '';
        }
        else{
            $imageName = $observation->image;
        }

        if ($request->image) {
            $filename = $request->image->getClientOriginalName();
            $imageName = time() . $filename;

            $request->image->move(public_path('upload/images/observations'), $imageName);
        }
        $observation->update([
            'title' => $request->title,
            'slug' => $slug,
            'description' => $request->description,
            'image' => $imageName,
        ]);

        return redirect()->route('observation.index')->with('success', 'Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
