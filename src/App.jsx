import { useMemo, useState } from 'react';
import './App.css';
import { topics } from './topics';

function App() {
  const [selectedTopicId, setSelectedTopicId] = useState(topics[0]?.id ?? '');
  const selectedTopic = useMemo(
    () => topics.find((topic) => topic.id === selectedTopicId) ?? topics[0],
    [selectedTopicId],
  );

  return (
    <div className="app">
      <header className="app__header">
        <h1>Guía rápida de estudio</h1>
        <p>Selecciona un tema para ver una explicación breve y un ejemplo práctico.</p>
      </header>

      <main className="app__layout">
        <nav className="app__topics" aria-label="Temas de estudio">
          {topics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              className={`app__topic-button${selectedTopic.id === topic.id ? ' app__topic-button--active' : ''}`}
              onClick={() => setSelectedTopicId(topic.id)}
            >
              <span className="app__topic-label">{topic.title}</span>
              <span className="app__topic-summary">{topic.summary}</span>
            </button>
          ))}
        </nav>

        <section className="app__content" aria-live="polite">
          <header className="app__content-header">
            <p className="app__content-tag">Tema seleccionado</p>
            <h2>{selectedTopic.title}</h2>
            <p>{selectedTopic.description}</p>
          </header>

          <article className="app__content-example">
            <h3>Ejemplo rápido</h3>
            <p>{selectedTopic.example}</p>
          </article>

          <section className="app__content-steps" aria-label="Pasos sugeridos">
            <h3>Cómo practicar</h3>
            <ol>
              {selectedTopic.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
