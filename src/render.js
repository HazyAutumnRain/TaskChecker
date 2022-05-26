function newTask() {
	document.getElementById('insert').classList.toggle("hide");
	document.getElementById('insert').focus();
}

function labelClick(obj) {
	let check = obj.innerHTML.substring(1,5);
	//console.log(check);
	if (check == "span") {
		//if task has already been set to clear then we delete it
		obj.parentNode.remove();
	} else {
			obj.innerHTML = "<span class=linetr>"+obj.innerHTML+"</span>";		
	}
}

function dmToggle() {
	document.body.classList.toggle("dark");
	if (document.body.className == "crt dark") {
		document.getElementById('plusicon').src = "images/plusdark.png";
	} else {
		document.getElementById('plusicon').src = "images/plus.png";
	}
}

function handleInput() {
	//Add a new task to the task container
	const taskcont = document.getElementById('task-container');
	//Create task container
	let cont = document.createElement('div');
	cont.id = "task";
	//Create task elements
	let task = document.createElement('label');
	task.id = "tasktext";
	task.className = "tasktext";
	cont.setAttribute('onclick', "labelClick(this.firstChild)");
	cont.appendChild(task);
	taskcont.appendChild(cont);
	let foundlabel = document.getElementById('tasktext');
	let input = document.getElementById('insert');
	if (foundlabel != null) {
		foundlabel.innerHTML = input.value;
		input.value = "";
		foundlabel.id = "insertedtask";
		document.getElementById('insert').classList.toggle("hide");
	} else {
		console.log("NO TASK HAS BEEN MADE");
	}
}
