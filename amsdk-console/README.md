# Amwell Visit Console Widget

# Requirements

The Amwell Visit Console Widget requires at least version 2.8.0 of the Consumer Web SDK.

## Overview

The Visit Console Widget is a configurable UI component designed to encapsulate the entire visit experience including chat, guest invite, and visit notes.

It is built on top of the native Web Component browser technologies, and provides its own set of polyfills in the case of incomplete implementations like in Microsoft EDGE.

The widget is also designed to be as framework compatible as possible so that regardless of which frontend framework is in use (Vue, Angular, React, etc) the full benefits of the widget are still accessible.

The widget is defined as a custom html element:

```html
<amwell-visit-console id="myWidget"></amwell-visit-console>
```

This element exposes additional custom functionality above what a normal html element exposes when interacted with through Javascript.

Most notably the ability to call `initialize()` and provide it with an initialized SDK and an `options` object that must contain an visit with the disposition PreVisitScreening or InProgress:

The `options` object can take additional configuration parameters as well like whether or not to disable the header, sidebar, and a map of localized messages.

```javascript
myWidget = document.getElementById("myWidget");

options = { visit: myInProgressVisit, disableHeader: true };

myWidget.initialize(sdk, options);
```

After calling `initialize` the widget will connect the user to the ongoing WebRTC visit and handle all DOM rendering and manipulation.

It may be helpful to think of the `<amwell-visit-console>` HTML element as something similar to a `<video>` element: It is a container for additional DOM and UI elements to be drawn within, and when supported (Chrome, Firefox, Safari) will be done so in the _shadow_ DOM meaning the internal DOM and styling is not accessible.

If not supported the internal DOM of the widget should still be considered as subject to change and not depended on in any way.

##### Theming, Styling, and RTL

Theming of the widget is done with a predefined set of custom CSS properties:

```css
html {
  --amwell-visit-console-button-color: blue;
}
```

Additionally, to add a logo to top left corner of the widget (or top right when the page is in `rtl`) simply add an `<img>` element as a child of the `<amwell-visit-console>` like so:

```html
<amwell-visit-console id="myWidget">
  <img id="my-logo" slot="logo" src="logo.png" alt="My Logo" />
</amwell-visit-console>
```

_NOTE: `slot="logo"` is required_

This element, unlike the rest of the visit console, can be accessed with normal CSS and should be adjusted for the size and shape of your logo.

RTL languages are supported when `dir=rtl` is set on the `<html>` document.

##### Events

Furthermore since the widget is a native HTML element, useful events and information about the state of the visit is communicated via native HTML events:

```javascript
myWidget.addEventListener("visitEnd", event => {
  // add your own app logic to execute when the visit ends
});
```


## Events

| Event          | Description                                                                                                    | Type                                              |
| -------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `visitEnd`     | Called when the visit ends. event.detail is an object with the ended visit.                                    | `CustomEvent<{ visit: AWSDKVisit; }>`             |
| `visitError`   | Called when the visit encounters an error. event.detail is an object with the latest visit and an error field. | `CustomEvent<{ visit: AWSDKVisit; error: any; }>` |
| `visitUpdated` | Called whenever the visit is updated. event.detail is an object with the latest visit.                         | `CustomEvent<{ visit: AWSDKVisit; }>`             |



## Methods

### `destroy() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `initialize(sdk: awsdk.AWSDK, options: { visit: awsdk.AWSDKVisit; disableHeader?: boolean; disableSidebar?: boolean; messages?: { [key: string]: string; }; locale?: string; }) => Promise<void>`

The initialize function for this widget.

Requires an initialized SDK instance and an options object with an PreVisitScreening or InProgress Visit.

+ `visit`: a PreVisitScreening or InProgress AWSDKVisit instance to use in the WebRTC video experience.
+ `disableHeader`: set to `true` if the header portion of the visit console should be disabled.
+ `disableSidebar`: set to `true` if the sidebar portion of the visit console should be disabled.
+ `messages`: an object of localized string messages.
+ `locale`: the locale of the visit console i.e. `en-US`.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                                                  | Description                                                                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `--amwell-visit-console-bar-color`                    | The color of the sidebar                                                                           |
| `--amwell-visit-console-bar-color-selected`           | The color of the sidebar when an icon is selected                                                  |
| `--amwell-visit-console-button-border-radius`         | The border radius of all the rectangular buttons in the visit console                              |
| `--amwell-visit-console-button-color`                 | The color of most buttons in the visit console                                                     |
| `--amwell-visit-console-button-color-hover`           | The color of most buttons in the visit console when mousing over or hovering                       |
| `--amwell-visit-console-chat-button-color`            | The color of the send message button in the chat window                                            |
| `--amwell-visit-console-chat-button-color-hover`      | The color of the send message button in the chat window when mousing over or hovering              |
| `--amwell-visit-console-chat-my-messages`             | The color of chat messages sent from the user                                                      |
| `--amwell-visit-console-chat-their-messages`          | The color of chat messages received by the user                                                    |
| `--amwell-visit-console-end-visit-button-color`       | The color of the end visit button                                                                  |
| `--amwell-visit-console-end-visit-button-color-hover` | The color of the end visit button when mousing over or hovering                                    |
| `--amwell-visit-console-icon-color`                   | The color of the sidebar icons                                                                     |
| `--amwell-visit-console-link-color`                   | The color of all links in the visit console                                                        |
| `--amwell-visit-console-link-color-hover`             | The color of all links in the visit console when mousing over or hovering                          |
| `--amwell-visit-console-video-button-color`           | The color of the circular video control buttons in the visit console                               |
| `--amwell-visit-console-video-button-color-hover`     | The color of the circular video control buttons in the visit console when mousing over or hovering |


## Localized Messages

```json
{
	"amwell_chat_window_messages_placeholder": "Let’s get started.",
	"amwell_chat_window_new_messages_toast": "New Messages",
	"amwell_chat_window_input_placeholder": "Write a message ...",
	"amwell_guest_invite_error_invalid_email": "This email is invalid",
	"amwell_guest_invite_error_invited_email": "This email is already invited",
	"amwell_guest_invite_invited_guests_header": "Guests You've Invited",
	"amwell_guest_invite_invited_max": "You’ve invited the maximum number of guests",
	"amwell_guest_invite_invite_guest_subtitle": "Enter an email address and we’ll send your guest a link to join the visit.",
	"amwell_guest_invite_remove_text": "Remove",
	"amwell_guest_invite_input_label": "Guest's Email",
	"amwell_guest_invite_add_another_text": "Add Another Guest",
	"amwell_guest_invite_button_text_pending": "Invite Sent",
	"amwell_guest_invite_button_text": "Send Invite",
	"amwell_video_console_accept_permission": "Please allow access to your camera and microphone. You may need to update your browser settings to allow access.",
	"amwell_video_console_call_me": "Switch To Phone",
	"amwell_video_console_camera": "Camera",
	"amwell_video_console_can_cancel_rejoin": "{participantName} will rejoin shortly. If you'd prefer not to wait, you can cancel the visit.",
	"amwell_video_console_can_cancel": "You have connected but we are still loading {participantName}'s video. If you'd prefer not to wait you can cancel the visit.",
	"amwell_video_console_connecting_guest": "Please wait.",
	"amwell_video_console_connecting_guest_subtext": "Your visit is about to begin.",
	"amwell_video_console_connecting_remote_extended": "You've connected but we're still loading {participantName}'s video",
	"amwell_video_console_connecting_remote_extended_subtext": "If you'd prefer not to wait you can cancel the visit.",
	"amwell_video_console_connecting_remote_extended_subtext_ivr": "If you'd prefer, you can still talk to {participantName} on the phone, or continue to wait for the video",
	"amwell_video_console_connecting_with_remote": "We're connecting you with {remoteName}",
	"amwell_video_console_connecting_your_video_extended": "It looks like you are having trouble connecting.",
	"amwell_video_console_connecting_your_video_subtext_extended": "We're still trying to connect you. If you'd prefer not to wait, you can cancel the visit",
	"amwell_video_console_connecting_your_video_subtext_extended_ivr": "We're still trying to connect you. If you'd prefer, you can talk to {participantName} on the phone, or continue to wait for video.",
	"amwell_video_console_consumer_reconnecting": "We're reconnecting {participantName}'s video. Please wait for your patient to rejoin",
	"amwell_video_console_consumer_subtitle_age": "Age {age}",
	"amwell_video_console_end_visit_confirmation_title": "Are you sure?",
	"amwell_video_console_full_screen": "Full Screen",
	"amwell_video_console_header_browser_permission": "Browser Permission",
	"amwell_video_console_media_permission_denied": "We are having trouble accessing camera and microphone. Please check your camera and microphone permissions.",
	"amwell_video_console_mic": "Mic",
	"amwell_video_console_participant_connection_issue": "It looks like you're having trouble connecting. Please check your internet connection and we'll keep trying to connect your visit.",
	"amwell_video_console_participant_type_label_consumer": "patient",
	"amwell_video_console_participant_type_label_guest": "guest",
	"amwell_video_console_participant_type_label_provider": "provider",
	"amwell_video_console_provider_reconnecting": "We're reconnecting {participantName}'s video. Please wait for your provider to rejoin",
	"amwell_video_console_reconnecting_remote": "We're reconnecting {participantName}'s video",
	"amwell_video_console_reconnecting_remote_as_guest_subtext": "We're waiting for everyone to connect.",
	"amwell_video_console_reconnecting_consumer_subtext": "Please wait for your patient to rejoin the visit.",
	"amwell_video_console_reconnecting_provider_subtext": "Please wait for your provider to rejoin the visit.",
	"amwell_video_console_reconnecting_your_video_main": "It looks like your video disconnected.",
	"amwell_video_console_reconnecting_your_video_extended": "It looks like you're having trouble reconnecting",
	"amwell_video_console_reconnecting_your_video_extended_subtext": "We're still trying to connect you. If you'd prefer not to wait, you can end the visit",
	"amwell_video_console_reconnecting_your_video_extended_subtext_ivr": "We're still trying to connect you. If you'd prefer, you can talk on the phone, or continue to wait for video.",
	"amwell_video_console_reconnecting_your_video_subtext": "We're trying to reconnect you now",
	"amwell_video_console_refresh": "Reload",
	"amwell_video_console_settings_camera_list_header": "Camera",
	"amwell_video_console_settings_microphone_list_header": "Microphone",
	"amwell_video_console_settings_speaker_list_header": "Speaker",
	"amwell_video_console_settings": "Settings",
	"amwell_video_console_settings_details": "Select the source for your inputs.",
	"amwell_video_console_switch": "Switch",
	"amwell_video_console_talk_via_phone": "Talk Via Phone",
	"amwell_video_console_webrtc_additional_comments": "Additional Comments",
	"amwell_video_console_webrtc_end_visit_confirmation_singular": "There is still {timeRemaining} minute remaining. Are you sure you want to end this visit?",
	"amwell_video_console_webrtc_end_visit_confirmation_plural": "There are still {timeRemaining} minutes remaining. Are you sure you want to end this visit?",
	"amwell_video_console_webrtc_back": "Back",
	"amwell_video_console_webrtc_cancel_visit": "Cancel Visit",
	"amwell_video_console_webrtc_cancel_visit_confirmation": "Are you sure you want to cancel this visit?",
	"amwell_video_console_webrtc_cancel_visit_sub": "(You will not be charged)",
	"amwell_video_console_webrtc_confirm_end": "YES",
	"amwell_video_console_webrtc_disregard_end": "NO",
	"amwell_video_console_webrtc_end_visit_confirmation": "Are you sure you want to end this visit?",
	"amwell_video_console_webrtc_end_visit": "End Visit",
	"amwell_video_console_webrtc_guest_name_default": "Guest",
	"amwell_video_console_webrtc_refresh_visit": "Refresh Video",
	"amwell_video_console_webrtc_visit_report_note": "Visit report will NOT be generated and any entries you've made will not be applied.",
	"amwell_video_console_self_video": "Self View",
	"amwell_visit_console_chat_button_text": "Chat",
	"amwell_visit_console_notes_button_text": "Visit Notes",
	"amwell_visit_console_invite_button_text": "Invite",
	"amwell_visit_console_reload_button_text": "Reload",
	"amwell_visit_console_drawer_chat_title": "Chat",
	"amwell_visit_console_drawer_notes_title": "Visit Notes",
	"amwell_visit_console_drawer_invite_title": "Invite Guest",
	"amwell_visit_console_visit_extension_continue": "Continue",
	"amwell_visit_console_visit_extension_cancel": "Cancel",
	"amwell_visit_console_visit_extension_title": "Would you like to Extend the Visit?",
	"amwell_visit_console_visit_extension_message": "There is an extension fee of {cost} to extend the visit. Would you like to continue?",
	"amwell_visit_console_drawer_tyto_button_text": "Tyto Device",
	"amwell_visit_console_drawer_tyto_header_text": "Tyto Device",
	"amwell_visit_notes_notes_title": "Notes",
	"amwell_visit_notes_prescriptions_title": "Prescriptions",
	"amwell_visit_notes_diagnoses_and_procedures_title": "Diagnoses & Procedures",
	"amwell_visit_notes_additional_items_title": "Additional Items",
	"amwell_visit_notes_placeholder": "The notes that the provider enters will appear here.",
	"amwell_tyto_device_qrCodePageDesc": "Scan this QR code with your Tyto Device to set it up.",
	"amwell_tyto_device_deviceDescription": "Tyto is a handheld exam kit that lets you perform guided medical exams with a healthcare provider. By selecting \"Yes\", the following screens will lead you through pairing your Tyto Device with this app.",
	"amwell_tyto_device_useTytoInVisitQuestion": "Will you be using a Tyto Device during this visit?",
	"amwell_tyto_device_deviceSetupHeader": "Tyto Device",
	"amwell_tyto_device_pairing_setup_provider": "If your Tyto Device is already connected to a WiFi network, you may leave these fields blank and select “Continue” to skip this step. If not, please provide your network name and password to proceed with pairing your device to this app. Both fields are case sensitive.",
	"amwell_tyto_device_pairing_setup_disclaimer": "This information is for pairing the Tyto device only and will not be saved.",
	"amwell_tyto_device_network": "Network",
	"amwell_tyto_device_password": "Password",
	"amwell_tyto_device_deviceId": "Tyto Device",
	"amwell_tyto_device_devicePaired": "Your Tyto Device has been successfully paired to use during the visit. Select \"Join Visit\" on your Tyto Device.",
	"amwell_tyto_device_pairDifferentNetwork": "Change Wifi Network",
	"amwell_tyto_device_misc_ok": "OK",
	"amwell_tyto_device_misc_cancel": "Cancel",
	"amwell_tyto_device_misc_back": "Back",
	"amwell_tyto_device_misc_continue": "Continue",
	"amwell_tyto_device_misc_show": "SHOW",
	"amwell_tyto_device_misc_hide": "HIDE",
	"amwell_tyto_device_misc_yes": "Yes",
	"amwell_tyto_device_misc_no": "No",
	"amwell_tyto_device_able_to_pair": "The user can go to the Tyto tab at any point to pair a device",
	"amwell_tyto_device_not_connected": "The Consumer hasn't connected a Tyto Device",
	"amwell_tyto_device_trying_to_connect": "We are trying to connect to the Tyto device",
	"amwell_tyto_device_trying_to_pairing": "We’re connecting to the Tyto Device.",
	"amwell_tyto_device_trouble_to_connect": "The Consumer hasn't connected a Tyto Device.",
	"amwell_tyto_device_reload": "Please reload to try again_",
	"amwell_tyto_device_pair_anytime": "The user can go to the Tyto tab at any point to pair a device",
	"amwell_tyto_device_qr_expired": "QR Code Expired",
	"amwell_tyto_device_regenerate": "Please generate a new code and scan using your Tyto Device",
	"amwell_tyto_device_generate_new_qrcode": "Generate New Code",
	"amwell_tyto_device_pairing_failure": "We're having trouble connecting your device. Please try again and verify that your information is correct. You can also check your Tyto Device for more information or visit",
	"amwell_tyto_device_support_link": "TytoCare Support.",
	"amwell_tyto_device_please_try_again": "Please Try Again",
	"amwell_tyto_device_try_again": "Try Again",
	"amwell_tyto_device_first_error_callback": "We’re having trouble connecting to TytoCare.",
	"amwell_tyto_device_connection_unavailable": "Tyto Connection Unavailable",
	"amwell_tyto_device_second_error_callback": "We’re still having trouble connecting to TytoCare."
}
```