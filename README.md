## jQuery Mouseover Gallery

A tiny little plugin to flip through thumbnail images as you roll your mouse right to left over them.

### Options

- `selector`: a css-style selector used to find the gallery elements. 
              Default is `'img'`

### Usage

    <script src="jquery.js" type="text/javascript"></script>
    <script src="jquery.mouseover-gallery.js" type="text/javascript"></script>
    <a class="gallery" href-"#">
        <img src="preview1.jpg" alt="Preview 1" />
        <img src="preview2.jpg" alt="Preview 2" />
        <img src="preview3.jpg" alt="Preview 3" />
        <img src="preview4.jpg" alt="Preview 4" />
        <img src="preview5.jpg" alt="Preview 5" />
    </a>
    <script type="text/javascript">
        $('.gallery').mouseoverGallery();
    </script>