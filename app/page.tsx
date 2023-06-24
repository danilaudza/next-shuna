import "./pages.css";
import Loading from "@/components/loading";

export default function Home() {
  return (
    <>
    <Loading/>
    <div className="container flex h-full flex-1 items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col gap-2">
        <h1
          className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl hero glitch layers"
          data-text="Shuna is Here"
          >
          Shuna is here
        </h1>
        <div className="wrapper">
          <p className="typing-demo text-lg text-muted-foreground">Hacked this website</p>
        </div>
      </div>
    </div>
          </>
  );
}
