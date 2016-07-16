'user strict';

var SearchPage = function () {
	
	const UIElementsArray = [
		['Search', ['Search', 'button']],
		['Search name', ['$ctrl.searchName', 'model']]
	];
	
	this.getTitle = function() {
		return 'Search Demo';
	};
	
	var elementsMap = new Map(UIElementsArray);
	
	this.getUIElement = function(elementName) {
		return elementsMap.get(elementName.toString())[0];
	};
	
	this.getUIElementType = function(elementName) {
		return elementsMap.get(elementName.toString())[1];
	};
	
	this.fillStudentName = function(name) {
		element(by.model(this.getUIElement('Search name'))).sendKeys(name);
	};
	
	this.clickSearchButton = function() {
		element(by.buttonText(this.getUIElement('Search'))).click();
	};
};

module.exports = new SearchPage();