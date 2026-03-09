import Header from './header';
import Footer from './Footer';
import CircuitBackground from './CircuitBackground';

const Layout = ({ children }) => {
    return (
        <div style={{
            color: '#ABB2BF',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}>
            <CircuitBackground />
            <Header />
            <main style={{ padding: '2rem', flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
