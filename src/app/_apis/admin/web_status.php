<?php
    header('Access-Control-Allow-Origin: http://localhost:4200');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin , authorization, access-control-allow-methods, access-control-allow-headers');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Credentials: true');

    $jsonData = '
        [{
            "iconClass": "likes",
            "iconName": "favorite",
            "title": "Likes",
            "number": 20,
            "footerIcon": "tag_faces",
            "footerLabel": "Recently Liked"
        },
        {
            "iconClass": "views",
            "iconName": "equalizer",
            "title": "Total Posts",
            "number": 184,
            "footerIcon": "local_offer",
            "footerLabel": "Post on this date"
        },
        {
            "iconClass": "revenue",
            "iconName": "attach_money",
            "title": "Revenue",
            "number": 3245,
            "footerIcon": "date_range",
            "footerLabel": "Last 24 hours"
        },
        {
            "iconClass": "followers",
            "iconName": "person",
            "title": "Followers",
            "number": 381,
            "footerIcon": "update",
            "footerLabel": "Recently added"
        }
    ]
    ';

    // Convert JSON string to Array
    $dataArray = json_decode($jsonData, true);
    echo json_encode($dataArray);
?>