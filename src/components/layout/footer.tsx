import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-8">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{" "}
                        <a
                            href="https://everywhereayush.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Ayush Deshmukh
                        </a>
                        . The source code is available on{" "}
                        <a
                            href="https://github.com/Deshmukh-Ayush/antigravity-test"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="text-sm text-muted-foreground hover:underline">
                        Terms
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:underline">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
