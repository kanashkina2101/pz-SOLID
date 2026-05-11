Practical lesson pz-SOLID
Реалізація SOLID принципів у TypeScript
> У цьому проєкті продемонстровано рефакторинг «анти-SOLID» коду в гнучку архітектуру з абстракціями та інтерфейсами.
Що зроблено
Створено початковий «анти-SOLID» код у `src/original`
Визначено порушення SRP, OCP, LSP, ISP та DIP
Розроблено чіткі інтерфейси у `src/interfaces`
Реалізовано рефакторований код у `src/refactored`
Додано unit-тест для перевірки обробки замовлення
Аналіз SOLID
SRP — кожен клас має одну відповідальність
OCP — додано абстракції, щоб розширювати поведінку без зміни існуючих класів
LSP — підміна реалізацій працює через інтерфейси
ISP — інтерфейси розділені на вузькі контракти
DIP — залежності інвертовані в абстракції
Структура
```
├── src
│   ├── original
│   │   └── orderService.ts
│   ├── interfaces
│   │   └── index.ts
│   ├── refactored
│   │   ├── ConsoleLogger.ts
│   │   ├── EmailNotificationService.ts
│   │   ├── InMemoryOrderRepository.ts
│   │   ├── OrderService.ts
│   │   └── index.ts
├── tests
│   └── refactored.spec.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── .gitignore
```
Запуск
Встановити залежності:
```bash
npm install
```
Запустити тести:
```bash
npm test
```
Зібрати TypeScript:
```bash
npm run build
```
Що демонструє цей проєкт
`OrderService` обробляє замовлення, але не зберігає дані і не відповідає за повідомлення
`InMemoryOrderRepository` відповідає за збереження замовлення
`EmailNotificationService` відповідає за повідомлення клієнта
`ConsoleLogger` відповідає за логування
Висновок
Код рефакторовано так, щоб кожна частина мала чітку відповідальність. Це збільшує гнучкість, дозволяє легко тестувати та розширювати систему.
