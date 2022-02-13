# Specifikacije
  

### Kreirati web aplikaciju za online igranje igrice Kamenčići. Pravila igre su sljedeća:
* Na raspolaganju je hrpa kamenčića.

* Igru naizmjenično igraju dva igrača.
* Svaki igrač u svom potezu bira koliko će kamenčića baciti u vodu.
* U svakom potezu, igrač mora baciti bar jedan kamenčić, te ne smije baciti više od pola
kamenčića (dakle, smije uzeti pola, ali ne više).
* Gubi igrač koji ostane bez poteza.
* Igrač ostaje bez poteza kada na hrpi ostane tačno jedan kamenčić.
Aplikacija treba da dozvoljava online igranje za dva igrača (svako igra na svom računaru).
Ukoliko se treći igrač prijavi na stranicu, ispisuje se prikladna poruka i igrač ne počinje igru.
Dakle, u svakom trenutku najviše dva igrača igraju igru. Nakon učitavanja stranice, igrač unosi
username i igra kreće.
 
### Node aplikacija treba da sadrži više dijelova:
1. Ruta /igra čijim se učitavanjem otvara prozor za unos korisničkog imena igrača. Nakon
unosa korisničkog imena, dešava se jedna od tri situacije: <br>
     Prikazuje se poruka da je igra popunjena, ukoliko su dva igrača aktivna i igraju
igru. <br>
     Prikazuje se poruka da se čeka drugi igrač, ukoliko je trenutni korisnik jedini
aktivan. Nakon prijave drugog igrača, počinje igra.<br>
     Počinje nova igra, ukoliko je trenutni korisnik drugi aktivni korisnik.<br>


2. Glavna igra se sastoji od nekoliko elemenata:<br>
  a. Prikazuje se broj kamenčića na raspolaganju. <br>
  b. Prikazuje se tekst koji je igrač na potezu.<br>
  c. Prikazuje se polje za unos broja kamenčića koje igrač bira.<br>
  d. Nakon poteza jednog igrača, potez se automatski prikazuje drugom igraču!
Dakle, drugi igrač ne mora učitavati igru kako bi ona bila validna.
