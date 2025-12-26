import GridContainer from "../components/defaults/GridContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid h-screen text-black">
      <GridContainer cols={12}>
        <div className="bg-red-300 col-span-2">sidebar</div>
        <div className="bg-blue-300 col-span-10">{children}</div>
      </GridContainer>
    </main>
  );
}
