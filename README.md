					Fabrique Fine Furnishings
=========================

											Кратко о проекте

При выполнении этого проекта были использованы: SCSS, Compass, source map, Bootstrap, BEM, Gulp, JSON, Javascript, CSS3, HTML5, Boilerplate, Photoshop, SMACSS(часть управления структурой проекта).

Отдельно хочу отметить, то что весь проект написан на AngularJS (без использования Bootstrap.js, jQuery и т.д.). Через контроллеры дописана реакция на переключения валют, добавление товара в корзину и валидация формы email. Все товары добавляются автоматически, когда вы заносите информация в JSON файл.

											Валидация

Если Вам вдруг будет не лень сделать валидацию HTML, Вы увидите 3 странные ошибки. Все это связанно с тем, что валидатор берет файл с хостинга до обработки DOM дерева AngularJS (хотя как оно может быть иначе). Это легко проверить если пробежать по DOM дереву developer tools, Вы не найдете там никаких странных элементов о которых Вам написал валидатор, потом что умный AngularJS уже заменил кастомные директивы на темплейты.

											Ссылки

<a href="http://htmlforum.ru/index.php?s=57963c3a6d84d6a532e8f46eb980f46a&amp;showtopic=47141">Ссылка на ТЗ</a>
<a href="http://www.tech-drive.ru/sergey/fabrique/">Сайт на хостинге</a>