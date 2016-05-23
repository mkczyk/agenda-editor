app.service('Agenda', function () {
	this.list = [];
	this.list.push({title: "", name: "", surname: "", time: ""});
	
	this.startTime = "";

	this.myResult = function () {
		var result = [];
		
		if(this.startTime !== "") {
			var lastTime = this.startTime;
			for (var i = 0; i < this.list.length; i++) {
				if(isNotEmptyRecord(this.list[i])){
					var endTime = addTime(lastTime, this.list[i].time);
					var concat = lastTime + "–" + endTime + " „" + this.list[i].title + "” – " + this.list[i].name + " " + this.list[i].surname;
					result.push(concat);
					lastTime = endTime;
				}
			}
		}
		return result;
	};
		
	function addTime(start, time) {
			var now = new Date();
			now.setHours(start.split(":")[0]);
			now.setMinutes(start.split(":")[1]);
			now.setHours(now.getHours()+parseInt(time.split(":")[0]));
			now.setMinutes(now.getMinutes()+parseInt(time.split(":")[1]));
			var hours = (now.getHours()<10?'0':'') + now.getHours();
			var minutes = (now.getMinutes()<10?'0':'') + now.getMinutes();
			return hours + ":" + minutes;
	};
	
	function isNotEmptyRecord(element) {
		if(element.title !== "" && element.time  !== "" && element.time !== undefined){
			return true;
		} else {
			return false; 
		}
	}

	this.byTabs = function(newImport) {
		if(arguments.length) {
			// setter
			var lines = newImport.split("\n");
			byTabs = newImport;
			this.list = [];
			for (var i = 0; i < lines.length; i++) {
				var fields = lines[i].split("\t");
				this.list.push({title: fields[0], name: fields[1], surname: fields[2], time: fields[3]});
			}
			return byTabs;
		} else {
			// getter
			byTabs = "";
			for (var i = 0; i < this.list.length; i++) {
				if(isNotEmptyRecord(this.list[i])) {
					byTabs += this.list[i].title + "\t" + this.list[i].name + "\t" + this.list[i].surname + "\t" + this.list[i].time;
					byTabs += i == this.list.length-1 ? "" : "\n";
				}
			}
			return byTabs;
		}
    }
    
});