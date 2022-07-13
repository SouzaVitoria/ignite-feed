import { Header } from "./components/Header/Header"
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import "./global.css"
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Vitória Souza"
            job="Tech Lead"
            avatar="https://github.com/SouzaVitoria.png"
          />
          <Post
            author="Danilo Caraça"
            job="Líder de produção"
            avatar="https://media-exp1.licdn.com/dms/image/C4D03AQGkIyyktfzJJg/profile-displayphoto-shrink_800_800/0/1650757692071?e=1663200000&v=beta&t=ZO2bRjj2D5pgLghfD2D3OBUV6m307_TJoeWpwsJKHOQ"
          />
        </main>
      </div>
    </div>
  )
}
