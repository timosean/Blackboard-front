import Sidebar from "@/components/Sidebar";

export default function MenuList({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  );
}
