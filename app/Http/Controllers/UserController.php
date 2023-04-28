<?php

namespace App\Http\Controllers;

use App\Models\T_ApproverAccounts;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    
    public function UserIPaddress(Request $req)
    {
        return $req->ip(); 
    }

    public function Login(Request $req){
        return T_ApproverAccounts::
                where('ID' , $req->userName)
                ->where('Password' , $req->password)
                ->get();
    }

}
