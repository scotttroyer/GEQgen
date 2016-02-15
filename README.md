# GEQgen
A web-based XML code generator for PreSonus StudioLive GEQ presets

# Summary

PreSonus first generation StudioLive (SL) GEQ presets are stored as XML. They are easy to edit using Universal Control (UC), but UC requires connection to a SL device in order to operate fully.

This web app allows users to generate presets without a connected SL device. Exact dB values may be typed in, making for easier manual conversion of manufacturer-supplied frequency response graphs into SL-ready presets.

Read more about this project in [this article](http://scotttroyer.com/2016/02/geqgen-creates-studiolive-graphic-eq-presets-offline/ "GEQgen Creates StudioLive Graphic EQ Presets Offline").

# Version History

## 1.1 MVP+ - Floats and File Names

### Notes
* Reflowed the floats and fidgeted with some CSS
* Added file name updating to js
* Instructions added/improved
* URL to explanation article

## 1.0 MVP — Functional, basic, ready to upload.

### Notes
* Requires manual copy/paste of XML to file.
* No proper introduction.
* Instructions could use streamlining.
* Browser support unknown. Tested only in Safari 9.0.3 on El Capitan 10.11.3.
* Intended for hosting on http://scotttroyer.com so just the basic files were uploaded. Could possibly be made better for hosting remotely or host natively on Github. Dunno.
* Need to confirm dB reference values. Math is currently correct for 15 to -15. 
* Not tested with the newer AI versions of Universal Control. Syntax is different. dB range is 12 to -12. Files can be generated offline too so support is not as valuable in that sense. Conversion to that format may be valuable though.
* No clue about Windows support (mainly file location).
* js *might* be sanitized properly. Not sure.
* Probably not mobile-friendly, but the task generates a file intended for console synchronization with laptops/desktops. So mobile ≠ priority, I guess.

# Features Roadmap
* Test & extend browser support.
* A "Download" or "Export" button to save the XML directly to disk.
* An AppleScript droplet or service item to automatically move the downloaded presets to the right location on disk.
* Upload frequency response. Previously generated file = easy. Image or entire PDF product manual = hard.
* Support for exporting to file formats of other digital boards
