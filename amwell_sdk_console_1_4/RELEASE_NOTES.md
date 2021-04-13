<!---
 * American Well Visit Console Widget
 *
 * Copyright © 2019 American Well.
 * All rights reserved.
 *
 * It is illegal to use, reproduce or distribute
 * any part of this Intellectual Property without
 * prior written authorization from American Well.
 */
-->
# Version 1.4.0:
- Enhancement - The header and bottom drawer now become hidden when on a mobile device in landscape orientation.
- Fix - The outline and blue highlight that appeared around certain buttons when tapped has been removed.
- Fix - Adjusted balance and padding of elements in the video console.

## Compatibility
- Requires at least version 3.2.0 of the Consumer Web SDK

# Version 1.3.1
- Bug Fix - Fixed an issue where the background color indicator of the screen share button was not being properly filled with the correct color when active.

## Compatibility
- Requires at least version 3.1.0 of the Consumer Web SDK

# Version 1.3.0:
- Fix - Fixed an issue causing the Visit Notes clipboard icon to be incorrectly rendered.

## Compatibility
- Requires at least version 3.0.0 of the Consumer Web SDK

# Version 1.2.0:

- Enhancement (Breaking Change) - The Widget now uses the Typescript definition file directly from the Amwell Consumer Web SDK.
    - Additionally the new version of the SDK includes a variety of visual improvements to the video console used within the widget.

- Enhancement (Breaking Change) - The widget now is more granular with the custom css properties for coloring buttons, see the README for more details:
      --amwell-visit-console-button-border-radius
      --amwell-visit-console-video-button-color
      --amwell-visit-console-video-button-color-hover
      --amwell-visit-console-end-visit-button-color
      --amwell-visit-console-end-visit-button-color-hover
      --amwell-visit-console-chat-button-color
      --amwell-visit-console-chat-button-color-hover

      If your button colors were set using the `--amwell-visit-console-button-color` property you will need to update your code to use the new properties as well.

- Enhancement - The modal style sheets have been improved to better handle various mobile screen sizes.
- Bug Fix - Fixed bug where spinner text was not wrapping on smaller screens.
- Bug Fix - Fixed bug where buttons in drawer were themeable instead of always white.
- Bug Fix - Fixed bug where visit timer was not center aligned when sidebar was enabled.
- Bug Fix - Fixed bug so Switch To Phone button correctly uses `--amwell-visit-console-video-button-color` and `--amwell-visit-console-video-button-color-hover`.

## Compatibility
- Requires at least version 2.8.0 of the Consumer Web SDK

# Version 1.1.0:
- Enhancement - Added ability to share a media live stream from a device during a visit.

## Compatibility
- Requires at least version 2.6.0 of the Consumer Web SDK

# Version 1.0.0

- Initial Release
