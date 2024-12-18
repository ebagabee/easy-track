# Events

No exemplo do código atual `(select)="onSelectUser($event)".`

- (select) é um evento personalizado (custom event) que foi definido no componente app-user. Em Angular, os eventos são denotados por parenteses.

- onSelectUser($event) é o manipulador do evento (event handler). Isso significa que quando o evento select é emitido pelo componente app-user, o método `onSelectUser()` será chamado no componente pai.

- $event é uma variável especial que contém os dados emitidos pelo evento. Quando você usa $event como argumento, você está passando esses dados para o método `onSelectUser()`.

Então o fluxo seria algo assim:

- O usuário interage com o componente app-user de alguma forma (provavelmente clicando nele)
- O componente app-user emite um evento select, possivelmente incluindo alguma informação sobre o usuário selecionado.
- O componente pai captura esse evento com `select="onSelectUser($event)".`
- O método onSelectUser() no componente pai é chamado, recebendo os dados do evento como argumento.
