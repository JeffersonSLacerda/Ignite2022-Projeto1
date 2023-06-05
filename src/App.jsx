import { Post } from "./components/Post"
import { Header } from "./components/Header"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author = "Jefferson Lacerda"
            content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum cum ex et, repudiandae officia fuga dolores accusamus eos minima omnis sequi eligendi asperiores explicabo error ab? Quod, commodi animi!"
          />
          <Post
            author = "Jefferson Lacerda"
            content = "Aqui temos um novo post com outro conteúdo!"
          />
        </main>
      </div>
    </>
  )
}

export default App

