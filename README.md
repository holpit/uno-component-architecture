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

## Tag06

Il codice GroupControlsComponent non risponde al principio della Separation of concerns, che è uno dei più importanti principi di progettazione software e il concetto alla base è abbastanza semplice e spesso lo si applica senza nominarlo: suddividere l'applicazione in elementi distinti, ognuno rivolto ad uno specifico concern, quindi ad una specifica competenza.

Nel nostro caso ci sono due violazioni: 
* una evidente che è la presenza di un validatore all'interno di una componente
* l'altra, più subdola, è lo sviluppo di un elenco di opzioni direttamente nel codice, come l'inizializzazione di valori statici. 

Procediamo quindi a separare le responsabilità creando:
* Un validatore a livello applicativo, condiviso e riusabile
* Un servizio formula1.service.ts a livello applicativo che si occupi del recupero dei dati
  * Creato servizio che usa HttpClient con i metodi getTeams e getDefaultDrive
  * Create interfacce model (Team, Driver)
  * Creato db mockup assets/db/formula1.data.json

## Tag07

Per completare la carrellata sui validatori e sullo stato dei controlli, creiamo un semplice validatore asincrono che verifichi la disponibilità di un numero attribuito ad un pilota.

* Inserire in controlNumber il validatore numberUsedValidator()
* Mostrare come funzionano i lettable operator tra vecchio e nuova modalità dichiarativa
* Mostrare come l'approccio tradizionale monta tutti gli operatory su prototype

## Tag08

Supponiamo di voler costuire un controllo che permetta di indicare su quali social è attivo il pilota

* Ottimizzato Formula1Service con la creazione di un metodo privato get(section)
* Creato controllo IconsSelectorComponent
* Testare la disabilitazione {value: [], disabled: true}

## Tag09

GroupControlsComponent viene semplificato ricorrendo all'helper FormBuilder, di cui ora è più chiara la finalità e come opera, facendosi carico di tutto il lavoro di inizializzazione che prima avevamo fatto in maniera dettagliata.
Sparendo un riferimento diretto ai controlli (si potrebbe sempre ricorrere a form.name, form.number...), è possibile ricorrere alla direttiva formControlName

## Tag10

Creiamo un nuovo componente TemplateControlsComponent che ha le stesse funzionalità di GroupControlsComponent ma che utilizza l'approccio template-driven form e le direttive.

* Dal codice viene eliminata la costruzione della struttura FormGroup e FormControls
* Viene inizializzato e popolato solo il model driver
* Nell'HTML viene inizializzato il Form con la direttiva NgForm
* Inizializzare una direttiva (#tmForm="NgForm")significa che la variabile #tmForm non farà più riferimento a un HTMLElementRef ma a un oggetto di tipo NgForm
* Ai controlli viene associata la direttiva NgModel e l'attributo name
* Provare l'attributo disabled e relativo stato DISABLED
* Provare l'attributo required e relativo Validators.required inserito automaticamente dalla direttiva required

Diversamente da come fanno intendere alcuni tutorial disponibili in rete (anche dalla documentazione ufficiale) i template-driven forms non sono una versione semplificata dei ReactiveForms quanto piuttosto delle direttive sviluppate on-the-top ai Reactive Form per rendere più rapido il lavoro di programmazione quando non si ha bisogno di un elevato livello di configurazione e controllo dei controlli stessi.

Come vedremo Reactive Form è progettato per permettere un elevato livello di testing, mentre Template-Driven no, mascherando come fa i comportamenti interni.

Quello che è importante sottolineare è che l'approccio di Template-Driven Forms può essere una buona traccia per costruire componenti applicative riusabili

## Tag11

Addesso dovrebbero essere chiari gli strumenti che Angular ci mette a disposizione per sviluppare interfacce basate su form.

* inserita la possibilità di disabilitare il monitor sui controlli (attivo solo se debug="true")
* Creazione dei widget uno-form, uno-text, uno-select, uno-select-icon
* Creazione della versione del form tramite composizione di widgets

Questo approccio è per molti aspetti simile ad un Template-Driven verticalizzato e fatto su misura per le proprie applicazioni. La fase di TEST con questo approccio diventa fondamentale e viene spostata sui widget e sui componenti di base, mentre gli oggetti più vicini al dominio possono essere sottoposti a test funzionali più tradizionali.





