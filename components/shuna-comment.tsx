import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ShunaComment = ({ message }: { message: string }) => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <Avatar>
          <AvatarImage src="/assets/shuna.png" />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <p className="text-muted-foreground">Shuna</p>
      </div>
      <div>
        <p className="h-full rounded-md border border-input bg-transparent px-3 py-2 text-sm leading-7 ring-offset-background ">
          {message}
        </p>
      </div>
    </div>
  )
}

export default ShunaComment
