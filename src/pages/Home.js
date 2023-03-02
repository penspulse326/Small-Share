import { Container, VStack } from '@chakra-ui/react';
import Post from '../components/Post';

export default function Home() {
  return (
    <Container>
      <VStack>
        <Post />
      </VStack>
    </Container>
  );
}
