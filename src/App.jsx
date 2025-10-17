import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { topics } from './topics';

function App() {
  const firstTopic = topics[0];
  const [selectedTopicId, setSelectedTopicId] = useState(firstTopic?.id ?? '');
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    firstTopic?.categories?.[0]?.id ?? '',
  );
  const [selectedLevelId, setSelectedLevelId] = useState(
    firstTopic?.categories?.[0]?.levels?.[0]?.id ?? '',
  );
  const selectedTopic = useMemo(
    () => topics.find((topic) => topic.id === selectedTopicId) ?? topics[0],
    [selectedTopicId],
  );

  useEffect(() => {
    if (!selectedTopic?.categories?.length) {
      setSelectedCategoryId('');
      setSelectedLevelId('');
      return;
    }

    const [firstCategory] = selectedTopic.categories;
    setSelectedCategoryId(firstCategory?.id ?? '');
    setSelectedLevelId(firstCategory?.levels?.[0]?.id ?? '');
  }, [selectedTopic]);

  useEffect(() => {
    if (!selectedTopic?.categories?.length) {
      return;
    }

    const category = selectedTopic.categories.find(
      (item) => item.id === selectedCategoryId,
    );

    if (!category) {
      return;
    }

    const hasSelectedLevel = category.levels?.some(
      (level) => level.id === selectedLevelId,
    );

    if (!hasSelectedLevel) {
      setSelectedLevelId(category.levels?.[0]?.id ?? '');
    }
  }, [selectedCategoryId, selectedLevelId, selectedTopic]);

  const selectedCategory = useMemo(() => {
    if (!selectedTopic?.categories?.length) {
      return null;
    }

    return (
      selectedTopic.categories.find((category) => category.id === selectedCategoryId) ??
      null
    );
  }, [selectedCategoryId, selectedTopic]);

  const selectedLevel = useMemo(() => {
    if (!selectedCategory?.levels?.length) {
      return null;
    }

    return (
      selectedCategory.levels.find((level) => level.id === selectedLevelId) ?? null
    );
  }, [selectedCategory, selectedLevelId]);

  return (
    <div className="app">
      <header className="app__header">
        <h1>Guía rápida de estudio 2</h1>
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

          {selectedTopic.categories?.length ? (
            <section className="app__vocabulary" aria-label="Categorías de vocabulario">
              <div className="app__vocabulary-groups">
                {selectedTopic.categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    className={`app__vocabulary-group-button${
                      selectedCategory?.id === category.id
                        ? ' app__vocabulary-group-button--active'
                        : ''
                    }`}
                    onClick={() => setSelectedCategoryId(category.id)}
                    aria-pressed={selectedCategory?.id === category.id}
                  >
                    {category.title}
                  </button>
                ))}
              </div>

              {selectedCategory ? (
                <div className="app__vocabulary-panel">
                  <p className="app__vocabulary-description">{selectedCategory.description}</p>

                  {selectedCategory.levels?.length ? (
                    <div className="app__vocabulary-levels" role="group" aria-label="Niveles de vocabulario">
                      {selectedCategory.levels.map((level) => (
                        <button
                          key={level.id}
                          type="button"
                          className={`app__vocabulary-level-button${
                            selectedLevel?.id === level.id
                              ? ' app__vocabulary-level-button--active'
                              : ''
                          }`}
                          onClick={() => setSelectedLevelId(level.id)}
                          aria-pressed={selectedLevel?.id === level.id}
                        >
                          {level.title}
                        </button>
                      ))}
                    </div>
                  ) : null}

                  {selectedLevel ? (
                    <article className="app__vocabulary-level" aria-live="polite">
                      <h3>{selectedLevel.title}</h3>
                      {selectedLevel.description ? (
                        <p className="app__vocabulary-level-description">
                          {selectedLevel.description}
                        </p>
                      ) : null}
                      {selectedLevel.items?.length ? (
                        <ul>
                          {selectedLevel.items.map((item) => (
                            <li key={item.term}>
                              <strong>{item.term}:</strong> {item.definition}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  ) : null}
                </div>
              ) : null}
            </section>
          ) : null}

          {selectedTopic.sections?.length ? (
            <section className="app__content-sections" aria-label="Secciones temáticas">
              {selectedTopic.sections.map((section) => {
                const sectionClasses = ['app__content-section'];

                if (section.variant) {
                  sectionClasses.push(`app__content-section--${section.variant}`);
                }

                return (
                  <article key={section.title} className={sectionClasses.join(' ')}>
                    <h3>{section.title}</h3>
                    {section.description ? <p>{section.description}</p> : null}
                    {section.items?.length ? (
                      <ul>
                        {section.items.map((item) => (
                          <li key={item.term}>
                            <strong>{item.term}:</strong> {item.definition}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                );
              })}
            </section>
          ) : null}

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
