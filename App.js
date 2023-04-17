import React from 'react';
import { StyleSheet, View } from 'react-native';

const BOARD_SIZE = 8;
const SQUARE_SIZE = 50;

const ChessBoard = () => {
  const renderSquare = (row, col) => {
    const isDarkSquare = (row + col) % 2 === 1;
    const squareColor = isDarkSquare ? styles.darkSquare : styles.lightSquare;

    return (
      <View key={`${row}-${col}`} style={[styles.square, squareColor]} />
    );
  };

  const renderRow = (row) => {
    const squares = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      squares.push(renderSquare(row, col));
    }

    return (
      <View key={`row-${row}`} style={styles.row}>
        {squares}
      </View>
    );
  };

  const rows = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    rows.push(renderRow(row));
  }

  return <View style={styles.board}>{rows}</View>;
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: SQUARE_SIZE * BOARD_SIZE,
    height: SQUARE_SIZE * BOARD_SIZE,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    borderWidth: 1,
    borderColor: 'black',
  },
  lightSquare: {
    backgroundColor: 'white',
  },
  darkSquare: {
    backgroundColor: 'black',
  },
});

export default ChessBoard;
