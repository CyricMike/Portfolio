<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class T_ErrorInSavingButAlreadySent extends Model
{
    protected $connection = 'Main_Database';
    protected $table = 'T_ErrorInSavingButAlreadySent';

    const UPDATED_AT = 'UpdatedDate';
    const DELETED_AT = 'DeletedDate';
    const CREATED_AT = 'CreatedDate';
}
