var ViewModel = function() {
	var self = this;
	self.cats = ko.observableArray([
        {"name": "poplinre", "image": "images/poplinre.jpg", "counter": 0},
        {"name": "chewie", "image": "images/chewie.jpg", "counter": 0},
        {"name": "jetske", "image": "images/jetske.jpg", "counter": 0}
    ]);

    self.cat = ko.observable(self.cats()[0]);
    self.adminMode = ko.observable(false);


    self.setCat = function() {
    	self.cat(this);
    };

    self.incrementCount = function() {
    	self.cat().counter = self.cat().counter + 1;
    	self.cat(self.cat());

    };

    self.enableAdminMode = function() {
    	if (!self.adminMode()) {
    		self.adminMode(true);
    	}
    };

    self.cancelAdminMode = function() {
    	self.adminMode(false);
    }

    self.save = function() {
    	console.log(this);
    }
};

ko.applyBindings(new ViewModel());