import { FunctionComponent } from 'react';
import Header from 'components/orquestando-futuros/header'
import Background from 'components/orquestando-futuros/background';
import OrquestandoFuturosContent from 'components/orquestando-futuros/orquestando-futuros-content';

const OrquestandoFuturosLayout: FunctionComponent = () => {
    return (
        <div>
            <Header />
            <Background />
            <OrquestandoFuturosContent />
        </div>
    )
};

export default OrquestandoFuturosLayout;
