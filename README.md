# cordova-tc55
Cordova Plugin to receive input from a TC55 Scanner

# Usage
This plugin uses the `setKeepCallback` feature of the `PluginResult` so that you don't have to continually register to listen for scans. Wire up an scan event listener like this:

```javascript
tc55.listenForScans(function(data) {
  // do something with 'data'
    console.log('You scanned: ' + data);
  }, function(error) {
    // do something with 'errir'
   console.log('Something went wrong: ' + error);
  });
```

Subsequent calls to `listenForScans` will replace the previously set callbacks.
