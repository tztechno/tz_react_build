import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <header>
                <hr />
                <h1>My Apps</h1>
                <hr />
            </header>

            <main>
                {/* サイドバー */}
                <div className="sidebar">
                    <h2>Sidebar</h2>
                    <ul>
                        <li><a href="https://tztechno.github.io/tz_js_20240217_leaflet/emap_now4.html">Recent Earthquake</a></li>
                        <li><a href="https://app-tarrot-reading-mlnessbppgllzg2dns5pfc.streamlit.app">Tarot Reading</a></li>
                        <li><a href="https://app-tags-remover-sbkxegmeb9kavsurgowb6d.streamlit.app/">Tags Remover</a></li>
                    </ul>
                </div>

                <hr />
                <section id="main-content">
                    <article>
                        <li><a href="https://tztechno.github.io/tz_js_20240217_leaflet/emap_now4.html">Recent Earthquake</a></li>
                        <p>Displays earthquakes that occurred around Japan in the past month, color-coded by magnitude. Large earthquakes often occur within the range of earthquake swarms, so by checking this, you can find out the danger range.</p>

                        <li><a href="https://app-tarrot-reading-mlnessbppgllzg2dns5pfc.streamlit.app">Tarot Reading</a></li>
                        <p>You can do tarot reading by yourself. Cards predict your past, present, and future.</p>

                        <li><a href="https://app-tags-remover-sbkxegmeb9kavsurgowb6d.streamlit.app/">Tags Remover</a></li>
                        <p>Remove unnecessary line breaks, tabs, and spaces hidden in your text. Please use it when copying and pasting sentences.</p>
                    </article>
                </section>
            </main>

            <footer>
                <hr />
                <p>2024 My Apps</p>
                <hr />
            </footer>
        </div>
    );
}

export default App;
