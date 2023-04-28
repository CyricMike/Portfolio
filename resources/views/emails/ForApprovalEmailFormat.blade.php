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
              
    <p> From:   {{$data->RequesterName}} </p>
    <p> Sent on {{$data->SentDateTime}} </p>
    <p> To:   {{$data->ApproverName}} </p>
    <p> CC:   {{$data->CC}} </p>
    <p> Subject:   {{$data->Subject}} </p>
    <br>
    <p> Attachments:   {{$data->Attach}} </p>
    <br>
    <br>
    <p> Request for approval </p>
    <p> Task received </p>
    <br>
    <br>
    <p> Below is the URL: </p>
    <br>
    <br>
    <p> Good Day, </p>
    <br>
    <p> **System Name** </p>
    <p> {{$data->SystemName}} </p>
    <br>
    <p> **Requester** </p>
    <p> {{ $data->RequesterName }} </p>
    <br>
    <p> **Request Kind** </p>
    <p> {{ $data->RequestName}} </p>
    <br>
    <p> **Background** </p>
    <p> {{ $data->Background }} </p>
    <br>
    <p> **Details**  </p>
    <p> {{ $data->Details}} </p>
    <br>
    <p> @if ( $data->KindCode === '2') </p>
    <p> No. of Affected PC: {{ $data->AffectedPC }} </p>
    <p> Trouble Start Time: {{ $data->TroubleStart }} </p>
    <p> Operating System(OS) Used: {{ $data->OS}} </p>
    <br>
    <br>
    <p> @endif </p>
    <p> **Desired Delivery Date** </p>
    <p> {{ $data->DeliveryDate}} </p>
    <br>
    <p> **Estimated Hours** </p>
    <p> {{ $data->EstimatedTime}} </p>
    <br>
    <br>
    <p> Thank you. </p>
    <p>      </p>
    <p> Regards, </p>
    <p> {{ $data->UserNickName}} </p>
</body>
</html>
