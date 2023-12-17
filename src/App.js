import Card from './components/Card';
import Header1 from './components/Header1';
import Drawer from './components/Drawer';

function App() {
  return (
    
    <div className="wrapper clear">

        <Drawer/>
        <Header1/>

        <div className="content p-40">
              <div className="d-flex align-center justify-between mb-40">
                <h1>Все шапки</h1>
                    <div className="search-block d-flex">
                      <img className="mt-20" width={20} height={20} src="/img/search.png" alt="Search"/>
                      <input placeholder="Поиск.." />
                    </div>
              </div>

                <div className="d-flex">
                    <Card/>
                </div>
        </div>
    </div>
  );
}

export default App;
