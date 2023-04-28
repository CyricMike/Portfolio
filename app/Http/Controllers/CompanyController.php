<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CompanyController extends Controller
{
    public function companies(){

        return DB::connection('Database2')
            ->select(' 
                select CompanyCode, AbbreviationName From Companies
            '); 
    }

    public static function department(){

        return DB::connection('Database2')
            ->select('
                select CompanyCode, DepartmentCode, DepartmentName From Departments
            ');
    }

    public static function sections(){

        $section = DB::connection('Database2')->select('

            select D.CompanyCode, S.SectionCode, D.DepartmentCode, S.SectionName From DepartmentSectionRelations D
            INNER JOIN Sections S ON S.SectionCode = D.SectionCode AND S.CompanyCode = D.CompanyCode
            INNER JOIN Departments DP ON D.DepartmentCode =  DP.DepartmentCode AND D.CompanyCode = DP.CompanyCode

        ');

        return $section;
    }

}
