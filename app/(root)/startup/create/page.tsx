import StartupForm from "@/components/StartupForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const CreateStartupContent = async () => {
    const session = await auth();

    if (!session) redirect("/");

    return (
        <>
            <section className="pink_container !min-h-[230px]">
                <h1 className="heading">Submit Your Startup</h1>
            </section>

            <StartupForm />
        </>
    );
};

const Page = () => {
    return (
        <Suspense fallback={null}>
            <CreateStartupContent />
        </Suspense>
    );
};

export default Page;