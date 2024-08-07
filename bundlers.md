Сборщики(bundlers) играют ключевую роль в современной разработке фронтенда, объединяя и оптимизируя ресурсы (JavaScript, CSS, изображения и т.д.) для улучшения производительности и упрощения

### Webpack

1. **Entry point**(точка входа) — это файл, с которого Webpack начинает сборку. Обычно это основной файл приложения, например `index.js`.
2. **Output**(Выход) — это конфигурация, указывающая, куда и под каким именем Webpack должен сохранить собранные файлы.
3. Loaders позволяют Webpack обрабатывать файлы не JavaScript форматов, такие как CSS, изображения и т.д.
4. Плагины используются для выполнения различных задач, таких как оптимизация бандлов, управление активами и т.д.
5. Режимы определяют, как конфигурация Webpack будет работать. Есть два режима: `development` и `production`.
6. **Code splitting**. Позволяет разбить код на отдельные части(chunks), которые могут загружаться по мере необходимости. Это помогает улучшить производительность приложения, так как пользователи загружают только те части кода, которые им нужны в данный момент, а не весь бандл сразу.
   1. Разделение точек входа(Entry Points). Можете определить несколько точек входа в приложении. Webpack создаст отдельные бандлы для каждой из них.
   ````javascript
    module.exports = {
   	  entry: {
   	    app: './src/app.js',
   	    admin: './src/admin.js'
   	  },
   	  output: {
   	    filename: '[name].bundle.js',
   	    path: path.resolve(__dirname, 'dist')
   	  }
   	};
   	```
   2) Разделение библиотек (Vendor Splitting). Выделить зависимости из node_modules в отдельный бандл, чтобы уменьшить размер основного бандла и улучшить кеширование.
    ```javascript
   	   module.exports = {
   		  optimization: {
   		    splitChunks: {
   		      cacheGroups: {
   		        vendor: {
   		          test: /[\\/]node_modules[\\/]/,
   		          name: 'vendors',
   		          chunks: 'all'
   		        }
   		      }
   		    }
   		  }
   		};
   	```
   3) Используя синтаксис import(), вы можете загружать модули асинхронно, когда они действительно нужны.
   ````
7. **Tree shaking** — это процесс удаления неиспользуемого кода из финального бандла.
8. **Source maps** — инструменты, которые связывают скомпилированный и минифицированный код с исходным кодом приложения. Особенно полезно для отладки, тк это позволяет разработчикам видеть исходный код в инструментах разработчика браузера, даже если он был преобразован или минифицирован. Подробнее можно почитать здесь: https://webpack.js.org/configuration/devtool/ .
9. Зачем нужны **source maps**?
   1. Позволяют увидеть исходный код, что делает процесс отладки намного проще.
   2. Помогают получить более понятные сообщения об ошибках, указывая на строки в исходном коде.
   3. Упрощают анализ производительности, показывая исходный код в профилировщиках.
10. Использование **source maps** в продакшене.
    Хотя source maps очень полезны для разработки, их использование в продакшене требует осторожности. Они могут раскрыть исходный код и структуру вашего приложения, что может быть нежелательно.
    Для продакшена обычно используют `hidden-source-map` или `nosources-source-map`, чтобы скрыть исходный код. ` hidden-source-map` генерирует **source maps**, но не включает ссылку на них в скомпилированный код. `nosources-source-map` генерирует карты без исходного кода, показывая только структуру.
11. Alias позволяет задавать псевдонимы для путей, чтобы упростить импорт.
12. В режиме `production` минификация включается автоматически через TerserPlugin.
13. **Lazy loading** позволяет загружать модули по требованию.
14. DllPlugin — это плагин для сборки Webpack, который позволяет вам разделить ваш код на несколько частей, чтобы ускорить процесс сборки и улучшить производительность. Преимущества:
    1. Поскольку зависимости скомпилированы заранее, основная сборка проходит быстрее.
    2. Заранее скомпилированные библиотеки можно кэшировать и использовать повторно до тех пор, пока они не изменятся.
    3. Разделение кода на части позволяет лучше управлять зависимостями и уменьшить размер итогового бандла.
15. **Parallel builds** позволяет ускорить процесс сборки, выполняя задачи параллельно. Для реализации можно использовать: thread-loader, parallel-webpack и HappyPack.
16. **External** используется для исключения определенных зависимостей из финального бандла. Это полезно, когда хочется использовать библиотеки, которые уже загружены из внешних источников(например, через CDN), или если хочется уменьшить размер бандла, исключив большие библиотеки.
17. **Module Federation** позволяет нескольким приложением (или микрофронтендам) совместно использовать модули без необходимости дублирования кода. Это особенно полезно для создания микрофронтендов, где различные части приложения могут быть разработаны и развернуты независимо.
    Плюсы:
18. Поддержка различных типов файлов (JS, CSS, изображения и т.д.) через загрузчики.
19. Большое количество плагинов для расширения функциональности.
20. Разделение кода на чанки для улучшения производительности.
21. Обновление модулей в реальном времени без перезагрузки страницы.
    Минусы:
22. Может быть сложным для новичков из-за большого количества конфигурационных опций.

### Parcel

Плюсы:

1. Не требует конфигурации для большинства проектов.
2. Высокая скорость сборки благодаря многопоточности и кэшированию.
3. Автоматическая поддержка JavaScript, CSS, HTML, изображений и т.д.
   Минусы:
4. Меньше возможностей для тонкой настройки по сравнению с Webpack.

### Rollup

Плюсы:

1. **Tree-shaking**. Удаление неиспользуемого кода для уменьшения размера конечного бандла.
2. Поддержка ES-модулей
3. Поддержка множества плагинов для расширения функциональности.
   Минусы:
4. Лучше подходит для библиотек, чем для приложений.

### Vite

Плюсы:

1. Быстрая перезагрузка страниц благодаря использованию нативных ES-модулей.
2. Простая настройка и интеграция с популярными фреймворками (Vue, React).
3. Использует Rollup под капотом для создания оптимизированных бандлов.
   Минусы:
4. Меньше зрелости и экосистемы по сравнению с Webpack.

### Esbuild

Плюсы:

1. Очень высокая скорость сборки благодаря использованию Go.
2. Прост в использовании и настройке.
3. Встроенная поддержка typescript и jsx без необходимости в дополнительных плагинах.
   Минусы:
4. Ограниченные возможности по сравнению с Webpack или Rollup.
