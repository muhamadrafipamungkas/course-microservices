<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MyCourse extends Model
{
    //
    protected $table = 'my_courses';

    protected $fillable = [
        'course_id', 'user_id'
    ];

    /**
     * Get the course that owns the MyCourse
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
