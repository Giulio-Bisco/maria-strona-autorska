export interface Book {
  id: string;
  image: string;
  translationKey: string; // base key in the JSON files
}

export const books: Book[] = [
  {
    id: 'dziedzic-klamstwa',
    image: '/images/books/dziedzic-klamstwa.png',
    translationKey: 'books.dziedzic-klamstwa',
  },
  {
    id: 'stalowe-roze',
    image: '/images/books/stalowe-roze.png',
    translationKey: 'books.stalowe-roze',
  },
  {
    id: 'ostatni-wiersz-hrabiego-dariana',
    image: '/images/books/ostatni-wiersz-hrabiego-dariana.png',
    translationKey: 'books.ostatni-wiersz-hrabiego-dariana',
  },
  {
    id: 'oliver',
    image: '/images/books/oliver.png',
    translationKey: 'books.oliver',
  },
  {
    id: 'obsesja-zlotego-krolestwa',
    image: '/images/books/obsesja-zlotego-krolestwa.png',
    translationKey: 'books.obsesja-zlotego-krolestwa',
  },
];