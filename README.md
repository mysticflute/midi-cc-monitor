# MIDI CC Monitor

Monitor CC (Control Change) events in Kontakt and Logic Pro.

## Description

Using the modwheel (CC1) and expression (CC11) is essential for getting realistic performances with most instrument patches. Not every library displays the current CC1 and CC11 values in the UI though.

Sometimes when you're in the flow of creating music, you'll fiddle with the modwheel and/or expression at various levels during multiple midi recordings. When you finally get a performance you like, you may not have actually changed the modwheel during your performance, so that data won't be recorded with the region.

Without recording that automation data, it can easily get lost later as you put down more regions on the track and change the modwheel or expression. So through experience you'll often want to get that CC data added to the track, but if the library doesn't show it in the UI you're often guessing or approximating what it actually was set to.

These scripts will let you get that data after the fact without any guesswork.

The first script, [Midi CC Monitor.js](<Midi CC Monitor.js>) works on any Logic Pro patch as a MIDI FX Scripter plugin. As long as you have this added to the channel strip before you record anything (and turned on), you'll always have the exact CC values for that patch at any given time. Simply take that value and add it to the region automation.

The second script, [Midi CC Monitor.ksp](<Midi CC Monitor.ksp>), only works with Kontakt patches, however it also works even if it wasn't loaded before your midi recording. It also works in any DAW, not just Logic Pro.

## Usage

There are two different scripts depending on where and how you'd like to monitor CC values.

### Monitor Any Instrument in Logic Pro

[Midi CC Monitor.js](<Midi CC Monitor.js>) is used as a [Logic Pro Scripter](https://support.apple.com/guide/logicpro/use-the-scripter-lgce728c68f6/mac) script.

1. On the instrument channel strip, add a new Scripter instance under MIDI FX: <br><br>
   ![Scripter Step 1a](screenshots/scripter1.png) &nbsp;&nbsp;
   ![Scripter Step 1b](screenshots/scripter2.png)
2. Replace the default script with the contents of [Midi CC Monitor.js](<Midi CC Monitor.js>) in the editor window: <br><br>
   ![Scripter Step 2](screenshots/scripter3.png)
3. Click the "Run Script" button: <br><br>
   ![Scripter Step 3](screenshots/scripter4.png)
4. Save the script for future use: <br><br>
   ![Scripter Step 4](screenshots/scripter5.png)

Be sure the Scripter plugin is turned on at the start of your session. It can be turned off when it's no longer needed.

You can also select an additional CC number to monitor by using the "Custom" dropdown. The script file can also be easily edited to monitor additional CC values.

_Pro Tip: Add it to the instruments in your template!_

### Kontakt Instruments

[Midi CC Monitor.ksp](<Midi CC Monitor.ksp>) is used as a [multi-script](https://www.native-instruments.com/ni-tech-manuals/ksp-manual/en/multi-script). The benefit of using this is that it doesn't have to be added beforehand, which makes it easier to use and more performant. It only works on Kontakt instruments though.

1. At any point when you want to see what a CC value is, bring up the Kontakt window and click on the "**KSP**" button: <br><br>
   ![Kontakt Step 1](screenshots/multiscript1.png)
2. Add the contents of [Midi CC Monitor.ksp](<Midi CC Monitor.ksp>) to the script editor window and click the "**Apply**" button: <br><br>
   ![Kontakt Step 2](screenshots/multiscript3.png)
3. Click on the "Refresh" button to display the last set CC values. Leave it on to continuously monitor, or just turn it off, then back on when you need to see the most recent value: <br><br>
   ![Kontakt Step 4](screenshots/multiscript4.png)
4. Save it as a preset for future use: <br><br>
   ![Kontakt Step 5](screenshots/multiscript5.png)

The text-field on the right allows you to monitor one additional CC value. Edit the script to monitor more than that.
