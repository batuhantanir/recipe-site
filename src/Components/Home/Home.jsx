import React from 'react'
//CSS
import styles from '../../Css/Home/Home.module.css'
//COMPONENTS
import HomeArticleOne from './HomeComponents/HomeArticleOne'
import HomeArticleTwo from './HomeComponents/HomeArticleTwo'
import RandomRecipes from './HomeComponents/RandomRecipes'

const Home = () => {
  return (
    <div className={styles.container} >
        <HomeArticleOne/>
        <HomeArticleTwo/>
        <RandomRecipes/>
    </div>
  )
}

export default Home