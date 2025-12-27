import GridContainer from "../components/defaults/GridContainer";
import SideBar from "../components/nav/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid h-screen background">
      <GridContainer cols={12}>
        <div className=" col-span-2">
          <SideBar />
        </div>
        <div className="col-span-10">{children}</div>
      </GridContainer>
    </main>
  );
}
