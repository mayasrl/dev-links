handleSwitchThemeEvents();
function handleSwitchThemeEvents() {
	const switchTheme = document.getElementById("switch-toggle-theme");
	if (!switchTheme) return;

	switchTheme.addEventListener("change", (event) => toggleTheme(event));
	switchTheme.addEventListener("keydown", (event) => {
		event.stopPropagation();
		const { key, target } = event;
		if (key === "Enter") {
			target.checked = !target.checked;
			toggleTheme(target);
		}
	});
}

function toggleTheme(event) {
	event.stopPropagation();
	const { target } = event;
	if (target.checked) {
		document.body.classList.remove("dark");
		return;
	}
	document.body.classList.add("dark");
}

const isSystemThemeDark = () =>
	window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

handleDefaultTheme();
function handleDefaultTheme() {
	const switchTheme = document.getElementById("switch-toggle-theme");
	if (!switchTheme) return;

	if (isSystemThemeDark()) {
		document.body.classList.add("dark");
		switchTheme.checked = false;
	} else {
		document.body.classList.remove("dark");
		switchTheme.checked = true;
	}
}
