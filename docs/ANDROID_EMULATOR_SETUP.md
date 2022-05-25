# Android emulator setup

1. Download Android studio: https://developer.android.com/studio?hl=sk
1. Install it: https://developer.android.com/studio/install
1. Run emulator: in Android studio home screen, click on: `Configure > AVD Manager` and then select and launch an emulator.

   - If you get a Permission denied error related to /dev/kvm directory , here is how to solve it:

   ```
   $ sudo apt install qemu-kvm

   # Add your user to kvm group using:
   $ sudo adduser {username} kvm

   # If still showing permission denied:
   sudo chown {username} /dev/kvm
   ```

1. If you wanna create or manage your AVD: developer.android.com/studio/run/managing-avds
1. Configure Talkback:
   1. Install Talkback from GooglePlay
   1. Enable / disable Talkback from Settings: Settings > Accessibility > Talkback
