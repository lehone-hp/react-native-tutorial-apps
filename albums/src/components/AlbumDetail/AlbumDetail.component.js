import React from 'react';
import { Image, View, Text, StyleSheet, Linking } from 'react-native';

import Button from '../Button/Button.component';
import Card from '../Card/Card.component';
import CardSection from '../CardSection/CardSection.component';

// Destructure album from props
const AlbumDetail = ({ album }) => {
  // Destructure title, artist and thumbnail_image from album
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnailImage}
            source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentContainer}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={styles.image}
          source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button whenPressed={() => Linking.openURL(url)}>
          Buy Now!!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  thumbnailImage: {
    height: 50,
    width: 50,
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  }
});

export default AlbumDetail;
