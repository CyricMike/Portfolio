<?php

namespace App\Http\Controllers;

use App\Mail\ApprovedRequest;
use App\Mail\RequestForApproval;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function ForApprovalEmailSending(Request $req){

        return
        Mail::to('cyricmike17@gmail.com') 
            ->cc($moreUsers)        
            ->send(new RequestForApproval($req)); 
    }

    public function ApprovedSendingEmail(Request $req){
        Mail::to('cyricmike17@gmail.com') 
        ->send(new ApprovedRequest($req));
        return 'Email Sent'; 
    }
}
