"use client"

import Image from "next/image"
import { useChat } from "ai/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const knownLanguages = ["javascript", "python", "java", "html"]

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  function messageContainsCodeBlock(text: any) {
    return text.includes("```")
  }

  function renderMessageWithCodeBlock(text: any) {
    const parts = text.split("```")
    const renderedParts = parts.map((part: any, index: any) => {
      if (index % 2 === 1) {
        const [language, ...codeLines] = part.trim().split("\n")
        const normalizedLanguage = knownLanguages.includes(
          language.toLowerCase()
        )
          ? language.trim()
          : "text"
        const code = codeLines.join("\n")
        return (
          <pre className="relative my-2 rounded-lg bg-muted p-4">
            <p className="absolute inset-x-0 top-0 m-0 rounded-t bg-primary px-4 py-1 text-sm text-primary-foreground">
              {normalizedLanguage}
            </p>
            <div className="mt-4">
              <code className="font-mono text-sm">{code}</code>
            </div>
          </pre>
        )
      }
      //
      return <p>{part}</p>
    })
    return renderedParts
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mb-24 flex flex-col items-center justify-center gap-2">
        {/* <div className="w-full flex flex-col"> */}
        <Image
          src="/assets/shuna-trans.png"
          alt=""
          width={150}
          height={150}
          className="rounded-full"
          priority={true}
        />
        <p>Wanna chat?</p>
        {messages.map((m) => (
          <div key={m.id} className="w-full max-w-3xl">
            {m.role === "user" ? (
              <div className="flex flex-col items-end justify-end">
                <p className="text-muted-foreground">You</p>
                <p className="h-full rounded-md border border-input bg-transparent px-3 py-2 text-sm leading-7 ring-offset-background ">
                  {m.content}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-start justify-start">
                <div className="mb-2 flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="/assets/shuna.png" />
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                  <p className="text-muted-foreground">Shuna</p>
                </div>
                <div>
                  {messageContainsCodeBlock(m.content) ? (
                    <div className="h-full rounded-md border border-input bg-transparent px-3 py-2 text-sm leading-7 ring-offset-background ">
                      {renderMessageWithCodeBlock(m.content)}
                    </div>
                  ) : (
                    <div>
                      <p className="h-full rounded-md border border-input bg-transparent px-3 py-2 text-sm leading-7 ring-offset-background ">
                        {m.content}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="fixed inset-x-0 bottom-0 bg-primary-foreground to-white pb-10 pt-4">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-lg items-center gap-2"
          >
            <Input
              value={input}
              placeholder="Say Something.."
              onChange={handleInputChange}
            />
            <Button type="submit">Send</Button>
          </form>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Chat