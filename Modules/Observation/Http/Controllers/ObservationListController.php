<?php

namespace Modules\Observation\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;
use Modules\Observation\Entities\ObservationList;

class ObservationListController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $observations = ObservationList::latest()->get();

        return view('observation::observation-list.index',compact("observations"));
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('observation::observation-list.create');
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

        if($request['status'] == 'on')
        {
            $status = 'on';
        }else{
            $status = 'off';
        }

        $imageName = '';
        if ($request->image) {
            $filename = $request->image->getClientOriginalName();
            $imageName = time() . $filename;

            $request->image->move(public_path('upload/images/observations'), $imageName);
        }
        ObservationList::create([
            'title' => $request->title,
            'slug' => $slug,
            'description' => $request->description,
            'image' => $imageName,
            'status' => $status
        ]);

        return redirect()->route('observation-list.index')->with('success', 'Created Successfully.');
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('observation::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        $observation = ObservationList::findorfail($id);

        return view('observation::observation-list.edit',compact("observation"));
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
        $observation = ObservationList::findorfail($id);
        $slug = Str::slug($request->title);

        if($request['status'] == 'on')
        {
            $status = 'on';
        }else{
            $status = 'off';
        }

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
            'status' => $status
        ]);

        return redirect()->route('observation-list.index')->with('success', 'Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        abort_if(Gate::denies('delete_observations'), 403);
        $observation = ObservationList::findOrfail($id);
        $observation->delete();
        return back()->with('success', 'Deleted Successfully');
    }
    public function status($id)
    {
        abort_if(Gate::denies('access_observations'), 403);
        $observation = ObservationList::findOrfail($id);
        if($observation->status == 'on')
        {
            $status = 'off';
        }else{
            $status = 'on';
        }
        $observation->update([
           'status' => $status
        ]);
        return back()->with('success', 'Status Updated Successfully');
    }
}
