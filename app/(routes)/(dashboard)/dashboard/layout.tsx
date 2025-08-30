import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "custom dashboard",
    description: "it shows news and whether update and tasks",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex">
            <section>
                <Sidebar />
            </section>
            {children}
        </main>
    );
}
