// 搜尋 元件
import { useState } from "react";

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // 調用父組件的搜尋函數
    onSearch(searchTerm);
  };

  const handleKeyDown = (e) => {
    // 按下 enter 鍵可以執行搜尋
    if (e.key === "Enter") {
      // 如果按下 Enter 鍵，執行搜尋
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>搜尋</button>
    </div>
  );
};

export default SearchComponent;
