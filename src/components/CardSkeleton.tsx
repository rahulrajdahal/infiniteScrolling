import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {sizes} from '../../assets/themes';

interface CardSkeletonProps {}
const CardSkeleton = ({...props}: Readonly<CardSkeletonProps>) => {
  return (
    <SkeletonPlaceholder {...props}>
      <SkeletonPlaceholder.Item gap={sizes.appHeight(0.5)}>
        <SkeletonPlaceholder.Item
          width={sizes.appWidth(21.4375)}
          height={sizes.appHeight(10.1875)}
          borderRadius={sizes.appWidth(0.5)}
        />

        <SkeletonPlaceholder.Item
          width={sizes.appWidth(9.875)}
          height={sizes.appHeight(0.5625)}
          borderRadius={sizes.appWidth(0.5)}
        />
        <SkeletonPlaceholder.Item
          width={sizes.appWidth(9.875)}
          height={sizes.appHeight(0.5625)}
          borderRadius={sizes.appWidth(0.5)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default CardSkeleton;
