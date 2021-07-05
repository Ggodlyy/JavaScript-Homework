function loadRepos() {
	let input = document.querySelector('#username');
	let output = document.querySelector('#repos');

	let url = `https://api.github.com/users/${input.value}/repos`;

	fetch(url)
		.then(res => status(res))
		.then(res => res.json())
		.then(data => {
			output.querySelectorAll('li').forEach(li => li.remove());
			data.forEach(obj => {
				let li = document.createElement('li');
				let a = document.createElement('a');
				a.href = obj.html_url;
				a.textContent = obj.full_name;
				li.appendChild(a);
				output.appendChild(li);
			})
		})
		.catch(err => {
			output.querySelectorAll('li').forEach(li => li.remove());
			let li = document.createElement('li');
			li.textContent = err;
			output.appendChild(li);
		});
}

function status(res) {
	if (!res.ok) {
		return Promise.reject('not found');
	}
	return res;
}