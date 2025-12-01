# AutoPorał - Portal Ogłoszeniowy Samochodów

## 📌 Opis Projektu

AutoPorał to nowoczesny portal ogłoszeniowy dedykowany sprzedaży i kupnie samochodów. Projekt został stworzony z wykorzystaniem HTML5, CSS3 i biblioteki **jQuery**, demonstrując praktyczne zastosowanie funkcjonalności jQuery zaprezentowanych na stronie [w3schools.com/jquery](https://www.w3schools.com/jquery/default.asp).

## ✨ Główne Funkcjonalności

- ✅ **Przeglądanie Ogłoszeń** - Wyświetlanie wszystkich dostępnych samochodów w formie kartotek
- ✅ **Wyszukiwanie Zaawansowane** - Filtrowanie po marce, modelu, roku produkcji i cenie
- ✅ **Dodawanie Ogłoszeń** - Prosty formularz do dodania nowego samochodu
- ✅ **Szczegóły Ogłoszenia** - Modal z pełnymi informacjami o samochodzie
- ✅ **Usuwanie Ogłoszeń** - Możliwość usunięcia ogłoszenia
- ✅ **Lokalne Przechowywanie** - Dane przechowywane w localStorage przeglądarki
- ✅ **Responsywny Projekt** - Strona działa na wszystkich urządzeniach
- ✅ **Animacje jQuery** - Płynne przejścia i efekty wizualne

## 🛠️ Wykorzystane Technologie jQuery

Projekt demonstruje następujące funkcjonalności jQuery z kursu w3schools:

1. **DOM Selektory** - `$()`, `.find()`, `.filter()`
2. **Manipulacja DOM** - `.html()`, `.text()`, `.append()`, `.remove()`, `.empty()`
3. **Obsługa Zdarzeń** - `.on()`, `.click()`, `.submit()`, `.keypress()`
4. **Efekty i Animacje** - `.show()`, `.hide()`, `.fadeOut()`, `.animate()`, `.stop()`
5. **Atrybuty CSS** - `.addClass()`, `.removeClass()`, `.hasClass()`
6. **Własności DOM** - `.data()`, `.attr()`, `.val()`
7. **Traversing** - `.parent()`, `.children()`, `.find()`, `.slice()`

## 📸 Zdjęcia Samochodów

Projekt wykorzystuje domyślnie wbudowane obrazy SVG (data URI) dla przykładowych samochodów. Jeśli chcesz dodać własne zdjęcia:

1. **Lokalnie**: Umieść obrazy w folderze i użyj ścieżki: `images/bmw.jpg`
2. **Online**: Użyj adresu URL: `https://example.com/car.jpg`
3. **W Formularzu**: Wklej URL podczas dodawania nowego ogłoszenia

### Formaty obsługiwane:
- JPG/JPEG
- PNG
- GIF
- WebP
- Data URI (SVG)

```
projekt/
├── index.html           # Główny plik HTML
├── css/
│   └── style.css       # Style CSS
├── js/
│   └── script.js       # Skrypty jQuery
├── README.md           # Dokumentacja projektu
└── .gitignore          # Plik ignorowania dla Git
```

## 🚀 Jak Uruchomić

### Lokalnie
1. Pobierz lub sklonuj repozytorium
2. Otwórz plik `index.html` w przeglądarce internetowej

### Na GitHub Pages
1. Wgraj projekt na GitHub
2. Przejdź do ustawień repozytorium
3. Włącz GitHub Pages dla gałęzi `main`
4. Twoja strona będzie dostępna pod adresem: `https://twoja-nazwa/projekt`

## 📋 Przykładowe Ogłoszenia

Projekt zawiera przykładowe ogłoszenia:
- **BMW X5** (2022) - 185.000 zł
- **Audi A4** (2023) - 125.000 zł
- **Mercedes-Benz C-Klasa** (2021) - 145.000 zł
- **Volkswagen Golf** (2020) - 75.000 zł

## 🎨 Cechy Designu

- Nowoczesny, czytelny interfejs
- Gradient nagłówka w kolorach (czerwony -> niebieski)
- Karty samochodów z informacjami o cenie, przebiegu i paliwie
- Modal do wyświetlania szczegółów
- Responsywny layout (Mobile First)
- Animacje na najechaniu myszą
- Kolorowe komunikaty o sukcesie/błędzie

## 💾 Przechowywanie Danych

Wszystkie ogłoszenia są przechowywane w `localStorage` przeglądarki, co oznacza:
- Dane zachowują się po zamknięciu przeglądarki
- Każdy użytkownik ma swoje własne dane
- Brak konieczności bazy danych na serwerze

## 📱 Responsywność

Strona jest w pełni responsywna i dostosowuje się do:
- 📱 Telefonów (do 480px)
- 📱 Tabletów (480px - 768px)
- 💻 Desktopów (powyżej 768px)

## 🔗 Linki do Zasobów

- [jQuery Dokumentacja](https://jquery.com/)
- [w3schools jQuery Tutorial](https://www.w3schools.com/jquery/default.asp)
- [GitHub](https://github.com)
- [GitHub Pages](https://pages.github.com/)

## 📄 Licencja

Projekt jest dostępny na licencji MIT.

## 👨‍💻 Autor

AutoPorał - Portal Ogłoszeniowy Samochodów (2025)

---

**Projekt stworzony w ramach nauki jQuery i front-end web developmentu**
