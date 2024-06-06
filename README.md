# Scrumboard

Scrumboard applikation med inlogging med från Firebase auth, byggd i React.

## Pages link
[Scrumboard](https://k0nny16.github.io/JAVA23-AJS-slutprojekt-Karl-Kowal/)


## Dependencies
- React
- Firebase
- React Toastify
- React-DOM 
- React-Router-DOM

## Installation
1. Klona repot:
```shell
git clone https://k0nny16.github.io/JAVA23-AJS-slutprojekt-Karl-Kowal/
```    
2. Navigerat till projectet:
```shell
cd JAVA-AJS-slutprojekt-Karl-Kowal
```
3. Installera denpendencies:
```shell
npm install
``` 
4. Kör dev-scriptet:
```shell
npm run dev
``` 

## Beskrivning
När användaren ansluter till sidan ansluter den till roten /. När det sker kontrollerar React-router-dom om statet som hanterar inloggning är true eller false. Eftersom det är false när man ansluter till sidan blir man omdirigerad till routen /login. Där loggar man in, och om det lyckas får vi tillbaka ett promise med userCredentials från Firebase, statet ändras till true, och användaren dirigeras tillbaka till /. Där hamnar man nu på scrumboarden istället, eftersom statet är true. Om promiset skulle bli rejected visar vi ett felmeddelande och ber användaren kontrollera sina uppgifter, och för det använder vi react-toastify för att visa upp ett snyggt felmeddelande.

När scrumboard-komponenten renderas har vi en övre komponent och en undre komponent. Den övre komponenten innehåller formuläret som användaren skickar in sina tasks i, en utloggningsknapp där det också står vem som är i session och även en knapp som omdirigerar användaren till /newUser om man vill lägga till användare. Omdirigeringen använder sig av react-router-dom, där vi återigen kollar state. Om det är true används useNavigate-funktionen för att skicka användaren till länken och routen vi har satt upp.

Den undre komponenten består av tre divar som är todo, inprogress och done. Varje div hämtar data från respektive referens i Firebase (refTodo, refInprogress, refDone) och itererar över nycklarna för att bygga en pane-div för varje iteration.

Panen visar upp informationen och gör det möjligt att flytta data från todo till inprogress eller done. Detta gör att vi inte renderar om hela den undre komponenten utan bara de tabeller som påverkas av ändringen (vilket i vårat fall alltid är 2/3).