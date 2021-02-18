<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Course;
use App\ImageCourse;

class ImageCourseController extends Controller
{
    //
    public function create(Request $request) {
        $rules = [
            'image' => 'required|url',
            'course_id' => 'required|integer'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'data' => $validator->errors()
            ], 400);
        }

        $courseId = $request->input('course_id');
        $course = Course::find($courseId);

        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'course not found'
            ], 404);
        }

        $imageCourse = ImageCourse::create($data);
        return response()->json([
            'status' => 'success',
            'data' => $imageCourse
        ], 200);
    }

    public function destroy($id) {
        $imageCourse = ImageCourse::find($id);

        if (!$imageCourse) {
            return response()->json([
                'status' => 'error',
                'message' => 'image course not found'
            ], 404);
        }

        $imageCourse->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'image course deleted'
        ], 200);
    }
}
