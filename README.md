# Drawing Application

A web-based drawing app built with p5.js, featuring a toolbox of creative paint tools, color selection, and canvas utilities.

## Project Overview

This project includes an interactive drawing application located in:

`Drawing Application - Final Version/Drawing Application/draw-app/`

The app is built using HTML, CSS, JavaScript, and the p5.js library. It provides multiple drawing tools, a color palette, and utility buttons for clearing the canvas, saving artwork, and changing the background.

## Run Locally

1. Open `Drawing Application - Final Version/Drawing Application/draw-app/index.html` in a browser.
2. The project requires no build step or server; just open the HTML file directly.

## Features

- Freehand drawing tool
- Straight line drawing tool with preview
- Spray can tool with adjustable size, rainbow mode, and spray patterns
- Mirror drawing tool with horizontal/vertical symmetry
- Stamp tool with predefined shapes, random robot generation, and text stamping
- Scissor/select tool for selecting, cutting, copying, and pasting canvas regions
- Gradient background tool with linear and radial gradients
- Color palette with predefined swatches and color picker
- Canvas utility buttons:
  - Clear canvas
  - Save image as JPG
  - Set selected color as canvas background
  - Adjust brush/stroke size

## Key Files

- `index.html` — app shell and script/style includes
- `style.css` — app styling and layout
- `sketch.js` — p5.js sketch setup and draw loop
- `toolbox.js` — tool selection UI and tool management
- `colourPalette.js` — color palette UI and selection handling
- `helperFunctions.js` — clear, save, and brush-size controls
- `freehandTool.js` — freehand drawing implementation
- `lineToTool.js` — straight line drawing with preview
- `sprayCanTool.js` — spray paint tool with options panel
- `mirrorDrawTool.js` — mirrored drawing mode with symmetry toggle
- `shapeTool.js` — image/text stamp tool with size control
- `scissorTool.js` — selection, cut/copy/paste, and saved snippets
- `gradientTool.js` — linear and radial gradient background tool
- `lib/p5.min.js`, `lib/p5.dom.js` — p5.js libraries

## Tool Details

- `Freehand` — draw smooth freehand strokes
- `LineTo` — click-and-drag straight lines
- `sprayCanTool` — spray paint effect, pattern control, rainbow mode
- `mirrorDraw` — mirrored drawing across an axis
- `stamp` — place shape/stamp images or custom text
- `scissor` — select and move canvas regions; save and reuse selections
- `GradientTool` — fill canvas with color gradients

## Notes

- The app uses the p5.js DOM library for interactive controls.
- The current canvas state is preserved while switching tools through `loadPixels()` and `updatePixels()`.
- Some tools provide options in the sidebar when selected.

## License

This repository does not include a license file. Add one if you want to define reuse permissions.
