<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    //
    protected $table = 'chapters';

    protected $fillable = [
        'name', 'course_id'
    ];

    /**
     * Get all of the lesson for the Chapter
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function lesson()
    {
        return $this->hasMany(Lesson::class)->orderBy('id', 'ASC');
    }
}
