Today I was checking the available space I had on my MacBook and noticed that it was more than `50%` full. That definitely didn't sound right so I used a disk space analyzer to check things out (I use DaisyDisk, you can download it [here](https://daisydiskapp.com/)).

It turns out the culprit was our old friend, Xcode and its `Simulators` plus `Device Support` files. Xcode stores `Device Support` files for every iOS version release and for every device that you plug into your Mac for debugging. There are also a simulator logs folder and the `Runtime` folder.

To free up at least some of this space, you can do the following:

- All `Device Support` files are stored in `~/Library/Developer/Xcode/iOS DeviceSupport/`. In here you will find folders with names like: `13.4.1 (17E262)`. Check which iOS version you are still using for debugging and delete any old ones you don't use anymore.
- In `/Library/Developer/CoreSimulator/Profiles/Runtime` you can find runtime support files for current or previous iOS versions, delete the version that you don't use anymore.
- From the `Terminal` you can run `xcrun simctl delete unavailable` so Xcode deletes all simulators that are now unavailable because you don't have the runtime files for that specific iOS version anymore.
- Finally, in `~/Library/Logs/CoreSimulator` you can find logs for all the Simulators (you can delete everything here).

After doing all of the above I regained around `120GB` of space in my Mac. This is after a year of use and just two major iOS releases so it can take up a lot of space in a very short time.