import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, Alert, StyleSheet } from 'react-native';
import { db } from '../services/firebase';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';

const BookDetailScreen = ({ route, navigation }) => {
  const { bookData } = route.params;
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const borrowedQuery = query(
          collection(db, 'borrowedBooks'),
          where("userId", "==", "userId123") // Use the real user ID here
        );
        const querySnapshot = await getDocs(borrowedQuery);
        const books = querySnapshot.docs.map(doc => doc.data());
        setBorrowedBooks(books);
      } catch (error) {
        console.error("Error fetching borrowed books: ", error);
      }
    };
    fetchBorrowedBooks();
  }, []);

  const borrowBook = async () => {
    if (borrowedBooks.length >= 3) {
      Alert.alert("Limit Reached", "You can borrow a maximum of three books.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'borrowedBooks'), { 
        ...bookData, 
        userId: "userId123" 
      });
      Alert.alert("Book Borrowed!", "Your book has been borrowed successfully.");
      navigation.navigate('BorrowedBooks');
    } catch (error) {
      console.error("Error borrowing book: ", error);
      Alert.alert("Error", "Could not borrow the book. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bookData.name}</Text>
      <Image source={{ uri: bookData.coverUrl }} style={styles.coverImage} />
      <Text style={styles.author}>By {bookData.author}</Text>
      <Text style={styles.rating}>Rating: {bookData.rating}</Text>
      <Text style={styles.summary}>{bookData.summary}</Text>
      <Button title="Borrow Book" onPress={borrowBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e5e5e5',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  coverImage: {
    width: 160,
    height: 240,
    alignSelf: 'center',
    marginBottom: 15,
  },
  author: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  summary: {
    fontSize: 14,
    color: '#444',
    marginBottom: 15,
  },
});

export default BookDetailScreen;
