<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="{{ asset('js/jquery-ui.js') }}"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="{{ asset('js/vue.js') }}"></script>
</head>
<body>
<div id="resizable" class="ui-widget-content">
    {{--<h3 class="ui-widget-header">Resizable</h3>--}}
    <h3 class="ui-widget-header">hello</h3>
</div>
<div id="app">
<div class="row">
    <div class="container col-md-4">
        <h2>Dynamic Pills</h2>
        <p>To make the tabs toggleable, add the data-toggle="pill" attribute to each link. Then add a .tab-pane class with a unique ID for every tab and wrap them inside a div element with class .tab-content.</p>
        <ul class="nav nav-pills">
            <li class="active"><a data-toggle="pill" href="#text">Text</a></li>
            <li><a data-toggle="pill" href="#art">Art</a></li>
        </ul>

        <div class="tab-content">
            <div id="text" class="tab-pane fade in active">
                @include('partials.sidepane')
            </div>
            <div id="art" class="tab-pane fade">
                <h3>Art</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    </div>
    <div class="container col-md-8">
        @include('partials.image')
    </div>
</div>
</div>
<script src="{{ asset('js/script.js') }}"></script>
</body>
</html>
