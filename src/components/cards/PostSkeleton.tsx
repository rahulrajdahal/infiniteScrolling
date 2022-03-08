import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {colors} from 'theme';

function PostSkeletonCard() {
  return (
    <SkeletonPlaceholder>
      <View style={{marginBottom: 24}}>
        <View
          style={{
            width: '100%',
            height: 160,
            borderRadius: 8,
            backgroundColor: colors.grey100,
          }}
        />
        <View
          style={{
            marginVertical: 8,
            width: '50%',
            height: 9,
            borderRadius: 8,
            backgroundColor: colors.grey100,
          }}
        />
        <View
          style={{
            width: '50%',
            height: 9,
            borderRadius: 8,
            backgroundColor: colors.grey100,
          }}
        />
      </View>
    </SkeletonPlaceholder>
  );
}

export default PostSkeletonCard;
