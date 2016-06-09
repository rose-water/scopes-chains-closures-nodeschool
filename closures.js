function foo () {
	var bar; 

	quux = "in foo";

	function zip() {
		var quux = "in zip";
		bar = true;
	}

	return zip;
}