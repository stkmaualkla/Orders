sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("opensap.orders.Orders.controller.Create", {
		onInit: function () {
			// create a message manager and register the message model
			this._oMessageManager = sap.ui.getCore().getMessageManager();
			this._oMessageManager.registerObject(this.getView(), true);
			this.setModel(this._oMessageManager.getMessageModel(), "message");
			this.getRouter().getRoute("create").attachPatternMatched(this._onCreateMatched,
				this);
		},
		_onCreateMatched: function (oEvent) {
			// set a dynamic date constraint in controller, as "today" cannot be
			// defined declaratively in XMLView
			var oToday = new Date();
			oToday.setHours(0, 0, 0, 0);
			this.byId("deliveryDate").getBinding("value").getType().setConstraints({
				minimum: oToday
			});
			this.getModel("appView").setProperty("/layout", "ThreeColumnsMidExpanded");
		},
		onCancel: function () {
			var sObjectId = this.getView().getBindingContext().getProperty("SalesOrderID");
			// discard the new context on cancel
			this.getModel().deleteCreatedEntry(this.oContext);
			// close the third column
			this.getRouter().navTo("object", {
				objectId: sObjectId
			}, true);
		}

	});
});