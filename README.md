# join-mit-Kay

Join Mina Zarkesh

## Login

Gruppe:
Token für Backend: 848MSA6HLK28ZES60D4LDV7DSIDBDOSA4TSPOBAX
Single-Use
Token für Join mit Kay: CA66J9VJZ010MHTW4IAFVKAPKFNFFP7F129MWRPE

## Figma Link

https://www.figma.com/file/mhDPfpde734bGDOh5W1U3f/Join-Version-2-final?type=design&node-id=0-1&mode=design&t=qXkEakXu5OYW8IF8-0

## Reports

- Kay 09.12.2023
  Änderung im header.css Zeile 15. aus "span" wird ".span-size"
  span hat auch die Spans in Addtask überschrieben. Deswegen habe ich
  eine Klasse daraus gemacht und beide Stellen entsprechend angepasst
  header.html Zeil4
  summary.html 34

  Änderung in general.css Zeile 78, 92 und 109.
  Aus "button" wird ".button" Bisher wurde es nicht verwendet.
  Als Klasse kann man es noch aufrufen, aber ich brauche button auch ohne formatierung in der Add Task

  Ich habe das Rohdesign der AddTask fertig. Ich möchte im nächsten
  Schritt versuchen, js classen zu erstellen. Du kannst ja schon mal
  drüber schauen wenn du magst.

- Mina 10.9.2023
    Schau dir mal die summary.html an. In den Items(die kleinen Boxen) in der zweiten Reihe ist die erste Zeile nicht bei allen Boxen auf der gleichen Höhe. In Figma ist es auch so dargestellt, aber ich finde es irgendwie auffällig. Daher könnte man es anpassen.

       Schau dir dazu mal in der summary.css die Klasse .col ab Zeile 35 an.
       Wenn man die drei Eigenschaften einkommteniert, dann ändert man dies. Es überschreibt das justify-content: center; in Zeile 33

    Ich  habe eine Methode(funktion in Klassen) in der Class summaryBox.class.js erstellt, um die Anzahl der Tasks zu updaten, falls diese sich geändert hat.

        Um dies zu testen, habe ich in der summary.js eine Funktion changeTaskAmounts() erstellt, die testweise, die Anzahl im 4. Item (2. Reihe, 2.Item von links) von ursprünglich 40 auf 9 updatet.

- Mina 13.12.2023
  Ich habe das Design des ersten Items heute angepasst und fertig gestellt.

  Ich habe mit dem Login-Design begonnen und der Login-Teil ist jetzt responsive

  - Kay 15.12.2023
  Ich habe im der Storage.js schon den Token und den Link mit JS Doc eingepflegt.
  Ich habe die den Add Task Container nach Links gezogen und erste Anfänge für die Klassen gemacht. Dabei habe ich einen Div-Klasse definiert, die das <span> Element schon enthält. Jetzt muss ich nur noch unterklassen machen, die es dann mit Inputfeldern usw. auffüllen. 

  - Mina 15.122023
    Zitat Kai: "Dabei ist mir aufgefallen, das main im CSS mehrfach benutzt wird, das sollten wir umgehen, in dem wir die main's mit ids versehen und das allgemeine als eine Art Klasse verwenden und die id's für individuelle Einstellungen"
      Gute Idee, aber ich habe jetzt die ID des Main-Element in der AddTask von "mainCon" zu "AddTaskMainCon" umbenannt und in der .css angepasst, um mehrfachbenennungen der ID zu vermeiden.

- Kay 16.12.2023
  Ich habe jetzt für die AddTask mehrere Klassen erstellt.
    - Labeldiv erstellt den Div Container mit <span>
    - Divdate ist ein Child der Labeldiv und erstellt das Kalenderinput
    - Divtextarea ist ein Child von Labeldiv und erstellt die Textarea von Discription
    - DivSelect ist ein Child von Labeldiv und erstellt die Select Optionen für Category und Assigned - Bei Assigned gibts noch ein Problem, was ich gern noch mit dir besprechen würde wie wir das lösen wollen.  
    - Selectoption erzeugt die Optionen für die Select Felder
    - Divinput erzeugt ein Inputfeld
    - DivImputImg erzeugt ein Inputfeld mit Bild wie wir es z.B. für add Subtask und Login brauchen

- Mina 16.12.2023
  - Ich habe das Login/Signup Design überarbeitet und mit KlassenObjekten angepasst.
  - BackBtn erstellt, Position geht über die CSS Klasse .Back-btn
  - Da Login und Signup nun zusammengefasst sind, habe ich die signup.html gelöscht
  - Klasse customCheckBox erstellt. 
     - Diese sollten wir für addTask und Login verwenden, um die Eigenschaft checked der Checkboxen zu nutzen. Habe ich bei AddTask noch nicht geändert.
  - Ich habe ein wenig mit den Objekten herumgespielt, aber leider habe ich nicht hinbekommen, was ich wollte und habe es nun anders gelöst. 
  - Warum ist es schon um 4:43? Ich geh ins Bett und schlaf mich erstmal aus, komme aber vermutlich nachmittags/abends wieder rein, um das Design der Contacts zu machen.
  