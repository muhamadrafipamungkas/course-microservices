<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;

use App\Course;
use App\Mentor;
use App\MyCourse;
use App\Review;

class CourseController extends Controller
{
    //
    public function index(Request $request) {
        $courses = Course::query();

        $q = $request->query('q');
        $status = $request->query('status');

        $courses->when($q, function($query) use ($q) {
            return $query->whereRaw("name LIKE '%". strtolower($q)."%'");
        });

        $courses->when($status, function($query) use ($status) {
            return $query->where('status', $status);
        });

        return response()->json([
            'status' => 'success',
            'data' => $courses->paginate(10)
        ], 200);
    }

    public function show($id) {
        $course = Course::with('chapters.lessons', 'mentor', 'images')->find($id);

        if(!$course) {
            return response()->json([
                'status' => 'success',
                'message' => 'course not found'
            ], 404);
        }

        $reviews = Review::where('course_id', $id)->get()->toArray();
        $totalStudent = MyCourse::where('course_id', $id)->count();

        $course['reviews'] = $reviews;
        $course['total_student'] = $totalStudent;

        return response()->json([
            'status' => 'success',
            'data' => $course
        ], 200);
    }

    public function create(Request $request) {
        $rules = [
            'name' => 'required|string',
            'certificate' => 'required|boolean',
            'thumbnail' => 'string|url',
            'type' => 'required|in:free,premium',
            'status' => 'required|in:draft,published',
            'price' => 'integer',
            'level' => 'required|in:all-level,beginner,intermediate,advance',
            'mentor_id' => 'required|integer',
            'description' => 'string'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if ($validator->fails()){
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $mentorId = $request->input('mentor_id');
        $mentor = Mentor::find($mentorId);

        if (!$mentor) {
            return response()->json([
                'status' => 'error',
                'message' => 'mentor not found'
            ], 404);
        }

        $course = Course::create($data);

        return response()->json([
            'status' => 'success',
            'data' => $course
        ], 200);
    }

    public function update(Request $request, $id) {
        $rules = [
            'name' => 'string',
            'certificate' => 'boolean',
            'thumbnail' => 'string|url',
            'type' => 'in:free,premium',
            'status' => 'in:draft,published',
            'price' => 'integer',
            'level' => 'in:all-level,beginner,intermediate,advance',
            'mentor_id' => 'integer',
            'description' => 'string'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if ($validator->fails()){
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $course = Course::find($id);

        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'course not found'
            ], 404);
        }

        $mentorId = $request->input('mentor_id');

        if ($mentorId) {
            $mentor = Mentor::find($mentorId);

            if (!$mentor) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'mentor not found'
                ], 404);
            }
        }

        $course->fill($data);
        $course->save();

        return response()->json([
            'status' => 'success',
            'data' => $course
        ], 200);
    }

    public function destroy($id) {
        $course = Course::find($id);

        if (!$course) {
            return response()->json([
                'status' => 'error',
                'data' => 'course not found'
            ], 404);
        }

        $course->delete();

        return response()->json([
            'status' => 'success',
            'data' => 'course deleted'
        ], 200);
    }
}
