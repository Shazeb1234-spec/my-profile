'use client'
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clicker_Script } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Label>Shazeb Arafin</Label>
      <Card className="w-full max-w-sm bg-indigo-400">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          {/* <CardDescription>
          Enter your email below to login to your account
        </CardDescription> */}
        </CardHeader>
        <CardContent>
          <Image src={"/boy.jpg"} alt="boy" width={300} height={300}/>
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
    </div>
  );
}


