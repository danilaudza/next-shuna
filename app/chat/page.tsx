"use client";

import Link from "next/link";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

const ChatPage = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <div className="relative h-screen">
        <div className="rel mx-auto w-full max-w-md py-24 flex flex-col">
          {messages.map((m) => (
            <div key={m.id} className="grid space-y-5">
              {m.role === "user" ? (
                <div className="my-2 justify-self-end">
                  <p className="text-sm text-muted-foreground">You</p>
                  <div className="border text-right rounded-lg p-3 ">
                    {m.content}
                  </div>
                </div>
              ) : (
                <div className="my-2 justify-self-start">
                  <div className="flex flex-row items-center mb-2">
                    <Avatar>
                      <AvatarImage src="/shuna.png" />
                      <AvatarFallback>SN</AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-muted-foreground">Shuna</p>
                  </div>
                  <div className="border text-right rounded-lg p-3 ">
                    {m.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 bg-muted py-6 px-6 inset-x-0">
          <form onSubmit={handleSubmit} className="flex flex-row space-x-2">
            <Input className="" value={input} onChange={handleInputChange} />
            <Button variant="default" type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
