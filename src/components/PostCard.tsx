import {image1, image2, image3, image4} from 'assets/images';
import React from 'react';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';
import tw from 'tailwind-react-native-classnames';
import {colors, fonts} from 'theme';

const Container = styled.View`
  ${tw`
    w-full
    p-3
    flex-col
    rounded-lg
    mb-3
`};
  background: ${colors.grey100};
`;

const PostImage = styled.Image`
  ${tw`
    w-full
    h-40
    rounded-lg
    mb-3
`}
`;

const Title = styled.Text`
  ${fonts.title};
  ${tw`
    mb-3
  `}
`;

const Body = styled.Text`
  ${fonts.body};
  ${tw`
  mb-3
  `}
`;

const Divider = styled.View`
  ${tw`
    w-full
    h-px
    mb-3
  `};
  background: ${colors.grey300};
`;

const Footer = styled.View`
  ${tw`
    flex-row
    w-1/3
    justify-between
    items-center
  `}
`;

const FooterText = styled.Text`
  ${fonts.caption}
`;
const FooterTextBold = styled.Text`
  ${fonts.caption};
  font-weight: 700;
`;

type PostType = {title: string; body: string; id: number; userId: number};
type IPostCardProps = {post: PostType};

function PostCard({post}: IPostCardProps) {
  const getImage = () => {
    if (post.id % 2 === 0) {
      return image2;
    } else if (post.id % 3 === 0) {
      return image3;
    } else if (post.id % 5 === 0) {
      return image4;
    } else if (post.id % 7 === 0) {
      return image4;
    } else {
      return image1;
    }
  };

  return (
    <Container>
      <PostImage source={getImage()} />
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
      <Divider />
      <Footer>
        <FooterText>
          ID:
          <FooterTextBold> {post.id}</FooterTextBold>
        </FooterText>
        <FooterText>
          User:
          <FooterTextBold> {post.userId}</FooterTextBold>
        </FooterText>
      </Footer>
    </Container>
  );
}
export default PostCard;
