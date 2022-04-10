# Jest test #
Jest — это фреймворк для тестирования JavaScript с акцентом на простоту. Работает с проектами, использующими Babel, TypeScript, Node, React, Angular, Vue и многое другое!<br>
[Jest-docs](https://jestjs.io/ru/docs/getting-started) - документация.<br>
Работа в терминале wsl (Ubuntu). <br>
## Инструкция к проекту ##
Если JS модули экспортируются через: <code> module.exports </code> и соответственно импортивруются через <code>require('path')</code> <br>
Команда для запуска тестов: <code>npm run test</code><br>
Для отоброжения "покрытие кода тестами" (code coverage): <code>npx jest --coverage</code>.<br>

Если же JS модули эскпортируются через <code>export</code>, <code>export default</code> и соответственно импортивруются через <code>import from "path"</code> <br>
Команда для запуска тестов: <code>NODE_OPTIONS=--experimental-vm-modules npx jest</code><br>
Для отоброжения "покрытие кода тестами" (code coverage): <code>NODE_OPTIONS=--experimental-vm-modules npx jest --coverage</code> <br>
