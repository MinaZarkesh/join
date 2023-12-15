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

  Ich wollte schon mal mit dem Login Design beginnen

  - Kay 15.12.2023
  Ich habe im der Storage.js schon den Token und den Link mit JS Doc eingepflegt.
  Ich habe die den Add Task Container nach Links gezogen und erste Anfänge für die Klassen gemacht. Dabei habe ich einen Div-Klasse definiert, die das <span> Element schon enthält. Jetzt muss ich nur noch unterklassen machen, die es dann mit Inputfeldern usw. auffüllen. 