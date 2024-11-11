import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { db } from '../services/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const BorrowedBooksScreen = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const loadBorrowedBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'borrowedBooks'));
        const booksData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBorrowedBooks(booksData);
      } catch (error) {
        console.error("Error fetching borrowed books: ", error);
      }
    };
    loadBorrowedBooks();
  }, []);

  const returnBook = async (bookId) => {
    try {
      await deleteDoc(doc(db, 'borrowedBooks', bookId));
      Alert.alert("Returned!", "The book has been returned successfully.");
      setBorrowedBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
    } catch (error) {
      Alert.alert("Error", "Could not return the book. Please try again.");
      console.error("Error returning book: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {borrowedBooks.map(book => (
        <View key={book.id} style={styles.bookCard}>
          <Text style={styles.bookTitle}>{book.name}</Text>
          <Text style={styles.bookAuthor}>By {book.author}</Text>
          <TouchableOpacity onPress={() => returnBook(book.id)} style={styles.returnButton}>
            <Text style={styles.returnText}>Return Book</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  bookCard: {
    padding: 16,
    marginVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 14,
    marginBottom: 10,
  },
  returnButton: {
    padding: 10,
    backgroundColor: '#ff6347',
    borderRadius: 6,
    alignItems: 'center',
  },
  returnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BorrowedBooksScreen;
