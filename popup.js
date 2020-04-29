
let buttons = document.querySelectorAll('.service-item__button');
let closeButton = document.querySelector(".close");
let overlayButton = document.querySelector(".button__overlay");
let popup = document.querySelector(".popup");
let form = document.querySelector('form');





form.onsubmit = function() {
	location.reload(true); //Обновляем страницу, для очистки формы (такое себе решение)
	RemovePopup();

	/*Вообще нужно считывать данные с input и отправлять их на сервер, но
	это всего лишь визуальная форма, ведь сайт не загружается на сервер*/
	/*Еще нужна проверка на правильность введенных данных*/
};

/*
onclick - ловим клики
querySelector(All) - ищем элемент(ы) с классом
style - применяем стили
*/


overlayButton.onclick = function()
{
	ShowPopup();
}

for (let SerivceButton of buttons) //цикл
	{
		SerivceButton.onclick = function()
		{
			ShowPopup();
		}
	}

	closeButton.onclick = function()
	{
		RemovePopup();
	}

function ShowPopup()
{
	popup.style.display = "flex";
}

function RemovePopup()
{
	popup.style.display = "none";

}