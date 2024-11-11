// Import necessary Firebase functions
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

const addDummyBooks = async () => {
  const books = [
    {
      name: "Book One",
      coverUrl: "https://accidentallyretired.com/wp-content/uploads/2021/11/The-Psychology-of-Money-by-Morgan-Housel-on-Coffee-Table.jpg",
      author: "Author One",
      rating: 4.5,
      summary: "This is a brief summary of Book One."
    },
    {
      name: "Book Two",
      coverUrl: "https://accidentallyretired.com/wp-content/uploads/2021/11/The-Psychology-of-Money-by-Morgan-Housel-on-Coffee-Table.jpg",
      author: "Author Two",
      rating: 4.0,
      summary: "This is a brief summary of Book Two."
    },
    {
      name: "Book Three",
      coverUrl: "https://accidentallyretired.com/wp-content/uploads/2021/11/The-Psychology-of-Money-by-Morgan-Housel-on-Coffee-Table.jpg",
      author: "Author Three",
      rating: 3.5,
      summary: "This is a brief summary of Book Three."
    },
    {
      name: "Book Four",
      coverUrl: "https://accidentallyretired.com/wp-content/uploads/2021/11/The-Psychology-of-Money-by-Morgan-Housel-on-Coffee-Table.jpg",
      author: "Author Four",
      rating: 4.7,
      summary: "This is a brief summary of Book Four."
    },
    {
      name: "Book Five",
      coverUrl: "https://accidentallyretired.com/wp-content/uploads/2021/11/The-Psychology-of-Money-by-Morgan-Housel-on-Coffee-Table.jpg",
      author: "Author Five",
      rating: 4.3,
      summary: "This is a brief summary of Book Five."
    },
    {
      name: "Book Six",
      coverUrl: "https://accidentallyretired.com/wp-content/uploads/2021/11/The-Psychology-of-Money-by-Morgan-Housel-on-Coffee-Table.jpg",
      author: "Author Six",
      rating: 4.8,
      summary: "This is a brief summary of Book Six."
    },
    {
      name: "Book Seven",
      coverUrl: "https://accidentallyretired.com/wp-content/uploads/2021/11/The-Psychology-of-Money-by-Morgan-Housel-on-Coffee-Table.jpg",
      author: "Author Seven",
      rating: 3.9,
      summary: "This is a brief summary of Book Seven."
    }
  ];

  try {
    const booksCollection = collection(db, 'books');
    books.forEach(async (book) => {
      await addDoc(booksCollection, book);
    });
    console.log("Dummy books added successfully!");
  } catch (error) {
    console.error("Error adding dummy books: ", error);
  }
};
