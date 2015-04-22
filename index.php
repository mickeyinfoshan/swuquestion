<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>产生问题</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <style>
        .footer{
            position: absolute;
            bottom: 0;
        }
        #questions{
            border-left: dashed 1px;
        }
        .sentence{
            cursor: pointer;
            padding: 3px;
            border-radius: 6px;
        }
        .sentence-selected{
            background-color: #d9edf7;
            color: #23527c;

        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-10">
                <textarea id="text" class="form-control" name="text" rows="5" placeholder="文本内容"></textarea>
            </div>
            <div class="col-lg-2">
                <button onclick="analyze()" class="btn btn-default ">产生问题</button>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-7" id="originText">

            </div>
            <div class="col-lg-5" id="questions">

            </div>
        </div>
    </div>
<div class="footer container">
    <div class="pull-right">
        Authored By Mickey
    </div>
</div>
<script src="js/jquery-1.11.2.min.js"></script>
<script src="js/bootstrap.min.js"></script>
    <script src="js/common.js"></script>
    <script src="js/pos.js"></script>
    <script src="js/srl.js"></script>
    <script src="js/last.js"></script>
    <script src="js/mq.js"></script>
    <script src="js/questionGenerator.js"></script>

</body>
</html>