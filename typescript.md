1. Утилиты
   1. `Partial<Type>` делает все поля необязательными
   2. `Required<Type>` делает все поля обязательными
   3. `Readonly<Type>` не позволяет поменять значение у какого либо поля.
      ```
      const todo: Readonly<Todo> = {
      title: "Delete inactive users",
      };
      todo.title = "Hello"; // Нельзя будет так сделать с данной утилитой
      ```
   4. `Record<Keys, Type>` для создания объекта. Keys - ключи объекта, type - тип объектов. Пример:
   5. `Pick<Type, Keys>` позволяет выбрать переменные из типа. Пример:
      ```
      const todo: Readonly<Todo> = {
      title: "Delete inactive users",
      };
      todo.title = "Hello"; // Нельзя будет так сделать с данной утилитой
      ```
   6. `Omit<Type, Keys>` позволяет использовать тип без выбранных типов.
   7. `NonNullable<Type>` если будет тип null или undefined у переменной, то будет сообщение об ошибке
   8. Type Guard
      1. --strictNullChecks для включения строгого режима. Источник: https://scriptdev.ru/guide/036/#-
