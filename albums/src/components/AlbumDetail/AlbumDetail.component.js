import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from '../Card/Card.component';
import CardSection from '../CardSection/CardSection.component';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{ props.album.title }</Text>
      </CardSection>
    </Card>
  );
}

const styles = StyleSheet.create({

});

export default AlbumDetail;
