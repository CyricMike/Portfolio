<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class M_EmailStatus extends Model
{
    protected $connection = 'Main_Database';
    protected $table = 'M_EmailStatus';
    
    const UPDATED_AT = 'UpdatedDate';
    const DELETED_AT = 'DeletedDate';
    const CREATED_AT = 'CreatedDate';
}
