'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import { Label } from "@/components/ui/label";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col p-7 gap-5">
      <Label>Shazeb Arafin</Label>
      <Card id="about-me" className="w-full shadow-2xl shadow-purple-800  bg-indigo-400 border-t-purple-700 border-b-purple-700   border-l-purple-300 
       border-r-purple-300 border-8">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          {/* <CardDescription>
          Enter your email below to login to your account
        </CardDescription> */}
        </CardHeader>
        <CardContent>

          <Image src={"/boy.jpeg"} alt="boy" width={300} height={500} />
          <p>
            Hello my name is Shazeb... uhhh
            I am 11 years old :D and I am in year 6 and uhmm
            uhmm I do not know what to say uhmm I am from Bangledesh.
            I love coding and swimming. I use VSCODE and Roblox studios for coding and yeah thats It.
            uhh love eating pizza uhhmm I love Science and sometimes math.
          </p>
        </CardContent>
        <CardFooter className="flex-col gap-2">
        </CardFooter>
      </Card>

      {/* My City section */}
      <Card id="my-city" className="w-full shadow-2xl shadow-yellow-300  bg-orange-200 border-t-orange-600 border-b-orange-600  border-l-orange-400
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
      <Card id="gallery" className="w-full shadow-2xl shadow-blue-300  bg-blue-200 border-t-blue-600 border-b-blue-600  border-l-blue-400
       border-r-blue-400 border-8">
        <CardHeader>
          <CardTitle>Gallery</CardTitle>
          {/* <CardDescription>
          Enter your email below to login to your account
        </CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="grid grid-flow-col grid-cols-4">
            <div className="bg-blue-300">
              <Image className=" aspect-6/5 object-cover w-full shadow-2xl bg-blue-200 border-t-blue-400 border-b-blue-400  border-l-blue-600 border-r-blue-600 border-8" src={"/Gall1.jpg"} alt="Gall1" width={500} height={500} />
            </div>
            <div className="bg-blue-600">
              <Image className="aspect-6/5 object-cover w-full shadow-2xl bg-blue-200 border-t-blue-600 border-b-blue-600  border-l-blue-400 border-r-blue-400 border-8" src={"/Gall2.jpg"} alt="Gall2" width={500} height={500} />
            </div>
            <div className="bg-blue-600">
              <Image className="aspect-6/5 object-contain w-full shadow-2xl bg-blue-200 border-t-blue-400 border-b-blue-400  border-l-blue-600 border-r-blue-600 border-8" src={"/Gall3.jpg"} alt="Gall3" width={300} height={300} />
            </div>
            <div className="bg-blue-600">
              <Image className="aspect-6/5 object-contain w-contain shadow-2xl bg-blue-200 border-t-blue-400 border-b-blue-400  border-l-blue-600 border-r-blue-600 border-8" src={"/Gall4.jpg"} alt="Gall4" width={300} height={300} />
            </div>
          </div>

          <div className="grid grid-flow-col grid-cols-4">
            <div className="bg-blue-300">
              <Image className=" aspect-6/5 object-cover w-full shadow-2xl bg-blue-200 border-t-blue-400 border-b-blue-400  border-l-blue-600 border-r-blue-600 border-8" src={"/Gall5.jpg"} alt="Gall5" width={500} height={500} />
            </div>
            <div className="bg-blue-600">
              <Image className="aspect-6/5 object-cover w-full shadow-2xl bg-blue-200 border-t-blue-600 border-b-blue-600  border-l-blue-400 border-r-blue-400 border-8" src={"/Gall6.jpg"} alt="Gall6" width={500} height={500} />
            </div>
            <div className="bg-blue-600">
              <Image className="aspect-6/5 object-contain w-full shadow-2xl bg-blue-200 border-t-blue-400 border-b-blue-400  border-l-blue-600 border-r-blue-600 border-8" src={"/boy.jpg"} alt="boy33" width={300} height={300} />
            </div>
            <div className="bg-blue-600">
              <Image className="aspect-6/5 object-contain w-full shadow-2xl bg-blue-200 border-t-blue-400 border-b-blue-400  border-l-blue-600 border-r-blue-600 border-8" src={"/boy.jpeg"} alt="boy" width={300} height={300} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>

      {/* Gallery section */}
      <Card id="my-favourite-book"className="w-full shadow-2xl shadow-green-950 bg-white border-t-green-950 border-b-green-950 border-l-green-900
       border-r-green-900 border-8">
        <CardHeader>
          <CardTitle>My favourite Books</CardTitle>
          {/* <CardDescription>
          Enter your email below to login to your account
        </CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="grid grid-flow-col grid-cols-3">
            <div className="bg-green-300">
              <Image className=" aspect-6/5 object-contain w-full shadow-2xl bg-green-200 border-t-green-400 border-b-green-400  border-l-green-600 border-r-green-600 border-8" src={"/HP.jpg"} alt="HP" width={500} height={500} />
            </div>
            <div className="bg-green-600">
              <Image className="aspect-6/5 object-contain w-full shadow-2xl bg-green-200 border-t-green-600 border-b-green-600  border-l-green-400 border-r-green-400 border-8" src={"/ASOUE.jpg"} alt="ASOUE" width={500} height={500} />
            </div>
            <div className="bg-blue-600">
              <Image className="aspect-6/5 object-contain w-full shadow-2xl bg-green-200 border-t-green-400 border-b-green-400  border-l-green-600 border-r-green-600 border-8" src={"/DWK.jpg"} alt="DWK" width={300} height={300} />
            </div>
          </div>

        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>

      {/* Gallery section */}
      <Card id="my-favourite-sports" className="w-full shadow-2xl shadow-green-950 bg-white border-t-green-950 border-b-green-950 border-l-green-900
       border-r-green-900 border-8">
        <CardHeader>
          <CardTitle>My favourite Sports</CardTitle>
          {/* <CardDescription>
          Enter your email below to login to your account
        </CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="grid grid-flow-col grid-cols-3">
            <div className="bg-green-300">
              <Image className=" aspect-6/5 object-contain w-full shadow-2xl bg-green-200 border-t-green-400 border-b-green-400  border-l-green-600 border-r-green-600 border-8" src={"/BasBall.jpg"} alt="BassBall" width={500} height={500} />

            </div>
            <div className="bg-green-600">
              <Image className="aspect-6/5 object-contain w-full shadow-2xl bg-green-200 border-t-green-600 border-b-green-600  border-l-green-400 border-r-green-400 border-8" src={"/VollBall.jpg"} alt="VollBall" width={500} height={500} />
            </div>
            <div className="bg-blue-600">
              <Image className="aspect-6/5 object-contain w-full shadow-2xl bg-green-200 border-t-green-400 border-b-green-400  border-l-green-600 border-r-green-600 border-8" src={"/Swim.jpg"} alt="Swim" width={300} height={300} />
            </div>
          </div>

          <ol className=" list-decimal list-inside">
            <li className="p-3 rounded-3xl shadow-2xl shadow-emerald-900 ">
              <Item>
                <ItemHeader className="h-2 font-bold">
                  Basketball
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>
                    Likes
                  </ItemTitle>
                  <ul className="list-disc list-inside">
                    <li>
                      Basketball makes you taller
                    </li>
                    <li>
                      It requires lots of energy
                    </li>
                    <li>
                      It makes you fit
                    </li>
                    <li>
                      Its famous
                    </li>
                  </ul>
                </ItemContent>
              </Item>
            </li>

            <li className="p-3 rounded-3xl shadow-2xl shadow-emerald-900">
              <Item>
                <ItemHeader className="h-2 font-bold">
                  Swimming
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>
                    Likes
                  </ItemTitle>
                  <ul className="list-disc list-inside">
                    <li>
                      Swimming makes you taller
                    </li>
                    <li>
                      It requires lots of energy
                    </li>
                    <li>
                      It makes you fit
                    </li>
                    <li>
                      Its very competitive
                    </li>
                  </ul>
                </ItemContent>
              </Item>
            </li>

            <li className="p-3 rounded-3xl shadow-2xl shadow-emerald-900 ">
              <Item>
                <ItemHeader className="h-2 font-bold">
                  Volley Ball
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>
                    Likes
                  </ItemTitle>
                  <ul className="list-disc list-inside">
                    <li>
                      Volley Ball makes you taller
                    </li>
                    <li>
                      It requires lots of energy
                    </li>
                    <li>
                      It makes you fit
                    </li>
                    <li>
                      Its very competitive
                    </li>
                  </ul>
                </ItemContent>
              </Item>
            </li>
          </ol>

        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>

        <Card id="my-message" className="w-full shadow-2xl shadow-yellow-300  bg-orange-200 border-t-orange-600 border-b-orange-600  border-l-orange-400
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
          Every small act of kindness you perform creates ripples that extend far beyond what you can see. A simple smile, a helping hand, or a kind word can brighten someone's day, inspire them to pass it forward, and ultimately make the world a better place. Choose kindness—it costs nothing but means everything.
          </p>
              <blockquote className="mt-6 border-l-2 pl-6 italic">
         &quot;Be kind, for everyone you meet is fighting a hard battle&quot; Ian MacLaren 
                </blockquote>
        </CardContent>
        <CardFooter className="flex-col gap-2">
        </CardFooter>
      </Card>

    </div>



  );
}



