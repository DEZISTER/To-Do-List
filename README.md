# To-Do-List
__ОПИС ПРОЕКТУ__

Реалізовано веб-застосунок To-Do List, який надає змогу користувачам працювати із задачами, а саме додавати, редагувати, видаляти та міняти їхні статуси. У відповідності до вимог наявне поле вводу опису задачі та кнопка «Додати».
Також наявні 3 поля із статусами «Виконуються», «Призупинено», «Завершено», відповідними статусами а також списками завдань у них.
Весь застосунок розроблений із врахуванням можливості подальшого розширення.

<hr>

__КЛАСИЧНА ПОСЛІДОВНІСТЬ ДІЙ:__
1.	Заповнюємо поле з описом задачі, та нажимаємо на клавіатурі «Enter» або кнопку «Додати».
2.	У разі якщо поле порожнє, появляються попередження про необхідність його заповнення, у іншому випадку відбувається створення завдання.
3.	Відбувається створення задачі, яка автоматично набуває статусу «in-process» та поміщається у відповідне поле. (Варто зауважити, що список задач у кожному з полів це getters дані, так само як і інформація про кількість задач у даному полі, що відображена у заголовку).
    * Якщо задача знаходиться у полі «Виконуються», доступні функції: редагування, видалення, зміна статусу на паузу чи завершено.
    * Якщо задача знаходиться у полі «Призупинено», доступні функції: редагування, видалення, завершення чи продовження виконання.
    * Якщо задача знаходиться у полі «Завершено», доступні функції: Повторне виконання або видалення. Це обумовлено тим, що доцільность у редагуванні чи переміщенні на паузу завершеної задачі є відсутньою.
4.	Тепер у нас появляється можливість змінювати стан задачі (призупинити її, позначити як завершену, чи видалити).
5.	Якщо виникає необхідність у редагуванні задачі, нажимаємо на відповідну кнопку «олівця», яка зображена на самій задачі. У полі, яке ми раніше використовували для створення нової задачі відображається опис поточної, яку ми можемо змінювати. В свою чергу кнопка з написом «Додати» змінюється на «Оновити».
6.	Після оновлення, поле у формі знову стає пустим, а кнопка міняє своє значення і відповідну поведінку на «Додати». Варто зауважити, що на відміну від додавання нової задачі, її редагування не набуває автоматично статусу «in-progress», а залишається в тому ж самому полі, як і потрібно з огляду логіки.

<hr>

__ПЕРЕЛІК ЗАСОБІВ РЕАЛІЗАЦІЇ__

* Vue-3.js + VUEX + VueRouter + HTML5 + BEM + SCSS

<hr>

__ОПИС ОСНОВНИХ ПІДХОДІВ ДО РЕАЛІЗАЦІЇ__

*	<span color='red'>__Керування станом застосунку__</span>. Відбувалось за допомогою VUEX (з метою кращої структуризації та подальшого масштабування проекту) а також props (з метою створення перевикористовуваних компонентів, а також локальних допоміжних змінних для кращої швидкодії). Окрім цього у відповідності до технічних вимог завдання, було реалізовано збереження даних у localStorage, що надає змогу зберігати стан застосунку навіть при перезавантаженні ПК. Таким чином при відкритті сторінки з завданнями, відбувається перевірка наявності списку завдань у локальному сховищі за допомогою хука mounted, і у разі його відсутності, завантаження його із поля state файла “@/store/modules/taskModule.js”. Додатково з метою можливого подальшого розширення застосунку, було проведено декомпозицію модуля, та його глобальна реєстрація у “@/store/globalStore.js” а в самих компонентах з метою економії коду та усуненні нагромадження було використано функції mapState, .

*	__Робота з компонентами__. Було проведено декомпозицію перевикористовуваних (або потенційно перевикористовуваних) компонентів що знаходяться по шляху “@/components/Elements”. Також було реалізовано власну UI-бібліотеку із елементів що використовуються в проекті (кнопки, контейнер, інтуп) по шляху “@/components/UI”. З метою економії ресурсозатрат та чистоти коду було проведено глобальну реєстацію компонентів по шляху “@/components/componentList.js”.

*	__Іконки__. Всі наявні іконки сформовані у відповідний спрайт, з наявними інтуїтивно зрозумілими id, та знаходяться по шляху “@/images/icons.svg”.

*	__Router and SPA__. З метою подальшого розширення підключено Vue Router, який надає змогу перемішуватись між головною сторінкою та сторінкою «Контактів» у відповідності до всіх вимог SPA, застосовуючи <router-link> або router.push(…) для переходів, а також <router-view> для відображення сторінки.

*	__Опис стилів__. Всі стилі описувались за допомогою SCSS. Наявні файли нормалізації стилів та базових налаштувань. Підключення змінних і шрифту до кожного компоненту реалізовано у vue.config.js з метою економії та чистоти коду.

*	__Опис розмітки__. Вся розмітка виконувалась у відповідності до сучасних вимог семантики із застосуванням HTML5 тегів та атрибутів до них. Класи описані у відповідності до BEM методології.

*	__UI/UX__. З метою захоплення якомога більшої кількості цільової аудиторії, було обрано створювати дизайн у стриманих, класичних для даного виду застосунків тонах. Колористика усіх полів, кнопок а також їхні іконки та опис є інтуїтивно зрозумілими.

*	__Responsive-Adaptive дизайн__. Застосунок створений за принципом «mobile first» і відповіно підтримує любі як мобільші, так і інші розширення екрану. Наявні 3 точки «перелому» а саме 480рх, 768рх та 1200рх.

*	__RestAPI та Axios__. Оськільки в технічному завданні не було чітко сказано за RestAPI, вся робота була виконана за допомогою збереження даних в state і localStorage. Однак json-server як і бібліотека axios міститься в залежностях, поле actions містить уже створені функції які легко переписати на роботу із сервером  а відповідний файл db.json створено та заповнено даними. Тому у разі необхідності, даний аспект буде реалізований та протестований за лічені години (якщо звичайно це є необхідно).

*	__Робота з Vue__. Реалізація застосунку виконувалась за допомогою нових підходів у роботі з фреймворком Vue а саме використання двостороннього зв’язування за допомогою v-model у бібліотеці input-а, використанні наявних директив таких як v-for, v-if, v-slot, @click та модифікаторів до них.

*	__Опис даних зі списком завдань__. Список завдань (taskList) являє собою масив об’єктів. Кожен об’єкт це окрема задача, що містить свій унікальний ідентифікатор (id), поле опису задачі (descr) та статус (status). У відповідності статуси є 3-ох видів, а саме: in-process, pause та success. Робота із даним об’єктом проводиться у Vuex за допомогою getters, mutation та actions, збереження відповідно відбувається у state.
