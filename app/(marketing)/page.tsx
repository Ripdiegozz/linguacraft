import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/assets/marketing/1.gif" fill alt="hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn a new language with Linguacraft. Start your journey today.
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="w-6 h-6 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
          <SignedIn>
            <Button size="lg" variant="super" asChild className="w-full">
              <Link href="/learn" >
                  Continue Learning
              </Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <SignUpButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="super" className="w-full">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="primaryOutline" className="w-full mt-2">
                I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
