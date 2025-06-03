Angular Frontend – REST API Kommunikáció
Ez az Angular alkalmazás a backend REST API-val kommunikál, amely különböző táblákon hajt végre CRUD műveleteket (pl. users, posts, stb.). A frontend célja, hogy egyszerű, felhasználóbarát felületen keresztül kezelje ezeket az adatokat.

Fő funkciók
Adatok listázása

Új adat létrehozása

Meglévő adat módosítása

Adat törlése

Szűrés egy adott mező alapján

Mappa- és fájlstruktúra
src/app/api.service.ts – A REST API hívásokat végzi

src/app/components/ – Az egyes oldalak és elemek komponensei

src/app/app.module.ts – Modulok, szervizek, komponensek importálása

src/app/app-routing.module.ts – Útvonalak beállítása

Szerviz (api.service.ts)
Az ApiService tartalmazza a REST API hívásokat. Az alábbi metódusokat használja:

getAll(table) – Összes adat lekérése egy táblából (GET)

getFiltered(table, field, op, value) – Szűrt lekérdezés egy táblából adott feltétellel (GET)

create(table, data) – Új adat létrehozása egy táblában (POST)

update(table, field, op, value, data) – Adat módosítása szűrőfeltétellel (PATCH)

delete(table, field, op, value) – Adat törlése szűrőfeltétellel (DELETE)

Komponensek
Például egy users komponens:

Betölti a felhasználókat az ngOnInit() során

Űrlappal hozzá lehet adni új felhasználót

Minden felhasználó mellett van "Szerkesztés" és "Törlés" gomb

A keresőmező lehetővé teszi szűrést pl. név szerint

Adatkezelés folyamata
A felhasználó műveletet kezdeményez (pl. új felhasználó hozzáadása)

A komponens meghívja az ApiService megfelelő metódusát

A szerviz HTTP kérést küld a Node.js backendnek

A backend végrehajtja az adatbázis-műveletet, és visszaküldi az eredményt

A frontend frissíti a felületet az új adatokkal

Használat
Indítsd el a backend szervert (pl. node index.js)

Indítsd el az Angular alkalmazást:
ng serve

Nyisd meg a böngészőben:
http://localhost:4200

Az alkalmazás elérhető és használható a REST API-val

Ez az alkalmazás bármilyen táblanévvel működik, mivel dinamikusan kezeli a kéréseket. A komponensek és az api.service.ts fájl paraméterként fogadják el a tábla nevét és mezőket, így új entitások kezeléséhez nem szükséges új endpointot vagy route-ot létrehozni.
