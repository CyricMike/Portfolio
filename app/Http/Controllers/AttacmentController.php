<?php

namespace App\Http\Controllers;

use App\Models\T_AttachedFiles;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class AttacmentController extends Controller
{
    public function SaveAttachmentToFileServer(Request $req){ 

        if(!empty($req->file())){                                                                           // Determine whether a file is passed in
            $file = $req->file('file');                                                                     // Get the request file
            if(!empty($file)){
                $realPath = $file->getRealPath();                                                           // Get the real path of the file
                $filename = $req->filename;                                                                 // Named according to a certain format
                $filepath = 'ForApprovals'.'/'.$req->folderName.'/';                                        // Actual path
                 
                Storage::disk('ftp')->put($filepath.$filename, file_get_contents($realPath));               // Use Storage to transfer files to ftp 
            } 
        }     
        return [
                    $realPath,
                    $filename,
                    $filepath
                ];
    }

    public function getUploadedIAttachment(Request $req){
        $files = Storage::disk('ftp')->files($req->directory); 
        $arr=array($req->folder);
        array_push($arr,$files);
        return $arr; 
    }

    public function AttachmentRequestFile(Request $req){ 

        Storage::disk('ftp')->makeDirectory($req->ReferenceNo);  //Actual path
        
        for ($i=0; $i < count($req->Attachments) ; $i++) {  
            Storage::disk('ftp')->copy('ForApprovals/'.$req->TemporaryNo.'/'.$req->Attachments[$i]  , $req->ReferenceNo.'/'.$req->Attachments[$i]);  //Actual path
        }
    }


    public function DownloadAttachFile(Request $req){  
        
            $file = Storage::disk('ftp')->files($req->path); 
            $coll = collect($file);
            $path = $coll->map(function($item)  use($req) {
                return $item === $req->path.'/'.$req->filename;
            });
            return $path;
            $headers = array(
                    'Content-Type: application/pdf',
                    );

            return Response::download($file, $path, $headers);
    }

    public function SaveFileAttachment(Request $req){
         if(!empty($req->file())){                                                                              // Determine whether a file is passed in
            $file = $req->file('file');                                                                         // Get the request file
            if(!empty($file)){
                $realPath = $file->getRealPath();                                                               // Get the real path of the file
                $filename = $req->filename;                                                                     // Named according to a certain format 
                $filepath = 'SaveFileAttachment/';                                                              // Test path
                Storage::disk('public')->put($filepath.$filename, file_get_contents($realPath));                // Use Storage to transfer files to ftp 
            }
        }     
    }
        
}


