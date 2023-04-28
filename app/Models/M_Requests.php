<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class M_Requests extends Model
{
    protected $connection = 'Main_Database';
    protected $table = 'M_Requests';
    use HasFactory;
}
