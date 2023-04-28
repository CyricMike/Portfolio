<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class M_Systems extends Model
{
    protected $connection = 'Main_Database';
    protected $table = 'M_Systems';
    
    const UPDATED_AT = 'UpdatedDate';
    const DELETED_AT = 'DeletedDate';
    const CREATED_AT = 'CreatedDate';
}
