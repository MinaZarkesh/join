# Join Gruppenarbeit

Mina Zarkesh
Kay Schumacher

## Join

Join ist eine Gruppenarbeit der Developer Akademie im Modul 10. Einerseits um innerhalb einer Gruppe zu arbeiten und andererseits um sich mit GitHub vertraut zu machen. Eine Designvorlage wurde in Figma frei gegeben, an die man sich strikt halten musste. Join ist eine Multipage-Applikation und ein Task-Management-Tool. Es hat eine LogIn Funktion, man kann Kontakte bearbeiten und Aufgaben verteilen. Gespeichert ist das Ganze in einem einfachen Backend-System, das den Frontend-Schülern durch über Token zur Verfügung gestellt wurde. 
Beim funktionalen Aufbau wurde einem freie Hand gegeben. 

### Überlegungen zum Konzept von Join

Da wir beide bereits mit einer ersten Gruppe bei Join gescheitert sind, haben wir beschlossen uns zusammen zu tun und das Projekt komplett von vorne zu beginnen. Dabei konnten wir auch einige Erfahrungen und bereits eigene Learnings wie wir es beim zweiten Mal besser/anders machen würden von beiden Seiten einbringen. Aus dem Modul zuvor hatten wir die Objektorientierung in Javascript kennen gelernt und so beschlossen wir das neue Join auf Basis der Objektorientierten Programmierung aufzubauen.

### Objekt-Orientiertes Programmieren (OOP) 

#### Elements
Im Ordner "elements" befinden sich die einzelnen Objekt-Klassen, denn jedes genutzte Element wie ein Button oder ein Anchor oder ein Input-Feld hat eine eigene Objekt-Klasse. Alle Klassen erben von der Hauptklasse "elements". Dort wird das Objekt mit "createElement" erstellt.
Jedes Element hat folgende Parameter: 
- parent: Id des html-Element, in das es erstellt werden soll.
- id: eigene id, um auf das Element zugreifen zu können.
Außerdem gibt es die Möglichkeit weitere Parameter mitzugeben, wie zum Beispiel css-Klassen-Namen oder spezielle Attribute wie src bei einem Image. 

#### Models
Models sind Objekte, die aus mehreren elements bestehen, sie können kleinere Models sein wie BackBtn aber auch sehr in einander verschachtelte Models sein wie z. B. boardBigCard oder header.

So haben wir Stück für Stück die einzelnen Seiten aufgebaut. Mit ein wenig Übung, kommt man gut in den Workflow und man kann super schnell einzelne Elemente hinzufügen, ohne Ewigkeiten danach suchen zu müssen oder andere Elemente verschieben zu müssen.

Da wir bereits zu Beginn überlegt hatten, das Join in einigen Punkten zu erweitern, haben wir einige Elemente so aufgebaut, sodass sie flexibel änderbar sind. Das mag im ersten Moment überdimensioniert sein, aber ist, wie ich finde, ein wichtiger Schritt der Überlegung zur Skalierbarkeit.
Z.B. kann man die Anzahl der sogenannten SummaryBoxes, also der Boxen auf der Summaryseite mit nur einer Variabel anpassen und die Breite und Höhe passt sich automatisch mit an.

### weitere Funktionen und eigene Erweiterungen
Weitere Funktionen, die wir nach und nach hinzufügen wollen:
- Board Spalten variabel machen und User soll Spalten hinzufügen und löschen können.
- Farbschema wechseln (DarkMode hinzufügen)
- eigene Kategorien hinzufügen können - In Contacts Kategorien zuweisen können
- Filter nach deinen Tasks, Kategorien, Was ist meine Abteilung? Wo bin ich assigned?
- Drop-Down-Menü Settings hinzufügen
- Supervisor, einer der den Leuten die Tasks zuweisen kann und alle Tasks sehen kann.
