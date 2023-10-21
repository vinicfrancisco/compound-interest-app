import { Link } from "expo-router";
import { Stack, Text, Button } from "tamagui";

export default function Home() {
  return (
    <Stack bg="$background" f={1} ai="center" jc="center">
      <Text color="$color" fontSize={20}>
        Home
      </Text>

      <Link href="/results" asChild>
        <Button>Open results</Button>
      </Link>
    </Stack>
  );
}
