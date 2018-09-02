<div class="container-fluid" align="center" id='dimension' style='width: 600px'>
    <span style='border:1px black solid; font-size:12px;'></span>
</div>
<div class="image-container">
    <img class="ghost-image"
         src="https://d1b2zzpxewkr9z.cloudfront.net/images/products/apparel/product_type_1_front.png">
</div>
<div class="printable-area-box"
     style="left: 169px; top: 98px; width: 215px; height: 330px; border-color: rgba(0, 0, 0, 0.3) !important; color: rgb(255, 255, 255) !important;">
    <canvas id="tshirt-canvas" width="215" height="330"></canvas>
    {{--<div class="text-portion"></div>--}}
    {{--<tshirt-text :message="message"></tshirt-text>--}}

    {{--<div class="edit-box marching-ants marching draggable rotatable" v-show="message">--}}
        {{--<p class="tshirt-text" style="font-size:100%; color:black;">@{{ message }}</p>--}}
        {{--<div class="handle drag"></div>--}}
        {{--<div class="handle rotate"></div>--}}
        {{--<div class="handle scale"></div>--}}
        {{--<div class="handle delete"></div>--}}
    {{--</div>--}}

    <div class="printable-area-toolbar"
         style="background-color: rgba(0, 0, 0, 0.3) !important; color: rgb(255, 255, 255) !important;">
        <div class="printable-area-label">
            <span class="printable-area-dimensions">11.7" x 17.9" </span>
            <span class="printable-area-text">Printable Area</span>
        </div>
        <div class="printable-area-zoom">
            <img class="printable-area-zoom-image" data-element="zoomLightInEl"
                 src="https://d1b2zzpxewkr9z.cloudfront.net/images/designer/tool/zoom_in_light.svg">
            <img class="printable-area-zoom-image zero-opacity no-select" data-element="zoomLightOutEl"
                 src="https://d1b2zzpxewkr9z.cloudfront.net/images/designer/tool/zoom_out_light.svg">
            <img class="printable-area-zoom-image zero-opacity no-select" data-element="zoomDarkInEl"
                 src="https://d1b2zzpxewkr9z.cloudfront.net/images/designer/tool/zoom_in.svg">
            <img class="printable-area-zoom-image zero-opacity no-select" data-element="zoomDarkOutEl"
                 src="https://d1b2zzpxewkr9z.cloudfront.net/images/designer/tool/zoom_out.svg">
        </div>
    </div>
</div>

{{--<div class="edit-box marching-ants marching" style="transform: matrix(1, 0, 0, 1, 188.969, 251.5); width: 146.062px; height: 27px;"></div>--}}

