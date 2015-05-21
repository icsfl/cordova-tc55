# cordova-tc55
Cordova Plugin to receive input from a TC55 Scanner.
This works by setting up a DataWedge profile that has an Intent Output.

# Device Setup
- Open the DataWedge App
- Create a new profile (enabled)
- Under `Barcode Input`, check the `Enabled` setting
- Under `Keystoke Output`, leave the `Enabled` setting unchecked
- Under `Intent Output`:
  - `Enabled` needs to be checked
  - `Intent action` needs to be set to: `com.icsfl.rfsmart.RECVR`
  - `Intent category` needs to be set to: `android.intent.category.DEFAULT`
  - `Intent delivery` needs to be set to `Send via startActivity`

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
