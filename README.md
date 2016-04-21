# JS Crashcourse: Todo list

## Dependencies
* gulp (npm install -g gulp)
* mongod server instance running (local data dir optional)

## Excercises

### To do list (Vanilla JS)

#### 1. Skapa en att göra lista
Skapa en att göra lista genom att deklarera en variabel med namnet **todoList** som en array.


#### 2. Lägg till en sak att göra till listan
Skapa en funktion **addToList** som lägger till en sak att göra (en sträng) till listan och returnerar hela listan.


#### 3. Lägg till en sak att göra överst i listan
Ibland får man saker att göra som är viktigare än alla andra. Skapa en funktion **addToTopOfList** som lägger till en sak att göra längst upp i listan, samt returnerar hela listan.


#### 4. Ta bort en sak längst ner i listan
Kanske var det där längst ner i att göra listan inte så viktigt? Skriv en funktion **removeFromBottomOfList** som tar bort den sak som är längst ner i listan och returnerar den.


#### 5. Ta bort en sak högst upp i listan
Du fick äntligen det som var viktigast gjort? Skriv en funktion **removeFromTopOfList** som tar bort den sak som är högst i listan och returnerar den.


#### 6. Ta bort en sak baserad på dess placering i listan
Det är inte alltid man får saker gjorda i ordning. Skriv en funktion **removeFromListByIndex** till vilken man skickar ett nummer och saken på denna plats i listan tas bort. Returnera den bortplockade saken.

**Notera:** För enkelhetens skull räknar vi det översta elementet som nummer 0, nästa som nummer 1 etc. Precis som en dator. Försök inte "förmänskliga funktionen" till att börja på nummer 1. Då blir den svårare att återanvända i din programmering.

**Notera 2:** Tillåt INTE att man försöker ta bort saker på negativa platser, dvs. skickar ett nummer mindre än 0.


#### 7. Ta bort en sak baserad på dess namn
Skriv en funktion **removeFromListByName** som hittar en sak i listan baserat på dess namn och tart bort den. Returnera den borttagna saken.

**Notera:** Försök att skriva mindre kod genom att återanvända/anropa *removeFromListByIndex* (från steg 6) inuti din funktion.


#### 8. Ta bort en sak och lägg till den i "har gjort"-lista
Skapa en att "har gjort"-lista genom att deklarera en variabel med namnet **doneList** som en array.
Skriv en funktion **removeFromListAndAddToDone** som flyttar en sak from att göra-listan till "har gjort"-listan. Returnera listan över saker som är gjorda.

**Notera:** Försök att skriva mindre kod genom att återanvända/anropa *removeFromListByName* (från steg 7) inuti din funktion.


#### 9. Flytta en sak till toppen av listan
Ibland blir en sak plötsligt riktigt viktiga att göra. Skriv en funktion **moveToTop** som hittar en sak i listan baserat på dess namn och flyttar den till toppen. Returnera hela att göra-listan.

**Notera:** Försök att skriva mindre kod genom att återanvända/anropa *removeFromListByName* (från steg 7) och *addToTopOfList* (från steg 3) inuti din funktion.


#### 10. Flytta en sak till botten av listan
Ibland blir en sak plötsligt ganska opriorieterad. Skriv en funktion **moveToBottom** som hittar en sak i listan baserat på dess namn och flyttar den till botten. Returnera hela att göra-listan.

**Notera:** Försök att skriva mindre kod genom att återanvända/anropa *removeFromListByName* (från steg 7) och *addToList* (från steg 2) inuti din funktion.


#### 11. Flytta en sak ett steg ner i listan
Ibland behöver man prioritera ner något lite grann. Skriv en funktion **moveDown** som flyttar en sak ett steg ner i listan.

**Tips:** Man kan även se detta som att saken byter plats med det som var nedanför den.


#### 12. Flytta en sak ett steg upp i listan
Ibland behöver man prioritera upp något lite grann. Skriv en funktion **moveUp** som flyttar en sak ett steg upp i listan.

**Tips:** Man kan även se detta som att saken byter plats med det som var ovanför den.

### To do list (HTML 5 && CSS/LESS)
Du ska nu skapa ett GUI (Grapical User Interface) till all funktionalitet.


#### 1. Rita upp "wireframes" (skisser) samt identifiera Bootstrap komponenter som behövs
När du har alla knappar på plats och de kallar på rätt JS funktioner (som du skapade i tidigare övningar), styla din HTML med hjälp av Bootstrap och egen LESS så att den ser bra och användarvänligt ut.
  1. Börja med att rita upp "wireframes" för hur ditt formulär samt "todo" och "done" listor ska se ut. Använd getbootstrap.com/css samt getbootstrap.com/components olika komponenter som grund till dina skisser.
  2. Använd Bootstrap för att fixa repsonsivitet samt grundutseende, och komplementera sedan med egen CSS/LESS för att få till detaljer.


#### 2. Implementera dina skisser
Använd bootstraps CSS klasser (samt ev. JS) för att bygga ditt grundutseende. När du har fått alla komponenter på plats och fungerandes, skriv egen LESS som implementerar alla detaljer från dina skisser.

1. Skriv den HTML du tror kommer att behövas
Du behöver åtminstonde:
* Ett formulär (HTML) för att lägga till nya todos.
* Två printareas(HTML). En för not done listan, en för done listan.
* I "not done" listan, lägg till följande knappar för varje list item:
  1. En "remove" knapp.
  2. En "mark as done" knapp.
  3. "Move to top/bottom" knappar.
  4. "Move up/down" knappar.
  
2. Skriv den CSS/LESS du tror kommer behövas.
Använd bootstraps CSS klasser (samt ev. JS) för att bygga ditt grundutseende. När du har fått alla komponenter på plats och fungerandes, skriv egen LESS som implementerar alla detaljer från dina skisser.

3. Se till att ditt GUI är responsivt.
Använd granskaren för att se hur ditt GUI ser ut på olika enheter och skärmstorlekar. Skriv CSS/LESS/HTML för att "laga" eventuella buggar i utseende. Om en komponent är för stor för att visas snyggt i en viss skärmstorlek, kan du dölja/flytta något så att ditt GUI fortfarande är användarvänligt på mindre skärmar?


### jQuery AJAX (jQuery + AJAX + Mongo)

#### 1. Spara to-dos i mongo
Använd jQuery $.ajax() för att spara nya to-dos i mongo (POST) när en användare submittar ett formulär. Glöm ej hämta om to-dos från databas (se nästa steg) vid $.ajax() success!
**Tips:** Läs på om jQuery $().submit().

#### 2. Hämta to-dos från mongo.
När din webb-app laddar för första gången, samt var gång en användare lägger till (och senare uppdaterar/tar bort) en to-do, hämta alla to-dos från mongo (GET) och rita ut dem på skärm. Alla to-dos som är "done" ska till "done" listan, alla andra till "not done" listan
**Tips:** Läs på om jQuery $().html() och $().append()

#### 3. Uppdatera to-dos i mongo
När en användare klickar på "mark as done" knappen på en to-do, uppdatera mongo (PUT) med en to-dos nya status. Glöm ej hämta om to-dos från databas vid $.ajax() success!
**Överkurs:** Uppdatera även mongo när en användare sorterar "not done" listan.

#### 4. Ta bort to-dos
När en användare klickar på "Ta bort" knappen på en to-do, ta bort den i mongo (DELETE). Glöm ej hämta om to-dos från databas vid $.ajax() success!