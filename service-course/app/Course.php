<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    //
    protected $table = 'courses';

    protected $fillable = [
        'name', 'certificate', 'thumbnail', 'type',
        'status', 'price', 'level', 'description', 'mentor_id'
    ];

    /**
     * Get the mentor that owns the Course
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function mentor()
    {
        return $this->belongsTo(Mentor::class);
    }

    /**
     * Get all of the chapters for the Course
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function chapters()
    {
        return $this->hasMany(Chapter::class)->orderBy('id', 'ASC');
    }

    /**
     * Get all of the iamges for the Course
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function iamges()
    {
        return $this->hasMany(ImageCourse::class)->orderBy('id', 'ASC');
    }
}
