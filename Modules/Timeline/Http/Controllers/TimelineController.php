<?php

namespace Modules\Timeline\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;
use Modules\Timeline\Entities\Timeline;

class TimelineController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        abort_if(Gate::denies('show_timelines'), 403);
        $timelines = Timeline::orderBy('created_at','DESC')->get();
        return view('timeline::timeline.index',compact('timelines'));
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        abort_if(Gate::denies('create_timelines'), 403);
        return view('timeline::timeline.create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        abort_if(Gate::denies('create_timelines'), 403);
        $imageName = '';
        if ($request->image)
        {
            $filename=$request->image->getClientOriginalName();
            $imageName = time().$filename;

            $request->image->move(public_path('upload/images/timelines'), $imageName);

        }
        if($request->status){
            $status = $request->status;
        }
        else{
            $status = 'off';
        }
        Timeline::create([
            'year' => $request['year'],
            'title' => $request['title'],
            'description'=> $request['description'],
            'status' => $status,
            'image' => $imageName
        ]);
        // toastr('timeline Added','success');
        // return redirect()->route('timelines.index');
        return redirect()->route('timelines.index')->with('success', 'Added Successfully');
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        abort_if(Gate::denies('edit_timelines'), 403);
        $timeline = Timeline::findOrfail($id);
        return view('timeline::timeline.edit',compact('timeline'));
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        abort_if(Gate::denies('edit_timelines'), 403);
        $timeline = Timeline::findOrfail($id);
        $imageName = '';
        if ($request->image)
        {
            $filename=$request->image->getClientOriginalName();
            $imageName = time().$filename;

            $request->image->move(public_path('upload/images/timelines'), $imageName);

        }
        else{
            $imageName = $timeline->image;
        }
        if($request['status'] == 'on')
        {
            $status = 'on';
        }else{
            $status = 'off';
        }
        $timeline->update([
            'year' => $request['year'],
            'title' => $request['title'],
            'description'=> $request['description'],
            'status' => $status,
            'image' => $imageName
        ]);
        return redirect()->route('timelines.index')->with('success', 'Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        abort_if(Gate::denies('delete_timelines'), 403);
        $timeline = Timeline::findOrfail($id);
        $timeline->delete();
        return redirect()->route('timelines.index')->with('success', 'Deleted Successfully');
    }
    public function status($id)
    {
        abort_if(Gate::denies('access_timelines'), 403);
        $timeline = Timeline::findOrfail($id);
        if($timeline->status == 'on')
        {
            $status = 'off';
        }else{
            $status = 'on';
        }
        $timeline->update([
           'status' => $status
        ]);
        return redirect()->route('timelines.index')->with('success', 'Status Updated Successfully');
    }
}
