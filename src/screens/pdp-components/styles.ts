import {StyleSheet, Dimensions} from 'react-native';

export const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContent: {
    fontSize: 20,
  },
  italic: {
    fontStyle: 'italic',
  },
});

const screenWidth = Dimensions.get('screen').width;
const sizeDimensions = screenWidth > 600 ? '12%' : '23%';

export const sizeSelectorStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeItem: {
    height: 40,
    width: sizeDimensions,
    padding: 5,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  selectedItemContainer: {
    backgroundColor: 'black',
  },
  selectedItem: {
    color: 'white',
  },
});

export const buyBtnStyles = StyleSheet.create({
  title: {
    color: 'white',
  },
  container: {
    backgroundColor: 'black',
    borderRadius: 98,
    height: 50,
  },
});

export const sectionTitleStyles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'black',
  },
});
