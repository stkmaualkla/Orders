sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("opensap.orders.Orders.controller.Info", {	
		onInit: function () {
			this.getRouter().getRoute("Info").attachPatternMatched(this._onInfoMatched, this);
		},
		_onInfoMatched: function(oEvent)
		{
			this.getModel("appView").setProperty("/layout", "ThreeColumnsMidExpanded");
		}
	});

});