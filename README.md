![Lynxari IoT Platform](https://agilatech.com/images/lynxari/lynxari200x60.png) **IoT Platform**
## Lynxari Powerup Application

### Install
```
$> npm install @agilatech/lynxari-powerup-application
```
Install in the same directory in which lynxari is installed. Create a config.json file to suit.


### Purpose
The purpose of this application is to control the initial power state of devices. It will either turn on or off devices at startup. Devices normally default to 'off', so without this app they would have to be turned on by other means. This powerup app makes it easy to control inital states of all devices.


### Usage
This application runs on the [Agilatech®](https://agilatech.com) Lynxari IoT platform.  As such, it is not applicable for other environments.

To use it with Lynxari, simply insert its object definition as an element in the apps array in the _applist.json_ file. On startup, the Lynxari server reads _applist.json_ and starts all applications found there.

A _config.json_ configuration file must be present in the module's main directory. For this module, that will be within the Lynxari home directory in _node\_modules/@agilatech/lynxari-powerup-application/config.json_


### Configuration
The _config.json_ file defines an array of devices for which initial state is defined. Each device definition is an object with the following elements:

1. **name** : The name of the device -- this is used to query the platform for a connected device of the name. The query will fail if the name is not found. Also, a directory of this name will be created under the path for the data files.
2. **state** : **on** | **off** 


There is no limit to the number of device objects which may appear in the **devices** array. The config.json file must be valid JSON.

A sample config file:
```
{
  "devices":[
    {
      "name":"BME280",
      "state":"on"
    },
    {
      "name":"RAIN",
      "state":"off"
    },
    {
      "name":"RMY85000",
      "state":"on"
    },
    {
      "name":"TSL2561",
      "state":"off"
    }
  ]
}

```

### Copyright
Copyright © 2018 [Agilatech®](https://agilatech.com). All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
