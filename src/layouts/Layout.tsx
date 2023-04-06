import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

interface ILayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
        </>
    )
}