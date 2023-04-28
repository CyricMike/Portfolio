<?php

namespace App\Http\Controllers;

use App\Models\M_Employee__MISSQL;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TaskMonitoringController extends Controller
{
    public function UserInfo($IPAddress)
    { 
        return  M_Employee__MISSQL::from('M_Employee as E')
            ->leftJoin('Sections as S' , 'E.SectionCode' , 'S.SectionCode' )
            ->where('E.IPAddress' , $IPAddress)
            ->where('S.CompanyCode' , '003')
            ->get();
    }
}
