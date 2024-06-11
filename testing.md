1. Виды тестов
   1. Unit - тестирование одного модуля в изоляции
   2. Integration - тестирование группы взаимодействующих модулей
   3. System - тестирование системы в целом
2. Преимущества тестирования
   1. Тесты помогают выявить ошибки и баги на ранних стадиях разработки, что позволяет создавать более стабильное и надежное приложение.
   2. Тесты служат своего рода "страховкой" при изменении кода. Если все тесты проходят успешно после рефакторинга, это означает, что функциональность приложения не нарушена.
   3. Тесты могут служить живой документацией, показывая, как компоненты и функции должны работать и взаимодействовать друг с другом.
   4. Регулярное тестирование помогает поддерживать высокий уровень качества кода, предотвращая накопление технического долга.
3. Как вы тестируете компоненты с состоянием и побочными эффектами?

   1. **useState**. Для тестирования состояния можно использовать fireEvent или userEvent из RTL для изменения состояния компонента и проверки результата.
   2. **useEffect**. Для тестирования побочных эффектов можно использовать мокирование API-запросов и проверку изменений в DOM.

   ```javascript
   import React from "react";
   import { render, screen, fireEvent } from "@testing-library/react";
   import MyComponentWithState from "./MyComponentWithState";

   test("updates state on button click", () => {
     render(<MyComponentWithState />);
     fireEvent.click(screen.getByText("Increment"));
     expect(screen.getByText("Count: 1")).toBeInTheDocument();
   });
   ```

4. Подходы к мокированию API-запросов
   1. **jest.mock**. Используется для мокирования модулей и функций.

      ```javascript
      import axios from "axios";
      import { fetchData } from "./api";

      jest.mock("axios");

      test("fetches data from API", async () => {
        axios.get.mockResolvedValue({ data: { user: "John Doe" } });

        const data = await fetchData();

        expect(data.user).toBe("John Doe");
      });
      ```

   2. **Mock Service Worker (msw):** Библиотека для мокирования сетевых запросов на уровне сервера.
5. Инструменты и библиотеки вы используете для тестирования React\-приложений.
   1. Jest предоставляет мощные инструменты для мокирования и асинхронного тестирования.
   2. React Testing Library (RTL). Библиотека, ориентированная на тестирование компонентов с точки зрения пользователя. RTL помогает писать тесты, которые проверяют поведение компонентов, а не их внутреннюю реализацию.

      ```javascript
      import React from "react";
      import { render, screen } from "@testing-library/react";
      import "@testing-library/jest-dom/extend-expect";
      import MyComponent from "./MyComponent";

      test("renders MyComponent with correct text", () => {
        render(<MyComponent />);
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();
      });
      ```

   3. **Enzyme**. Библиотека для манипуляции и проверки компонентов
   4. **Cypress**. Инструмент для end-to-end тестирования.
   5. **Mock Service Worker**. Библиотека для мокирования сетевых запросов
6. Инструменты для измерения покрытия кода:
   1. **jest-coverage**. Генерирует отчет о покрытии кода
   2. **Codecov или Coveralls**. Сервисы для анализа покрытия кода.

### Юнит-тестирование (Unit Testing)

**Цель** - тестирование отдельных модулей или компонентов приложения изолированно от других частей системы.

- Юнит-тесты проверяют небольшие, изолированные части кода, такие как функции, методы или компоненты.
- Эти тесты помогают убедиться, что каждый отдельный блок кода работает правильно.
- Обычно юнит-тесты выполняются быстро и их легко автоматизировать.
- Примеры инструментов: Jest, Mocha, Jasmine.

```javascript
// Пример интеграционного теста для компонента, который делает API-запрос
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import UserList from "./UserList"; // Компонент, который загружает список пользователей

const mock = new MockAdapter(axios);

test("fetches and displays users", async () => {
  mock.onGet("/api/users").reply(200, [{ id: 1, name: "John Doe" }]);

  render(<UserList />);

  await waitFor(() => screen.getByText("John Doe"));

  expect(screen.getByText("John Doe")).toBeInTheDocument();
});
```

### Интеграционное тестирование (Integration Testing)

**Цель** - тестирование взаимодействия между различными модулями или компонентами приложения.

- Интеграционные тесты проверяют, как различные части системы работают вместе.
- Эти тесты выявляют проблемы, возникающие при взаимодействии между модулями.
- Интеграционные тесты могут включать взаимодействие с базой данных, API или другими внешними системами.
- Примеры инструментов: Jest с библиотеками для мокирования, такие как axios-mock-adapter, supertest.

```javascript
// Пример интеграционного теста для компонента, который делает API-запрос
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import UserList from "./UserList"; // Компонент, который загружает список пользователей

const mock = new MockAdapter(axios);

test("fetches and displays users", async () => {
  mock.onGet("/api/users").reply(200, [{ id: 1, name: "John Doe" }]);

  render(<UserList />);

  await waitFor(() => screen.getByText("John Doe"));

  expect(screen.getByText("John Doe")).toBeInTheDocument();
});
```

### End-to-End тестирование (E2E Testing)

**Цель** - тестирование всего приложения от начала до конца с точки зрения пользователя.

- E2E тесты проверяют приложение в целом, включая пользовательский интерфейс и взаимодействие с сервером.
- Эти тесты имитируют реальные сценарии использования приложения.
- E2E тесты могут быть медленнее и сложнее в настройке по сравнению с юнит-тестами и интеграционными тестами.
- Примеры инструментов: Cypress, Selenium, Playwright.

```javascript
// Пример E2E теста для формы логина
describe("Login Form", () => {
  it("allows a user to log in", () => {
    cy.visit("/login");

    cy.get('input[name="username"]').type("testuser");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/dashboard");
    cy.contains("Welcome, testuser").should("be.visible");
  });
});
```
