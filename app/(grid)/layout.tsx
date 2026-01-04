import GridContainer from "../components/defaults/GridContainer";
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";
import NavBar from "../components/nav/NavBar";
import SideBar from "../components/nav/SideBar";
import { ReduxProvider } from "../providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid background">
      <GridContainer cols={12}>
        <div style={{ height: "100%" }} className="col-span-2 ">
          <SideBar />
        </div>
        <MaxWidthWrapper className="col-span-10">
          <NavBar />
          <ReduxProvider>{children}</ReduxProvider>
        </MaxWidthWrapper>
      </GridContainer>
    </main>
  );
}
