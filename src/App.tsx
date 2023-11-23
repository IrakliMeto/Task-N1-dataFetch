import { useState, useEffect } from 'react';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [data, setData] = useState<IPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [windowSize, setWindowSize] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('savedData');
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calcContainerWidth = () => {
    if (windowSize < 1024) {
      return setContainerWidth(100);
    } else if (windowSize < 1440) {
      return setContainerWidth(90);
    } else {
      return setContainerWidth(80);
    }
  };

  useEffect(() => {
    calcContainerWidth();
  }, [windowSize]);

  console.log(containerWidth);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?size=50')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error');
        }
        return response.json();
      })
      .then((json: IPost[]) => {
        const slicedData = json.slice(0, 30);
        setData(slicedData);
        localStorage.setItem('savedData', JSON.stringify(slicedData));
      })
      .catch((error) => {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      });
  };

  const removePost = (postId: number) => {
    if (!data) return;

    const updatedData = data.filter((item) => item.id !== postId);
    setData(updatedData);
    localStorage.setItem('savedData', JSON.stringify(updatedData));
  };

  return (
    <div
      className='App'
      style={{
        width: `${containerWidth}%`,
      }}
    >
      <div>Window Width: {windowSize}</div>

      <button onClick={fetchData}>Fetch Data</button>
      {data ? <h3>posts quantity: {data?.length}</h3> : null}

      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          {data ? (
            <div>
              {data.map((item) => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>

                  <button onClick={() => removePost(item.id)}>Remove Post</button>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
