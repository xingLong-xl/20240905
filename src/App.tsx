import { BoxInfo } from './model/models';
import { BoxGroup } from './components/boxGroup/BoxGroup';
import { useState, useEffect } from 'react';
const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
function App() {
  const jsonString = `
  {
    "boxes": [
      {
        "number": "001",
        "size": "M",
        "status": "配備待ち"
      },
      {
        "number": "003",
        "size": "M",
        "status": "検証進捗 1/7"
      },
      {
        "number": "001",
        "size": "M",
        "status": "配備待ち"
      },
      {
        "number": "001",
        "size": "M",
        "status": "配備待ち"
      },
      {
        "number": "002",
        "size": "L",
        "status": "完了"
      },
      {
        "number": "002",
        "size": "L",
        "status": "配備待ち"
      },
      {
        "number": "002",
        "size": "L",
        "status": "完了"
      },
      {
        "number": "002",
        "size": "L",
        "status": "配備待ち"
      }
    ],
    "count_by_size": {
      "M": 4,
      "L": 4
    }
  }`;

  const [items, setItems] = useState<(BoxInfo & { id: string })[]>([]);
  useEffect(() => {
    const data = JSON.parse(jsonString);
    const itemsWithId = data.boxes.map((item: any) => ({
      ...item,
      id: generateId(),
    })) as (BoxInfo & { id: string })[];
    setItems(itemsWithId);
  }, []);

  return (
    <>
      <BoxGroup items={items} onItemsChange={(items) => setItems(items)} />
    </>
  );
}

export default App;
