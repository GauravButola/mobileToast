# mobileToast
Android like toast messages for mobile sites and Cordova/Phonegap based web projects

### Installation
```sh
bower install mobileToast
```

### Add JS and CSS file to your index file
```html
<!-- JS -->
<script src="bower_components/mobileToast/mobile-toast.js"></script>
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<!-- CSS -->
<link rel="stylesheet" href="bower_components/mobileToast/mobile-toast.css" />
```

### How to use

##### Simple toast 
```javascript
// Show simple toast
mobileToast.show({message: 'Hello World'});
// Hide toast
mobileToast.hide();
```
##### Toast with options
```javascript
data = {
  hideOnClick: true,
  message: 'Hello World! I\'m a toast',
  duration: 2000, // Hide after 2 seconds
  onClick: function() {
    console.log('Toast clicked');
  },
}
mobileToast.show(data);
```
