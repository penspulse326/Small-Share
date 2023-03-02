import { Button, Flex, Heading, HStack, Link, Spacer } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex
      px="100px"
      as="nav"
      bg="red.400"
      h="60px"
      align="center"
      color="whiteAlpha.900"
    >
      <Link>
        <Heading>Small-Share</Heading>
      </Link>
      <Spacer />
      <HStack spacing="20px">
        <Link>通知</Link>
        <Link>探索</Link>
        <Link>設定</Link>
        <Button colorScheme="red"> 登入</Button>
      </HStack>
    </Flex>
  );
}
