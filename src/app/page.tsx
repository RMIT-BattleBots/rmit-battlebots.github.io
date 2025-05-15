
import Button from "../components/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      This is The battle bots site and I am working on a button component below <br/>
        <div className="space-x-6">
        <Button ButName="Home" Href="./navitest"/>
        <Button ButName="Events" Href="./navitest"/>
        <Button ButName="Our Comittee" Href="./navitest"/>
        <div/>
        </div>
    </div>
  );
}
