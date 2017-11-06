# UnoComponentArchitecture

Uno Component Architecture è un progetto con lo scopo puramente didattico di mostra un approccio in angular alla progettazione per componenti, a partire da quelle che tipicamente stanno alla base dell'interazione con l'utente: i controlli e i form.

## Tag01

La base grafica del progetto è minimale e basata sul framework grafico Milligram, che usa i font Roboto. Il tutto con l'aggiunta dei font awesome per la gestione delle icone flat

```
npm install milligram normalize.css roboto-fontface font-awesome --save
```  
* import dei css in style.scss
* app.component.html con esempi

## Tag02

L'applicazione è composta da una serie di componenti applicative che mostrano una crescita graduale della complessità dell'interfaccia, analizzando ciò che offre il framework nativamente e cercando poi di ristrutturare le componenti in modo modulare

* Creazione della prima componente riusabile MasterpageComponent
* Creazione del shared.module.ts
* Creazione del modulo e del routing per le componenti applicative sotto /components
* Creazione della prima componente di navigazione 01-home
* Aggiornamento app.component.html e scss e style.scss per body e h1

## Tag03

La prima componente di esempio che viene creata è un semplice controllo FormControl che ne illustra le proprietà e i comportamenti principali, grazie al componente riusabile ControlMonitorComponent

* Creazione di ControlMonitorComponent e di CheckedComponent
* Creazione di 02-simple-control
* Aggiornamento home con single control
* Aggiornato MasterpageComponent con proprietà noBack (esempio di proprietà senza valore)
* Gestione layout globale per gestire buttons di comando allineati a destra (flexbox)
* Notare lo status e i valori di SimpleControl
  * Provare a inserire il validatore require per analizzarne il comportamento

## Tag04

La seconda componente è un form con tre controlli. text, number e select
Vengono introdotti i concetti di FormGroup e le direttive che permettono di collegare gli elementi del template a quelli della struttura di FormGroup e FormControl.

* Creazione di GroupControlsComponent
* Aggiornato ControlMonitorComponent per analizzare tutti gli elementi figli
  * Provare ad aggiungere dei validatori, anche simultanei a controlDriver
  * [ Validators.required, Validators.maxLength(3), Validators.email ]

## Tag05

* Aggiungiamo a GroupControlsComponent un validatore custom badLuckyValidator direttamente nel componente
* Modifichiamone il comportamento grafico usando le classi che Angular gestisce in automatico sulla base dello stato del controllo bindato: input.ng-invalid, input:focus.ng-invalid {     border-left: 5px solid red; } (inserire in *style.css*)


