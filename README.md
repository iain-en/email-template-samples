# EN Email Template Samples

Resources for creating our default sample HTML templates. Building samples from common elements in the "includes" folder means we don't have to update individual samples every time we tweak something.

The grunt script processes HTML files in "src", inserting included HTML elements from the "includes" folder and places output in "build". The contents of "build" can then be uploaded as email samples.

Email samples must always be sent using the CSS inliner!


## Samples:
**en_master.html**:
A master template containing the basic header and wrapping HTML for our templates to use as the starting point for all samples. Also contains example HTML email elements e.g. hero images, editable text, article rows "all-in-one". Generate samples from the HTML in this document and also use it to test structural / header / CSS changes before rolling out to other samples.

**en_hero.html**: large banner image at top, text and button below. White background.
	
**en_newsletter.html**: intro followed by individual image and text rows. White background.

**en_simple.html**: as newsletter, but image is on the right. Grey background.

**en_single.html**: intro, full-width image and text. Grey background.


## Elements:
- header (required in all samples)
- footer (required in all samples)
- hero image
- intro
- outro
- text
- left-aligned image
- full width image
- article
- article with image right
- button
- footer image
- footer signature

## Usage
1. Install node, download the repo and run `npm install`
2. Make your changes to the "src" or "includes" files. Any html files added to "src" will be processed automatically.
3. Run `grunt`
4. Use files generated in "build" to update samples
5. Sync any finalised and tested changes back to github INCLUDING built files.

