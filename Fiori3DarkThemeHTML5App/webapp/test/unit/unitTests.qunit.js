/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"DarkThemeForTheWin/Fiori3DarkThemeHTML5App/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});