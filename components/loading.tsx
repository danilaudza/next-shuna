"use client";
import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Space_Mono } from "next/font/google";

const mono = Space_Mono({ weight: "400", subsets: ["latin"] });

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 21500);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div
            className={cn(
              "bg-black absolute z-50 h-screen w-screen",
              mono.className
            )}
          >
            <div className="max-w-[900px] text-white">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(1)
                    .typeString(
                      "PS C:\\Users\\Shuna> ssh danilaudza@192.168.2.5<br/>"
                    )
                    .typeString("danilaudza@192.168.2.5's password:<br/>")
                    .pauseFor(500)
                    .typeString("Permission denied, please try again.<br/>")
                    .typeString("danilaudza@192.168.2.5's password:<br/>")
                    .pauseFor(500)
                    .typeString("Permission denied, please try again.<br/><br/>")
                    .pauseFor(2000)
                    .typeString(
                      "<span style='color: rgb(96 165 250);'>netrunner@Shuna</span>:<span style='color: rgb(34 211 238);'>~</span>$ cd /usr/share/wordlists<br/>"
                    )
                    .typeString(
                      "<span style='color: rgb(96 165 250);'>netrunner@Shuna</span>:<span style='color: rgb(34 211 238);'>/usr/share/wordlists</span>$ sudo gzip -d rockyou.txt.gz<br/>"
                    )
                    .typeString(
                      "<span style='color: rgb(96 165 250);'>netrunner@Shuna</span>:<span style='color: rgb(34 211 238);'>~</span>$ sudo <span style='color: rgb(217 119 6);'>hydra</span> -l \"danilaudza\" -P rockyou.txt 192.168.2.5<br/>"
                    )
                    .typeString("[sudo] netrunner@Shuna password:<br/>")
                    .pauseFor(1000)
                    .typeString(
                      `<span style='color: rgb(239 68 68);'>[WARNING] Many SSH configurations limit the number of parallel tasks, itis recommended to reduce the tasks: use -t 4
                  [DATA] max 1 task per 1 server, overall 64 tasks, 1 login try (l:1/p:1),
                  ~1 tries per task</span><br/>`
                    )
                    .typeString("<span style='color: rgb(239 68 68);'>[DATA] atttacking ssh://192.168.2.5:22/</span><br/>")
                    .changeDelay(50)
                    .typeString("<span style='color: rgb(74 222 128);'>[===========================================]</span><br/>")
                    .pauseFor(2000)
                    .changeDelay(1)
                    .typeString(
                      "[22][ssh] host: <span style='color: rgb(217 119 6);'>192.168.2.5:22</span> login: <span style='color: rgb(217 119 6);'>danilaudza</span> password: <span style='color: rgb(217 119 6);'>83161a62f22277</span><br/><br/>"
                    )
                    .pauseFor(1000)
                    .typeString(
                      "PS C:\\Users\\Shuna> ssh danilaudza@192.168.2.5<br/>"
                    )
                    .typeString("danilaudza@192.168.2.5's password:<br/>")
                    .pauseFor(500)
                    .typeString("Welcome!<br/>")
                    .typeString("Installing firmware<br/>")
                    .changeDelay(50)
                    .typeString("<span style='color: rgb(74 222 128);'>[===========================================]</span><br/>")
                    .changeDelay(1)
                    .typeString("HcKd by Shuna 😜")
                    .start();
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loading;
