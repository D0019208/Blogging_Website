//$(document).ready(function(){
//    
//
//var name;
//var now = new Date(Date.now());
//var minutes = now.getMinutes();
//if (minutes < 10) {
//    minutes = "0" + minutes;
//}
//var formatted = now.getHours() + ":" + minutes;
//var image; 
//
//$.ajax({
//    url: 'getChatDetails.php',
//    type: 'POST', 
// 
//    success: function (data)
//    {
//        name = data;
//    },
//    error: function ()
//    {
//        dataType: 'text';
//    }
//});
//
//
//$.ajax({
//    url: 'getChatDetailsImage.php',
//    type: 'POST', 
// 
//    success: function (data)
//    {
//        image = data;
//    },
//    error: function ()
//    {
//        dataType: 'text';
//    }
//});
//
////alert(process.env.ALWAYSDATA_HTTPD_PORT + process.env.ALWAYSDATA_HTTPD_IP);
//
//var sock = new WebSocket("ws://d00192082nodeserver.ga");
//
//var log = document.getElementById("log");
//
//sock.onmessage = function (event)
//{
//
//    console.log(event);
//    var json = JSON.parse(event.data);
//    console.log("json.name:");
//    
//    log.innerHTML += '<div class="chat-message clearfix" ><img src="' + json.image + '" alt="" width="32" height="32"><div class="chat-message-content clearfix"><span class="chat-time">' + formatted + '</span><h5>' + json.name + '</h5><p>' + json.data + '</p></div></div><hr>';
//
//};
//
//$("#chatBoxText").click(function(){
//    $("#chatBoxText").val("");
//});
//document.querySelector("#chatBoxButton").onclick = function ()
//{
//    var text = document.getElementById("chatBoxText").value;
////              sock.send(text);
//
//    sock.send(JSON.stringify({
//        type: "name",
//        data: name + "," + image
//    }));
//    
//    sock.send(JSON.stringify({
//        type: "message",
//        data: text
//    })); 
//    log.innerHTML += '<div class="chat-message clearfix" ><span class="chat-time">' + formatted + '</span><img src="' + image + '" alt="" width="32" height="32"><div class="chat-message-content clearfix"><h5>You: </h5><p>' + text + '</p></div></div><hr>';
//$("#chatBoxText").val("");
//};
//});

(function () {
    //var HOST = location.origin.replace(/^http/, 'ws');
    //var ws = new WebSocket("ws://d00192082nodeserver.ga"); 

//  form.onsubmit = function() {
//    var input = document.querySelector('.input'); 
//    var text = input.value;
//    ws.send(text);
//    input.value = '';
//    input.focus();
//    return false;
//  }
//  
//  ws.onmessage = function(msg) {
//    var response = msg.data;
//    var messageList = document.querySelector('.messages');
//    var li = document.createElement('li');
//    li.textContent = response;
//    messageList.appendChild(li);
//  }





    var name;
    var now;
    var minutes;
    var formatted;
    var image;

    $.ajax({
        url: 'getChatDetails.php',
        type: 'POST',

        success: function (data)
        {
            name = data;
        },
        error: function ()
        {
            dataType: 'text';
        }
    });


    $.ajax({
        url: 'getChatDetailsImage.php',
        type: 'POST',

        success: function (data)
        {
            image = data;
        },
        error: function ()
        {
            dataType: 'text';
        }
    });

//alert(process.env.ALWAYSDATA_HTTPD_PORT + process.env.ALWAYSDATA_HTTPD_IP);

    var sock = new WebSocket("wss://d00192082nodeserver.ga");

    var log = document.getElementById("log");

    sock.onmessage = function (event)
    {
        now = new Date(Date.now());
        minutes = now.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        formatted = now.getHours() + ":" + minutes;

        console.log(event);
        var json = JSON.parse(event.data);
        console.log(json);

        log.innerHTML += '<div class="chat-message clearfix" ><img src="' + json.image + '" alt="" width="32" height="32"><div class="chat-message-content clearfix"><span class="chat-time">' + formatted + '</span><h5>' + json.name + '</h5><p>' + json.data + '</p></div></div><hr>';
    };

//    $("#chatBoxText").click(function () {
//        $("#chatBoxText").val("");
//    });
    document.querySelector("#chatBoxButton").onclick = function ()
    {
        if ($("#chatBoxText").val() !== "")
        {
            var text = document.getElementById("chatBoxText").value;
//              sock.send(text);

            sock.send(JSON.stringify({
                type: "name",
                data: name + "," + image
            }));

            sock.send(JSON.stringify({
                type: "message",
                data: text
            }));

            now = new Date(Date.now());
            minutes = now.getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            formatted = now.getHours() + ":" + minutes;

            log.innerHTML += '<div class="chat-message clearfix" ><span class="chat-time">' + formatted + '</span><img src="' + image + '" alt="" width="32" height="32"><div class="chat-message-content clearfix"><h5>You: </h5><p>' + text + '</p></div></div><hr>';
            $("#chatBoxText").val("");
            log.scrollTop = log.scrollHeight;
        }
    };

    $(document).on('keypress', function (e) {
        if (e.which == 13 && $("#chatBoxText").val() !== "") {
            var text = document.getElementById("chatBoxText").value;
//              sock.send(text);

            sock.send(JSON.stringify({
                type: "name",
                data: name + "," + image
            }));

            sock.send(JSON.stringify({
                type: "message",
                data: text
            }));

            now = new Date(Date.now());
            minutes = now.getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            formatted = now.getHours() + ":" + minutes;

            log.innerHTML += '<div class="chat-message clearfix" ><span class="chat-time">' + formatted + '</span><img src="' + image + '" alt="" width="32" height="32"><div class="chat-message-content clearfix"><h5>You: </h5><p>' + text + '</p></div></div><hr>';
            $("#chatBoxText").val("");
            log.scrollTop = log.scrollHeight;
        }
    });

}());
