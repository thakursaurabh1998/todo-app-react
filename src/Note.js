class Note {
	constructor(input,completed=false,editing=false,display=true){
		this.info = ko.observable(input);
		this.completed = ko.observable(completed);
		this.editing = ko.observable(editing);
		this.display = ko.observable(display);
	}
}

export default Note;