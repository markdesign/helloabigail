import 'styles/reset.scss';
import styles from './App.scss';
import ContextProvider from 'context/ContextProvider';
import cn from 'classnames';

const App = () => {
    return (
        <ContextProvider>
            <div className={cn(styles.App, styles.background)}>
                <h1>Hello Abigail</h1>
                <p>coming soon...</p>
            </div>
        </ContextProvider>
    );
}

export default App;

