<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class T_AttachedFiles extends Model
{
    use HasFactory;

    protected $connection = 'Main_Database';
    protected $table = 'T_AttachedFiles';

    const UPDATED_AT = 'UpdatedDate';
    const DELETED_AT = 'DeletedDate';
    const CREATED_AT = 'CreatedDate';
}

