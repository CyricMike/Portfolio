<?php

namespace App\Http\Controllers;

use App\Models\M_EmailStatus;
use App\Models\T_AttachedFiles;
use App\Models\T_Request;
use App\Models\T_RequestForApproval;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class MonitoringController extends Controller
{
     public function Emails(){
        return M_EmailStatus::whereNull('DeletedDate')->get();
    }

    public function ForApprovalRequest(Request $req){
        
        $query = T_RequestForApproval::
                whereIn('EmailStatusCode' ,[ 1,3])
                ->where('RequestDate' , '>=' , '2020/10/01 00:00:00' )
                ->whereIn('StatusCode' , [1,2] )
                ->where(function($que) use($req){
                    if(isset($req->ID)){
                        $que->where('ApproverId', $req->ID);
                    }
                })
                ->orderByDesc('RequestDate')
                ->get();
        
        //get Attachments for each request anf push to Attachments array

        for ($i=0; $i < count($query) ; $i++) { 
            $query[$i]->Attachments = array();
            $files = Storage::disk('ftp')->files('ForApprovals/'.$query[$i]->TemporaryNo);   //Actual path 
           
            $temp = array();

            foreach ($files as $value) {
                $split = explode('/' , $value) ;
                array_push($temp , $split[2]); 
            }
            $query[$i]->Attachments = $temp; 
            
        }
        
        $count = T_RequestForApproval::
                where('EmailStatusCode' , 1)
                ->where('RequestDate' , '>=' , '2020/10/01 00:00:00' )
                ->where('StatusCode' , 2 )
                ->where(function($que) use($req){
                    if(isset($req->ID)){
                        $que->where('ApproverId', $req->ID);
                    }
                }) 
                ->count(); 

        return  [     
                    'data' => $query, 
                    'count' =>$count
                ];
    }

    public function fetchRequestData(Request $req){
        $query = T_Request::where('RequestDate' , '>=' , '2020/10/01 00:00:00' ) 
                    ->where(function($que) use($req){
                        if(isset($req->ID)){
                            $que->where('ApproverId', $req->ID);
                        }
                    }) 
                    ->orderByDesc('RequestDate')
                    ->get();
            
        //get Attachments
        for ($i=0; $i <count($query) ; $i++) { 
            $query[$i]->Attachments = T_AttachedFiles::where('RequestNo', $query[$i]->RequestNo)
                        ->get();
        }
    
        return $query;
    }

    public function AttacmentFileApprved(){
        $query =  T_Request::where('RequestDate' , '>=' , '2020/10/01 00:00:00' )  
                    ->orderByDesc('RequestDate')
                    ->get();

        for ($i=0; $i <count($query) ; $i++) { 
            $files = Storage::disk('ftp')->files($query[$i]->RequestNo);    
            $query[$i]->Attachments = $files; 
        }
        return $query;
    }

    public function getLatestReferenceNo(Request $req){  
        //update email status
            T_RequestForApproval::where('TemporaryNo' , $req->TemporaryNo)
                ->update([
                    'EmailStatusCode'   => 4,
                    'UpdatedDate'       => date('Y/m/d H:i:s'),
                    'UpdatedBy'         => $req->JapApprover
                ]);
                
        $query = T_Request::select(DB::raw("TOP 1 RequestNo"))
                ->where('RequestNo' , 'LIKE' , '%'.date('Y').'%') 
                ->orderByDesc('CreatedDate')
                ->get(); 
         
        $retVal = (count($query) != 0) ? substr($query[0]->RequestNo , 9) + 1 : '01' ;

        return $retVal <= 99 ? 'comp-'.date('Y').'-0'.$retVal : 'comp-'.date('Y').'-'.$retVal ;
    }

    public function ApproveRequest(Request $req){

        // Updata T_RequestForApproval record Before inserting to T_Request

        T_RequestForApproval::where('TemporaryNo' , $req->TemporaryNo)
            ->update([
                'EmailStatusCode'   => 2,
                'StatusCode'        => 1,
                'ApprovedDate'      => date('Y/m/d H:i:s'),
                'ApprovedBy'        => $req->JapApprover,
                'UpdatedDate'       => date('Y/m/d H:i:s'),
                'UpdatedBy'         =>  $req->JapApprover
            ]);

        // Check if there is existing data then get the latest Seqno 
       
        // Inserting the attachent title 
        for ($i=0; $i <count($req->Attachments) ; $i++) {  
            $Seqno = T_AttachedFiles::select('SeqNo')
                    ->where('RequestNo', $req->ReferenceNo)
                    ->max('SeqNo') ;

            $data = [
                'RequestNo'     => $req->ReferenceNo,
                'SeqNo'         => $Seqno + 1,
                'FileName'      => $req->Attachments[$i],
                'CreatedDate'   =>  date('Y/m/d H:i:s'), 
                'UpdatedDate'   =>  date('Y/m/d H:i:s'),
                'UpdatedBy'     => $req->UpdatedBy 
            ];
            T_AttachedFiles::insert($data);
        }

        // Insrting data to T_Request

        $newData = [
            'RequestNo'         => $req->ReferenceNo,
            'SystemCode'        => $req->SystemCode,
            'KindCode'          => $req->KindCode,
            'RequestCode'       => $req->RequestCode,
            'ApproverId'        => $req->ApproverId,
            'StatusCode'        => $req->StatusCode,
            'CompanyCode'       => $req->CompanyCode,
            'Department'        => $req->Department,
            'SystemName'        => $req->SystemName,
            'Requester'         => $req->Requester,
            'Email'             => $req->RequesterEmail,
            'Background'        => $req->Background,
            'DetailOfRequest'   => $req->DetailOfRequest,
            'InCharge'          => '',
            'PMSReference'      => $req->RMSReference,
            'EstimatedHours'    => $req->EstimatedHours,
            'RequestDate'       => $req->RequestDate,
            'DueDate'           => $req->DueDate, 
            'CreatedDate'       => date('Y/m/d H:i:s'), 
            'UpdatedDate'       => date('Y/m/d H:i:s'),
            'RegisteredBy'      => $req->UpdatedBy,
            'UpdatedBy'         => $req->JapApprover,
            'AffectedPC'        => $req->AffectedPC,
            'OperatingSystem'   => $req->OperatingSystem,
            'TroubleStartTime'  => $req->TroubleStartTime,  
        ];

        T_Request::insert($newData);
        
        return $data;
    }

    public function DisapproveRequest(Request $req){
        // T_RequestForApproval::where('TemporaryNo' , $req->TemporaryNo)
        //     ->update([
        //         'EmailStatusCode' => 3,
        //         'StatusCode' => 1,
        //         'UpdatedDate' => date('Y/m/d H:i:s'),
        //         'UpdatedBy' => 'test'
        //     ]);
        return $req;
    }
}
