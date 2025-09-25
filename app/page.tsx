'use client'
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clicker_Script } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col p-7 gap-5">
      <Label>Shazeb Arafin</Label>
      <Card className="w-full shadow-2xl shadow-purple-800  bg-indigo-400 border-t-blue-700 border-b-blue-700   border-l-blue-300 
       border-r-blue-300 border-8">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          {/* <CardDescription>
          Enter your email below to login to your account
        </CardDescription> */}
        </CardHeader>
        <CardContent>

          <Image src={"/boy.jpg"} alt="boy" width={300} height={500} />
          <p>
            Hello my name is Shazeb... uhhh
            I am 11 years old :D and I am in year 6 and uhmm
            uhmm I don't know what to say uhmm I am from Bangledesh.
            I love coding and swiming. I use VSCODE and Roblox studios for coding and yeah thats It.
            uhh love eating pizza uhhmm I love Science and sometimes math.
            I don't know why I am holding a camera and this is not how I look, I am way taller..
          </p>
        </CardContent>
        <CardFooter className="flex-col gap-2">
        </CardFooter>
      </Card>

      {/* My City section */}
      <Card className="w-full shadow-2xl shadow-yellow-300  bg-orange-200 border-t-orange-600 border-b-orange-600  border-l-orange-400
       border-r-orange-400 border-8">
        <CardHeader>
          <CardTitle className="font-extrabold">My City</CardTitle>
          {/* <CardDescription>
          Enter your email below to login to your account
        </CardDescription> */}
        </CardHeader>
        <CardContent>

          <Image className="w-full shadow-2xl bg-orange-200 border-t-orange-400 border-b-orange-400  border-l-orange-600
       border-r-orange-600 border-8" src={"/city.jpg"} alt="city" width={500} height={500} />
          <p>
            Dubai, located in the country of UAE(United  arab emirates)
            has the most famous sights like the burj Khalifa, and  Dubai[a]
            is the most populous city in the United Arab Emirates
            and the capital of the Emirate of Dubai.[10] It is located
            on a creek on the south-eastern coast of the Persian Gulf. As of 2025, the city population stands at 4 million
          </p>
        </CardContent>
        <CardFooter className="flex-col gap-2">
        </CardFooter>
      </Card>

      {/* Gallery section */}
      <Card className="w-full shadow-2xl shadow-yellow-300  bg-orange-200 border-t-orange-600 border-b-orange-600  border-l-orange-400
       border-r-orange-400 border-8">
        <CardHeader>
          <CardTitle>Gallery</CardTitle>
          {/* <CardDescription>
          Enter your email below to login to your account
        </CardDescription> */}
        </CardHeader>
        <CardContent>

          <Image src={"/city.jpg"} alt="city" width={500} height={500} />
          <p>
            Dubai, located in the country of UAE(United  arab emirates)
            has the most famous sights like the burj Khalifa, and  Dubai[a]
            is the most populous city in the United Arab Emirates
            and the capital of the Emirate of Dubai.[10] It is located
            on a creek on the south-eastern coast of the Persian Gulf. As of 2025, the city population stands at 4 million
          </p>
        </CardContent>
        <CardFooter className="flex-col gap-2">
        </CardFooter>
      </Card>
    </div>

  );
}


