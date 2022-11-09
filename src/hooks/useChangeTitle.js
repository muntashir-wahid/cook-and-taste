const { useEffect } = require("react");

const useChangeTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Cook and Taste`;
  }, [title]);
};

export default useChangeTitle;
