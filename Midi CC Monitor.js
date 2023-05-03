/*
MIDI CC Monitor

This script will monitor and display changes to CC1 and CC11.

You can optionally monitor an additional CC number by selecting
it in the "Custom" dropdown menu.

In effect, this means that as long as the plugin is on
beforehand, you can easily figure out what the current midi CC
values are on the track. This can be used to add those values
as automation on the region for consistent playback.

To disable monitoring simply turn the plugin off.
*/

/*** add or remove Control Changes (CCs) to monitor here ***/
var defaultCCs = [1, 11];

var PluginParameters = [];

defaultCCs.forEach(function(cc) {
    PluginParameters.push({
        name: 'CC ' + cc,
        type: 'lin',
        defaultValue: 0,
        minValue: 0,
        maxValue: 127, 
        numberOfSteps: 127,
        // setting readOnly as true would make the most sense,
        // as the slider is a one-way display, but it seems when
        // that's set the values don't persist to the saved
        // project as of Logic 10.7.7
        //readOnly: true,
    },)
});

PluginParameters.push({
    name: 'Custom',
    type: 'target',
});
var customTargetIndex = PluginParameters.length - 1;

PluginParameters.push({
    name: '[Select Custom]',
    type: 'lin',
    defaultValue: 0,
    minValue: 0,
    maxValue: 127, 
    numberOfSteps: 127,
    hidden: true,
});
var customValueIndex = PluginParameters.length - 1;

function HandleMIDI(event) {
	event.send();
	if (event instanceof ControlChange) {		
        for (var i = 0; i < defaultCCs.length; i++) {
            if (event.number === defaultCCs[i]) {
                SetParameter('CC ' + defaultCCs[i], event.value);
                break;
            }
        }
		
		var customCC = GetParameter('Custom');
		if (customCC > -1 && event.number === customCC) {
			SetParameter(customValueIndex, event.value);
		}
	}
}

function ParameterChanged(param, value) {
	if (param === customTargetIndex) {
		if (value === -1) {
			PluginParameters[customValueIndex].hidden = true;
			UpdatePluginParameters();
		} else {
			var newName = 'CC ' + value;
			if (PluginParameters[customValueIndex].name !== newName) {
				PluginParameters[customValueIndex].name = newName;
				PluginParameters[customValueIndex].hidden = false;
				UpdatePluginParameters();
			}			
		}
	}
}
