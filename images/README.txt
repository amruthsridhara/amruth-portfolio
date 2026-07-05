IMAGE SLOTS — drop your photos here with these exact filenames
(JPG preferred, ~1600px on the long edge, <400KB each after compression)

hero.jpg        Hero — your single strongest plate (previously IMG_5698: dark choc slice, berry coulis)
chef-plate.jpg  About section — a second strong plate, portrait orientation works best

FINE DINING (square-ish crops work best)
fine-01.jpg     Anvers dark chocolate brownie, tonka caramel
fine-02.jpg     White chocolate mousse, greengage plum
fine-03.jpg     Olive oil cake, chocolate shards (previously IMG_7991)
fine-04.jpg     Coconut mousse, passionfruit, toasted coconut sorbet
fine-05.jpg     Compressed apple, salted granola, beurre noisette ice cream
fine-06.jpg     Carrot cake, pistachio, cream cheese parfait

WEDDING CAKES
cake-01.jpg     3-tier sugar rose cascade (3rd place, Australian Wedding Cake Competition)

CHOCOLATE SHOWPIECES
show-01.jpg     Blue pulled/blown sugar piece
show-02.jpg     Sunflower chocolate showpiece
show-03.jpg     Tall crescent chocolate centrepiece

To add more gallery items: copy a <figure class="g-item"> block in index.html,
set data-c to fine / cake / show, point src at your new file, write the caption.

Quick batch compression (macOS/Linux, needs ImageMagick):
  magick mogrify -resize 1600x1600\> -quality 82 *.jpg
