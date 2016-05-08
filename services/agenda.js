app.service('Agenda', function () {
	this.list = [];
	this.list.push({title: "", name: "", surname: "", time: ""});
	
	this.model = {
		'startTime': ""
	};

	this.myResult = function () {
		var result = [];
		
		if(this.model.startTime !== "") {
			var lastTime = this.model.startTime;
			for (var i = 0; i < this.list.length; i++) {
				if(this.list[i].title !== "" && this.list[i].time  !== "" && this.list[i].time !== undefined){
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
    
});