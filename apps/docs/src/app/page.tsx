import Link from "next/link";
import { PageLayout } from "@repo/shells/page-layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@repo/ui/card";

export default function Page(): JSX.Element {
  return (
    <PageLayout linkComponent={Link}>
      <h1 className="text-3xl my-4 text-center font-bold">
        Welcome to the internal documentation.
      </h1>
      <div className="flex gap-6 justify-around">
        <Card className="w-[350px] border border-gray-800">
          <CardHeader>
            <CardTitle>Onboarding</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Welcome to the team.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Get up to speed</p>
          </CardFooter>
        </Card>
        <Card className="w-[350px] border border-gray-800">
          <CardHeader>
            <CardTitle>`web` app</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn the ins and outs of the web app.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Our customers buy stuff here. Do great work!</p>
          </CardFooter>
        </Card>
        <Card className="w-[350px] border border-gray-800">
          <CardHeader>
            <CardTitle>`web` app</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn the ins and outs of the web app.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Our customers buy stuff here. Do great work!</p>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  );
}
