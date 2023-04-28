<?php

namespace App\Http\Controllers;

use App\Models\M_AdminInfo;
use App\Models\M_CC;
use App\Models\M_Kinds;
use App\Models\M_Employees;
use App\Models\M_Systems;
use App\Models\M_RequesterInfo;
use App\Models\M_Requests;
use App\Models\M_Status;
use App\Models\T_ApproverAccounts;
use App\Models\T_ErrorInSavingButAlreadySent;
use App\Models\T_Request;
use App\Models\T_RequestForApproval;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RequestApprovalController extends Controller
{
    //*********************************************************************************************************************************************************************************************//
    //*************************************************************************************** Get Methods *****************************************************************************************//
    //*********************************************************************************************************************************************************************************************//

    
    public function Status(){
        
        return M_Status::whereNull('DeletedDate')->get();
   }

    public function Kinds(){
        
        return M_Kinds::whereNull('DeletedDate')->get();
    }

    public function RequestKinds(){
            
        return M_Requests::whereNull('DeletedDate')->get();
    }

    public function AdminInfo(){
        
        return M_AdminInfo::whereNull('DeletedDate')->get();
    }

    public function SystemForRequest(){

        $Master =  M_Systems::select(DB::raw("SystemName, SystemCode"));

        $transac = T_RequestForApproval::select(DB::raw("SystemName, SystemCode"))
                   ->union($Master)
                   ->get();

        return $transac;
   }

    public function SystemMaster(){
        return M_Systems::whereNull('DeletedDate')->get();
    }
   
    public function Requestor(){

        return M_RequesterInfo::whereNull('DeletedDate')->get();
    }
    
    public function fetchCC(){

        return M_CC::whereNull('DeletedDate')->get();
    }
    
    public function Approver(){

        return T_ApproverAccounts::whereNull('DeletedDate')->get();
    }

    public function Systems(){
        return M_Systems::whereNull('M_Systems.DeletedDate')->get();
    }

    public function Employees(){
        return M_Employees::get();
    }

    public function RequesterEmails(){
        return M_RequesterInfo::whereNull('DeletedDate')->get();
    }

    public function SentEmails(){
        return T_Request::get();
    }

    public function TempReference(){
        $query = T_RequestForApproval::select(DB::raw("TOP 1 TemporaryNo"))
                ->where('TemporaryNo' , 'LIKE' , '%'.date('ymd').'%')
                ->orderByDesc('CreatedDate')
                ->get();
        
        $retVal = (count($query) != 0) ? substr($query[0]->TemporaryNo , 10) + 1 : '1'  ;

        return '-'.date('ymd').'0'.$retVal;
    }


    //*********************************************************************************************************************************************************************************************//
    //************************************************************************************** Post Methods *****************************************************************************************//
    //*********************************************************************************************************************************************************************************************//

    public function getReferenceData(Request $req){
        if ($req->radio == 'Request') {
             $whereCon = 'RequestNo';
        } else {
            $whereCon = 'PMSReference';
        }   
        
        return 
            T_Request::from('T_Request as T') 
            ->where('T.'.$whereCon , $req->Code) 
            ->get(); 
    }

    public function SaveUpdateTask(Request $req){
        T_Request::where('RequestNo', $req->RequestNo)
            ->update([
                'StatusCode'    => $req->StatusCode,
                'FinishedDate'  => $req->FinishedDate,
                'UpdatedDate'   => date('Y/m/d H:i:s')
            ]);
        return 'OK';
    }

    public function UnfinishTask(){
        return T_Request::whereIn('StatusCode' , [1,2] )
               ->orderBy('DueDate' , 'ASC')
               ->get();

    }
    
    public function SaveEditedUpdates(Request $req){
        if(isset($req->SystemCode)){
            M_Systems::where('SystemCode', $req->SystemCode)
            ->update([
                'SystemName'    => $req->SystemName,
                'iscomp'         => $req->iscomp,
                'ApproverID'    => $req->ApproverID,
                'UpdatedDate'   => date('Y/m/d H:i:s')
            ]);
            return 'if M_Systems';
        }

        if (isset($req->RequesterID)) {
            M_RequesterInfo::where('RequesterID', $req->RequesterID)
            ->update([
                'Requester' => $req->Requester,
                'Email' => $req->Email, 
                'UpdatedDate' => date('Y/m/d H:i:s')
            ]);
            return 'if M_RequesterInfo';
        }
    }

    public function UpdateEmployee(Request $req){
        
        if ($req->DeletedDate === null) {
            M_Employees::where('EmployeeNo', $req->EmployeeNo)
            ->update([
                'DeletedDate' => date('Y/m/d H:i:s')
            ]);
            return 'if';
        } else {
            M_Employees::where('EmployeeNo', $req->EmployeeNo)
            ->update([
                'DeletedDate' =>null
            ]);
            return 'else';
        }
        
    }

    public function SaveRequestDetails(Request $req){
        $toSaveRequest = [ 
            'TemporaryNo'           => $req->TemporaryNo,
            'EmailStatusCode'       => 1,
            'SystemCode'            => $req->SystemCode,
            'KindCode'              => $req->KindCode,
            'ApproverId'            => $req->SendTo,
            'RequestCode'           => $req->RequestCode,
            'StatusCode'            => 2,
            'CompanyCode'           => $req->CompanyCode,
            'Department'            => $req->DepartmentCode,
            'SystemName'            => $req->SystemName,
            'Requester'             => $req->RequesterName,
            'Background'            => $req->Background,
            'DetailOfRequest'       => $req->Details,
            'RMSReference'          => $req->Reference,
            'EstimatedHours'        => $req->EstimatedTime,
            'RequestDate'           => date('Y/m/d H:i:s'),
            'DueDate'               => $req->DeliveryDate,
            'AffectedPC'            => $req->AffectedPC,
            'OperatingSystem'       => $req->OS,
            'TroubleStartTime'      => $req->TroubleStart,
            'CreatedDate'           => date('Y/m/d H:i:s'),
            'ApprovedDate'          => null,
            'ApprovedBy'            => null,
            'RegisteredBy'          => $req->UserNickName,
            'ReasonOfCancellation'  => null,
            'RequesterEmail'        => $req->Email,
            'UpdatedDate'           => date('Y/m/d H:i:s'),
            'UpdatedBy'             => $req->UserNickName
        ]; 
            T_RequestForApproval::insert($toSaveRequest);
            return $toSaveRequest;
        
    }

    public function ErrorSaving(Request $req){
        $toSaveRequest = [ 
            'TemporaryNo'           => $req->TemporaryNo,
            'EmailStatusCode'       => 1,
            'SystemCode'            => $req->SystemCode,
            'KindCode'              => $req->KindCode,
            'ApproverId'            => $req->ApproverId,
            'RequestCode'           => $req->RequestCode,
            'StatusCode'            => 2,
            'CompanyCode'           => $req->CompanyCode,
            'Department'            => $req->DepartmentCode,
            'SystemName'            => $req->SystemName,
            'Requester'             => $req->RequesterName,
            'Background'            => $req->Background,
            'DetailOfRequest'       => $req->Details,
            'RMSReference'          => $req->Reference,
            'EstimatedHours'        => $req->EstimatedTime,
            'RequestDate'           => date('Y/m/d H:i:s'),
            'DueDate'               => $req->DeliveryDate,
            'AffectedPC'            => $req->AffectedPC,
            'OperatingSystem'       => $req->OS,
            'TroubleStartTime'      => $req->TroubleStart,
            'CreatedDate'           => date('Y/m/d H:i:s'),
            'ApprovedDate'          => null,
            'ApprovedBy'            => null,
            'RegisteredBy'          => $req->UserNickName,
            'ReasonOfCancellation'  => null,
            'RequesterEmail'        => $req->Email,
            'UpdatedDate'           => date('Y/m/d H:i:s'),
            'UpdatedBy'             => $req->UserNickName,
            'Error'                 => $req->Error
        ]; 

        T_ErrorInSavingButAlreadySent::insert($toSaveRequest);
        return $toSaveRequest;
    }
}
