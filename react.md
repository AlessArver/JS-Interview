1. **React** — это библиотека JavaScript для создания пользовательских интерфейсов, разработанная Facebook. Она позволяет создавать компоненты, которые управляют собственным состоянием и могут быть переиспользованы.
2. **JSX(JavaScript XML)** — это синтаксическое расширение для JavaScript, которое позволяет писать HTML код внутри JavaScript. JSX компилируется в вызовы React.createElement().
3. **Redux** — это библиотека для управления состоянием приложения, основанная на концепции единого хранилища (store), действий (actions) и редьюсеров (reducers).
4. Context
   1. Контекст разработан для передачи данных, которые можно назвать глобальными для всего дерева React-компонентов. Это позволяет избежать передачи пропсов в промежуточные компоненты.
5. Virtual DOM(VDOM)
   1. Это концепция программирования, в которой VDOM хранится в памяти и синхронизируется с DOM при помощи библиотеки, такой как ReactDOM.
   2. https://ru.legacy.reactjs.org/docs/faq-internals.html
6. Shadow DOM
   1. Благодаря ему в компоненте есть собственное теневое DOM-дерево, к которому нельзя просто так обратиться из главного документа, у него могут быть изолированные CSS-правила и т.д.
   2. https://learn.javascript.ru/shadow-dom
7. HOC
   1. Это функция, которая принимает компонент и возвращает новый.
8. `createPortal`
   1. `createPortal(children, domNode, key?)`
   2. Позволяет отобразить некоторые дочерние элементы в другом DOM узле.
9. Reconciliation
   1. Это алгоритм React, используемый для того, чтобы отличить одно дерево элементов от другого для определения частей, которые нужно будет заменить.
10. Обработка ошибок в React
    1. Классовый компонент Error Boundary
11. Оптимизация производительности
    1. Использование Profile вкладки в браузере для слежение за временм отрисовки компонентов.
    2. Использование библиотек для отрисовки только тех элементов списка, что есть во viewport.
    3. Ленивая загрузка изображений при помощи библиотек.
12. Hooks
    1. **useCallback**. Используется для мемоизации функций. Он принимает функцию и массив зависимостей, и возвращает мемоизированную версию функции.
    2. useMemo
    3. useEffect
    4. useLayoutEffect
    5. useId
    6. useReducer
    7. useRef
    8. useState
    9. useContext
13. Другие полезные функции в React
    1. `lazy()`. Позволяет отложить загрузку кода компонента до его первого отображения.
    2. `memo()`. Избегает повторного рендеринга компонента, если его пропсы не изменились.
    3. `forwardRef()`. Позволяет вашему компоненту передавать ref с помощью ссылки.
    4. `createContext()`.
14. Методы жизненного цикла в классовых компонентах:
    1. ComponentDidMount
    2. ComponentDidUpdate
    3. ComponentWillUnmount
    4. ShouldComponentUpdate
    5. GetDerivedStateFromProps
    6. GetSnapshotBeforeUpdate.
15. **ShouldComponentUpdate** определяет, должен ли компонент перерисовываться при изменении состояния или пропсов. Он возвращает булево значение.
16. **Concurrent Mode** — это экспериментальный режим в React, который позволяет улучшить отзывчивость приложений за счет прерывания рендеринга и выполнения задач с высоким приоритетом.