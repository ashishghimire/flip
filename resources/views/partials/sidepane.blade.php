<section>
    <div class="form-group">
        {{--<label for="message1">Enter Text Below</label>--}}
        {{--<label for="Name" id="NameLabel">Name</label>--}}
        {{--<input type="text" name="Name" id="NameInput" v-model="NameModel">--}}

        {{--<textarea class="tshirt-input" v-model="message" placeholder="add multiple lines"></textarea>--}}
        <textarea class="tshirt-input" id="input-text" placeholder="add multiple lines"></textarea>

    </div>
<div class="form-group">
    <label for="font-family">Choose a font</label>
    <select class="form-control" id="font-family"></select>
</div>
    <div class="colorPickSelector"></div>

    <button type="button" class="button-blue" name="To SVG" onclick="toSvg()"></button>
</section>
