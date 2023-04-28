<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style> 
p {
  margin: 0px
} 
</style>
</head>
<body>

    <p> From:        SystemManagement </p>
    <p> Sent on:     Friday, March 4, 2022 10:51:36 PM </p>
    <p> To:          *RequestReceiving </p>
    <p> CC:          *comp-SoftwareOrderManage </p>
    <p> Subject:     **Claim**comp-2022-083:PlumbingItemPicking </p>
    <p> Attachments: {{$data->Attach}} </p> 
    <br>
    <p> Good day, </p>
    <br>
    <p> **System Name** </p>
    <p> {{ $data->SystemName }} </p>
    <br>
    <p> **Requester** </p>
    <p> {{ $data->Requester }} {{ $data->RequesterEmail }} </p>
    <br>
    <p> **Request Kind** </p>
    <p> {{ $data->RequestName }} </p>
    <br>
    <p> **Details** </p>
    <p> {{ $data->DetailOfRequest }} </p>
    <br>
    <br>
    <p> No. of Affected PC: {{ $data->AffectedPC }} </p>
    <p> Trouble Start Time:{{ $data->TroubleStartTime }} </p>
    <p> Operating System(OS) Used: {{ $data->OperatingSystem }} </p>
    <br>
    <p> **Desired Delivery Date** </p>
    <p> {{ $data->DueDate }} </p>
    <br>
    <p> **Estimated Hours** </p>
    <p> {{ $data->EstimatedHours }} </p>
    <br>
    <p> Thank you. </p>
    <br>
    <p> Regards, </p>
    <p> {{ $data->UpdatedBy }} </p>

</body>
</html>


