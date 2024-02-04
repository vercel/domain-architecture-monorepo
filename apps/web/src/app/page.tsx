import Link from "next/link";
import { PageLayout } from "@repo/shells/page-layout";
import { BarChart } from "@repo/viz/bar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";

export default function Page(): JSX.Element {
  return (
    <PageLayout linkComponent={Link}>
      <h1 className="text-3xl my-4 text-center font-bold">
        A page header goes here!
      </h1>
      <p>And now we have some content.</p>
      <p>
        Here, you can use pieces from both your domain packages and your library
        packages. Sort of like this!
      </p>
      <BarChart />
      <Card className="w-[350px] border border-gray-800">
        <CardHeader>
          <CardTitle>A card from your UI kit</CardTitle>
        </CardHeader>
        <CardContent>
          <p>I am the card content!</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p>I am the card footer!</p>
        </CardFooter>
      </Card>
    </PageLayout>
  );
}
