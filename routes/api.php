<?php

use App\Http\Controllers\AttacmentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\MonitoringController;
use App\Http\Controllers\RequestApprovalController;
use App\Http\Controllers\TaskMonitoringController;
use App\Http\Controllers\UserController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//********************************************************************************************************************************************************* //
//******************************************************************* Company Controller ******************************************************************* //
//********************************************************************************************************************************************************* //
Route::get('companies', [CompanyController::class, 'companies']);
Route::get('department', [CompanyController::class, 'department']);
Route::get('sections', [CompanyController::class, 'sections']);



// ********************************************************************************************************************************************************* //
// ************************************************************* Request Approval Controller *************************************************************** //
// ********************************************************************************************************************************************************* //
// APP.JS
Route::get('Status', [RequestApprovalController::class, 'Status']);
Route::get('Kinds', [RequestApprovalController::class, 'Kinds']);
Route::get('RequestKinds', [RequestApprovalController::class, 'RequestKinds']);
Route::get('AdminInfo', [RequestApprovalController::class, 'AdminInfo']);
Route::get('SystemForRequest', [RequestApprovalController::class, 'SystemForRequest']);
Route::get('SystemMaster', [RequestApprovalController::class, 'SystemMaster']);
Route::get('Requestor', [RequestApprovalController::class, 'Requestor']);
Route::get('fetchCC', [RequestApprovalController::class, 'fetchCC']);
Route::get('Approver', [RequestApprovalController::class, 'Approver']);


//TASK UPDATE
Route::post('getReferenceData', [RequestApprovalController::class, 'getReferenceData']);
Route::post('SaveUpdateTask', [RequestApprovalController::class, 'SaveUpdateTask']);
Route::post('SaveEditedUpdates', [RequestApprovalController::class, 'SaveEditedUpdates']);
Route::post('UpdateEmployee', [RequestApprovalController::class, 'UpdateEmployee']);

Route::get('Systems', [RequestApprovalController::class, 'Systems']);
Route::get('Employees', [RequestApprovalController::class, 'Employees']);
Route::get('RequesterEmails', [RequestApprovalController::class, 'RequesterEmails']);
Route::get('SentEmails', [RequestApprovalController::class, 'SentEmails']);
Route::get('UnfinishTask', [RequestApprovalController::class, 'UnfinishTask']);
Route::get('TempReference', [RequestApprovalController::class, 'TempReference']);

Route::post('SaveRequestDetails', [RequestApprovalController::class, 'SaveRequestDetails']);
Route::post('ErrorSaving', [RequestApprovalController::class, 'ErrorSaving']);

// ********************************************************************************************************************************************************* //
// ********************************************************************** User Controller ****************************************************************** //
// ********************************************************************************************************************************************************* //

Route::get('UserIPaddress', [UserController::class, 'UserIPaddress']);
Route::post('Login', [UserController::class, 'Login']);


// ********************************************************************************************************************************************************* //
// ************************************************************ Task MonitoringController ****************************************************************** //
// ********************************************************************************************************************************************************* //

 Route::get('UserInfo/{IP}', [TaskMonitoringController::class, 'UserInfo']);
 
 
// ********************************************************************************************************************************************************* //
// ************************************************************ Task MonitoringController ****************************************************************** //
// ********************************************************************************************************************************************************* //

 Route::post('ForApprovalEmailSending', [EmailController::class, 'ForApprovalEmailSending']);
 Route::post('ApprovedSendingEmail', [EmailController::class, 'ApprovedSendingEmail']);

// ********************************************************************************************************************************************************* //
// ************************************************************* MonitoringController ********************************************************************** //
// ********************************************************************************************************************************************************* //
 
 Route::get('Emails', [MonitoringController::class, 'Emails']);

 Route::post('fetchRequestData', [MonitoringController::class, 'fetchRequestData']);
 Route::get('AttacmentFileApprved', [MonitoringController::class, 'AttacmentFileApprved']);
 Route::post('ForApprovalRequest', [MonitoringController::class, 'ForApprovalRequest']);
 Route::post('getLatestReferenceNo', [MonitoringController::class, 'getLatestReferenceNo']);
 Route::post('ApproveRequest', [MonitoringController::class, 'ApproveRequest']);
 Route::post('DisapproveRequest', [MonitoringController::class, 'DisapproveRequest']);


// ********************************************************************************************************************************************************* //
// ************************************************************* MonitoringController ********************************************************************** //
// ********************************************************************************************************************************************************* //

Route::post('SaveAttachmentToFileServer', [AttacmentController::class, 'SaveAttachmentToFileServer']);
Route::post('SaveAttachments', [AttacmentController::class, 'SaveAttachments']);
Route::post('AttachmentRequestFile', [AttacmentController::class, 'AttachmentRequestFile']);
Route::post('getUploadedIAttachment', [AttacmentController::class, 'getUploadedIAttachment']);
Route::post('getAttachmentsFiles', [AttacmentController::class, 'getAttachmentsFiles']);
Route::post('DownloadAttachFile', [AttacmentController::class, 'DownloadAttachFile']);
 


// ********************************************************************************************************************************************************* //
// ************************************************************* MonitoringController ********************************************************************** //
// ********************************************************************************************************************************************************* //

Route::post('SaveFileAttachment', [AttacmentController::class, 'SaveFileAttachment']);

