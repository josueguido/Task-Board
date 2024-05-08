import Footer from "./Footer";
import Header from "./Header";
import Principal from "./Principal";
import ThemeColor from "./ThemeColor";

function Layout() {
    return (
        <>
            <ThemeColor>
                <Header />
                <Principal />
            </ThemeColor>
            <Footer />
        </>
    );
}

export default Layout;