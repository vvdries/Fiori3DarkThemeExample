sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("DarkThemeForTheWin.Fiori3DarkThemeHTML5App.controller.View1", {
		onInit: function () {
			var oModel = new JSONModel({
				aShipments: [{
					code: "HT-4785",
					origin: "Brussels",
					destination: "Walldorf",
					status: "Shipped"
				}, {
					code: "HT-9585",
					origin: "Amsterdam",
					destination: "Paris",
					status: "Missing"
				}, {
					code: "HT-3278",
					origin: "Moscow",
					destination: "Peru",
					status: "Damaged"
				}, {
					code: "HT-6659",
					origin: "Sydney",
					destination: "Stockholm",
					status: "Preparing"
				}]
			});
			
			this.getView().setModel(oModel, "shipmentModel");
		}
	});
});