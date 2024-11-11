import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const BookListScreen = () => {
  const [books, setBooks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'books'));
        const bookList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBooks(bookList);
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    };
    loadBooks();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bookList}>
        {books.map(book => (
          <TouchableOpacity 
            key={book.id} 
            onPress={() => navigation.navigate('BookDetailScreen', { bookData: book })}
            style={styles.bookCard}
          >
            <Text style={styles.bookName}>{book.name} by {book.author}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookList: {
    padding: 18,
  },
  bookCard: {
    padding: 16,
    marginVertical: 12,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  bookName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
});

export default BookListScreen;
