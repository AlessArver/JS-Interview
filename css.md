1. **Блочная модель** - правила, по которым браузер определяет размер элемента на странице, его ширину и высоту.
2. **CSS Grid** - мощная система для создания двухмерных сеток на веб-страницах.
3. `::before` и `::after` позволяют вставлять контент до или после содержимого элемента.
4. **Flexbox** — это система для создания однорядных или одностолбцовых макетов.
5. Как использовать миксины в SASS/SCSS?

   1. Миксины позволяют создавать переиспользуемые блоки стилей. Они принимают параметры и могут включать логические конструкции.

   ```css
   @mixin border-radius($radius) {
     -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
     border-radius: $radius;
   }

   .button {
     @include border-radius(10px);
   }
   ```

6. Как работают директивы `@extend` и `@include` в SASS/SCSS?

   1. `@extend` позволяет наследовать стили одного селектора другим селектором.

   ````scss
   	.error {
   	  border: 1px #f00;
   	  background-color: #fdd;
   	}

   	.seriousError {
   	  @extend .error;
   	  border-width: 3px;
   	}
   	```
   1) `@include` используется для включения миксинов.
   ````

7. **CSS Variables**. Позволяют хранить значения, которые можно переиспользовать в стилях.

   ```css
   :root {
     --main-color: #3498db;
   }

   .button {
     background-color: var(--main-color);
   }
   ```

8. **Свойство position в CSS** определяет метод позиционирования элемента на странице.
   1. Static. По умолчанию, не позиционируется.
   2. Relative. Позиционируется относительно своего нормального положения.
   3. Absolute. Позиционируется относительно ближайшего предка с position отличным от static.
   4. Fixed. Позиционируется относительно окна браузера.
   5. Sticky. Позиционируется на основе скролла пользователя.
9. **Media Queries** позволяют применять стили в зависимости от характеристик устройства, таких как ширина экрана.

   ```css
   @media (max-width: 600px) {
     .container {
       flex-direction: column;
     }
   }
   ```

10. **Анимация в CSS**. Для этого используются ключевые @keyframes и свойство animation.

    ```css
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .element {
      animation: fadeIn 2s ease-in-out;
    }
    ```

11. Что такое CSS Transitions и как их использовать?
12. CSS Transitions позволяют плавно изменять свойства элемента.
13. Функции в SASS/SCSS.

    ```css
    @function calculate-spacing($multiplier) {
      @return $multiplier * $base-spacing-unit;
    }

    $base-spacing-unit: 8px;

    .container {
      margin-bottom: calculate-spacing(2);
    }
    ```

14. Partials Css почитать.
15. Циклы в SASS/SCSS

    ```css
    @for $i from 1 through 3 {
      .item-#{$i} {
        width: #{20 * $i}px;
      }
    }
    ```

16. `@if`, `@else` в SASS/SCSS.

    ```css
    $theme-darkness-level: dark;

    @if $theme-darkness-level == dark {
      body {
        background-color: black;
        color: white;
      }
    } @else if $theme-darkness-level == light {
      body {
        background-color: white;
        color: black;
      }
    } @else {
      body {
        background-color: gray;
        color: black;
      }
    }
    ```

17. **PostCSS** — это инструмент для преобразования `CSS` с помощью `JavaScript` плагинов. Он может использоваться для добавления автопрефиксов, минификации кода и других задач.
    ```javascript
    // postcss.config.js
    module.exports = {
      plugins: [require("autoprefixer"), require("cssnano")],
    };
    ```
18. Директива @each в SASS/SCSS.
    Написав данный код:

    ```css
    $colors: red, green, blue;

    @each $color in $colors {
      .text-#{$color} {
        color: $color;
      }
    }
    ```

    Мы получим это:

    ```css
    .bg-primary {
      background-color: #007bff;
    }

    .text-primary {
      color: #007bff;
    }

    .bg-secondary {
      background-color: #6c757d;
    }

    .text-secondary {
      color: #6c757d;
    }

    .bg-success {
      background-color: #28a745;
    }

    .text-success {
      color: #28a745;
    }
    ```

    Написав данный код:

    ```css
    $themes: (
      light: (
        background: #fff,
        text: #000,
      ),
      dark: (
        background: #000,
        text: #fff,
      ),
    );

    @each $theme, $properties in $themes {
      .#{$theme}-theme {
        @each $property, $value in $properties {
          #{$property}-color: $value;
        }
      }
    }
    ```

    Мы получим это:

    ```css
    .light-theme {
      background-color: #fff;
      text-color: #000;
    }

    .dark-theme {
      background-color: #000;
      text-color: #fff;
    }
    ```

19. Директива @use в SASS/SCSS используется для подключения других файлов стилей. Она была введена для замены устаревшей директивы @import и предоставляет более безопасный и модульный способ управления стилями.
20. Преимущества директивы @use по сравнению с @import

    1. Избегает конфликтов имен. C @import все переменные, функции и миксины из импортируемого файла становятся глобальными и могут перезаписывать существующие переменные, что может привести к конфликтам имен.
       Пример с @import

       ```css
       // variables.scss
       $primary-color: #007bff;

       // styles.scss
       @import "variables";
       $primary-color: #ff0000; // Перезапишет значение из variables.scss
       ```

       Пример с @use

       ```css
       // variables.scss
       $primary-color: #007bff;

       // styles.scss
       @use "variables";
       $primary-color: #ff0000; // Не перезапишет значение из variables.scss
       body {
         color: variables.$primary-color; // Использует значение из variables.scss
       }
       ```

    1. С @import каждый раз, когда файл импортируется, sass компилирует его заново. Это может замедлить компиляцию при большом количестве импортов. С @use sass компилирует файл только один раз, даже если он используется несколько раз. Это улучшает производительность компиляции.
    1. Переопределение значений с @use происходит при подключении с помощью ключевого слова with

       ```css
       // config.scss
       $font-size: 16px;

       // styles.scss
       @use "config" with (
         $font-size: 18px
       );

       body {
         font-size: config.$font-size; // Использует переопределенное значение              // 18px
       }
       ```

### ITCSS

1. ITCSS делит стили на несколько слоев, каждый из которых имеет свою роль. Вот основные слои:
   1. Settings. Этот слой содержит переменные, настройки и конфигурации для всего проекта. Например, цвета, размеры шрифтов и другие глобальные параметры.
   2. Tools. Здесь размещаются вспомогательные функции, миксины и другие утилиты, которые не генерируют CSS напрямую, но используются в других слоях.
   3. Generic. Этот слой содержит стили сброса(reset) или нормализации (normalize), а также любые глобальные стили, которые применяются ко всем элементам.
   4. Elements. Здесь находятся стили для базовых HTML-элементов (теги), такие как h1, a, button и т.д.
   5. Objects. В этом слое размещаются стили для повторно используемых структурных блоков, таких как сетки, контейнеры и другие компоненты, не зависящие от конкретного дизайна.
   6. Components. Этот слой содержит стили для конкретных UI-компонентов, таких как кнопки, карточки и т.д.
   7. Trumps. В этом слое находятся утилитарные классы, которые переопределяют все предыдущие стили и используются для быстрого изменения внешнего вида элементов.
      ```css
      .text-center {
        text-align: center !important;
      }
      ```
2. Пример структуры проекта:
   ```
   styles/
   ├── settings/
   │   └── _colors.scss
   ├── tools/
   │   └── _mixins.scss
   ├── generic/
   │   └── _reset.scss
   ├── elements/
   │   └── _typography.scss
   ├── objects/
   │   └── _grid.scss
   ├── components/
   │   └── _button.scss
   └── trumps/
       └── _utilities.scss
   ```
