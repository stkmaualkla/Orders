sap.ui.define([
	"sap/m/Button"
], function (Button) {
	"use strict";
	return Button.extend("opensap.orders.Orders.control.DeleteButton", {
		metadata: {
			dnd: {
				droppable: true
			}
		},
		renderer: {}
	});
});